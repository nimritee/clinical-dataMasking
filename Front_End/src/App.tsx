import React, { useState } from "react";
import "./App.css";
import { Box, Typography } from "@mui/material";
import TextAreaWithTitle from "./components/TextAreaWithTitle";
import { MaskButton } from "./components/MaskButton";
import UploadFilesSection from "./components/UploadFilesSection";
import axios from "axios";
var FormData = require('form-data');

const BASE_URL = "http:/127.0.0.1:5000/";

function App() {
  const [text, setText] = useState('')
  const [outputText, setOutputText] = useState('')


  async function getUser() {
    try {
      console.log(text)
      var data = new FormData();
      data.append(
        "text",
        text
      );

      const response = await axios.post(BASE_URL+"mask-text",data);
      console.log(response.data);
      setOutputText(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div className="App">
      {/* APP TITLE */}
      <Box mb={2}>
        <Typography variant="h4" className="app-title">
          Healthcare Data Masking
        </Typography>
      </Box>

      {/* TEXT AREAS SECTION */}
      <Box display="flex" justifyContent={"space-between"} my={3}>
        <TextAreaWithTitle title="Data to be Masked" text={text} setText={setText} disable={false} />
        <TextAreaWithTitle title="Masked Data" text={outputText} disable={true} />
      </Box>

      {/* UPLOAD FILES SECTION */}
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems="flex-start"
        mt={4}
        ml={"4%"} >

        <Typography variant="subtitle1">
          <b>Upload Files to be Masked</b>
        </Typography>
        <UploadFilesSection />
      </Box>

      <Box>
        {/* <MaskButton variant="contained" className="mask-btn" onClick={getUser} > */}
        <MaskButton variant="contained" className="mask-btn" onClick={getUser} >
          MASK DATA
        </MaskButton>
      </Box>
    </div>
  );
}

export default App;
