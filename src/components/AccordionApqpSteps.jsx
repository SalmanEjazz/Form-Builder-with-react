import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ApqpStep1Field from "./ApqpStep1Field";

const AccordionApqpSteps = (props) => {
  // console.log(props.sectionTitle);

  const [isExpanded, setIsExpanded] = useState(true); // Set this to true or false based on your condition

  const handleAccordionChange = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded); // Toggle the expanded state on click
  };

  return (
    <>
      <Accordion
        className="ga-accordion"
        expanded={isExpanded}
        onChange={handleAccordionChange}
      >
        <AccordionSummary
          className="ga-accordion-head"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.sectionTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails className="ga-accordion-detail">
          {props.sectionQuestions.map((question, index) => {
          
          
         


            return (
              <ApqpStep1Field
                label={question.title}
                type={question.data_type}
                id={question.id}
                key={index}
               
              />
            );
          })}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionApqpSteps;
