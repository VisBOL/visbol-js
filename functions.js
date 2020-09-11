const prepareDisplay = require('./lib/design/prepareDisplay');
const SBOLDocument = require('sboljs');
const getDisplayListComponents = require('visbol').getDisplayList;
const getInteractionList = require('visbol').getInteractionList;
const React = require('react');
const ReactDOM = require('react-dom');
import Rendering from 'visbol-react';

const getDisplayList = getDisplayListComponents.getDisplayList;

/**
 * Renders the model based on the sbol file source
 * @param {String} source 
 */
function createDisplay(source) {
    console.log(Rendering);
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
            if(typeof window !== 'undefined') {
                const container = document.getElementById('design');
                ReactDOM.render(
                    React.createElement(Rendering, {display: display}, null),
                    container
                );
            }
        }

    })
}

module.exports = {
    renderSBOL: createDisplay
}