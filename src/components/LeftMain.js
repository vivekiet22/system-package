import React from "react";
import logo from "../assets/logo.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Login from "./Login";
import Verification from "./Verification";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const LeftMain = () => {
  return (
    <>
    <Box sx={{display:'flex',justifyContent:'space-between'}}>

      <img src={logo} alt="logo" />
      
      <Typography className='not-member-top' variant="subtitle1" gutterBottom>
        Not Member? <a href="/">Create Account</a>
      </Typography>
   
    </Box>
      

      <Box sx={{ pt: 8 }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/verify" element={<Verification />} />
          </Routes>
        </BrowserRouter>
      </Box>
      <Typography className='not-member-bottom' variant="subtitle1" gutterBottom>
        Not Member? <a href="/">Create Account</a>
      </Typography>
    </>
  );
};

export default LeftMain;
