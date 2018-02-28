
var Design = require('./lib/design')
var Vec2 = require('./lib/geom/vec2')
var Rect = require('./lib/geom/rect')
var sbolv = require('./font/sbolv/main')
var sbolvImprovedDirectionality = require('./font/sbolv-improved-directionality/main')

var SBOLDocument = require('sboljs')
var soToGlyphType = require('./lib/soToGlyphType')

var pigeon = require('./lib/pigeon-parser')
var genbank = require('./lib/genbank')

var getDisplayList = require('./lib/getDisplayList')


var design = new Design({
    element: document.getElementById('design'),
    font: sbolvImprovedDirectionality
});

var currentDisplayList = [];

function refreshEditorSize(editor) {
    editor.editor.setOptions({
        maxLines: 50
    });
}

function Editor(element, sourceFile, mode, parser, active) {
    var editorElement = element.children('.editor');

    this.element = editorElement
    this.editor = ace.edit(editorElement[0]);

    this.editor.setTheme("ace/theme/solarized_light");
    this.editor.getSession().setMode(mode);
    this.editor.$blockScrolling = Infinity;

    this.parser = parser;

    element.data('visbol-editor', this);

    var self = this;

    $.get(sourceFile, function(content) {

        self.setValue(content);

    }, 'text');

    self.editor.on('change', function() {

        self.updateDesign();
    });

    this.setActive(active || false);
}

function updateDesign(displayList) {

    if(displayList instanceof Error) {
        $('#designLoading,#design').hide();
        $('#designError').text(displayList.toString()).show();

        return;
    }

    currentDisplayList = displayList;

    $('#designLoading,#designError').hide();
    $('#design').show();

    $('#scale').prop('disabled', $('#proportional').is(':disabled'));

    if(!displayListEditor.active) {
        displayListEditor.setValue(JSON.stringify(displayList, null, 2));
    }

    var fontName = $('#font').val()

    design.setFont(({
        'sbolv': sbolv,
        'sbolv-improved-directionality': sbolvImprovedDirectionality
    })[fontName])

    design.setProportional($('#proportional').is(':checked'));
    design.setScale($('#scale').val() / 100.0);
    design.setDisplayList(displayList);

    design.displayList.components.forEach(function(component) {

        console.log(component)
        component.segments.forEach(function(segment) {

            segment.sequence.forEach(function(glyph) {

                if(glyph.svg !== undefined) {

                    var $node = $(glyph.svg.node);

                    var title = ({
						'aptamer': 'Aptamer',
						'assembly-scar': 'Assembly Scar',
						'biopolymer-junction': 'Biopolymer Junction',
						'biopolymer-base': 'Biopolymer Base',
						'biopolymer-amino-acid': 'Biopolymer Amino Acid',
						'blunt-restriction-site': 'Blunt Restriction Site',
                        'cds': 'Coding Site',
                        'origin-of-replication': 'Origin of Replication',
                        'origin-of-transfer': 'Origin of Transfer',
                        'promoter': 'Promoter',
						'protease-site': 'Protease Site',
						'protein-stability': 'Protein Stability Element',
                        'res': 'Ribosome Entry Site',
                        'restriction-site': 'Restriction Site',
						'ribonuclease-site': 'Ribonuclease Site',
						'rna-stability': 'RNA Stability Element',
                        'terminator': 'Terminator',
                        'insulator': 'Insulator',
                        'stem-loop': 'Stem Loop',
                        'mature-transcript-region': 'Mature Transcript Region',
                        'scar': 'Scar',
						'unspecified': 'Unspecifed',
                        'user-defined': 'User Defined'
                    })[glyph.type];

                    if(glyph.start !== glyph.end) {
                        title += '\n';
                        title += glyph.start + ' -> ' + glyph.end;
                    }

                    $node.tooltip({
                        container: 'body',
                        placement: 'bottom',
                        title: title,
                        animation: false
                    });
                }
            });

        });


    });
}

$('#font,#proportional,#scale').change(function() {
    updateDesign(currentDisplayList);
});

