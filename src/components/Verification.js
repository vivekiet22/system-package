import React from "react";
import { Typography } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

import { useEffect,useState,useCallback } from "react";
const Verification = () => {
  const [otp, setOtp] = React.useState("");
  const [timer, setTimer] = useState(10);
  const timeOutCallback = useCallback(
    () => setTimer((currTimer) => currTimer - 1),
    []
  );

  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer]);


  const resetTimer = function () {
    if (!timer) {
      setTimer(10);
    }
  };
  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  return (
    <>
      <Box>
        <Typography sx={{ m: 2 }} variant="h4">
          Enter the verification code to continue
        </Typography>

        <Typography sx={{ m: 2 }} variant="subtitle1">
          We sent to hellouser@heads.design. If you don’t see it, check your
          spam.
        </Typography>
        <MuiOtpInput
          sx={{ m: 2 }}
          length={6}
          autoFocus
          value={otp}
          onChange={handleChange}
        />



      </Box>
<Box sx={{display:'flex',justifyContent:'space-between'}}>
        <Button sx={{ m: 2 }} href="/">
          Back
        </Button>
        <Button sx={{float:'right'}} disabled={timer}  onClick={resetTimer}>Resend {timer?(timer<10?`00:0${timer}`:`00:${timer}`):""}</Button><span></span>

</Box>
    </>
  );
};

export default Verification;
