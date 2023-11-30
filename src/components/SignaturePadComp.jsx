import React, { useEffect, useRef, useState } from "react";
import SignaturePad from "react-signature-canvas";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { actions } from "../store";

const SignaturePadComp = () => {
  const signatureRef = useRef();
  const [signaturePreview, setSignaturePreview] = useState("");
  const dispatch = useDispatch();

  const handleClear = () => {
    signatureRef.current.clear();
    setSignaturePreview("");
  };

  const handleTrim = () => {
    const trimmedSignature = signatureRef.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    setSignaturePreview(trimmedSignature);

  
      
   dispatch(actions.changeSignature());
 

  };


  useEffect(()=>{
    dispatch(actions.changeSignature(signaturePreview));

  },[signaturePreview]);


  return (
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
        {signaturePreview && (
          <div className="signature-preview">
            <img src={signaturePreview} alt="Signature Preview" />
          </div>
        )}
      </div>
    </>
  );
};

export default SignaturePadComp;
