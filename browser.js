const prepareDisplay = require('./lib/design/prepareDisplay');
const SBOLDocument = require('sboljs');
const getDisplayList = require('./lib/gatherInfo/originalVisbol/getDisplayList').getDisplayList;
const getInteractionList = require('./lib/gatherInfo/originalVisbol/getInteractionList');

const mydocument = `<?xml version='1.0' encoding='UTF-8'?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sbh="http://wiki.synbiohub.org/wiki/Terms/synbiohub#" xmlns:sbol="http://sbols.org/v2#" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:prov="http://www.w3.org/ns/prov#" xmlns:om="http://www.ontology-of-units-of-measure.org/resource/om-2/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <sbol:ModuleDefinition rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_degradation/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_degradation"/>
    <sbol:displayId>QacR_protein_degradation</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_degradation/QacR_protein/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_degradation/QacR_protein"/>
        <sbol:displayId>QacR_protein</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#in"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:interaction>
      <sbol:Interaction rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_degradation/QacR_degradation_interaction/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_degradation/QacR_degradation_interaction"/>
        <sbol:displayId>QacR_degradation_interaction</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000179"/>
        <sbol:participation>
          <sbol:Participation rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_degradation/QacR_degradation_interaction/QacR_protein/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_degradation/QacR_degradation_interaction/QacR_protein"/>
            <sbol:displayId>QacR_protein</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000010"/>
            <sbol:participant rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_degradation/QacR_protein/1"/>
          </sbol:Participation>
        </sbol:participation>
      </sbol:Interaction>
    </sbol:interaction>
  </sbol:ModuleDefinition>
  <sbol:ModuleDefinition rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_production/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_production"/>
    <sbol:displayId>QacR_protein_production</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_production/QacR/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_production/QacR"/>
        <sbol:displayId>QacR</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_production/QacR_protein/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_production/QacR_protein"/>
        <sbol:displayId>QacR_protein</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:interaction>
      <sbol:Interaction rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_production/QacR_protein_interaction/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_production/QacR_protein_interaction"/>
        <sbol:displayId>QacR_protein_interaction</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000589"/>
        <sbol:participation>
          <sbol:Participation rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_production/QacR_protein_interaction/QacR/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_production/QacR_protein_interaction/QacR"/>
            <sbol:displayId>QacR</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000645"/>
            <sbol:participant rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_production/QacR/1"/>
          </sbol:Participation>
        </sbol:participation>
        <sbol:participation>
          <sbol:Participation rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_production/QacR_protein_interaction/QacR_protein/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_production/QacR_protein_interaction/QacR_protein"/>
            <sbol:displayId>QacR_protein</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000011"/>
            <sbol:participant rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_production/QacR_protein/1"/>
          </sbol:Participation>
        </sbol:participation>
      </sbol:Interaction>
    </sbol:interaction>
  </sbol:ModuleDefinition>
  <sbol:ModuleDefinition rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_degradation/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_degradation"/>
    <sbol:displayId>AmtR_protein_degradation</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_degradation/AmtR_protein/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_degradation/AmtR_protein"/>
        <sbol:displayId>AmtR_protein</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#in"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:interaction>
      <sbol:Interaction rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_degradation/AmtR_degradation_interaction/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_degradation/AmtR_degradation_interaction"/>
        <sbol:displayId>AmtR_degradation_interaction</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000179"/>
        <sbol:participation>
          <sbol:Participation rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_degradation/AmtR_degradation_interaction/AmtR_protein/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_degradation/AmtR_degradation_interaction/AmtR_protein"/>
            <sbol:displayId>AmtR_protein</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000010"/>
            <sbol:participant rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_degradation/AmtR_protein/1"/>
          </sbol:Participation>
        </sbol:participation>
      </sbol:Interaction>
    </sbol:interaction>
  </sbol:ModuleDefinition>
  <sbol:ModuleDefinition rdf:about="https://www.async.ece.utah.edu/Ben_module/1">
    <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module"/>
    <sbol:displayId>Ben_module</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://www.async.ece.utah.edu/Ben_module/QacR/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module/QacR"/>
        <sbol:displayId>QacR</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://www.async.ece.utah.edu/Ben_module/Ben_fc/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module/Ben_fc"/>
        <sbol:displayId>Ben_fc</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:definition rdf:resource="https://www.async.ece.utah.edu/Ben/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>
        <sbol:mapsTo>
          <sbol:MapsTo rdf:about="https://www.async.ece.utah.edu/Ben_module/Ben_fc/QacR_mapsTo/1">
            <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module/Ben_fc/QacR_mapsTo"/>
            <sbol:displayId>QacR_mapsTo</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:refinement rdf:resource="http://sbols.org/v2#useLocal"/>
            <sbol:remote rdf:resource="https://www.async.ece.utah.edu/Ben/CDS_Component/1"/>
            <sbol:local rdf:resource="https://www.async.ece.utah.edu/Ben_module/QacR/1"/>
          </sbol:MapsTo>
        </sbol:mapsTo>
        <sbol:mapsTo>
          <sbol:MapsTo rdf:about="https://www.async.ece.utah.edu/Ben_module/Ben_fc/pAmtR_mapsTo/1">
            <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module/Ben_fc/pAmtR_mapsTo"/>
            <sbol:displayId>pAmtR_mapsTo</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:refinement rdf:resource="http://sbols.org/v2#useLocal"/>
            <sbol:remote rdf:resource="https://www.async.ece.utah.edu/Ben/Pro_Component/1"/>
            <sbol:local rdf:resource="https://www.async.ece.utah.edu/Ben_module/pAmtR/1"/>
          </sbol:MapsTo>
        </sbol:mapsTo>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://www.async.ece.utah.edu/Ben_module/QacR_protein/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module/QacR_protein"/>
        <sbol:displayId>QacR_protein</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://www.async.ece.utah.edu/Ben_module/pAmtR/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module/pAmtR"/>
        <sbol:displayId>pAmtR</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/pAmtR/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://www.async.ece.utah.edu/Ben_module/AmtR_protein/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module/AmtR_protein"/>
        <sbol:displayId>AmtR_protein</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#in"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:model rdf:resource="https://www.async.ece.utah.edu/Ben_module_model/1"/>
    <sbol:module>
      <sbol:Module rdf:about="https://www.async.ece.utah.edu/Ben_module/Ben_module_AmtR_protein_degradation_sub/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module/Ben_module_AmtR_protein_degradation_sub"/>
        <sbol:displayId>Ben_module_AmtR_protein_degradation_sub</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_degradation/1"/>
        <sbol:mapsTo>
          <sbol:MapsTo rdf:about="https://www.async.ece.utah.edu/Ben_module/Ben_module_AmtR_protein_degradation_sub/Ben_module_AmtR_protein_degradation_sub_AmtR_protein_AmtR_protein/1">
            <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module/Ben_module_AmtR_protein_degradation_sub/Ben_module_AmtR_protein_degradation_sub_AmtR_protein_AmtR_protein"/>
            <sbol:displayId>Ben_module_AmtR_protein_degradation_sub_AmtR_protein_AmtR_protein</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:refinement rdf:resource="http://sbols.org/v2#verifyIdentical"/>
            <sbol:remote rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_degradation/AmtR_protein/1"/>
            <sbol:local rdf:resource="https://www.async.ece.utah.edu/Ben_module/AmtR_protein/1"/>
          </sbol:MapsTo>
        </sbol:mapsTo>
      </sbol:Module>
    </sbol:module>
    <sbol:module>
      <sbol:Module rdf:about="https://www.async.ece.utah.edu/Ben_module/Ben_module_AmtR_protein_pAmtR_repression_sub/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module/Ben_module_AmtR_protein_pAmtR_repression_sub"/>
        <sbol:displayId>Ben_module_AmtR_protein_pAmtR_repression_sub</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_pAmtR_repression/1"/>
        <sbol:mapsTo>
          <sbol:MapsTo rdf:about="https://www.async.ece.utah.edu/Ben_module/Ben_module_AmtR_protein_pAmtR_repression_sub/Ben_module_AmtR_protein_pAmtR_repression_sub_AmtR_protein_AmtR_protein/1">
            <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module/Ben_module_AmtR_protein_pAmtR_repression_sub/Ben_module_AmtR_protein_pAmtR_repression_sub_AmtR_protein_AmtR_protein"/>
            <sbol:displayId>Ben_module_AmtR_protein_pAmtR_repression_sub_AmtR_protein_AmtR_protein</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:refinement rdf:resource="http://sbols.org/v2#verifyIdentical"/>
            <sbol:remote rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_pAmtR_repression/AmtR_protein/1"/>
            <sbol:local rdf:resource="https://www.async.ece.utah.edu/Ben_module/AmtR_protein/1"/>
          </sbol:MapsTo>
        </sbol:mapsTo>
        <sbol:mapsTo>
          <sbol:MapsTo rdf:about="https://www.async.ece.utah.edu/Ben_module/Ben_module_AmtR_protein_pAmtR_repression_sub/Ben_module_AmtR_protein_pAmtR_repression_sub_pAmtR_pAmtR/1">
            <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module/Ben_module_AmtR_protein_pAmtR_repression_sub/Ben_module_AmtR_protein_pAmtR_repression_sub_pAmtR_pAmtR"/>
            <sbol:displayId>Ben_module_AmtR_protein_pAmtR_repression_sub_pAmtR_pAmtR</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:refinement rdf:resource="http://sbols.org/v2#verifyIdentical"/>
            <sbol:remote rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_pAmtR_repression/pAmtR/1"/>
            <sbol:local rdf:resource="https://www.async.ece.utah.edu/Ben_module/pAmtR/1"/>
          </sbol:MapsTo>
        </sbol:mapsTo>
      </sbol:Module>
    </sbol:module>
    <sbol:module>
      <sbol:Module rdf:about="https://www.async.ece.utah.edu/Ben_module/Ben_module_QacR_protein_degradation_sub/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module/Ben_module_QacR_protein_degradation_sub"/>
        <sbol:displayId>Ben_module_QacR_protein_degradation_sub</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_degradation/1"/>
        <sbol:mapsTo>
          <sbol:MapsTo rdf:about="https://www.async.ece.utah.edu/Ben_module/Ben_module_QacR_protein_degradation_sub/Ben_module_QacR_protein_degradation_sub_QacR_protein_QacR_protein/1">
            <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module/Ben_module_QacR_protein_degradation_sub/Ben_module_QacR_protein_degradation_sub_QacR_protein_QacR_protein"/>
            <sbol:displayId>Ben_module_QacR_protein_degradation_sub_QacR_protein_QacR_protein</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:refinement rdf:resource="http://sbols.org/v2#verifyIdentical"/>
            <sbol:remote rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_degradation/QacR_protein/1"/>
            <sbol:local rdf:resource="https://www.async.ece.utah.edu/Ben_module/QacR_protein/1"/>
          </sbol:MapsTo>
        </sbol:mapsTo>
      </sbol:Module>
    </sbol:module>
    <sbol:module>
      <sbol:Module rdf:about="https://www.async.ece.utah.edu/Ben_module/Ben_module_QacR_protein_production_sub/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module/Ben_module_QacR_protein_production_sub"/>
        <sbol:displayId>Ben_module_QacR_protein_production_sub</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_production/1"/>
        <sbol:mapsTo>
          <sbol:MapsTo rdf:about="https://www.async.ece.utah.edu/Ben_module/Ben_module_QacR_protein_production_sub/Ben_module_QacR_protein_production_sub_QacR_protein_QacR_protein/1">
            <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module/Ben_module_QacR_protein_production_sub/Ben_module_QacR_protein_production_sub_QacR_protein_QacR_protein"/>
            <sbol:displayId>Ben_module_QacR_protein_production_sub_QacR_protein_QacR_protein</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:refinement rdf:resource="http://sbols.org/v2#verifyIdentical"/>
            <sbol:remote rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_production/QacR_protein/1"/>
            <sbol:local rdf:resource="https://www.async.ece.utah.edu/Ben_module/QacR_protein/1"/>
          </sbol:MapsTo>
        </sbol:mapsTo>
        <sbol:mapsTo>
          <sbol:MapsTo rdf:about="https://www.async.ece.utah.edu/Ben_module/Ben_module_QacR_protein_production_sub/Ben_module_QacR_protein_production_sub_QacR_QacR/1">
            <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module/Ben_module_QacR_protein_production_sub/Ben_module_QacR_protein_production_sub_QacR_QacR"/>
            <sbol:displayId>Ben_module_QacR_protein_production_sub_QacR_QacR</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:refinement rdf:resource="http://sbols.org/v2#verifyIdentical"/>
            <sbol:remote rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein_production/QacR/1"/>
            <sbol:local rdf:resource="https://www.async.ece.utah.edu/Ben_module/QacR/1"/>
          </sbol:MapsTo>
        </sbol:mapsTo>
      </sbol:Module>
    </sbol:module>
  </sbol:ModuleDefinition>
  <sbol:ModuleDefinition rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_pAmtR_repression/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_pAmtR_repression"/>
    <sbol:displayId>AmtR_protein_pAmtR_repression</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_pAmtR_repression/AmtR_protein/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_pAmtR_repression/AmtR_protein"/>
        <sbol:displayId>AmtR_protein</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#in"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:functionalComponent>
      <sbol:FunctionalComponent rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_pAmtR_repression/pAmtR/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_pAmtR_repression/pAmtR"/>
        <sbol:displayId>pAmtR</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/pAmtR/1"/>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:direction rdf:resource="http://sbols.org/v2#inout"/>
      </sbol:FunctionalComponent>
    </sbol:functionalComponent>
    <sbol:interaction>
      <sbol:Interaction rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_pAmtR_repression/AmtR_protein_pAmtR_repression/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_pAmtR_repression/AmtR_protein_pAmtR_repression"/>
        <sbol:displayId>AmtR_protein_pAmtR_repression</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:type rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000169"/>
        <sbol:participation>
          <sbol:Participation rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_pAmtR_repression/AmtR_protein_pAmtR_repression/pAmtR_promoter_participation/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_pAmtR_repression/AmtR_protein_pAmtR_repression/pAmtR_promoter_participation"/>
            <sbol:displayId>pAmtR_promoter_participation</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000642"/>
            <sbol:participant rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_pAmtR_repression/pAmtR/1"/>
          </sbol:Participation>
        </sbol:participation>
        <sbol:participation>
          <sbol:Participation rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_pAmtR_repression/AmtR_protein_pAmtR_repression/AmtR_protein_participation/1">
            <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_pAmtR_repression/AmtR_protein_pAmtR_repression/AmtR_protein_participation"/>
            <sbol:displayId>AmtR_protein_participation</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:role rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000020"/>
            <sbol:participant rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein_pAmtR_repression/AmtR_protein/1"/>
          </sbol:Participation>
        </sbol:participation>
      </sbol:Interaction>
    </sbol:interaction>
  </sbol:ModuleDefinition>
  <sbol:Model rdf:about="https://www.async.ece.utah.edu/Ben_module_model/1">
    <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_module_model"/>
    <sbol:displayId>Ben_module_model</sbol:displayId>
    <sbol:version>1</sbol:version>
    <sbol:source rdf:resource="file:Ben_module.xml"/>
    <sbol:language rdf:resource="http://identifiers.org/edam/format_2585"/>
    <sbol:framework rdf:resource="http://identifiers.org/biomodels.sbo/SBO:0000063"/>
  </sbol:Model>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR"/>
    <sbol:displayId>QacR</sbol:displayId>
    <sbol:version>1</sbol:version>
    <prov:wasGeneratedBy rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2sbol_Activity/1"/>
    <dcterms:title>QacR</dcterms:title>
    <dcterms:created>2019-11-14T20:50:42.872Z</dcterms:created>
    <sbh:ownedBy rdf:resource="https://synbiohub.programmingbiology.org/user/myers"/>
    <sbh:topLevel rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR/1"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000316"/>
    <sbol:sequence rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_sequence/1"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/L3S2P21_terminator/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/L3S2P21_terminator"/>
    <sbol:displayId>L3S2P21_terminator</sbol:displayId>
    <sbol:version>1</sbol:version>
    <prov:wasGeneratedBy rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2sbol_Activity/1"/>
    <dcterms:title>L3S2P21_terminator</dcterms:title>
    <dcterms:created>2019-11-14T20:50:42.872Z</dcterms:created>
    <sbh:ownedBy rdf:resource="https://synbiohub.programmingbiology.org/user/myers"/>
    <sbh:topLevel rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/L3S2P21_terminator/1"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000141"/>
    <sbol:sequence rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/L3S2P21_terminator_sequence/1"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://www.async.ece.utah.edu/Ben/1">
    <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben"/>
    <sbol:displayId>Ben</sbol:displayId>
    <sbol:version>1</sbol:version>
    <prov:wasGeneratedBy rdf:resource="https://www.async.ece.utah.edu/Ben_SBOLDesignerActivity/1"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000804"/>
    <sbol:component>
      <sbol:Component rdf:about="https://www.async.ece.utah.edu/Ben/Ter_Component/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben/Ter_Component"/>
        <sbol:displayId>Ter_Component</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/L3S2P21_terminator/1"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://www.async.ece.utah.edu/Ben/CDS_Component/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben/CDS_Component"/>
        <sbol:displayId>CDS_Component</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR/1"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://www.async.ece.utah.edu/Ben/Pro_Component/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben/Pro_Component"/>
        <sbol:displayId>Pro_Component</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/pAmtR/1"/>
      </sbol:Component>
    </sbol:component>
    <sbol:component>
      <sbol:Component rdf:about="https://www.async.ece.utah.edu/Ben/RBS_Component/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben/RBS_Component"/>
        <sbol:displayId>RBS_Component</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:access rdf:resource="http://sbols.org/v2#public"/>
        <sbol:definition rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/S3/1"/>
      </sbol:Component>
    </sbol:component>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://www.async.ece.utah.edu/Ben/Ben_SequenceAnnotation2/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben/Ben_SequenceAnnotation2"/>
        <sbol:displayId>Ben_SequenceAnnotation2</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:location>
          <sbol:Range rdf:about="https://www.async.ece.utah.edu/Ben/Ben_SequenceAnnotation2/Ben_SequenceAnnotation2_Range/1">
            <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben/Ben_SequenceAnnotation2/Ben_SequenceAnnotation2_Range"/>
            <sbol:displayId>Ben_SequenceAnnotation2_Range</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:start>102</sbol:start>
            <sbol:end>668</sbol:end>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:Range>
        </sbol:location>
        <sbol:component rdf:resource="https://www.async.ece.utah.edu/Ben/CDS_Component/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://www.async.ece.utah.edu/Ben/Ben_SequenceAnnotation3/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben/Ben_SequenceAnnotation3"/>
        <sbol:displayId>Ben_SequenceAnnotation3</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:location>
          <sbol:Range rdf:about="https://www.async.ece.utah.edu/Ben/Ben_SequenceAnnotation3/Ben_SequenceAnnotation3_Range/1">
            <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben/Ben_SequenceAnnotation3/Ben_SequenceAnnotation3_Range"/>
            <sbol:displayId>Ben_SequenceAnnotation3_Range</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:start>669</sbol:start>
            <sbol:end>729</sbol:end>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:Range>
        </sbol:location>
        <sbol:component rdf:resource="https://www.async.ece.utah.edu/Ben/Ter_Component/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://www.async.ece.utah.edu/Ben/Ben_SequenceAnnotation1/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben/Ben_SequenceAnnotation1"/>
        <sbol:displayId>Ben_SequenceAnnotation1</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:location>
          <sbol:Range rdf:about="https://www.async.ece.utah.edu/Ben/Ben_SequenceAnnotation1/Ben_SequenceAnnotation1_Range/1">
            <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben/Ben_SequenceAnnotation1/Ben_SequenceAnnotation1_Range"/>
            <sbol:displayId>Ben_SequenceAnnotation1_Range</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:start>64</sbol:start>
            <sbol:end>101</sbol:end>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:Range>
        </sbol:location>
        <sbol:component rdf:resource="https://www.async.ece.utah.edu/Ben/RBS_Component/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceAnnotation>
      <sbol:SequenceAnnotation rdf:about="https://www.async.ece.utah.edu/Ben/Ben_SequenceAnnotation/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben/Ben_SequenceAnnotation"/>
        <sbol:displayId>Ben_SequenceAnnotation</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:location>
          <sbol:Range rdf:about="https://www.async.ece.utah.edu/Ben/Ben_SequenceAnnotation/Ben_SequenceAnnotation_Range/1">
            <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben/Ben_SequenceAnnotation/Ben_SequenceAnnotation_Range"/>
            <sbol:displayId>Ben_SequenceAnnotation_Range</sbol:displayId>
            <sbol:version>1</sbol:version>
            <sbol:start>1</sbol:start>
            <sbol:end>63</sbol:end>
            <sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>
          </sbol:Range>
        </sbol:location>
        <sbol:component rdf:resource="https://www.async.ece.utah.edu/Ben/Pro_Component/1"/>
      </sbol:SequenceAnnotation>
    </sbol:sequenceAnnotation>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://www.async.ece.utah.edu/Ben/Ben_SequenceConstraint1/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben/Ben_SequenceConstraint1"/>
        <sbol:displayId>Ben_SequenceConstraint1</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://www.async.ece.utah.edu/Ben/RBS_Component/1"/>
        <sbol:object rdf:resource="https://www.async.ece.utah.edu/Ben/CDS_Component/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://www.async.ece.utah.edu/Ben/Ben_SequenceConstraint2/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben/Ben_SequenceConstraint2"/>
        <sbol:displayId>Ben_SequenceConstraint2</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://www.async.ece.utah.edu/Ben/CDS_Component/1"/>
        <sbol:object rdf:resource="https://www.async.ece.utah.edu/Ben/Ter_Component/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
    <sbol:sequenceConstraint>
      <sbol:SequenceConstraint rdf:about="https://www.async.ece.utah.edu/Ben/Ben_SequenceConstraint/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben/Ben_SequenceConstraint"/>
        <sbol:displayId>Ben_SequenceConstraint</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbol:restriction rdf:resource="http://sbols.org/v2#precedes"/>
        <sbol:subject rdf:resource="https://www.async.ece.utah.edu/Ben/Pro_Component/1"/>
        <sbol:object rdf:resource="https://www.async.ece.utah.edu/Ben/RBS_Component/1"/>
      </sbol:SequenceConstraint>
    </sbol:sequenceConstraint>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/S3/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/S3"/>
    <sbol:displayId>S3</sbol:displayId>
    <sbol:version>1</sbol:version>
    <prov:wasGeneratedBy rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2sbol_Activity/1"/>
    <dcterms:title>S3</dcterms:title>
    <dcterms:created>2019-11-14T20:50:42.872Z</dcterms:created>
    <sbh:ownedBy rdf:resource="https://synbiohub.programmingbiology.org/user/myers"/>
    <sbh:topLevel rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/S3/1"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000139"/>
    <sbol:sequence rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/S3_sequence/1"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/AmtR_protein"/>
    <sbol:displayId>AmtR_protein</sbol:displayId>
    <sbol:version>1</sbol:version>
    <dcterms:title>AmtR_protein</dcterms:title>
    <dcterms:created>2019-11-14T20:50:42.872Z</dcterms:created>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#Protein"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_protein"/>
    <sbol:displayId>QacR_protein</sbol:displayId>
    <sbol:version>1</sbol:version>
    <dcterms:title>QacR_protein</dcterms:title>
    <dcterms:created>2019-11-14T20:50:42.872Z</dcterms:created>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#Protein"/>
  </sbol:ComponentDefinition>
  <sbol:ComponentDefinition rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/pAmtR/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/pAmtR"/>
    <sbol:displayId>pAmtR</sbol:displayId>
    <sbol:version>1</sbol:version>
    <prov:wasGeneratedBy rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2sbol_Activity/1"/>
    <dcterms:title>pAmtR</dcterms:title>
    <dcterms:created>2019-11-14T20:50:42.872Z</dcterms:created>
    <sbh:ownedBy rdf:resource="https://synbiohub.programmingbiology.org/user/myers"/>
    <sbh:topLevel rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/pAmtR/1"/>
    <sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>
    <sbol:role rdf:resource="http://identifiers.org/so/SO:0000167"/>
    <sbol:sequence rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/pAmtR_sequence/1"/>
  </sbol:ComponentDefinition>
  <sbol:Sequence rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/S3_sequence/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/S3_sequence"/>
    <sbol:displayId>S3_sequence</sbol:displayId>
    <sbol:version>1</sbol:version>
    <prov:wasGeneratedBy rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2sbol_Activity/1"/>
    <dcterms:title>S3_sequence</dcterms:title>
    <dcterms:created>2019-11-14T20:50:42.872Z</dcterms:created>
    <sbh:ownedBy rdf:resource="https://synbiohub.programmingbiology.org/user/myers"/>
    <sbh:topLevel rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/S3_sequence/1"/>
    <sbol:elements>GAGTCTATGGACTATGTTTTCACAAAGGAAGTACCAGG</sbol:elements>
    <sbol:encoding rdf:resource="http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html"/>
  </sbol:Sequence>
  <sbol:Sequence rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/L3S2P21_terminator_sequence/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/L3S2P21_terminator_sequence"/>
    <sbol:displayId>L3S2P21_terminator_sequence</sbol:displayId>
    <sbol:version>1</sbol:version>
    <prov:wasGeneratedBy rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2sbol_Activity/1"/>
    <dcterms:title>L3S2P21_terminator_sequence</dcterms:title>
    <dcterms:created>2019-11-14T20:50:42.872Z</dcterms:created>
    <sbh:ownedBy rdf:resource="https://synbiohub.programmingbiology.org/user/myers"/>
    <sbh:topLevel rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/L3S2P21_terminator_sequence/1"/>
    <sbol:elements>CTCGGTACCAAATTCCAGAAAAGAGGCCTCCCGAAAGGGGGGCCTTTTTTCGTTTTGGTCC</sbol:elements>
    <sbol:encoding rdf:resource="http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html"/>
  </sbol:Sequence>
  <sbol:Sequence rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/pAmtR_sequence/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/pAmtR_sequence"/>
    <sbol:displayId>pAmtR_sequence</sbol:displayId>
    <sbol:version>1</sbol:version>
    <prov:wasGeneratedBy rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2sbol_Activity/1"/>
    <dcterms:title>pAmtR_sequence</dcterms:title>
    <dcterms:created>2019-11-14T20:50:42.872Z</dcterms:created>
    <sbh:ownedBy rdf:resource="https://synbiohub.programmingbiology.org/user/myers"/>
    <sbh:topLevel rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/pAmtR_sequence/1"/>
    <sbol:elements>CTTGTCCAACCAAATGATTCGTTACCAATTGACAGTTTCTATCGATCTATAGATAATGCTAGC</sbol:elements>
    <sbol:encoding rdf:resource="http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html"/>
  </sbol:Sequence>
  <sbol:Sequence rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_sequence/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_sequence"/>
    <sbol:displayId>QacR_sequence</sbol:displayId>
    <sbol:version>1</sbol:version>
    <prov:wasGeneratedBy rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2sbol_Activity/1"/>
    <dcterms:title>QacR_sequence</dcterms:title>
    <dcterms:created>2019-11-14T20:50:42.872Z</dcterms:created>
    <sbh:ownedBy rdf:resource="https://synbiohub.programmingbiology.org/user/myers"/>
    <sbh:topLevel rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/QacR_sequence/1"/>
    <sbol:elements>ATGAACCTGAAAGATAAAATTCTGGGCGTTGCCAAAGAACTGTTTATCAAAAATGGCTATAACGCAACCACCACCGGTGAAATTGTTAAACTGAGCGAAAGCAGCAAAGGCAATCTGTATTATCACTTTAAAACCAAAGAGAACCTGTTTCTGGAAATCCTGAACATCGAAGAAAGCAAATGGCAAGAGCAGTGGAAAAAAGAACAAATCAAATGCAAAACCAACCGCGAGAAATTCTATCTGTATAATGAACTGAGCCTGACCACCGAATATTACTATCCGCTGCAGAATGCCATCATCGAGTTTTATACCGAGTACTATAAAACCAACAGCATCAACGAGAAAATGAACAAACTGGAAAACAAATACATCGATGCCTACCACGTGATCTTTAAAGAAGGTAATCTGAACGGCGAATGGTGCATTAATGATGTTAATGCCGTGAGCAAAATTGCAGCAAATGCCGTTAATGGCATTGTTACCTTTACCCATGAGCAGAATATCAACGAACGCATTAAACTGATGAACAAATTCAGCCAGATCTTTCTGAATGGCCTGAGCAAATAA</sbol:elements>
    <sbol:encoding rdf:resource="http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html"/>
  </sbol:Sequence>
  <prov:Activity rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2sbol_Activity/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2sbol_Activity"/>
    <sbol:displayId>CelloUCF2sbol_Activity</sbol:displayId>
    <sbol:version>1</sbol:version>
    <dcterms:title>Cello UCF to SBOL conversion</dcterms:title>
    <dcterms:description>Conversion of the Cello UCF parts and metadata to SBOL 2 documents.</dcterms:description>
    <sbh:ownedBy rdf:resource="https://synbiohub.programmingbiology.org/user/myers"/>
    <sbh:topLevel rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2sbol_Activity/1"/>
    <prov:endedAtTime>2019-11-14T13:50:42.893-07:00</prov:endedAtTime>
    <prov:qualifiedAssociation>
      <prov:Association rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2sbol_Activity/association/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2sbol_Activity/association"/>
        <sbol:displayId>association</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:ownedBy rdf:resource="https://synbiohub.programmingbiology.org/user/myers"/>
        <sbh:topLevel rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2sbol_Activity/1"/>
        <prov:agent rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2SBOL/1"/>
      </prov:Association>
    </prov:qualifiedAssociation>
    <prov:qualifiedUsage>
      <prov:Usage rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2sbol_Activity/UCF_file/1">
        <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2sbol_Activity/UCF_file"/>
        <sbol:displayId>UCF_file</sbol:displayId>
        <sbol:version>1</sbol:version>
        <sbh:ownedBy rdf:resource="https://synbiohub.programmingbiology.org/user/myers"/>
        <sbh:topLevel rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2sbol_Activity/1"/>
        <prov:entity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/attachment_2a6ef492b29345cb92c0b0e738f30881/1"/>
      </prov:Usage>
    </prov:qualifiedUsage>
  </prov:Activity>
  <prov:Activity rdf:about="https://www.async.ece.utah.edu/Ben_SBOLDesignerActivity/1">
    <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_SBOLDesignerActivity"/>
    <sbol:displayId>Ben_SBOLDesignerActivity</sbol:displayId>
    <sbol:version>1</sbol:version>
    <dc:creator>Chris Myers</dc:creator>
    <prov:endedAtTime>2020-03-02T15:07:28.144-07:00</prov:endedAtTime>
    <prov:qualifiedAssociation>
      <prov:Association rdf:about="https://www.async.ece.utah.edu/Ben_SBOLDesignerActivity/Association/1">
        <sbol:persistentIdentity rdf:resource="https://www.async.ece.utah.edu/Ben_SBOLDesignerActivity/Association"/>
        <sbol:displayId>Association</sbol:displayId>
        <sbol:version>1</sbol:version>
        <prov:hadRole rdf:resource="http://sbols.org/v2#sequenceEditor"/>
        <prov:agent rdf:resource="https://synbiohub.org/public/SBOL_Software/SBOLDesigner/3.1"/>
      </prov:Association>
    </prov:qualifiedAssociation>
  </prov:Activity>
  <prov:Agent rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2SBOL/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2SBOL"/>
    <sbol:displayId>CelloUCF2SBOL</sbol:displayId>
    <sbol:version>1</sbol:version>
    <dcterms:title>Cello UCF to SBOL</dcterms:title>
    <dcterms:description>A script to convert Cello UCF parts and metadata to SBOL 2 documents.</dcterms:description>
    <sbh:ownedBy rdf:resource="https://synbiohub.programmingbiology.org/user/myers"/>
    <dc:creator>Prashant Vaidyanathan</dc:creator>
    <dc:creator>Chris J. Myers</dc:creator>
    <sbh:topLevel rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/CelloUCF2SBOL/1"/>
    <dc:source rdf:resource="https://github.com/MyersResearchGroup/UCF2SBOL"/>
  </prov:Agent>
  <prov:Agent rdf:about="https://synbiohub.org/public/SBOL_Software/SBOLDesigner/3.1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.org/public/SBOL_Software/SBOLDesigner"/>
    <sbol:displayId>SBOLDesigner</sbol:displayId>
    <sbol:version>3.1</sbol:version>
    <dcterms:title>SBOLDesigner CAD Tool</dcterms:title>
    <dcterms:description>SBOLDesigner is a simple, biologist-friendly CAD software tool for creating and manipulating the sequences of genetic constructs using the Synthetic Biology Open Language (SBOL) 2 data model. Throughout the design process, SBOL Visual symbols, a system of schematic glyphs, provide standardized visualizations of individual parts. SBOLDesigner completes a workflow for users of genetic design automation tools. It combines a simple user interface with the power of the SBOL standard and serves as a launchpad for more detailed designs involving simulations and experiments. Some new features in SBOLDesigner are the ability to add variant collections to combinatorial derivations, enumerating those collections, and the ability to view sequence features hierarchically. There are also some small changes to the way that preferences work in regards to saving a design with incomplete sequences.</dcterms:description>
    <dc:creator>Samuel Bridge</dc:creator>
    <dc:creator>Michael Zhang</dc:creator>
    <dc:creator>Chris Myers</dc:creator>
    <dc:creator>Michal Galdzicki</dc:creator>
    <dc:creator>Bryan Bartley</dc:creator>
    <dc:creator>Sean Sleight</dc:creator>
    <dc:creator>Evren Sirin</dc:creator>
    <dc:creator>John Gennari</dc:creator>
  </prov:Agent>
  <sbol:Attachment rdf:about="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/attachment_2a6ef492b29345cb92c0b0e738f30881/1">
    <sbol:persistentIdentity rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/attachment_2a6ef492b29345cb92c0b0e738f30881"/>
    <sbol:displayId>attachment_2a6ef492b29345cb92c0b0e738f30881</sbol:displayId>
    <sbol:version>1</sbol:version>
    <dcterms:title>Eco1C1G1T1-tandem-synbiohub.UCF.json</dcterms:title>
    <sbh:ownedBy rdf:resource="https://synbiohub.programmingbiology.org/user/myers"/>
    <sbh:topLevel rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/attachment_2a6ef492b29345cb92c0b0e738f30881/1"/>
    <sbol:source rdf:resource="https://synbiohub.programmingbiology.org/public/Eco1C1G1T1/attachment_2a6ef492b29345cb92c0b0e738f30881/1/download"/>
    <sbol:format rdf:resource="http://purl.org/NET/mediatypes/text/plain"/>
    <sbol:size>3576113</sbol:size>
    <sbol:hash>b9ff9e321edf990df5174a46bdd96907e1d3ed6d</sbol:hash>
  </sbol:Attachment>
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