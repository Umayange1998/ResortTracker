import {
  Box,
  Button,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setIsAuth } from "../../reducers/isAuthSlise";
import { useDispatch } from "react-redux";
import BG from "../../assests/BGnew.png";
import Logopng from "../../assests/logo-no-background.png";
// import { Input as BaseInput } from '@mui/base/Input';

const MainDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  minWidth: "100vw",
  backgroundImage: `url(${BG})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top-left",
});

function Login() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const handleLogin=()=>{
  //   dispatch(setIsAuth(true))
  //   navigate('/employeeinfo');  };
  return (
    <MainDiv>
      {/* <Button onClick={handleLogin}>Login</Button> */}
      <Grid container>
        <Grid item xs={12}>
          <Box></Box>
        </Grid>
        <Grid item xs={2.4}></Grid>
        <Grid item xs={2.4}></Grid>
        <Grid
          item
          xs={2.4}
          className="login"
          sx={{
            backgroundColor: "white",
            borderRadius: 4.5,
            width: "100%",
            minHeight: {
              md: "450px",
            },
            // maxHeight: {
            //   xs: "500px",
            //   md: "300px",
            // },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "70px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              pb: 1,
            }}
          >
            <Typography fontSize={25} fontWeight={"Bold"}>
              Login
            </Typography>
          </Box>
          <Box
            className="logo"
            sx={{
              backgroundImage: `url(${Logopng})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: "90px",
              display: "flex",
              justifyContent: "center",
              mb: 3,
            }}
          ></Box>
          <Box
            sx={{
              p: 1,
            }}
          >
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              InputProps={{
                sx: {
                  height: "30px", // Set the new height of the TextField
                  alignItems: "center", // Ensure the input text is centered
                },
              }}
              InputLabelProps={{
                sx: {
                  top: "-4px", // Adjust this value based on the height of the field
                  // transform: "translateY(10px)", // Shift the label to vertically center
                  fontSize: "12px", // Optionally, reduce the label font size for a better fit
                },
              }}
            />
          </Box>
          <Box>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Grid>
        <Grid item sm={2.4}></Grid>
        <Grid item sm={2.4}></Grid>
      </Grid>
    </MainDiv>
  );
}

export default Login;
