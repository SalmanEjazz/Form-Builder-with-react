import React, { useEffect, useState } from "react";

import ApqpStep1Field from "../components/ApqpStep1Field";
import AccordionApqpSteps from "../components/AccordionApqpSteps";
import ChecklistDropdown from "../components/ChecklistDropdown";
import StepsHeader from "../components/StepsHeader";
// import SignaturePadComp from "../components/SignaturePadComp";
import DashboardSidebar from "../components/DashboardSidebar";
import axios from "axios";
import ApqpPage from "../components/ApqpPage";
import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link, useNavigate } from "react-router-dom";

const APQP = () => {
  const token = localStorage.getItem("token");
  const [pages, setPages] = useState([]);
  const [showPage, setShowPage] = useState({
    start: 0,
    end: 1,
  });
  const navigate = useNavigate();



  useEffect(() => {
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

    axios
      .get("http://127.0.0.1:8000/api/findtemplate/1", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        setPages(response.data.data.page);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const submitApqpChecklistData = async () => {
    const retrievedApqpArray = localStorage.getItem("questionArray");
    let retrievedDataJSON = JSON.parse(retrievedApqpArray);
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// alert(2);
     
    console.log(retrievedDataJSON);
   await axios
      .post("http://127.0.0.1:8000/api/tempate/save", {"questions":retrievedDataJSON}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        navigate(`/apqp-report/${1}`);
      })
      .catch((error) => {
        console.error(error);
      });



     


  };

  return (
    <>
      {/* <StepsHeader/> */}
      <DashboardSidebar />

      <div className="container apqp-container">
        <div
          className="col-lg-8 col-md-12 col-sm-12 col-xl-8"
          style={{ margin: "auto" }}
        >
          {pages.slice(showPage.start, showPage.end).map((pageObj, index) => (
            <>
              <ApqpPage
                key={index}
                pageNumber={showPage.start}
                pageTitle={pageObj.title}
                pageLength={pages.length}
                pageSections={pageObj.section}
                pageQuestions={pageObj.questions}
              />
              {scrollToTop()}
              {showPage.end < pages.length ? (
                <Button
                  variant="contained"
                  color="primary"
                  className="next-step-btn"
                  endIcon={<KeyboardArrowRightIcon />}
                  onClick={() => {
                    setShowPage((prevState) => ({
                      ...prevState,
                      start: ++prevState.start,
                      end: ++prevState.end,
                    }));
                  }}
                  key={index}
                >
                  Next Step
                </Button>
              ) : (
                
                  <Button
                    variant="contained"
                    color="primary"
                    className="next-step-btn"
                    endIcon={<KeyboardArrowRightIcon />}
                    key={index}
                    onClick={submitApqpChecklistData}
                  >
                    Submit
                  </Button>
                
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default APQP;
