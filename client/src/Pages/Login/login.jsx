import { Box, Button, Grid, styled } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setIsAuth } from "../../reducers/isAuthSlise";
import { useDispatch } from "react-redux";
import BG from "../../assests/BG.jpg";

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
          <Box>
            
          </Box>
        </Grid>
        <Grid item xs={2.4}></Grid>
        <Grid item xs={2.4}></Grid>
        <Grid item xs={2.4}
        >
          
          <Box
          className="login"
          sx={{
            backgroundColor: "white",
            borderRadius: 4.5,
            width: "100%",
            minHeight:{
              md: "450px",
            },
            // maxHeight: {
            //   xs: "500px",
            //   md: "300px",
            // },
            overflow: "auto",
            width: "100%",
          }}>
            

          </Box>
        </Grid>
        <Grid item sm={2.4}></Grid>
        <Grid item sm={2.4}></Grid>
      </Grid>
    </MainDiv>
  );
}

export default Login;
