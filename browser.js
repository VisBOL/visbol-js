const prepareDisplay = require('./lib/design/prepareDisplay');
const SBOLDocument = require('sboljs');
const getDisplayList = require('./lib/gatherInfo/originalVisbol/getDisplayList').getDisplayList;
const getInteractionList = require('./lib/gatherInfo/originalVisbol/getInteractionList');

const mydocument = `<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:prov="http://www.w3.org/ns/prov#" xmlns:sbol="http://sbols.org/v2#" xmlns:xsd="http://www.w3.org/2001/XMLSchema#dateTime/" xmlns:om="http://www.ontology-of-units-of-measure.org/resource/om-2/" xmlns:synbiohub="http://synbiohub.org#" xmlns:sbh="http://wiki.synbiohub.org/wiki/Terms/synbiohub#" xmlns:sybio="http://www.sybio.ncl.ac.uk#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:ncbi="http://www.ncbi.nlm.nih.gov#" xmlns:igem="http://wiki.synbiohub.org/wiki/Terms/igem#" xmlns:genbank="http://www.ncbi.nlm.nih.gov/genbank#" xmlns:gbconv="http://sbols.org/genBankConversion#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:obo="http://purl.obolibrary.org/obo/" xmlns:ns0="https://sbolcanvas.org/">
  <sbol:ModuleDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/AllGlyphs/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/AllGlyphs"/>
    <sbol:displayId>AllGlyphs</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/AllGlyphs/1"/>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/AllGlyphs/cd14/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/AllGlyphs/cd14"/>
        <sbol:displayId>cd14</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/AllGlyphs/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
  </sbol:ModuleDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14"/>
    <sbol:displayId>cd14</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;15&quot; parent=&quot;14&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;1600.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;14&quot; parent=&quot;AllGlyphs&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;1600.0&quot; y=&quot;350.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000804"/>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id38_58/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id38_58"/>
        <sbol:displayId>id38_58</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;58&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphBRS (Blunt Restriction Site)&quot; value=&quot;https://sbolcanvas.org/id38&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;700.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id38/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id28_43/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id28_43"/>
        <sbol:displayId>id28_43</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;43&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphSRS5 (5&apos; Sticky Restriction Site)&quot; value=&quot;https://sbolcanvas.org/id28&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;450.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id28/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id26_40/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id26_40"/>
        <sbol:displayId>id26_40</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;40&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphPBS (Primer Binding Site)&quot; value=&quot;https://sbolcanvas.org/id26&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;400.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id26/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id32_49/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id32_49"/>
        <sbol:displayId>id32_49</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;49&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphScar (Assembly Scar)&quot; value=&quot;https://sbolcanvas.org/id32&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;550.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id32/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id30_46/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id30_46"/>
        <sbol:displayId>id30_46</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;46&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphSRS3 (3&apos; Sticky Restriction Site)&quot; value=&quot;https://sbolcanvas.org/id30&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;500.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id30/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id52_79/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id52_79"/>
        <sbol:displayId>id52_79</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;79&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphSig (Signature)&quot; value=&quot;https://sbolcanvas.org/id52&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;1050.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id52/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id50_76/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id50_76"/>
        <sbol:displayId>id50_76</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;76&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphNGA (No Glyph Assigned)&quot; value=&quot;https://sbolcanvas.org/id50&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;1000.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id50/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id56_85/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id56_85"/>
        <sbol:displayId>id56_85</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;85&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphJun (Junction)&quot; value=&quot;https://sbolcanvas.org/id56&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;1150.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id56/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id54_82/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id54_82"/>
        <sbol:displayId>id54_82</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;82&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphBS (Base)&quot; value=&quot;https://sbolcanvas.org/id54&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;1100.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id54/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id44_67/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id44_67"/>
        <sbol:displayId>id44_67</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;67&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphAPT (Aptamer)&quot; value=&quot;https://sbolcanvas.org/id44&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;850.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id44/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id42_64/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id42_64"/>
        <sbol:displayId>id42_64</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;64&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphOH5 (5&apos; Overhang)&quot; value=&quot;https://sbolcanvas.org/id42&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;800.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id42/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id48_73/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id48_73"/>
        <sbol:displayId>id48_73</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;73&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphSRS (Specific Recombination Site)&quot; value=&quot;https://sbolcanvas.org/id48&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;950.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id48/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id46_70/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id46_70"/>
        <sbol:displayId>id46_70</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;70&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphPolyA (PolyA Site)&quot; value=&quot;https://sbolcanvas.org/id46&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;900.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id46/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id68_103/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id68_103"/>
        <sbol:displayId>id68_103</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;103&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphRSE (RNA Stability Element)&quot; value=&quot;https://sbolcanvas.org/id68&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;1450.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id68/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id66_100/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id66_100"/>
        <sbol:displayId>id66_100</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;100&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphRS (Ribonuclease Site)&quot; value=&quot;https://sbolcanvas.org/id66&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;1400.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id66/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id72_109/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id72_109"/>
        <sbol:displayId>id72_109</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;109&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphTTS (Translation Termination Site)&quot; value=&quot;https://sbolcanvas.org/id72&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;1550.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id72/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id70_106/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id70_106"/>
        <sbol:displayId>id70_106</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;106&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphTSE (Transcription End Site)&quot; value=&quot;https://sbolcanvas.org/id70&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;1500.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id70/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id60_91/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id60_91"/>
        <sbol:displayId>id60_91</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;91&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphRERS (Restriction Enzyme Recognition Site)&quot; value=&quot;https://sbolcanvas.org/id60&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;1250.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id60/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id58_88/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id58_88"/>
        <sbol:displayId>id58_88</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;88&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphAA (Amino Acid)&quot; value=&quot;https://sbolcanvas.org/id58&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;1200.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id58/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id64_97/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id64_97"/>
        <sbol:displayId>id64_97</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;97&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphPSE (Protein Stability Element)&quot; value=&quot;https://sbolcanvas.org/id64&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;1350.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id64/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id62_94/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id62_94"/>
        <sbol:displayId>id62_94</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;94&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphPS (Protease Site)&quot; value=&quot;https://sbolcanvas.org/id62&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;1300.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id62/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id20_31/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id20_31"/>
        <sbol:displayId>id20_31</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;31&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphgRNA (Non-Coding RNA gene)&quot; value=&quot;https://sbolcanvas.org/id20&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;250.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id20/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id18_28/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id18_28"/>
        <sbol:displayId>id18_28</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;28&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphTer (Terminator)&quot; value=&quot;https://sbolcanvas.org/id18&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;200.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id18/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id24_37/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id24_37"/>
        <sbol:displayId>id24_37</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;37&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphOriT (Origin of Transfer)&quot; value=&quot;https://sbolcanvas.org/id24&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;350.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id24/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id22_34/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id22_34"/>
        <sbol:displayId>id22_34</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;34&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphOri (Origin of Replication)&quot; value=&quot;https://sbolcanvas.org/id22&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;300.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id22/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id12_19/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id12_19"/>
        <sbol:displayId>id12_19</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;19&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphPro (Promoter)&quot; value=&quot;https://sbolcanvas.org/id12&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id12/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id10_16/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id10_16"/>
        <sbol:displayId>id10_16</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;16&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphGen (Engineered Region)&quot; value=&quot;https://sbolcanvas.org/id10&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id10/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id16_25/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id16_25"/>
        <sbol:displayId>id16_25</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;25&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphCDS (Coding Sequence)&quot; value=&quot;https://sbolcanvas.org/id16&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;150.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id16/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id14_22/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id14_22"/>
        <sbol:displayId>id14_22</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;22&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphRBS (Ribosome Binding Site)&quot; value=&quot;https://sbolcanvas.org/id14&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;100.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id14/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id36_55/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id36_55"/>
        <sbol:displayId>id36_55</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;55&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphIns (Insulator)&quot; value=&quot;https://sbolcanvas.org/id36&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;650.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id36/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id34_52/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id34_52"/>
        <sbol:displayId>id34_52</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;52&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphBind (Binding Site)&quot; value=&quot;https://sbolcanvas.org/id34&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;600.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id34/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id40_61/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id40_61"/>
        <sbol:displayId>id40_61</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <ns0:glyphCell>&lt;mxCell id=&quot;61&quot; parent=&quot;14&quot; style=&quot;sequenceFeatureGlyphOH3 (3&apos; Overhang)&quot; value=&quot;https://sbolcanvas.org/id40&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot; x=&quot;750.0&quot;/&gt;&lt;/mxCell&gt;</ns0:glyphCell>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:definition rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id40/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
      </sbol:Component>
    </sbol:component>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation16/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation16"/>
        <sbol:displayId>cd14Annotation16</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation16/location16/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation16/location16"/>
            <sbol:displayId>location16</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id42_64/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation22/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation22"/>
        <sbol:displayId>cd14Annotation22</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation22/location22/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation22/location22"/>
            <sbol:displayId>location22</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id54_82/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation21/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation21"/>
        <sbol:displayId>cd14Annotation21</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation21/location21/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation21/location21"/>
            <sbol:displayId>location21</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id52_79/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation20/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation20"/>
        <sbol:displayId>cd14Annotation20</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation20/location20/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation20/location20"/>
            <sbol:displayId>location20</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id50_76/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation2/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation2"/>
        <sbol:displayId>cd14Annotation2</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation2/location2/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation2/location2"/>
            <sbol:displayId>location2</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id14_22/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation26/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation26"/>
        <sbol:displayId>cd14Annotation26</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation26/location26/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation26/location26"/>
            <sbol:displayId>location26</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id62_94/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation25/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation25"/>
        <sbol:displayId>cd14Annotation25</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation25/location25/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation25/location25"/>
            <sbol:displayId>location25</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id60_91/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation24/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation24"/>
        <sbol:displayId>cd14Annotation24</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation24/location24/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation24/location24"/>
            <sbol:displayId>location24</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id58_88/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation23/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation23"/>
        <sbol:displayId>cd14Annotation23</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation23/location23/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation23/location23"/>
            <sbol:displayId>location23</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id56_85/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation3/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation3"/>
        <sbol:displayId>cd14Annotation3</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation3/location3/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation3/location3"/>
            <sbol:displayId>location3</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id16_25/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation29/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation29"/>
        <sbol:displayId>cd14Annotation29</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation29/location29/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation29/location29"/>
            <sbol:displayId>location29</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id68_103/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation28/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation28"/>
        <sbol:displayId>cd14Annotation28</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation28/location28/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation28/location28"/>
            <sbol:displayId>location28</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id66_100/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation27/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation27"/>
        <sbol:displayId>cd14Annotation27</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation27/location27/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation27/location27"/>
            <sbol:displayId>location27</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id64_97/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation5/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation5"/>
        <sbol:displayId>cd14Annotation5</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation5/location5/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation5/location5"/>
            <sbol:displayId>location5</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id20_31/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation4/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation4"/>
        <sbol:displayId>cd14Annotation4</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation4/location4/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation4/location4"/>
            <sbol:displayId>location4</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id18_28/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation11/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation11"/>
        <sbol:displayId>cd14Annotation11</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation11/location11/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation11/location11"/>
            <sbol:displayId>location11</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id32_49/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation31/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation31"/>
        <sbol:displayId>cd14Annotation31</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation31/location31/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation31/location31"/>
            <sbol:displayId>location31</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id72_109/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation10/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation10"/>
        <sbol:displayId>cd14Annotation10</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation10/location10/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation10/location10"/>
            <sbol:displayId>location10</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id30_46/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation30/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation30"/>
        <sbol:displayId>cd14Annotation30</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation30/location30/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation30/location30"/>
            <sbol:displayId>location30</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id70_106/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation1/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation1"/>
        <sbol:displayId>cd14Annotation1</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation1/location1/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation1/location1"/>
            <sbol:displayId>location1</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id12_19/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation9/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation9"/>
        <sbol:displayId>cd14Annotation9</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation9/location9/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation9/location9"/>
            <sbol:displayId>location9</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id28_43/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation0/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation0"/>
        <sbol:displayId>cd14Annotation0</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation0/location0/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation0/location0"/>
            <sbol:displayId>location0</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id10_16/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation8/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation8"/>
        <sbol:displayId>cd14Annotation8</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation8/location8/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation8/location8"/>
            <sbol:displayId>location8</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id26_40/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation15/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation15"/>
        <sbol:displayId>cd14Annotation15</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation15/location15/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation15/location15"/>
            <sbol:displayId>location15</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id40_61/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation7/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation7"/>
        <sbol:displayId>cd14Annotation7</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation7/location7/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation7/location7"/>
            <sbol:displayId>location7</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id24_37/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation14/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation14"/>
        <sbol:displayId>cd14Annotation14</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation14/location14/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation14/location14"/>
            <sbol:displayId>location14</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id38_58/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation6/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation6"/>
        <sbol:displayId>cd14Annotation6</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation6/location6/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation6/location6"/>
            <sbol:displayId>location6</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id22_34/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation13/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation13"/>
        <sbol:displayId>cd14Annotation13</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation13/location13/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation13/location13"/>
            <sbol:displayId>location13</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id36_55/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation12/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation12"/>
        <sbol:displayId>cd14Annotation12</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation12/location12/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation12/location12"/>
            <sbol:displayId>location12</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id34_52/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation19/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation19"/>
        <sbol:displayId>cd14Annotation19</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation19/location19/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation19/location19"/>
            <sbol:displayId>location19</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id48_73/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation18/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation18"/>
        <sbol:displayId>cd14Annotation18</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation18/location18/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation18/location18"/>
            <sbol:displayId>location18</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id46_70/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation17/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation17"/>
        <sbol:displayId>cd14Annotation17</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation17/location17/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Annotation17/location17"/>
            <sbol:displayId>location17</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
            <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id44_67/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint27/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint27"/>
        <sbol:displayId>cd14Constraint27</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id62_94/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id64_97/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint28/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint28"/>
        <sbol:displayId>cd14Constraint28</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id64_97/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id66_100/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint29/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint29"/>
        <sbol:displayId>cd14Constraint29</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id66_100/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id68_103/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint3/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint3"/>
        <sbol:displayId>cd14Constraint3</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id14_22/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id16_25/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint23/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint23"/>
        <sbol:displayId>cd14Constraint23</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id54_82/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id56_85/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint24/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint24"/>
        <sbol:displayId>cd14Constraint24</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id56_85/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id58_88/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint25/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint25"/>
        <sbol:displayId>cd14Constraint25</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id58_88/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id60_91/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint26/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint26"/>
        <sbol:displayId>cd14Constraint26</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id60_91/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id62_94/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint6/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint6"/>
        <sbol:displayId>cd14Constraint6</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id20_31/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id22_34/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint7/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint7"/>
        <sbol:displayId>cd14Constraint7</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id22_34/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id24_37/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint8/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint8"/>
        <sbol:displayId>cd14Constraint8</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id24_37/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id26_40/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint9/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint9"/>
        <sbol:displayId>cd14Constraint9</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id26_40/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id28_43/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint12/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint12"/>
        <sbol:displayId>cd14Constraint12</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id32_49/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id34_52/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint30/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint30"/>
        <sbol:displayId>cd14Constraint30</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id68_103/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id70_106/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint13/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint13"/>
        <sbol:displayId>cd14Constraint13</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id34_52/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id36_55/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint31/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint31"/>
        <sbol:displayId>cd14Constraint31</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id70_106/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id72_109/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint14/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint14"/>
        <sbol:displayId>cd14Constraint14</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id36_55/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id38_58/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint4/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint4"/>
        <sbol:displayId>cd14Constraint4</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id16_25/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id18_28/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint15/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint15"/>
        <sbol:displayId>cd14Constraint15</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id38_58/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id40_61/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint5/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint5"/>
        <sbol:displayId>cd14Constraint5</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id18_28/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id20_31/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint1/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint1"/>
        <sbol:displayId>cd14Constraint1</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id10_16/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id12_19/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint10/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint10"/>
        <sbol:displayId>cd14Constraint10</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id28_43/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id30_46/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint11/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint11"/>
        <sbol:displayId>cd14Constraint11</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id30_46/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id32_49/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint2/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint2"/>
        <sbol:displayId>cd14Constraint2</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id12_19/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id14_22/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint20/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint20"/>
        <sbol:displayId>cd14Constraint20</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id48_73/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id50_76/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint21/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint21"/>
        <sbol:displayId>cd14Constraint21</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id50_76/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id52_79/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint22/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint22"/>
        <sbol:displayId>cd14Constraint22</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id52_79/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id54_82/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint16/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint16"/>
        <sbol:displayId>cd14Constraint16</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id40_61/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id42_64/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint17/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint17"/>
        <sbol:displayId>cd14Constraint17</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id42_64/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id44_67/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint18/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint18"/>
        <sbol:displayId>cd14Constraint18</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id44_67/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id46_70/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint19/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/cd14Constraint19"/>
        <sbol:displayId>cd14Constraint19</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/1"/>
        <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id46_70/1"/>
        <sbol:object rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/cd14/id48_73/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id38/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id38"/>
    <sbol:displayId>id38</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id38/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;60&quot; parent=&quot;59&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;59&quot; parent=&quot;https://sbolcanvas.org/id38&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001691"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id28/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id28"/>
    <sbol:displayId>id28</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id28/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;45&quot; parent=&quot;44&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;44&quot; parent=&quot;https://sbolcanvas.org/id28&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001975"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id32/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id32"/>
    <sbol:displayId>id32</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id32/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;51&quot; parent=&quot;50&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;50&quot; parent=&quot;https://sbolcanvas.org/id32&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001953"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id30/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id30"/>
    <sbol:displayId>id30</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id30/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;48&quot; parent=&quot;47&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;47&quot; parent=&quot;https://sbolcanvas.org/id30&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001976"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id26/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id26"/>
    <sbol:displayId>id26</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id26/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;42&quot; parent=&quot;41&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;41&quot; parent=&quot;https://sbolcanvas.org/id26&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0005850"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id48/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id48"/>
    <sbol:displayId>id48</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id48/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;75&quot; parent=&quot;74&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;74&quot; parent=&quot;https://sbolcanvas.org/id48&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000299"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id60/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id60"/>
    <sbol:displayId>id60</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id60/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;93&quot; parent=&quot;92&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;92&quot; parent=&quot;https://sbolcanvas.org/id60&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001687"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id44/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id44"/>
    <sbol:displayId>id44</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id44/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;69&quot; parent=&quot;68&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;68&quot; parent=&quot;https://sbolcanvas.org/id44&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000031"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id54/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id54"/>
    <sbol:displayId>id54</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id54/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;84&quot; parent=&quot;83&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;83&quot; parent=&quot;https://sbolcanvas.org/id54&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001236"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id64/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id64"/>
    <sbol:displayId>id64</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id64/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;99&quot; parent=&quot;98&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;98&quot; parent=&quot;https://sbolcanvas.org/id64&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001955"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id52/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id52"/>
    <sbol:displayId>id52</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id52/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;81&quot; parent=&quot;80&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;80&quot; parent=&quot;https://sbolcanvas.org/id52&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001978"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id58/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id58"/>
    <sbol:displayId>id58</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id58/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;90&quot; parent=&quot;89&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;89&quot; parent=&quot;https://sbolcanvas.org/id58&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001237"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id72/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id72"/>
    <sbol:displayId>id72</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id72/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;111&quot; parent=&quot;110&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;110&quot; parent=&quot;https://sbolcanvas.org/id72&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000327"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id42/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id42"/>
    <sbol:displayId>id42</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id42/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;66&quot; parent=&quot;65&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;65&quot; parent=&quot;https://sbolcanvas.org/id42&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001932"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id68/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id68"/>
    <sbol:displayId>id68</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id68/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;105&quot; parent=&quot;104&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;104&quot; parent=&quot;https://sbolcanvas.org/id68&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001979"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id70/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id70"/>
    <sbol:displayId>id70</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id70/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;108&quot; parent=&quot;107&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;107&quot; parent=&quot;https://sbolcanvas.org/id70&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000616"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id66/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id66"/>
    <sbol:displayId>id66</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id66/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;102&quot; parent=&quot;101&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;101&quot; parent=&quot;https://sbolcanvas.org/id66&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001977"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id46/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id46"/>
    <sbol:displayId>id46</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id46/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;72&quot; parent=&quot;71&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;71&quot; parent=&quot;https://sbolcanvas.org/id46&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000553"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id56/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id56"/>
    <sbol:displayId>id56</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id56/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;87&quot; parent=&quot;86&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;86&quot; parent=&quot;https://sbolcanvas.org/id56&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000699"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id50/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id50"/>
    <sbol:displayId>id50</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id50/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;78&quot; parent=&quot;77&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;77&quot; parent=&quot;https://sbolcanvas.org/id50&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000110"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id20/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id20"/>
    <sbol:displayId>id20</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id20/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;33&quot; parent=&quot;32&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;32&quot; parent=&quot;https://sbolcanvas.org/id20&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001263"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id24/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id24"/>
    <sbol:displayId>id24</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id24/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;39&quot; parent=&quot;38&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;38&quot; parent=&quot;https://sbolcanvas.org/id24&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000724"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id10/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id10"/>
    <sbol:displayId>id10</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id10/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;18&quot; parent=&quot;17&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;17&quot; parent=&quot;https://sbolcanvas.org/id10&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000804"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id16/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id16"/>
    <sbol:displayId>id16</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id16/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;27&quot; parent=&quot;26&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;26&quot; parent=&quot;https://sbolcanvas.org/id16&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000316"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id18/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id18"/>
    <sbol:displayId>id18</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id18/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;30&quot; parent=&quot;29&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;29&quot; parent=&quot;https://sbolcanvas.org/id18&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000141"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id62/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id62"/>
    <sbol:displayId>id62</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id62/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;96&quot; parent=&quot;95&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;95&quot; parent=&quot;https://sbolcanvas.org/id62&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001956"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id12/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id12"/>
    <sbol:displayId>id12</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id12/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;21&quot; parent=&quot;20&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;20&quot; parent=&quot;https://sbolcanvas.org/id12&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000167"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id34/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id34"/>
    <sbol:displayId>id34</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id34/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;54&quot; parent=&quot;53&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;53&quot; parent=&quot;https://sbolcanvas.org/id34&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000409"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id22/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id22"/>
    <sbol:displayId>id22</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id22/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;36&quot; parent=&quot;35&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;35&quot; parent=&quot;https://sbolcanvas.org/id22&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000296"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id14/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id14"/>
    <sbol:displayId>id14</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id14/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;24&quot; parent=&quot;23&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;23&quot; parent=&quot;https://sbolcanvas.org/id14&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000139"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id40/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id40"/>
    <sbol:displayId>id40</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id40/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;63&quot; parent=&quot;62&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;62&quot; parent=&quot;https://sbolcanvas.org/id40&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001933"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.org/user/benjhatch/TestCollection/id36/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id36"/>
    <sbol:displayId>id36</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbh:topLevel rdf:resource="https://synbiohub.org/user/benjhatch/TestCollection/id36/1"/>
    <ns0:backboneCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;57&quot; parent=&quot;56&quot; style=&quot;backbone&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;1.0&quot; width=&quot;50.0&quot; y=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:backboneCell>
    <ns0:containerCell>&lt;mxCell connectable=&quot;0&quot; id=&quot;56&quot; parent=&quot;https://sbolcanvas.org/id36&quot; style=&quot;circuitContainer&quot; value=&quot;&quot; vertex=&quot;1&quot;&gt;&lt;mxGeometry as=&quot;geometry&quot; height=&quot;100.0&quot; width=&quot;50.0&quot;/&gt;&lt;/mxCell&gt;</ns0:containerCell>
    <ns0:textBoxes>&lt;Array/&gt;</ns0:textBoxes>
    <sbh:ownedBy rdf:resource="https://synbiohub.org/user/benjhatch"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000627"/>
  </sbol:ComponentDefinition>
</rdf:RDF>
`

createDisplay(mydocument);

function createDisplay(source) {
    SBOLDocument.loadRDF(source, function(err, sbol) {
        if (err) {
            console.log('error occured: ');
            console.log(err);
        }
        else {

            var component = {
                segments: []
            }
        
            sbol.componentDefinitions.forEach(function(componentDefinition) {
        
                component.segments = component.segments.concat(getDisplayList(componentDefinition).components[0].segments[0])
            });
        
            var interactions = [];
        
           //processing module definition
           sbol.moduleDefinitions.forEach(function(moduleDefinition) {
        
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
           renderDisplay(display);
        }

    })
}

function renderDisplay(display) {
    display.renderReact();
}