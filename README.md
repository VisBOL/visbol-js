# visbol-js
SBOLv rendering in JavaScript

### For Developers Adding Glyphs
There are four steps for adding normal dna glyphs
1) Add name to var title in browser.js
2) Add SO term in lib/soToGlyph.js
3) Add name to font/sbolv/main.js
4) Add file to font/sbolv with renderGlyph implemented

### How to Test
Use `browserify -o visbol-js/bundle.js visbol-js/browser.js` to create bundle.js. Then copy bundle.js to the visbol-site directory and open the site in a browser.
