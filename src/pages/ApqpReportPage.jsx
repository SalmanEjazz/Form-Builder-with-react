import React, { useState, useEffect } from "react";
import ApqpLogo from "../imgs/jnj-logo.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import AnswerCard from "../components/AnswerCard";
import AnswerSectionWise from "../components/AnswerSectionWise";

const ApqpReportPage = () => {
  const [answersData, setAnswersData] = useState([]);
  const token = localStorage.getItem("token");
  const { parameter } = useParams();

  useEffect(() => {
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

    axios
      .get(`http://127.0.0.1:8000/api/check_list/${parameter}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Handle successful response
        console.log(response.data.data.page);
        setAnswersData(response.data.data.page);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="container apqp-container report-page">
        <div
          className="col-lg-8 col-md-12 col-sm-12 col-xl-8"
          style={{ margin: "auto" }}
        >
          <div className="card p-4">
            <img src={ApqpLogo} alt="" className="report-logo" />
            <h2 className="head">Apqp Checklist</h2>
          </div>

          {answersData.map((page, index) => {
            // {console.log(page)}

            return (
              <>
                {page.questions.map((question, questionIndex) => {
                  // alert(1111)

                  return (
                    <AnswerCard
                      answerOfQuestion={
                        question.submission_output.answer === null
                          ? ""
                          : question.submission_output.answer
                      }
                      noteOfQuestion={
                        question.submission_output.notes === null
                          ? ""
                          : question.submission_output.notes
                      }
                      givenQuestion={
                        question.title === null ? "" : question.title
                      }
                      signature={question.submission_output.signature}
                      key={questionIndex}
                    />
                  );
                })}
              </>
            );
          })}

{answersData.map((page, index) => {
  // {console.log(page)}

  return (
    < >
      {page.section.map((mySection, sectionIndex) => {
        // alert(1111)

        return (

          
          <AnswerSectionWise


            questionsArray={mySection}
            sectionName={mySection.title}
           
            key={sectionIndex}
          />
        );
      })}
    </>
  );
})}
        </div>
      </div>
    </>
  );
};

export default ApqpReportPage;
