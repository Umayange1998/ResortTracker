import {
  Box,
  Button,
  Grid,
  Link,
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
import FlexContainer from "../../Component/FlexContainer/FlexContainer";
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

const LoginDiv = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "300px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "300px",
  },
  [theme.breakpoints.up("md")]: {
    width: "350px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "350px",
  },
  borderRadius: "20px",
  backgroundColor: "white",
  padding: "20px",
}));


function Login() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission refresh
    navigate("/employeeinfo"); // Navigate to the "/employeeinfo" page
  };
  return (
    <MainDiv>
      <LoginDiv>
      <Typography
          textAlign={"center"}
          color={"black"}
          fontSize={"22px"}
          fontWeight={600}
        >
          Login
        </Typography>
        <FlexContainer
          sx={{
            justifyContent: "center",
            mt: 2,
          }}
        >
          <img src={Logopng} alt="logo" width={"180px"} />
        </FlexContainer>
        <form onSubmit={handleLogin}>
        <Box mt={3}>
            <TextField
              label="Username"
              // error={!!errors.username}
              fullWidth
              variant="outlined"
              // {...register("username", { required: true })}
              size="small"
            />
          </Box>
          <Box mt={2}>
            <TextField
              label="Password"
              fullWidth
              variant="outlined"
              type="password"
              // error={!!errors.password}
              // {...register("password", { required: true })}
              size="small"
            />
            {/* <div
              style={{ marginTop: "16px", color: "red", textAlign: "center" }}
            >
              {errors.password || errors.username ? (
                <>
                  <p>*All Fields Must Be Filled!</p>
                </>
              ) : (
                <>{errorMsg}</>
              )}
            </div> */}
          </Box>
          <Button
            fullWidth
            sx={{ mt: 2 }}
            variant="contained"
            type="submit"
            color={"primary"}
          >
            Login
          </Button>
        </form>
        <FlexContainer
          sx={{
            my: 1,
            flexDirection: "column",
            gap: 1,
          }}
        >
        <Link
            onClick={() => {
              console.log("clicked");
              // setShowModal(true);
            }}
            style={{ cursor: 'pointer', fontFamily: 'Arial', fontSize: '16px' }}          >
            Forgot Password?
          </Link>
          </FlexContainer>
      </LoginDiv>
    </MainDiv>
  );
}

export default Login;
