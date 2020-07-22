const prepareDisplay = require('./lib/design/prepareDisplay');
const SBOLDocument = require('sboljs');
const getDisplayList = require('./lib/gatherInfo/originalVisbol/getDisplayList').getDisplayList;
const getInteractionList = require('./lib/gatherInfo/originalVisbol/getInteractionList');

const mydocument = `<?xml version="1.0" ?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sbol="http://sbols.org/v2#" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:prov="http://www.w3.org/ns/prov#" xmlns:om="http://www.ontology-of-units-of-measure.org/resource/om-2/" xmlns:SBOLCanvas="https://sbolcanvas.org/">
  <sbol:ModuleDefinition rdf:about="https://sbolcanvas.org/molecular">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular"/>
    <sbol:displayId>molecular</sbol:displayId>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://sbolcanvas.org/molecular/id75_36">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/id75_36"/>
        <sbol:displayId>id75_36</sbol:displayId>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id75"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://sbolcanvas.org/molecular/id82_38">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/id82_38"/>
        <sbol:displayId>id82_38</sbol:displayId>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id82"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://sbolcanvas.org/molecular/id92_48">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/id92_48"/>
        <sbol:displayId>id92_48</sbol:displayId>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id92"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://sbolcanvas.org/molecular/id67_30">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/id67_30"/>
        <sbol:displayId>id67_30</sbol:displayId>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id67"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>
        <sbol:mapsTo>
          <sbol:MapsTo rdf:about="https://sbolcanvas.org/molecular/id67_30/mapsTo_id90_4">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/id67_30/mapsTo_id90_4"/>
            <sbol:displayId>mapsTo_id90_4</sbol:displayId>
            <sbol:refinement rdf:resource="http://sbols.org/v2#useRemote"/>
            <sbol:remote rdf:resource="https://sbolcanvas.org/id67/id90_4"/>
            <sbol:local rdf:resource="https://sbolcanvas.org/molecular/id90_45"/>
          </sbol:MapsTo>
        </sbol:mapsTo>
        <sbol:mapsTo>
          <sbol:MapsTo rdf:about="https://sbolcanvas.org/molecular/id67_30/mapsTo_id69_1">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/id67_30/mapsTo_id69_1"/>
            <sbol:displayId>mapsTo_id69_1</sbol:displayId>
            <sbol:refinement rdf:resource="http://sbols.org/v2#useRemote"/>
            <sbol:remote rdf:resource="https://sbolcanvas.org/id67/id69_1"/>
            <sbol:local rdf:resource="https://sbolcanvas.org/molecular/id69_32"/>
          </sbol:MapsTo>
        </sbol:mapsTo>
        <sbol:mapsTo>
          <sbol:MapsTo rdf:about="https://sbolcanvas.org/molecular/id67_30/mapsTo_id82_2">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/id67_30/mapsTo_id82_2"/>
            <sbol:displayId>mapsTo_id82_2</sbol:displayId>
            <sbol:refinement rdf:resource="http://sbols.org/v2#useRemote"/>
            <sbol:remote rdf:resource="https://sbolcanvas.org/id67/id82_2"/>
            <sbol:local rdf:resource="https://sbolcanvas.org/molecular/id82_38"/>
          </sbol:MapsTo>
        </sbol:mapsTo>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://sbolcanvas.org/molecular/id90_45">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/id90_45"/>
        <sbol:displayId>id90_45</sbol:displayId>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id90"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://sbolcanvas.org/molecular/id69_32">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/id69_32"/>
        <sbol:displayId>id69_32</sbol:displayId>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id69"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://sbolcanvas.org/molecular/id87_44">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/id87_44"/>
        <sbol:displayId>id87_44</sbol:displayId>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id87"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:interaction>
      <sbol:Interaction rdf:about="https://sbolcanvas.org/molecular/Interaction18">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/Interaction18"/>
        <sbol:displayId>Interaction18</sbol:displayId>
        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000589"/>
        <sbol:participation>
          <sbol:Participation rdf:about="https://sbolcanvas.org/molecular/Interaction18/id75_36">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/Interaction18/id75_36"/>
            <sbol:displayId>id75_36</sbol:displayId>
            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000011"/>
            <sbol:participant rdf:resource="https://sbolcanvas.org/molecular/id75_36"/>
          </sbol:Participation>
        </sbol:participation>
        <sbol:participation>
          <sbol:Participation rdf:about="https://sbolcanvas.org/molecular/Interaction18/id69_32">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/Interaction18/id69_32"/>
            <sbol:displayId>id69_32</sbol:displayId>
            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000645"/>
            <sbol:participant rdf:resource="https://sbolcanvas.org/molecular/id69_32"/>
          </sbol:Participation>
        </sbol:participation>
      </sbol:Interaction>
    </sbol:interaction>
    <sbol:interaction>
      <sbol:Interaction rdf:about="https://sbolcanvas.org/molecular/Interaction22">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/Interaction22"/>
        <sbol:displayId>Interaction22</sbol:displayId>
        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000170"/>
        <sbol:participation>
          <sbol:Participation rdf:about="https://sbolcanvas.org/molecular/Interaction22/id92_48">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/Interaction22/id92_48"/>
            <sbol:displayId>id92_48</sbol:displayId>
            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000643"/>
            <sbol:participant rdf:resource="https://sbolcanvas.org/molecular/id92_48"/>
          </sbol:Participation>
        </sbol:participation>
        <sbol:participation>
          <sbol:Participation rdf:about="https://sbolcanvas.org/molecular/Interaction22/id90_45">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/Interaction22/id90_45"/>
            <sbol:displayId>id90_45</sbol:displayId>
            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000459"/>
            <sbol:participant rdf:resource="https://sbolcanvas.org/molecular/id90_45"/>
          </sbol:Participation>
        </sbol:participation>
      </sbol:Interaction>
    </sbol:interaction>
    <sbol:interaction>
      <sbol:Interaction rdf:about="https://sbolcanvas.org/molecular/Interaction20">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/Interaction20"/>
        <sbol:displayId>Interaction20</sbol:displayId>
        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000168"/>
        <sbol:participation>
          <sbol:Participation rdf:about="https://sbolcanvas.org/molecular/Interaction20/id87_44">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/Interaction20/id87_44"/>
            <sbol:displayId>id87_44</sbol:displayId>
            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000644"/>
            <sbol:participant rdf:resource="https://sbolcanvas.org/molecular/id87_44"/>
          </sbol:Participation>
        </sbol:participation>
        <sbol:participation>
          <sbol:Participation rdf:about="https://sbolcanvas.org/molecular/Interaction20/id82_38">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular/Interaction20/id82_38"/>
            <sbol:displayId>id82_38</sbol:displayId>
            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000019"/>
            <sbol:participant rdf:resource="https://sbolcanvas.org/molecular/id82_38"/>
          </sbol:Participation>
        </sbol:participation>
      </sbol:Interaction>
    </sbol:interaction>
  </sbol:ModuleDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id90">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id90"/>
    <sbol:displayId>id90</sbol:displayId>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0001263"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id75">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id75"/>
    <sbol:displayId>id75</sbol:displayId>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#Dna"/>
    <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000020"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id67">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id67"/>
    <sbol:displayId>id67</sbol:displayId>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000110"/>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/id67/id85_3">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id67/id85_3"/>
        <sbol:displayId>id85_3</sbol:displayId>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id85"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/id67/id69_1">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id67/id69_1"/>
        <sbol:displayId>id69_1</sbol:displayId>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id69"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/id67/id82_2">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id67/id82_2"/>
        <sbol:displayId>id82_2</sbol:displayId>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id82"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://sbolcanvas.org/id67/id90_4">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id67/id90_4"/>
        <sbol:displayId>id90_4</sbol:displayId>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://sbolcanvas.org/id90"/>
      </sbol:Component>
    </sbol:component>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/id67/id67Annotation1">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id67/id67Annotation1"/>
        <sbol:displayId>id67Annotation1</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/id67/id67Annotation1/location1">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id67/id67Annotation1/location1"/>
            <sbol:displayId>location1</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/id67/id82_2"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/id67/id67Annotation2">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id67/id67Annotation2"/>
        <sbol:displayId>id67Annotation2</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/id67/id67Annotation2/location2">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id67/id67Annotation2/location2"/>
            <sbol:displayId>location2</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/id67/id85_3"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/id67/id67Annotation0">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id67/id67Annotation0"/>
        <sbol:displayId>id67Annotation0</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/id67/id67Annotation0/location0">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id67/id67Annotation0/location0"/>
            <sbol:displayId>location0</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/id67/id69_1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://sbolcanvas.org/id67/id67Annotation3">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id67/id67Annotation3"/>
        <sbol:displayId>id67Annotation3</sbol:displayId>
        <sbol:location>
          <sbol:GenericLocation rdf:about="https://sbolcanvas.org/id67/id67Annotation3/location3">
            <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id67/id67Annotation3/location3"/>
            <sbol:displayId>location3</sbol:displayId>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:GenericLocation>
        </sbol:location>
        <sbol:component rdf:resource="https://sbolcanvas.org/id67/id90_4"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/id67/id67Constraint1">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id67/id67Constraint1"/>
        <sbol:displayId>id67Constraint1</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/id67/id69_1"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/id67/id82_2"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/id67/id67Constraint2">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id67/id67Constraint2"/>
        <sbol:displayId>id67Constraint2</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/id67/id82_2"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/id67/id85_3"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://sbolcanvas.org/id67/id67Constraint3">
        <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id67/id67Constraint3"/>
        <sbol:displayId>id67Constraint3</sbol:displayId>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://sbolcanvas.org/id67/id85_3"/>
        <sbol:object rdf:resource="https://sbolcanvas.org/id67/id90_4"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id69">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id69"/>
    <sbol:displayId>id69</sbol:displayId>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000167"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id87">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id87"/>
    <sbol:displayId>id87</sbol:displayId>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#Rna"/>
    <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000020"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id82">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id82"/>
    <sbol:displayId>id82</sbol:displayId>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000627"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id85">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id85"/>
    <sbol:displayId>id85</sbol:displayId>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000296"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://sbolcanvas.org/id92">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id92"/>
    <sbol:displayId>id92</sbol:displayId>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#Protein"/>
    <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000020"/>
  </sbol:ComponentDefinition>
  <SBOLCanvas:Layout rdf:about="https://sbolcanvas.org/molecular_Layout">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/molecular_Layout"/>
    <sbol:displayId>molecular_Layout</sbol:displayId>
    <SBOLCanvas:objectRef rdf:resource="https://sbolcanvas.org/molecular"/>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/molecular_Layout/NodeGlyph_36">
        <SBOLCanvas:x>730.0</SBOLCanvas:x>
        <SBOLCanvas:y>140.0</SBOLCanvas:y>
        <SBOLCanvas:width>50.0</SBOLCanvas:width>
        <SBOLCanvas:height>50.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>id75_36</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/molecular_Layout/NodeGlyph_44">
        <SBOLCanvas:x>800.0</SBOLCanvas:x>
        <SBOLCanvas:y>150.0</SBOLCanvas:y>
        <SBOLCanvas:width>50.0</SBOLCanvas:width>
        <SBOLCanvas:height>50.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>id87_44</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/molecular_Layout/NodeGlyph_48">
        <SBOLCanvas:x>880.0</SBOLCanvas:x>
        <SBOLCanvas:y>150.0</SBOLCanvas:y>
        <SBOLCanvas:width>50.0</SBOLCanvas:width>
        <SBOLCanvas:height>50.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>id92_48</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/molecular_Layout/NodeGlyph_30">
        <SBOLCanvas:x>730.0</SBOLCanvas:x>
        <SBOLCanvas:y>280.0</SBOLCanvas:y>
        <SBOLCanvas:width>200.0</SBOLCanvas:width>
        <SBOLCanvas:height>100.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>id67_30</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
    <SBOLCanvas:id67_Reference rdf:resource="https://sbolcanvas.org/id67_Layout"/>
    <SBOLCanvas:edgeGlyph>
      <SBOLCanvas:EdgeGlyph rdf:about="https://sbolcanvas.org/molecular_Layout/EdgeGlyph_49">
        <SBOLCanvas:displayId>Interaction18</SBOLCanvas:displayId>
      </SBOLCanvas:EdgeGlyph>
    </SBOLCanvas:edgeGlyph>
    <SBOLCanvas:edgeGlyph>
      <SBOLCanvas:EdgeGlyph rdf:about="https://sbolcanvas.org/molecular_Layout/EdgeGlyph_50">
        <SBOLCanvas:displayId>Interaction20</SBOLCanvas:displayId>
      </SBOLCanvas:EdgeGlyph>
    </SBOLCanvas:edgeGlyph>
    <SBOLCanvas:edgeGlyph>
      <SBOLCanvas:EdgeGlyph rdf:about="https://sbolcanvas.org/molecular_Layout/EdgeGlyph_51">
        <SBOLCanvas:displayId>Interaction22</SBOLCanvas:displayId>
      </SBOLCanvas:EdgeGlyph>
    </SBOLCanvas:edgeGlyph>
  </SBOLCanvas:Layout>
  <SBOLCanvas:Layout rdf:about="https://sbolcanvas.org/id85_Layout">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id85_Layout"/>
    <sbol:displayId>id85_Layout</sbol:displayId>
    <SBOLCanvas:objectRef rdf:resource="https://sbolcanvas.org/id85"/>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/id85_Layout/NodeGlyph_42">
        <SBOLCanvas:x>0.0</SBOLCanvas:x>
        <SBOLCanvas:y>0.0</SBOLCanvas:y>
        <SBOLCanvas:width>0.0</SBOLCanvas:width>
        <SBOLCanvas:height>0.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>container</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/id85_Layout/NodeGlyph_43">
        <SBOLCanvas:x>0.0</SBOLCanvas:x>
        <SBOLCanvas:y>0.0</SBOLCanvas:y>
        <SBOLCanvas:width>0.0</SBOLCanvas:width>
        <SBOLCanvas:height>0.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>backbone</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
  </SBOLCanvas:Layout>
  <SBOLCanvas:Layout rdf:about="https://sbolcanvas.org/id67_Layout">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id67_Layout"/>
    <sbol:displayId>id67_Layout</sbol:displayId>
    <SBOLCanvas:objectRef rdf:resource="https://sbolcanvas.org/id67"/>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/id67_Layout/NodeGlyph_30">
        <SBOLCanvas:x>730.0</SBOLCanvas:x>
        <SBOLCanvas:y>280.0</SBOLCanvas:y>
        <SBOLCanvas:width>200.0</SBOLCanvas:width>
        <SBOLCanvas:height>100.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>container</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/id67_Layout/NodeGlyph_31">
        <SBOLCanvas:x>0.0</SBOLCanvas:x>
        <SBOLCanvas:y>50.0</SBOLCanvas:y>
        <SBOLCanvas:width>200.0</SBOLCanvas:width>
        <SBOLCanvas:height>1.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>backbone</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/id67_Layout/NodeGlyph_32">
        <SBOLCanvas:x>0.0</SBOLCanvas:x>
        <SBOLCanvas:y>0.0</SBOLCanvas:y>
        <SBOLCanvas:width>50.0</SBOLCanvas:width>
        <SBOLCanvas:height>100.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>id69_1</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
    <SBOLCanvas:id69_Reference rdf:resource="https://sbolcanvas.org/id69_Layout"/>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/id67_Layout/NodeGlyph_38">
        <SBOLCanvas:x>50.0</SBOLCanvas:x>
        <SBOLCanvas:y>0.0</SBOLCanvas:y>
        <SBOLCanvas:width>50.0</SBOLCanvas:width>
        <SBOLCanvas:height>100.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>id82_2</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
    <SBOLCanvas:id82_Reference rdf:resource="https://sbolcanvas.org/id82_Layout"/>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/id67_Layout/NodeGlyph_41">
        <SBOLCanvas:x>100.0</SBOLCanvas:x>
        <SBOLCanvas:y>0.0</SBOLCanvas:y>
        <SBOLCanvas:width>50.0</SBOLCanvas:width>
        <SBOLCanvas:height>100.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>id85_3</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
    <SBOLCanvas:id85_Reference rdf:resource="https://sbolcanvas.org/id85_Layout"/>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/id67_Layout/NodeGlyph_45">
        <SBOLCanvas:x>150.0</SBOLCanvas:x>
        <SBOLCanvas:y>0.0</SBOLCanvas:y>
        <SBOLCanvas:width>50.0</SBOLCanvas:width>
        <SBOLCanvas:height>100.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>id90_4</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
    <SBOLCanvas:id90_Reference rdf:resource="https://sbolcanvas.org/id90_Layout"/>
  </SBOLCanvas:Layout>
  <SBOLCanvas:Layout rdf:about="https://sbolcanvas.org/id69_Layout">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id69_Layout"/>
    <sbol:displayId>id69_Layout</sbol:displayId>
    <SBOLCanvas:objectRef rdf:resource="https://sbolcanvas.org/id69"/>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/id69_Layout/NodeGlyph_33">
        <SBOLCanvas:x>0.0</SBOLCanvas:x>
        <SBOLCanvas:y>0.0</SBOLCanvas:y>
        <SBOLCanvas:width>0.0</SBOLCanvas:width>
        <SBOLCanvas:height>0.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>container</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/id69_Layout/NodeGlyph_34">
        <SBOLCanvas:x>0.0</SBOLCanvas:x>
        <SBOLCanvas:y>0.0</SBOLCanvas:y>
        <SBOLCanvas:width>0.0</SBOLCanvas:width>
        <SBOLCanvas:height>0.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>backbone</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
  </SBOLCanvas:Layout>
  <SBOLCanvas:Layout rdf:about="https://sbolcanvas.org/id90_Layout">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id90_Layout"/>
    <sbol:displayId>id90_Layout</sbol:displayId>
    <SBOLCanvas:objectRef rdf:resource="https://sbolcanvas.org/id90"/>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/id90_Layout/NodeGlyph_46">
        <SBOLCanvas:x>0.0</SBOLCanvas:x>
        <SBOLCanvas:y>0.0</SBOLCanvas:y>
        <SBOLCanvas:width>0.0</SBOLCanvas:width>
        <SBOLCanvas:height>0.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>container</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/id90_Layout/NodeGlyph_47">
        <SBOLCanvas:x>0.0</SBOLCanvas:x>
        <SBOLCanvas:y>0.0</SBOLCanvas:y>
        <SBOLCanvas:width>0.0</SBOLCanvas:width>
        <SBOLCanvas:height>0.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>backbone</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
  </SBOLCanvas:Layout>
  <SBOLCanvas:Layout rdf:about="https://sbolcanvas.org/id82_Layout">
    <sbol:persistentIdentity rdf:resource="https://sbolcanvas.org/id82_Layout"/>
    <sbol:displayId>id82_Layout</sbol:displayId>
    <SBOLCanvas:objectRef rdf:resource="https://sbolcanvas.org/id82"/>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/id82_Layout/NodeGlyph_39">
        <SBOLCanvas:x>0.0</SBOLCanvas:x>
        <SBOLCanvas:y>0.0</SBOLCanvas:y>
        <SBOLCanvas:width>0.0</SBOLCanvas:width>
        <SBOLCanvas:height>0.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>container</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
    <SBOLCanvas:nodeGlyph>
      <SBOLCanvas:NodeGlyph rdf:about="https://sbolcanvas.org/id82_Layout/NodeGlyph_40">
        <SBOLCanvas:x>0.0</SBOLCanvas:x>
        <SBOLCanvas:y>0.0</SBOLCanvas:y>
        <SBOLCanvas:width>0.0</SBOLCanvas:width>
        <SBOLCanvas:height>0.0</SBOLCanvas:height>
        <SBOLCanvas:displayId>backbone</SBOLCanvas:displayId>
      </SBOLCanvas:NodeGlyph>
    </SBOLCanvas:nodeGlyph>
  </SBOLCanvas:Layout>
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