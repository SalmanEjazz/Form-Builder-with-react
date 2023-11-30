import { IconButton } from "@mui/material";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import "../assets/css/dashboard.css";
const ApqpCreateTemplates = () => {
  const [pagesData, setPagesData] = useState([
    {
      pageName: "",
      pagePosition: "",
      pageDescription: "",
      pageSection: [
        {
          sectionName: "",
          sectionPosition: "",
          sectionDescription: "",
        },
      ],
    },
  ]);

  const addPageFun = () => {
    let newPage = {
      pageName: "",
      pagePosition: "",
      pageDescription: "",
      pageSection: [
        {
          sectionName: "",
          sectionPosition: "",
          sectionDescription: "",
        },
      ],
    };

    setPagesData([...pagesData, newPage]);
  };

  const addSectionFun = (index) => {
    const pagesDataCopy = [...pagesData];

    let newSection = {
      sectionName: "",
      sectionPosition: "",
      sectionDescription: "",
    };

    const targetPage = pagesDataCopy[index];
    targetPage.pageSection.push(newSection);
    setPagesData(pagesDataCopy);
  };

  const deletePageFun = (index) => {
    const pagesDataCopy = [...pagesData]; // Create a copy of the original array
    pagesDataCopy.splice(index, 1); // Remove the item at the specified index from the copy

    setPagesData(pagesDataCopy); // Update the state with the modified copy
  };

  const deleteSectionFun = (index) => {
    const pagesDataCopy = [...pagesData];
    pagesDataCopy.splice(index, 1);

    setPagesData(pagesDataCopy);
  };

  return (
    <>
      <div className="main-content dashboard-create-apqp-template">
        <div className="page-content">
          <div className="container-fluid">
            {" "}
            <div className="card p-4">
              <div className="row">
                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label for="templateName">Template Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="templateName"
                      placeholder="Enter name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                  <div class="form-group ">
                    <label for="selectManager">Select Manager</label>
                    <select class="form-control" id="selectManager">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div class="form-group">
                  <label for="templateDescription">Template Description</label>
                  <textarea
                    class="form-control"
                    id="templateDescription"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
            <h1>Pages</h1>
            {pagesData.map((page, index) => (
              <div className="card p-4 mt-4">
                <h4>Page {index + 1}:</h4>
                <div className="row">
                  <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label for="templateName">Page Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="pageName"
                        placeholder="Enter name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label for="pagePosition">Page Position</label>
                      <input
                        type="text"
                        class="form-control"
                        id="pagePosition"
                        placeholder="i.e: 1"
                        value={index + 1}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div class="form-group">
                    <label for="pageDescription">Page Description</label>
                    <textarea
                      class="form-control"
                      id="pageDescription"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <div className="page-btns">
                  <IconButton className="add-page-btn" onClick={addPageFun}>
                    <AddCircleIcon />
                  </IconButton>{" "}
                  {pagesData.length > 1 && (
                    <IconButton className="delete-page-btn">
                      <DeleteIcon onClick={() => deletePageFun(index)} />
                    </IconButton>
                  )}
                </div>
                {page.pageSection.map((section, sectionIndex) => (
                  <div className="section-area">
                    <h1 className="title">Section {sectionIndex + 1}: </h1>

                    <div className="row">
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label for="sectionName">Section Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="sectionName"
                            placeholder="Enter name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label for="sectionPosition">Section Position</label>
                          <input
                            type="text"
                            class="form-control"
                            id="sectionPosition"
                            placeholder="i.e: 1"
                            value={sectionIndex + 1}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div class="form-group">
                        <label for="sectionDescription">
                          Section Description
                        </label>
                        <textarea
                          class="form-control"
                          id="sectionDescription"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>

                    <div className="page-btns">
                      <IconButton
                        className="add-page-btn"
                        onClick={() => {
                          addSectionFun(sectionIndex);
                        }}
                      >
                        <AddCircleIcon />
                      </IconButton>{" "}
                      {page.pageSection.length > 1 && (

                        <IconButton className="delete-page-btn">
                          <DeleteIcon onClick={() => deletePageFun(index)} />
                        </IconButton>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ApqpCreateTemplates;
