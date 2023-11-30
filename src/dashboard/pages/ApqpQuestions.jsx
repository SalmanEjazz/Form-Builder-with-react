import React from "react";

const ApqpQuestions = () => {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="card px-4 py-2">
            <div className="row">
              <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                <div className="form-group">
                  <label for="apqpQuestionName">Question Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apqpQuestionName"
                    placeholder="Enter name"
                  />
                </div>
                <div class="form-group mt-2">
                  <label for="questionType">Question Type </label>
                  <select class="form-control" id="questionType">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                <div class="form-group">
                  <label for="parentSection">Parent Section</label>
                  <select class="form-control" id="parentSection">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApqpQuestions;
