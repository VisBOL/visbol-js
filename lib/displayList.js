
function DisplayList(displayListObject) {

    this.entities = Object.create(null);

    this.components = [];
    this.processes = [];
    this.interactions = [];

    this.refs = Object.create(null);

    var displayList = this;

    if(displayListObject.components !== undefined) {

        this.components = displayListObject.components.map(function(component) {

            return new DisplayList.Component(displayList, component);

        });

    }

    if(displayListObject.processes !== undefined) {

        this.processes = displayListObject.processes.map(function(process) {

            return new DisplayList.Process(displayList, process);

        });

    }

    
   /*
   * Add rendering Info to participants of the interaction, right now it's just for inhibition
   */
    if(displayListObject.interactions !== undefined) {
      

        this.interactions = displayListObject.interactions.map(function(interaction) {

            //this is the set of interaction types that currently our code is able to rende
            let AvailableInteractions = ["SBO:0000169", "SBO:0000170", "SBO:0000177", "SBO:0000179", "SBO:0000589"];

            if (AvailableInteractions.indexOf(interaction.SBO) !== -1) {
              for (let i in interaction.participants) {
                 
                //find the segment for the circuit participating in the interaction, this way we can simply render the segment using renderSegment
                for ( let j in displayList.components[0].segments ) {
                   
                   if (displayList.components[0].segments[j].name === interaction.participants[i].name ) {
                      interaction.participants[i].segment = displayList.components[0].segments[j];
                   }
                } 
              }
            }
        return interaction;    
      });
   }
   

    var unresolvedRefs = Object.keys(this.refs);

    if(unresolvedRefs.length > 0) {

        throw new Error('Unresolved references in display list: ' + unresolvedRefs.join(', '));

    }
}

DisplayList.Component = function Component(displayList, componentObject) {

    if ( componentObject.id ) 
    displayList.linkObjectToID(this, componentObject.id);

    this.name = componentObject.name;
    this.segments = [];
    this.interactions = [];
    this.entities = [];

    if(componentObject.segments !== undefined) {

        this.segments = componentObject.segments.map(function(segment) {

            return new DisplayList.Segment(displayList, segment);

        });

    }

    if(componentObject.entities !== undefined) {

        this.entities = componentObject.entities.map(function(entity) {

            return new DisplayList.Entity(displayList, entity);

        });

    }

}

DisplayList.Segment = function Segment(displayList, segmentObject) {

    displayList.linkObjectToID(this, segmentObject.id);

    this.name = segmentObject.name;
    this.color = segmentObject.color;
    this.thickness = segmentObject.thickness;
    this.topologies = segmentObject.topologies;
    this.sequence = [];

    if(segmentObject.sequence !== undefined) {

        this.sequence = segmentObject.sequence.map(function(glyph) {

            return new DisplayList.Glyph(displayList, glyph);

        });

    }
}

DisplayList.Glyph = function Glyph(displayList, glyphObject) {

     //this is always undefined, that's why it got commented out
    //console.warn(this.entities)

    displayList.linkObjectToID(this, glyphObject.id);

    this.name = glyphObject.name;
    this.type = glyphObject.type || 'unspecified';
    this.strand = glyphObject.strand || 'positive';
    this.color = glyphObject.color;
    this.thickness = glyphObject.thickness;
    this.start = glyphObject.start || 0;
    this.end = glyphObject.end || this.start;
    this.uri = glyphObject.uri || ''
    this.tooltip = glyphObject.tooltip || ''
}

DisplayList.Process = function Process(displayList, process) {

    displayList.linkObjectToID(this, process.id);

    this.name = process.name;
    this.type = process.type;

    this.inputs = [];
    this.output = [];

    if(process.inputs !== undefined) {

        this.inputs = Array(process.inputs.length);

        for(var i = 0; i < process.inputs.length; ++ i) (function(i) {

            this.resolveRef(process.inputs[i], function(input) {

                this.inputs[i] = input;

            }, this);

        })(i);
    }

    if(process.outputs !== undefined) {

        this.outputs = Array(process.outputs.length);

        for(var i = 0; i < process.outputs.length; ++ i) (function(i) {

            this.resolveRef(process.outputs[i], function(output) {

                this.outputs[i] = output;

            }, this);

        })(i);
    }
}
 
DisplayList.Entity = function Entity(displayList, entity) {

    displayList.linkObjectToID(this, entity.id);

    this.name = entity.name;
}

DisplayList.prototype = {

    getObjectByID: function getObjectByID(id) {

        return this.entities[id];

    },

    linkObjectToID: function linkObjectToID(object, id) {

        if(id !== undefined) {



            this.entities[id] = object;

            if(this.refs[id]) {

                /* If there are callbacks stored in the ref table for when
                 * this ID is linked, call them.
                 */
                this.refs[id].forEach(function(callback) {

                    callback(object);

                });

                /* And remove this ID from the ref table
                 */
                delete this.refs[id];
            }
        }
    },

    /* Resolve a ref to an ID.  The callback will be fired when the ID has
     * been linked to an object (which may be immediately if the ID is
     * already linked).
     */
    resolveRef: function resolveRef(id, callback, context) {

        var object = this.getObjectByID(id);

        if(object !== undefined) {

            callback.call(context, object);
            return;

        }

        if(context !== undefined)
            callback = callback.bind(context);

        /* Store the callback in the ref table for when the ID is linked
         */
        if(this.refs[id] !== undefined) {

            this.refs[id].push(callback)

        } else {

            this.refs[id] = [ callback ];

        }
    }
}

module.exports = DisplayList;





