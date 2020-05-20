# visbol-js
SBOLv rendering in JavaScript

### For Developers Adding Glyphs
There are four steps for adding normal DNA glyphs    
1) Add name to var title in `browser.js`    
2) Add SO term in `lib/soToGlyph.js`    
3) Add name to `font/sbolv/main.js`    
4) Add file to `font/sbolv` with renderGlyph implemented

### For Developers Adding Complex Glyphs
Based on the spec there are 4 types of Complex glyphs. Currently the code is able to detect the correct type of rendering for a complex if it is part of an interaction. If interactions is not detected, the default rendering will be the SBGN complex glyph.  
Completed:    
 1)Generic (SBGN rectangle)    
 2)Small molecule and protein    
Missing:    
 1)Complex formed by 2 proteins    
 2)Complex formed by RNA and protein

1) Add file to `font/sbolv` with renderGlyph implemented    
2) Add name to `font/sbolv/main.js`     
3) Make sure name in `font/sbolv/main.js` matches the name in complexType object in `/lib/complexInfomation.js`  

### Interactions
5 types of interactions (inhibition, genetic production, simulation, degradation, non-covelant binding) can be rendered. If there are multiple interactions in the same circuit, each interaction is rendered in separate segment.

Displaylist is updated in displaylist tab with of all interactions.    
Currently, if one of the participants is a part in a circuit, that participant's role is always engineered-region which does not provide accurate information about which part in the circuit the interaction is occurring. The temporary solution right now is to parse for the protein/molecule name and map that to the part on the circuit.
If a name cannot be mapped, the interaction defaults to the first glyph in the circuit.


### How to Test
Global install of browserify     
`$ npm install -g browserify`     

Install dependencies     
`$ npm install`     

Create bundle.js     
`$ browserify -o bundle.js browser.js`
`$ browserify index.js -t babelify -o bundle.js`  

Make sure you have [visbol-site](https://github.com/VisBOL/visbol-site) cloned, then copy bundle.js to the the visbol-site     directory and open up index.html in a browser

Copy and paste any SBOL file into SBOL tab to see rendering
SBOL testing files can be created with   [SBOL Designer](http://www.async.ece.utah.edu/SBOLDesigner)

### Useful links       
[SBOL Glyphs](http://sbolstandard.org/visual/glyphs/)    
[SBOL Visual Specification](http://sbolstandard.org/wp-content/uploads/2017/10/SBOLVisual_Specification_2_0_0.pdf)  
