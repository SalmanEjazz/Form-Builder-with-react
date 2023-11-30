import React, { useEffect } from "react";
import { useState, useRef } from "react";
import SignaturePad from "react-signature-canvas";
import {
  Card,
  Drawer,
  IconButton,
  Box,
  Autocomplete,
  TextField,
  Button,
  Modal,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DrawIcon from "@mui/icons-material/Draw";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
// import SignaturePadComp from "./SignaturePadComp";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store";
const ApqpStep1Field = (props) => {
  const [questionData, setQuestionData] = useState({
    questionId: props.id,
    Answer: "",
    answerNote: "",
    signature: null,
    media: null,
    actions : null
  });
  const [openDrawer, setOpenDrawer] = useState(false);
  const [currentDate, setCurrentDate] = useState("2017-05-24T10:30");
  const [openMapModal, setOpenMapModal] = useState(false);
  const [dateTimeBlock, setDateTimeBlock] = useState("2017-05-24T10:30");
  const [yesNo, setYesNo] = useState(null);
  const [signatureImg, setSignatureImg] = useState(null);

  const signatureDrawImg = useSelector((state) => state.signatureImg);
  const [displaySignatureModal, setDisplaySignatureModal] = useState(false);
  const displayModalState = useSelector((state) => state.displayModalState);
  const dispatch = useDispatch();
  const signatureRef = useRef();
  const [signaturePreview, setSignaturePreview] = useState("");
  // const [questionNote, setQuestionNote] = useState("");

  const handleTrim = () => {
    const trimmedSignature = signatureRef.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    setSignaturePreview(trimmedSignature);
    setDisplaySignatureModal(false);
    setOpenMapModal(false);
  };

  const handleClear = () => {
    signatureRef.current.clear();
    setSignaturePreview("");
  };

  const [addNotes, setAddNotes] = useState({
    saveBtn: true,
    displayNotes: false,
    displayDelete: false,
    noteText: "",
    callBtnText: "Add",
  });

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);

    const currentDateTemp = new Date();
    const year = currentDateTemp.getFullYear();
    const month = String(currentDateTemp.getMonth() + 1).padStart(2, "0");
    const day = String(currentDateTemp.getDate()).padStart(2, "0");
    const hours = String(currentDateTemp.getHours()).padStart(2, "0");
    const minutes = String(currentDateTemp.getMinutes()).padStart(2, "0");
    setCurrentDate(`${year}-${month}-${day}T${hours}:${minutes}`);

    console.log(currentDate);
  };

  const mapModalHandle = () => {
    setOpenMapModal(!displayModalState);
  };

  const samples = ["ali", "ashar", "ntr", "zubair"];

  if (props.type === "time") {
    useEffect(() => {
      const currentDateTemp = new Date();
      const year = currentDateTemp.getFullYear();
      const month = String(currentDateTemp.getMonth() + 1).padStart(2, "0");
      const day = String(currentDateTemp.getDate()).padStart(2, "0");
      const hours = String(currentDateTemp.getHours()).padStart(2, "0");
      const minutes = String(currentDateTemp.getMinutes()).padStart(2, "0");
      const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

      setDateTimeBlock(formattedDateTime);
      setQuestionData((prevData) => ({
        ...prevData,
        Answer: formattedDateTime,
      }));
      console.log("test:" + formattedDateTime);
    }, []);
  }

  const handleFileInputChange = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileData = e.target.result; // The file data

      // Do something with the file data
      console.log(fileData);
      setSignatureImg(fileData);
      setOpenMapModal(false);
    };

    reader.readAsDataURL(file); // Read the file as data URL
  };
  var questionArray = JSON.parse(localStorage.getItem("questionArray")) || {};

  questionArray[props.id] = questionData;

  // Save the updated questionArray back to local storage.
  localStorage.setItem("questionArray", JSON.stringify(questionArray));

  function onChangeAnswerHandle(e) {
    setQuestionData((prevData) => ({
      ...prevData,
      Answer: e.target.value,
    }));
    const retrievedDataJSON = localStorage.getItem("questionArray");
    let retrievedDataArray = JSON.parse(retrievedDataJSON);
    retrievedDataArray[props.id] = questionData;
    const updatedDataJSON = JSON.stringify(retrievedDataArray);

    localStorage.setItem("questionArray", updatedDataJSON);
  }

  function onChangeYesNoHandle(answer) {
    setQuestionData((prevData) => ({
      ...prevData,
      Answer: answer,
    }));
    const retrievedDataJSON = localStorage.getItem("questionArray");
    let retrievedDataArray = JSON.parse(retrievedDataJSON);
    retrievedDataArray[props.id] = questionData;
    const updatedDataJSON = JSON.stringify(retrievedDataArray);

    localStorage.setItem("questionArray", updatedDataJSON);
  }

  useEffect(() => {
    if (yesNo === "yes") {
      onChangeYesNoHandle("yes");
    } else if (yesNo === "no") {
      onChangeYesNoHandle("no");
    }
  }, [yesNo]);

  function addNoteFun() {
    setQuestionData((prevData) => ({
      ...prevData,
      answerNote: addNotes.noteText,
    }));
    const retrievedDataJSON = localStorage.getItem("questionArray");
    let retrievedDataArray = JSON.parse(retrievedDataJSON);
    retrievedDataArray[props.id] = questionData;
    const updatedDataJSON = JSON.stringify(retrievedDataArray);

    localStorage.setItem("questionArray", updatedDataJSON);
  }

  function cancleNoteFun() {
    setQuestionData((prevData) => ({
      ...prevData,
      answerNote: "",
    }));
    const retrievedDataJSON = localStorage.getItem("questionArray");
    let retrievedDataArray = JSON.parse(retrievedDataJSON);
    retrievedDataArray[props.id] = questionData;
    const updatedDataJSON = JSON.stringify(retrievedDataArray);

    localStorage.setItem("questionArray", updatedDataJSON);
  }

  useEffect(() => {
    // alert(64649);

    if (signatureImg != null) {
      setQuestionData((prevData) => ({
        ...prevData,
        signature: signatureImg,
      }));
    } else if (signaturePreview != null) {
      setQuestionData((prevData) => ({
        ...prevData,
        signature: signaturePreview,
      }));
    }

    const retrievedDataJSON = localStorage.getItem("questionArray");
    let retrievedDataArray = JSON.parse(retrievedDataJSON);
    retrievedDataArray[props.id] = questionData;
    const updatedDataJSON = JSON.stringify(retrievedDataArray);

    localStorage.setItem("questionArray", updatedDataJSON);
  }, [signaturePreview, signatureImg]);

  function deleteSignature() {
    setQuestionData((prevData) => ({
      ...prevData,
      signature: null,
    }));
    const retrievedDataJSON = localStorage.getItem("questionArray");
    let retrievedDataArray = JSON.parse(retrievedDataJSON);
    retrievedDataArray[props.id] = questionData;
    const updatedDataJSON = JSON.stringify(retrievedDataArray);

    localStorage.setItem("questionArray", updatedDataJSON);
  }

  function addMediaFun() {
    setQuestionData((prevData) => ({
      ...prevData,
      signature: null,
    }));
    const retrievedDataJSON = localStorage.getItem("questionArray");
    let retrievedDataArray = JSON.parse(retrievedDataJSON);
    retrievedDataArray[props.id] = questionData;
    const updatedDataJSON = JSON.stringify(retrievedDataArray);

    localStorage.setItem("questionArray", updatedDataJSON);
  }





  return (
    <>
      <Card className="ga-card-apqp">
        {props.type === "regular" && (
          <div className="form-group">
            <label for={props.id}>{props.label}</label>
            <textarea
              className="form-control"
              id={props.id}
              rows="3"
              onChange={(e) => {
                onChangeAnswerHandle(e);
              }}
            ></textarea>
          </div>
        )}

        {(props.type === "map" || props.type === "signature") && (
          <div className="form-group">
            <label for={props.id}>{props.label}</label>

            <Box className="map signature">
              {props.type === "map" && (
                <>
                  <textarea
                    className="form-control"
                    id={props.id}
                    rows="1"
                    onChange={(e) => {
                      onChangeAnswerHandle(e);
                    }}
                  ></textarea>

                  <Button
                    variant="contained"
                    startIcon={<LocationOnIcon />}
                    onClick={() => {
                      setOpenMapModal(true);
                    }}
                  >
                    Map
                  </Button>
                </>
              )}
              {props.type === "signature" && (
                <>
                  <textarea
                    className="form-control"
                    id={props.id}
                    rows="1"
                    onChange={(e) => {
                      onChangeAnswerHandle(e);
                    }}
                  ></textarea>

                  <Button
                    variant="contained"
                    startIcon={<DrawIcon />}
                    onClick={() => {
                      setOpenMapModal(true);
                    }}
                  >
                    Signature
                  </Button>
                </>
              )}
            </Box>

            {(signatureImg || signaturePreview) && (
              <Box className="signature-img">
                <img
                  src={signatureImg ? signatureImg : signaturePreview}
                  alt=""
                />

                <IconButton>
                  <DeleteIcon
                    className="icon"
                    onClick={() => {
                      setSignatureImg(null);
                      setSignaturePreview(null);
                      deleteSignature();
                    }}
                  />
                </IconButton>
              </Box>
            )}
          </div>
        )}

        {props.type === "time" && (
          <div className="ga-time-field">
            <TextField
              id="datetime-local"
              label={props.label}
              type="datetime-local"
              value={dateTimeBlock}
              className="date-time-picker"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                // alert(e.target.value);
                onChangeAnswerHandle(e);
              }}
            />
          </div>
        )}

        {props.type === "yes-no" && (
          <div className="ga-yes-no-field">
            <label for={props.id}>{props.label}</label>
            <div className="ga-yes-no-btns">
              <Button
                className={yesNo === "yes" && "yes"}
                variant="outlined"
                id={props.id}
                onClick={() => {
                  setYesNo("yes");
                }}
              >
                Yes
              </Button>
              <Button
                className={yesNo === "no" && "no"}
                variant="outlined"
                onClick={() => {
                  setYesNo("no");
                }}
              >
                No
              </Button>
            </div>
          </div>
        )}

        {addNotes.noteText.length > 0 && !addNotes.displayNotes && (
          <div className="note-text">
            <p>{addNotes.noteText}</p>
          </div>
        )}
        {addNotes.displayNotes && (
          <div className="form-group add-notes">
            <textarea
              className="form-control "
              id="addNotes"
              rows="1"
              placeholder="add your notes"
              onChange={(e) => {
                e.target.value.length > 0
                  ? setAddNotes((prevObj) => ({
                      ...prevObj,
                      noteText: e.target.value,
                      saveBtn: false,
                    }))
                  : setAddNotes((prevObj) => ({
                      ...prevObj,
                      noteText: "",
                      saveBtn: true,
                      callBtnText: "Add",
                    }));
              }}
            >
              {addNotes.noteText}
            </textarea>

            <Box className="btns-box">
              <Box>
                <Button
                  variant="contained"
                  className="save-btn"
                  disabled={addNotes.saveBtn}
                  onClick={() => {
                    setAddNotes((prevNotes) => ({
                      ...prevNotes,
                      displayDelete: true,
                      displayNotes: false,
                      callBtnText: "Edit",
                    }));

                    addNoteFun();
                  }}
                >
                  Save
                </Button>
                <Button
                  variant="outlined"
                  className="cancel-btn"
                  onClick={() => {
                    setAddNotes((prevNotes) => ({
                      ...prevNotes,
                      displayNotes: false,
                      noteText: "",
                    }));
                  }}
                >
                  Cancel
                </Button>
              </Box>

              {addNotes.noteText.length > 0 && (
                <IconButton
                  className="delete-btn"
                  onClick={() => {
                    setAddNotes((prevNotes) => ({
                      ...prevNotes,
                      noteText: "",
                      displayNotes: false,
                    }));
                    cancleNoteFun();
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </Box>
          </div>
        )}

        <div className="icons-with-actions">
          <p
            className="icon"
            onClick={() => {
              setAddNotes((prevObj) => ({
                ...prevObj,
                displayNotes: true,
              }));
            }}
          >
            {" "}
            <span class="material-symbols-outlined">list_alt_add</span>{" "}
            {addNotes.callBtnText} Note
          </p>
          <label for={"media" + props.id} className="icon">
            {" "}
            <span class="material-symbols-outlined">perm_media</span> Add Media
            <input type="file" className="d-none" id={"media" + props.id} />
          </label>
          <p className="icon" onClick={toggleDrawer}>
            {" "}
            <span class="material-symbols-outlined"> add_circle </span> Create
            Action
          </p>
        </div>
      </Card>

      <Drawer
        className="apqp-drawer"
        anchor="left"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
      >
        <div className="">
          <Box className="close-icon-box">
            <IconButton
              className="close-icon-btn"
              onClick={() => toggleDrawer(false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box className="fields">
            <div className="form-group ga-field">
              <label for="titleAction">Action Title</label>
              <input className="form-control" id="titleAction" />
            </div>
            <div className="form-group ga-field">
              <label for="actionDescription">Action Description</label>
              <textarea
                className="form-control"
                id="actionDescription"
                rows="3"
              ></textarea>
            </div>

            <div className=" ga-field">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={samples}
                className="auto-complete"
                renderInput={(params) => <TextField {...params} label="Site" />}
              />
            </div>

            <div className=" ga-field">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={samples}
                className="auto-complete"
                renderInput={(params) => (
                  <TextField {...params} label="Assignee" />
                )}
              />
            </div>

            <div className=" ga-field">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={samples}
                className="auto-complete"
                renderInput={(params) => (
                  <TextField {...params} label="Label" />
                )}
              />
            </div>

            <div className=" ga-field">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={samples}
                className="auto-complete"
                renderInput={(params) => (
                  <TextField {...params} label="Asset" />
                )}
              />
            </div>

            <div className=" ga-field">
              <TextField
                id="datetime-local"
                label="Due Date"
                type="datetime-local"
                defaultValue={currentDate}
                className="date-time-picker"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </Box>
        </div>
      </Drawer>

      {(props.type === "map" || props.type === "signature") && (
        <Modal
          className="ga-modal"
          open={openMapModal}
          onClose={mapModalHandle}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            className={
              props.type === "map" ? "modal-box-map" : "modal-box-signature"
            }
          >
            {props.type === "map" && (
              <>
                <Box className="modal-upper">
                  <Typography
                    id="modal-modal-title"
                    variant="h5"
                    component="h2"
                    className="modal-head"
                  >
                    Select Location
                  </Typography>

                  <IconButton
                    className="close-icon-btn"
                    onClick={() => setOpenMapModal(false)}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Box className="map-fields">
                  <div className="" style={{ width: "85%" }}>
                    <div className="form-group">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <Button variant="contained">Search</Button>
                  <Button variant="outlined" startIcon={<LocationOnIcon />}>
                    Location
                  </Button>
                </Box>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Map will be here...
                </Typography>
              </>
            )}
            {props.type === "signature" && (
              <>
                <Box className="modal-upper">
                  <Typography
                    id="modal-modal-title"
                    variant="h5"
                    component="h2"
                    className="modal-head"
                  >
                    {displaySignatureModal ? "Draw" : "Add"} Signature
                  </Typography>

                  <IconButton
                    className="close-icon-btn"
                    onClick={() => {
                      setOpenMapModal(false);
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>

                {!displaySignatureModal ? (
                  <>
                    <label for={"sign-image" + props.id}>
                      <CloudUploadOutlinedIcon className="icon" /> Upload
                      Signature
                      <input
                        className="d-none"
                        type="file"
                        id={"sign-image" + props.id}
                        onChange={handleFileInputChange}
                      />
                    </label>
                    <label
                      for=""
                      onClick={() => {
                        setDisplaySignatureModal(true);
                      }}
                    >
                      <DrawIcon className="icon" /> Draw Signature
                    </label>
                  </>
                ) : (
                  <>
                    <div className="signature-section">
                      <div className="signature-pad">
                        <SignaturePad canvasProps={{}} ref={signatureRef} />
                      </div>

                      <div className="signature-btns">
                        <Button variant="contained" onClick={handleTrim}>
                          Save
                        </Button>
                        <Button variant="outlined" onClick={handleClear}>
                          Clear{" "}
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </Box>
        </Modal>
      )}
    </>
  );
};

export default ApqpStep1Field;
