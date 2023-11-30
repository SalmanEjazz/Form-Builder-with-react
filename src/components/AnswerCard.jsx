import React from "react";

const AnswerCard = (props) => {
  // console.log(props.givenQuestion, props.answerOfQuestion );

  // alert(549494);

  return (
    <>
      <div className="card p-4 questionAnswerCard">
        <h6>{props.givenQuestion}</h6>
        {props.signature != null && (
          <>
            <div className="signature-area">
              <img src={props.signature} alt="" />
            </div>
          </>
        )}

        {props.answerOfQuestion == "yes" && (
          <h2
            className="answer"
            style={{
              padding: "5px 7px",
              fontSize: "14px",
              color: "white",
              background: "rgb(0, 175, 0)",
              maxWidth: "fit-content",
              borderRadius: "15px",
            }}
          >
            {props.answerOfQuestion}
          </h2>
        )}
        {props.answerOfQuestion == "no" && (
          <h2
            className="answer"
            style={{
              padding: "5px 7px",
              fontSize: "14px",
              color: "white",
              background: "red",
              maxWidth: "fit-content",
              borderRadius: "15px",
            }}
          >
            {props.answerOfQuestion}
          </h2>
        )}
        {props.answerOfQuestion != "no" && props.answerOfQuestion != "yes" && (
          <h2 className="answer">{props.answerOfQuestion}</h2>
        )}

        <span className="note">{props.noteOfQuestion}</span>
      </div>
    </>
  );
};

export default AnswerCard;