Editor.prototype = {
    setActive: function(active) {

        this.active = active;

        if(active) {

            refreshEditorSize(this);
            this.updateDesign();

        }
    },

    setValue: function(value) {
        this.editor.setValue(value, -1);
    },

    getValue: function() {
        return this.editor.getValue();
    },

    updateDesign: function() {
        if(this.active)
            this.parser.call(this, this.getValue(), updateDesign);
    }
};

var displayListEditor = new Editor($('#sourceSBDL'), 'sample.json', 'ace/mode/json', function(source, callback) {

    console.log('parsing display list length ' + source.length)

    try {

        var displayList = JSON.parse(source);

        callback(displayList);

        console.log('done')

    } catch(e) {

        console.log('error parsing display list json')
        console.log(e)

        callback({})

    }
});

var editors = [

    displayListEditor,

    new Editor($('#sourceSBOL'), 'sbol2.xml', 'ace/mode/xml', function(source, callback) {

        $('#design').hide();
        $('#designLoading').show();

        SBOLDocument.loadRDF(source, function(err, sbol) {

            if(err) {
                callback({})
                return
            }

            var component = {
                segments: []
            }

            sbol.componentDefinitions.forEach(function(componentDefinition) {
                console.log(getDisplayList(componentDefinition))
                component.segments = component.segments.concat(getDisplayList(componentDefinition).components[0].segments[0])
            })

            callback({
                version: 1,
                components: [
                    component
                ]
            })


        })
    }, true),

    new Editor($('#sourceGenbank'), 'sample.gbf', 'ace/mode/text', function(source, callback) {

        var gbf = genbank.parseGBF(source);

        callback(genbank.gbfToDisplayList(gbf));
    }),

    new Editor($('#sourcePigeon'), 'sample.pigeon', 'ace/mode/text', function(source, callback) {

        var displayList = pigeon.parsePigeon(source);

        callback(displayList);

    })
];

$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {

    var tab = $(e.target).attr("href");

    var editor = $(tab).data('visbol-editor');

    editors.forEach(function(ed) {

        ed.setActive(ed === editor);

    });
});


function createSVGDocument() {

    /* This grabs the parent node of the SVG element in Chrome, but in Safari it grabs
     * the SVG element instead (whereas innerHTML on the SVG element does not work
     * in Safari.)
     */
    var svgElementHtml = document.getElementById('design').parentNode.innerHTML;

    /* Therefore, we might have the parent element or we might have the SVG element itself.
     * This quick hack strips out the opening and closing tags if present.
     */
    if(svgElementHtml.indexOf('<svg') !== -1) {

        var tagClose = svgElementHtml.indexOf('>');

        svgElementHtml = svgElementHtml.slice(tagClose + 1).split('</svg>').join('');
    }

    /* Now wrap the extracted SVG into something that resembles a respectable SVG document.
     */
    return [
        '<?xml version="1.0" encoding="iso-8859-1"?>',
        '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">',
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"',
             'width="' + design.getSize().x + 'px" height="' + design.getSize().y + 'px" ' +
                'viewBox="0 0 ' + design.getSize().x + ' ' + design.getSize().y + '" xml:space="preserve">',

        '<title>' + (design.getName() || 'Untitled VisBOL Design') + '</title>',
        '<desc>Generated by the VisBOL design visualizer at http://visbol.org</desc>',

         svgElementHtml,

        '</svg>'

    ].join('\n');
}


$('#downloadSVG').click(function() {

    open("data:image/svg+xml," + encodeURIComponent(createSVGDocument()));

});

$('#downloadPNG').click(function() {

    var canvas = document.createElement('canvas');

    canvas.width = design.size.x;
    canvas.height = design.size.y;

    var context = canvas.getContext('2d');

    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'white';
    context.fill();

    var image = new Image();

    image.onload = function() {
        context.drawImage(image, 0, 0);
        open(canvas.toDataURL("image/png"));
    }

    image.src = 'data:image/svg+xml,' + encodeURIComponent(createSVGDocument());
    image.width = design.size.x;
    image.height = design.size.y;

});

$('#downloadSBDL').click(function() {

    console.log(JSON.stringify(currentDisplayList, null, 2))

    open("data:application/json," + encodeURIComponent(JSON.stringify(currentDisplayList, null, 2)))

})

var splitter = $("#split").splitter({
    splitVertical: true,
    outline: true,
    resizeTo: window
});




