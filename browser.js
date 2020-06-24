const prepareDisplay = require('./lib/design/prepareDisplay');
const SBOLDocument = require('sboljs');
const getDisplayList = require('./lib/gatherInfo/originalVisbol/getDisplayList').getDisplayList;
const getInteractionList = require('./lib/gatherInfo/originalVisbol/getInteractionList');

const mydocument = `<?xml version="1.0" ?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sbol="http://sbols.org/v2#" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:prov="http://www.w3.org/ns/prov#" xmlns:om="http://www.ontology-of-units-of-measure.org/resource/om-2/" xmlns:SBOLCanvas="https://sbolcanvas.org/">
  <sbol:ModuleDefinition rdf:about="https://sbolcanvas.org/t">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/t"/>
    <sbol:displayId>t</sbol:displayId>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://sbolcanvas.org/t/cd2">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/t/cd2"/>
        <sbol:displayId>cd2</sbol:displayId>
        <sbol:definition rdf:resource="https://sbolcanvas.org/cd2"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
  </sbol:ModuleDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id10">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id10"/>
    <sbol:displayId>id10</sbol:displayId>
    <SBOLCanvas:textBoxes>&lt;Array/&gt;</SBOLCanvas:textBoxes>
    <SBOLCanvas:containerCell>&lt;mxCell connectable="0" id="17" parent="https://sbolcanvas.org/id10" style="circuitContainer" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:containerCell>
    <SBOLCanvas:backboneCell>&lt;mxCell connectable="0" id="18" parent="17" style="backbone" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="1.0" width="50.0" y="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:backboneCell>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001263"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id20">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id20"/>
    <sbol:displayId>id20</sbol:displayId>
    <SBOLCanvas:textBoxes>&lt;Array/&gt;</SBOLCanvas:textBoxes>
    <SBOLCanvas:containerCell>&lt;mxCell connectable="0" id="32" parent="https://sbolcanvas.org/id20" style="circuitContainer" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:containerCell>
    <SBOLCanvas:backboneCell>&lt;mxCell connectable="0" id="33" parent="32" style="backbone" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="1.0" width="50.0" y="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:backboneCell>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001976"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id3">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id3"/>
    <sbol:displayId>id3</sbol:displayId>
    <SBOLCanvas:textBoxes>&lt;Array/&gt;</SBOLCanvas:textBoxes>
    <SBOLCanvas:containerCell>&lt;mxCell connectable="0" id="8" parent="https://sbolcanvas.org/id3" style="circuitContainer" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:containerCell>
    <SBOLCanvas:backboneCell>&lt;mxCell connectable="0" id="9" parent="8" style="backbone" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="1.0" width="50.0" y="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:backboneCell>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000139"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id22">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id22"/>
    <sbol:displayId>id22</sbol:displayId>
    <SBOLCanvas:textBoxes>&lt;Array/&gt;</SBOLCanvas:textBoxes>
    <SBOLCanvas:containerCell>&lt;mxCell connectable="0" id="35" parent="https://sbolcanvas.org/id22" style="circuitContainer" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:containerCell>
    <SBOLCanvas:backboneCell>&lt;mxCell connectable="0" id="36" parent="35" style="backbone" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="1.0" width="50.0" y="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:backboneCell>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001953"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id5">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id5"/>
    <sbol:displayId>id5</sbol:displayId>
    <SBOLCanvas:textBoxes>&lt;Array/&gt;</SBOLCanvas:textBoxes>
    <SBOLCanvas:containerCell>&lt;mxCell connectable="0" id="11" parent="https://sbolcanvas.org/id5" style="circuitContainer" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:containerCell>
    <SBOLCanvas:backboneCell>&lt;mxCell connectable="0" id="12" parent="11" style="backbone" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="1.0" width="50.0" y="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:backboneCell>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000316"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id12">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id12"/>
    <sbol:displayId>id12</sbol:displayId>
    <SBOLCanvas:textBoxes>&lt;Array/&gt;</SBOLCanvas:textBoxes>
    <SBOLCanvas:containerCell>&lt;mxCell connectable="0" id="20" parent="https://sbolcanvas.org/id12" style="circuitContainer" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:containerCell>
    <SBOLCanvas:backboneCell>&lt;mxCell connectable="0" id="21" parent="20" style="backbone" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="1.0" width="50.0" y="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:backboneCell>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000296"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id53">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id53"/>
    <sbol:displayId>id53</sbol:displayId>
    <SBOLCanvas:textBoxes>&lt;Array/&gt;</SBOLCanvas:textBoxes>
    <SBOLCanvas:containerCell>&lt;mxCell connectable="0" id="68" parent="https://sbolcanvas.org/id53" style="circuitContainer" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:containerCell>
    <SBOLCanvas:backboneCell>&lt;mxCell connectable="0" id="69" parent="68" style="backbone" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="1.0" width="50.0" y="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:backboneCell>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001933"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id18">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id18"/>
    <sbol:displayId>id18</sbol:displayId>
    <SBOLCanvas:textBoxes>&lt;Array/&gt;</SBOLCanvas:textBoxes>
    <SBOLCanvas:containerCell>&lt;mxCell connectable="0" id="29" parent="https://sbolcanvas.org/id18" style="circuitContainer" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:containerCell>
    <SBOLCanvas:backboneCell>&lt;mxCell connectable="0" id="30" parent="29" style="backbone" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="1.0" width="50.0" y="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:backboneCell>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001975"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id28">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id28"/>
    <sbol:displayId>id28</sbol:displayId>
    <SBOLCanvas:textBoxes>&lt;Array/&gt;</SBOLCanvas:textBoxes>
    <SBOLCanvas:containerCell>&lt;mxCell connectable="0" id="44" parent="https://sbolcanvas.org/id28" style="circuitContainer" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:containerCell>
    <SBOLCanvas:backboneCell>&lt;mxCell connectable="0" id="45" parent="44" style="backbone" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="1.0" width="50.0" y="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:backboneCell>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001691"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id1">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id1"/>
    <sbol:displayId>id1</sbol:displayId>
    <SBOLCanvas:textBoxes>&lt;Array/&gt;</SBOLCanvas:textBoxes>
    <SBOLCanvas:containerCell>&lt;mxCell connectable="0" id="5" parent="https://sbolcanvas.org/id1" style="circuitContainer" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:containerCell>
    <SBOLCanvas:backboneCell>&lt;mxCell connectable="0" id="6" parent="5" style="backbone" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="1.0" width="50.0" y="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:backboneCell>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000167"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/cd2">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2"/>
    <sbol:displayId>cd2</sbol:displayId>
    <SBOLCanvas:containerCell>&lt;mxCell connectable="0" id="2" parent="t" style="circuitContainer" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="800.0" x="140.0" y="360.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:containerCell>
    <SBOLCanvas:backboneCell>&lt;mxCell connectable="0" id="3" parent="2" style="backbone" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="1.0" width="800.0" y="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:backboneCell>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000804"/>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/cd2/id28_43">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/id28_43"/>
        <sbol:displayId>id28_43</sbol:displayId>
        <SBOLCanvas:glyphCell>&lt;mxCell id="43" parent="2" style="sequenceFeatureGlyphBRS (Blunt Restriction Site)" value="https://sbolcanvas.org/id28" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0" x="650.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:glyphCell>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id28"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/cd2/id7_13">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/id7_13"/>
        <sbol:displayId>id7_13</sbol:displayId>
        <SBOLCanvas:glyphCell>&lt;mxCell id="13" parent="2" style="sequenceFeatureGlyphTer (Terminator)" value="https://sbolcanvas.org/id7" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0" x="150.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:glyphCell>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id7"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/cd2/id18_28">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/id18_28"/>
        <sbol:displayId>id18_28</sbol:displayId>
        <SBOLCanvas:glyphCell>&lt;mxCell id="28" parent="2" style="sequenceFeatureGlyphSRS5 (5' Sticky Restriction Site)" value="https://sbolcanvas.org/id18" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0" x="400.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:glyphCell>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id18"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/cd2/id12_19">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/id12_19"/>
        <sbol:displayId>id12_19</sbol:displayId>
        <SBOLCanvas:glyphCell>&lt;mxCell id="19" parent="2" style="sequenceFeatureGlyphOri (Origin of Replication)" value="https://sbolcanvas.org/id12" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0" x="250.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:glyphCell>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id12"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/cd2/id10_16">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/id10_16"/>
        <sbol:displayId>id10_16</sbol:displayId>
        <SBOLCanvas:glyphCell>&lt;mxCell id="16" parent="2" style="sequenceFeatureGlyphgRNA (Non-Coding RNA gene)" value="https://sbolcanvas.org/id10" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0" x="200.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:glyphCell>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id10"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/cd2/id14_22">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/id14_22"/>
        <sbol:displayId>id14_22</sbol:displayId>
        <SBOLCanvas:glyphCell>&lt;mxCell id="22" parent="2" style="sequenceFeatureGlyphOriT (Origin of Transfer)" value="https://sbolcanvas.org/id14" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0" x="300.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:glyphCell>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id14"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/cd2/id16_25">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/id16_25"/>
        <sbol:displayId>id16_25</sbol:displayId>
        <SBOLCanvas:glyphCell>&lt;mxCell id="25" parent="2" style="sequenceFeatureGlyphPBS (Primer Binding Site)" value="https://sbolcanvas.org/id16" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0" x="350.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:glyphCell>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id16"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/cd2/id5_10">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/id5_10"/>
        <sbol:displayId>id5_10</sbol:displayId>
        <SBOLCanvas:glyphCell>&lt;mxCell id="10" parent="2" style="sequenceFeatureGlyphCDS (Coding Sequence)" value="https://sbolcanvas.org/id5" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0" x="100.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:glyphCell>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id5"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/cd2/id24_37">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/id24_37"/>
        <sbol:displayId>id24_37</sbol:displayId>
        <SBOLCanvas:glyphCell>&lt;mxCell id="37" parent="2" style="sequenceFeatureGlyphBind (Binding Site)" value="https://sbolcanvas.org/id24" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0" x="550.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:glyphCell>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id24"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/cd2/id22_34">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/id22_34"/>
        <sbol:displayId>id22_34</sbol:displayId>
        <SBOLCanvas:glyphCell>&lt;mxCell id="34" parent="2" style="sequenceFeatureGlyphScar (Assembly Scar)" value="https://sbolcanvas.org/id22" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0" x="500.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:glyphCell>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id22"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/cd2/id55_70">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/id55_70"/>
        <sbol:displayId>id55_70</sbol:displayId>
        <SBOLCanvas:glyphCell>&lt;mxCell id="70" parent="2" style="sequenceFeatureGlyphOH5 (5' Overhang)" value="https://sbolcanvas.org/id55" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0" x="750.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:glyphCell>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id55"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/cd2/id53_67">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/id53_67"/>
        <sbol:displayId>id53_67</sbol:displayId>
        <SBOLCanvas:glyphCell>&lt;mxCell id="67" parent="2" style="sequenceFeatureGlyphOH3 (3' Overhang)" value="https://sbolcanvas.org/id53" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0" x="700.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:glyphCell>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id53"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/cd2/id20_31">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/id20_31"/>
        <sbol:displayId>id20_31</sbol:displayId>
        <SBOLCanvas:glyphCell>&lt;mxCell id="31" parent="2" style="sequenceFeatureGlyphSRS3 (3' Sticky Restriction Site)" value="https://sbolcanvas.org/id20" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0" x="450.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:glyphCell>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id20"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/cd2/id26_40">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/id26_40"/>
        <sbol:displayId>id26_40</sbol:displayId>
        <SBOLCanvas:glyphCell>&lt;mxCell id="40" parent="2" style="sequenceFeatureGlyphIns (Insulator)" value="https://sbolcanvas.org/id26" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0" x="600.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:glyphCell>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id26"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/cd2/id1_4">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/id1_4"/>
        <sbol:displayId>id1_4</sbol:displayId>
        <SBOLCanvas:glyphCell>&lt;mxCell id="4" parent="2" style="sequenceFeatureGlyphPro (Promoter)" value="https://sbolcanvas.org/id1" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:glyphCell>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id1"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/cd2/id3_7">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/id3_7"/>
        <sbol:displayId>id3_7</sbol:displayId>
        <SBOLCanvas:glyphCell>&lt;mxCell id="7" parent="2" style="sequenceFeatureGlyphRBS (Ribosome Binding Site)" value="https://sbolcanvas.org/id3" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0" x="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:glyphCell>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id3"/>
      </sbol:Component>
    </sbol:component>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation11">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation11"/>
        <sbol:displayId>cd2Annotation11</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation11/location11">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation11/location11"/>
            <sbol:displayId>location11</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/cd2/id24_37"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation13">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation13"/>
        <sbol:displayId>cd2Annotation13</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation13/location13">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation13/location13"/>
            <sbol:displayId>location13</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/cd2/id28_43"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation10">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation10"/>
        <sbol:displayId>cd2Annotation10</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation10/location10">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation10/location10"/>
            <sbol:displayId>location10</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/cd2/id22_34"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation14">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation14"/>
        <sbol:displayId>cd2Annotation14</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation14/location14">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation14/location14"/>
            <sbol:displayId>location14</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/cd2/id53_67"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation0">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation0"/>
        <sbol:displayId>cd2Annotation0</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation0/location0">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation0/location0"/>
            <sbol:displayId>location0</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/cd2/id1_4"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation15">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation15"/>
        <sbol:displayId>cd2Annotation15</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation15/location15">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation15/location15"/>
            <sbol:displayId>location15</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/cd2/id55_70"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation6">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation6"/>
        <sbol:displayId>cd2Annotation6</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation6/location6">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation6/location6"/>
            <sbol:displayId>location6</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/cd2/id14_22"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation9">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation9"/>
        <sbol:displayId>cd2Annotation9</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation9/location9">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation9/location9"/>
            <sbol:displayId>location9</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/cd2/id20_31"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation5">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation5"/>
        <sbol:displayId>cd2Annotation5</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation5/location5">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation5/location5"/>
            <sbol:displayId>location5</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/cd2/id12_19"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation7">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation7"/>
        <sbol:displayId>cd2Annotation7</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation7/location7">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation7/location7"/>
            <sbol:displayId>location7</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/cd2/id16_25"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation12">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation12"/>
        <sbol:displayId>cd2Annotation12</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation12/location12">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation12/location12"/>
            <sbol:displayId>location12</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/cd2/id26_40"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation4">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation4"/>
        <sbol:displayId>cd2Annotation4</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation4/location4">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation4/location4"/>
            <sbol:displayId>location4</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/cd2/id10_16"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation3">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation3"/>
        <sbol:displayId>cd2Annotation3</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation3/location3">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation3/location3"/>
            <sbol:displayId>location3</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/cd2/id7_13"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation8">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation8"/>
        <sbol:displayId>cd2Annotation8</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation8/location8">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation8/location8"/>
            <sbol:displayId>location8</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/cd2/id18_28"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation1">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation1"/>
        <sbol:displayId>cd2Annotation1</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation1/location1">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation1/location1"/>
            <sbol:displayId>location1</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/cd2/id3_7"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation2">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation2"/>
        <sbol:displayId>cd2Annotation2</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/cd2/cd2Annotation2/location2">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Annotation2/location2"/>
            <sbol:displayId>location2</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/cd2/id5_10"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/cd2/cd2Constraint1">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Constraint1"/>
        <sbol:displayId>cd2Constraint1</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/cd2/id1_4"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/cd2/id3_7"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/cd2/cd2Constraint6">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Constraint6"/>
        <sbol:displayId>cd2Constraint6</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/cd2/id12_19"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/cd2/id14_22"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/cd2/cd2Constraint14">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Constraint14"/>
        <sbol:displayId>cd2Constraint14</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/cd2/id28_43"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/cd2/id53_67"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/cd2/cd2Constraint13">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Constraint13"/>
        <sbol:displayId>cd2Constraint13</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/cd2/id26_40"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/cd2/id28_43"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/cd2/cd2Constraint12">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Constraint12"/>
        <sbol:displayId>cd2Constraint12</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/cd2/id24_37"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/cd2/id26_40"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/cd2/cd2Constraint2">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Constraint2"/>
        <sbol:displayId>cd2Constraint2</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/cd2/id3_7"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/cd2/id5_10"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/cd2/cd2Constraint3">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Constraint3"/>
        <sbol:displayId>cd2Constraint3</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/cd2/id5_10"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/cd2/id7_13"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/cd2/cd2Constraint4">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Constraint4"/>
        <sbol:displayId>cd2Constraint4</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/cd2/id7_13"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/cd2/id10_16"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/cd2/cd2Constraint11">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Constraint11"/>
        <sbol:displayId>cd2Constraint11</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/cd2/id22_34"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/cd2/id24_37"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/cd2/cd2Constraint7">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Constraint7"/>
        <sbol:displayId>cd2Constraint7</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/cd2/id14_22"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/cd2/id16_25"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/cd2/cd2Constraint10">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Constraint10"/>
        <sbol:displayId>cd2Constraint10</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/cd2/id20_31"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/cd2/id22_34"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/cd2/cd2Constraint8">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Constraint8"/>
        <sbol:displayId>cd2Constraint8</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/cd2/id16_25"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/cd2/id18_28"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/cd2/cd2Constraint15">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Constraint15"/>
        <sbol:displayId>cd2Constraint15</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/cd2/id53_67"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/cd2/id55_70"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/cd2/cd2Constraint9">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Constraint9"/>
        <sbol:displayId>cd2Constraint9</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/cd2/id18_28"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/cd2/id20_31"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/cd2/cd2Constraint5">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/cd2/cd2Constraint5"/>
        <sbol:displayId>cd2Constraint5</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/cd2/id10_16"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/cd2/id12_19"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id26">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id26"/>
    <sbol:displayId>id26</sbol:displayId>
    <SBOLCanvas:textBoxes>&lt;Array/&gt;</SBOLCanvas:textBoxes>
    <SBOLCanvas:containerCell>&lt;mxCell connectable="0" id="41" parent="https://sbolcanvas.org/id26" style="circuitContainer" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:containerCell>
    <SBOLCanvas:backboneCell>&lt;mxCell connectable="0" id="42" parent="41" style="backbone" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="1.0" width="50.0" y="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:backboneCell>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000627"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id16">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id16"/>
    <sbol:displayId>id16</sbol:displayId>
    <SBOLCanvas:textBoxes>&lt;Array/&gt;</SBOLCanvas:textBoxes>
    <SBOLCanvas:containerCell>&lt;mxCell connectable="0" id="26" parent="https://sbolcanvas.org/id16" style="circuitContainer" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:containerCell>
    <SBOLCanvas:backboneCell>&lt;mxCell connectable="0" id="27" parent="26" style="backbone" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="1.0" width="50.0" y="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:backboneCell>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0005850"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id55">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id55"/>
    <sbol:displayId>id55</sbol:displayId>
    <SBOLCanvas:textBoxes>&lt;Array/&gt;</SBOLCanvas:textBoxes>
    <SBOLCanvas:containerCell>&lt;mxCell connectable="0" id="71" parent="https://sbolcanvas.org/id55" style="circuitContainer" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:containerCell>
    <SBOLCanvas:backboneCell>&lt;mxCell connectable="0" id="72" parent="71" style="backbone" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="1.0" width="50.0" y="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:backboneCell>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001932"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id24">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id24"/>
    <sbol:displayId>id24</sbol:displayId>
    <SBOLCanvas:textBoxes>&lt;Array/&gt;</SBOLCanvas:textBoxes>
    <SBOLCanvas:containerCell>&lt;mxCell connectable="0" id="38" parent="https://sbolcanvas.org/id24" style="circuitContainer" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:containerCell>
    <SBOLCanvas:backboneCell>&lt;mxCell connectable="0" id="39" parent="38" style="backbone" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="1.0" width="50.0" y="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:backboneCell>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000409"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id14">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id14"/>
    <sbol:displayId>id14</sbol:displayId>
    <SBOLCanvas:textBoxes>&lt;Array/&gt;</SBOLCanvas:textBoxes>
    <SBOLCanvas:containerCell>&lt;mxCell connectable="0" id="23" parent="https://sbolcanvas.org/id14" style="circuitContainer" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:containerCell>
    <SBOLCanvas:backboneCell>&lt;mxCell connectable="0" id="24" parent="23" style="backbone" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="1.0" width="50.0" y="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:backboneCell>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000724"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id7">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id7"/>
    <sbol:displayId>id7</sbol:displayId>
    <SBOLCanvas:textBoxes>&lt;Array/&gt;</SBOLCanvas:textBoxes>
    <SBOLCanvas:containerCell>&lt;mxCell connectable="0" id="14" parent="https://sbolcanvas.org/id7" style="circuitContainer" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="100.0" width="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:containerCell>
    <SBOLCanvas:backboneCell>&lt;mxCell connectable="0" id="15" parent="14" style="backbone" value="" vertex="1"&gt;&lt;mxGeometry as="geometry" height="1.0" width="50.0" y="50.0"/&gt;&lt;/mxCell&gt;</SBOLCanvas:backboneCell>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000141"/>
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

           const display = prepareDisplay(displayList);
           renderDisplay(display);
        }

    })
}

function renderDisplay(display) {
    display.renderReact();
}