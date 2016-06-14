
(function(exports) {

function parsePigeon(input)
{
    var glyphs = {
        '?': 'user-defined',
        '3': '3-prime-overhang',
        '5': '5-prime-overhang',
        'p': 'promoter',
        'P': 'promoter',
        'r': 'res',
        'c': 'cds',
        'g': 'user-defined',
        'f': 'fusion',
        't': 'terminator',
        'T': 'terminator',
        's': 'signature',
        'o': 'operator',
        '>': 'user-defined',
        '<': 'user-defined',
        '|': 'restriction-site',
        'z': 'origin-of-replication',
        'x': 'user-defined',
        'd': 'user-defined',
        'v': 'v',
        '-': 'user-defined',
        '.': 'user-defined',

        /* extensions
         */
        'Z': 'origin-of-transfer'
    };

    var colors =
        ['#a6cee3',
         '#1f78b4',
         '#b2df8a',
         '#33a02c',
         '#fb9a99',
         '#e31a1c',
         '#fdbf6f',
         '#ff7f00',
         '#cab2d6',
         '#6a3d9a',
         '#ffff99',
         '#eced6f',
         '#888888',
         '#000000'];

    var output = {
        version: 1,
        components: [
            {
                segments: [
                    { id: 'payload',
                      name: 'Payload',
                      sequence: []
                    }
                ],

                entities: [],
                joins: []
            }
        ],

        processes: [],
        interactions: []
    };

    var identifiersUsed = Object.create(null);
    var identifiersReferenced = Object.create(null);

    function getIdentifier(name) {

        var newID = name, n = 1;

        while(identifiersUsed[newID])
            newID = name + (n ++);

        identifiersUsed[newID] = true;

        return newID;
    }

    var parsingArcs = false;

    var readingColors = 0;

    var lines = input.split('\n');

    for(var lineNum = 0; lineNum < lines.length; ++ lineNum)
    {
        var line = lines[lineNum];

        var errorPrefix = 'Line ' + (lineNum + 1) + ': ';

        line = line.trim();

        if(line.length === 0)
            continue;
        
        if(line == 'rgbcolors') {
            readingColors = colors.length;
            continue;
        }

        if(readingColors) {
            colors[colors.length - (readingColors --)] = line;
            continue;
        }

        if(line == '# Arcs') {
            parsingArcs = true;
            continue;
        }

        var tokens = line.split(' ');

        if(parsingArcs) {

            if(tokens.length != 3) {
                output = new Error(errorPrefix + 'Expected exactly 3 tokens for arc line');
                break;
            }

            var arcSource = tokens[0],
                arcType = ({ ind: 'induction', rep: 'repression' })[tokens[1]],
                arcTarget = tokens[2];

            if(arcType === undefined) {
                output = new Error(errorPrefix + 'Unknown arc type: expected `ind` or `rep`');
                break;
            }

            var id = arcSource + '-' + arcTarget;

            output.interactions.push({
                id: getIdentifier(id),
                type: arcType,
                origin: arcSource,
                target: arcTarget
            });

            identifiersReferenced[arcSource] = true;
            identifiersReferenced[arcTarget] = true;

            continue;
        }

        var glyph = {
            strand: 'positive'
        };

        var type = tokens[0];

        if(type[0] == '<') {
            glyph.strand = 'negative';
            type = type.slice(1);
        } else if(type[0] == '>') {
            type = type.slice(1);
        }

        if((glyph.type = glyphs[type]) === undefined) {
            output = new Error(errorPrefix + 'Unknown glyph type');
            break;
        }
        
        if(tokens.length >= 2) {
            glyph.id = getIdentifier(tokens[1]);
            glyph.name = tokens[1];
        }

        if(tokens.length >= 3) {

            var color = colors[parseInt(tokens[2]) - 1];

            if(color === undefined) {
                output = new Error(errorPrefix + 'Unknown color value');
                break;
            }

            glyph.color = color;
        }

        if(tokens.length >= 4) {

            if(tokens[3] != 'nl') {
                output = new Error(errorPrefix + 'Unknown token; only "nl" is valid here');
                break;
            }

            glyph.label = false;
        }

        if(tokens.length >= 5) {
            output = new Error(errorPrefix + 'Too many tokens in line');
            break;
        }

        if(glyph.type == 'v') {

            output.components[0].segments.push({
              id: 'vector',
              name: 'Vector',
              thickness: 1,
              sequence: []
            });

            output.components[0].joins.push(
              { from: 'vector', to: 'payload' },
              { from: 'payload', to: 'vector' });

            if(glyph.name !== undefined) {
                output.components[0].segments[1].sequence.push({
                    type: 'cds',
                    strand: 'positive',
                    id: getIdentifier(glyph.name),
                    name: glyph.name
                });
            }

            if(glyph.color !== undefined)
                output.components[0].segments[1].color = glyph.color;
        }

        output.components[0].segments[0].sequence.push(glyph);
    }

    if(output instanceof Error)
        return output;

    if(!parsingArcs)
        return new Error('No arcs section found');

    Object.keys(identifiersReferenced).forEach(function(id) {

        if(id.indexOf('-') !== -1) {

            /* Compound identifier
             */
            return;
        }

        if(identifiersUsed[id] !== undefined) {

            /* Identifier exists in table
             */
            return;
        }

        output.components[0].entities.push({
            id: id,
            name: id
        });
    });

    return output;
};

exports.parsePigeon = parsePigeon;

})(typeof exports === 'undefined' ? this['pigeon'] = {} : exports);


