# visbol-js
SBOLv rendering in JavaScript

### For Developers Adding Glyphs
There are four steps for adding normal dna glyphs
1) Add name to var title in browser.js
2) Add SO term in lib/soToGlyph.js
3) Add name to font/sbolv/main.js
4) Add file to font/sbolv with renderGlyph implemented

### How to Test
Global install of browserify     
`$ npm install -g browserify`     

Install dependencies     
`$ npm install`     

Create bundle.js     
`$ browserify -o bundle.js browser.js`    

Make sure you have [visbol-site](https://github.com/VisBOL/visbol-site) cloned, then copy bundle.js to the the visbol-site     directory and open up index.html in a browser    

### Useful links     
[SBOL Test Suite](https://github.com/synbiodex/sboltestsuite)      
[SBOL Glyphs](http://sbolstandard.org/visual/glyphs/)    
