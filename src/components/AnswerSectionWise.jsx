import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AnswerCard from "./AnswerCard";
// import ApqpStep1Field from "./ApqpStep1Field";

const AnswerSectionWise = (props) => {
  // console.log(props.sectionTitle);

  const [isExpanded, setIsExpanded] = useState(true); // Set this to true or false based on your condition

  const handleAccordionChange = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded); // Toggle the expanded state on click
  };

console.log(props.questionsArray)

  return (
    <>
      <Accordion
        className="ga-accordion answers-section-ga"
        expanded={isExpanded}
        onChange={handleAccordionChange}
      >
        <AccordionSummary
          className="ga-accordion-head"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.sectionName}</Typography>
        </AccordionSummary>
        <AccordionDetails className="ga-accordion-detail">
          {props.questionsArray.questions.map((myanswer, index) => {
          
          
         


            return (
                <AnswerCard
                      answerOfQuestion={
                        myanswer.submission_output.answer === null
                          ? ""
                          : myanswer.submission_output.answer
                      }
                      noteOfQuestion={
                        myanswer.submission_output.notes === null
                          ? ""
                          : myanswer.submission_output.notes
                      }
                      givenQuestion={
                        myanswer.title === null ? "" : myanswer.title
                      }
                      signature={myanswer.submission_output.signature}
                      key={index}
                    />
            );
          })}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AnswerSectionWise;
