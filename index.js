import prepareDisplay from './lib/design/prepareDisplay';

if(document.getElementById('design')
    && typeof meta !== 'undefined'
    && meta.displayList) {

    var display = prepareDisplay(meta.displayList, false);

    display.renderReact();
}
else {
    console.log('design not found');
}