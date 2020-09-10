import prepareDisplay from './lib/design/prepareDisplay';
import SBOLDocument from 'sboljs';
import { getDisplayList as getDisplayListComponents } from 'visbol';
import { getInteractionList } from 'visbol';
import React from 'react';
import ReactDOM from 'react-dom';
import Rendering from './dist/rendering';

const getDisplayList = getDisplayListComponents.getDisplayList;

/**
 * Renders the model based on the sbol file source
 * @param {String} source 
 */
function createDisplay(source) {
    SBOLDocument.loadRDF(source, function (err, sbol) {
        if (err) {
            console.log('error occured: ');
            console.log(err);
        }
        else {

            var component = {
                segments: []
            }

            sbol.componentDefinitions.forEach(function (componentDefinition) {

                component.segments = component.segments.concat(getDisplayList(componentDefinition).components[0].segments[0])
            });

            var interactions = [];

            //processing module definition
            sbol.moduleDefinitions.forEach(function (moduleDefinition) {

                let currentInteractions = getInteractionList(moduleDefinition);
                for (let i in currentInteractions) {

                    interactions.push(currentInteractions[i]);

                }

            });

            const displayList = {
                version: 1,
                components: [
                    component
                ],
                interactions,
            }

            console.log(displayList);
            const display = prepareDisplay(displayList);
            const container = document.getElementById('design');
            ReactDOM.render(<Rendering display={display} />, container);
        }

    })
}

export {
    createDisplay as renderSBOL
}