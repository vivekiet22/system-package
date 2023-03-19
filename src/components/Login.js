import { Typography } from "@mui/material";
import React from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const addOn = [
  {
    value: "@heads.design",
  },
  {
    value: "@heads.production",
  },
];

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Typography sx={{ m: 2 }} variant="h4">
        Welcome to Systempackage
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
          
    <Box sx={{display:'flex',justifyContent:'flex-start'}}>

          <FormControl sx={{ ml: 2, my: 2 }} variant="filled">
            <FilledInput sx={{overflow:'auto'}} id="filled-adornment-amount" />
          </FormControl>
          <TextField
            sx={{ my: 2 }}
            id="standard-select-currency-native"
            select
            defaultValue="@heads.design"
            SelectProps={{
              native: true,
            }}
            >
            {addOn.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </TextField>
        
            </Box>

        <FormControl sx={{ m: 2 }} variant="filled">
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button sx={{ m: 2 }} variant="contained" href="/verify">
          Next
        </Button>

        <Button sx={{ m: 2 }} href="/">
          Forgot Your Password?
        </Button>
      </Box>
    </>
  );
};

export default Login;
