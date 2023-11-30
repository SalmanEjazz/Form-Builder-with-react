import { AppBar, Button } from "@mui/material";
import React, {useEffect} from "react";
import ChecklistDropdown from "./ChecklistDropdown";
import AccordionApqpSteps from "./AccordionApqpSteps";
import ApqpStep1Field from "./ApqpStep1Field";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import ApqpStep1Field from "./ApqpStep1Field";
const ApqpPage = (props) => {





  return (
    <>
      <div className="page-step-section">
        <div className="content">
          <h3 className="page-title">{props.pageTitle}</h3>
          <h2 className="number-of-page">
            Page {props.pageNumber + 1} of {props.pageLength}
          </h2>
        </div>

        {/* <SignaturePadComp/> */}
        {/* <ChecklistDropdown />
        <br /> */}

{

(props.pageSections.length >0)&&(

props.pageSections.map((objPageSection, index) => {
  if (objPageSection.questions.length > 0) {
    
    return (
      <AccordionApqpSteps
        sectionQuestions={objPageSection.questions}
        sectionTitle={objPageSection.title}

        key={index}

      />
    );
  }
})
)



}
{
  
(props.pageQuestions.length > 0)&&(

  props.pageQuestions.map((objQuestionSection, index) => {
   
  


      return (
        
          <ApqpStep1Field
            label={objQuestionSection.title}
            type={objQuestionSection.data_type}
            id={objQuestionSection.id}
            key={index}
            questionId={objQuestionSection.id}
          />
   
      );
   
  })
  )
}



        {/* <ApqpStep1Field label="Signature" id="1" type="signature" />
        <ApqpStep1Field label="Project Name" id="1" type="yes-no" />
        <ApqpStep1Field label="Project Name" id="1" type="regular" />
        <ApqpStep1Field label="Location" id="1" type="map" />
        <ApqpStep1Field label="Conducted On" id="1" type="time" /> */}
      </div>
    </>
  );
};

export default ApqpPage;
