import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Modal,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import Flexcontainer from "../../Components/FlexContainer/FlexContainer";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 10,
  p: 3,
  borderRadius: 4,
  maxHeight: "100vh", // Set max height to 80% of the viewport height
};

const AddEmployeeModal = ({ Openmodel, setOpenmodel }) => {
  const [designation, setDesignation] = React.useState("default");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [units, setUnits] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const [state, setState] = React.useState({
    unit01: false,
    unit02: false,
    unit03: false,
  });

  const handlecloseButton = useCallback(() => {
    setOpenmodel(false);
  }, [setOpenmodel]);

  const handlesaveButton = useCallback(() => {
    const selectedUnits = Object.keys(state).filter((key) => state[key]);
    if (password !== conformPassword) {
      alert("Passwords do not match!");
      return;
    }
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      units: JSON.stringify(selectedUnits),
      phone,
      nic,
      role:
        designation === 1
          ? "Admin"
          : designation === 2
          ? "Supervisor"
          : "Operator",
      address,
    };
    axios
      .post("http://localhost:3001/users", newUser)
      .then((response) => {
        console.log("User Saved: ", response.data);
        alert("User added successfully!");
        setOpenmodel(false); // Close Modal
        // Optional: Clear form fields here if you want
      })
      .catch((error) => {
        console.error("Error saving user:", error);
        alert("Failed to save user");
      });
  }, [
    firstName,
    lastName,
    email,
    password,
    conformPassword,
    state,
    phone,
    nic,
    designation,
    address,
    setOpenmodel,
  ]);

  const handlerole = (event) => {
    setDesignation(event.target.value);
  };

  const handleResponsibilities = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Modal open={Openmodel} onClose={setOpenmodel}>
      <Box sx={style}>
        <Box
          sx={{
            position: "sticky",
            top: 0,
            backgroundColor: "background.paper",
            zIndex: 10,
            pb: 1,
            mb: 1,
          }}
        >
          <Flexcontainer
            sx={{
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography
              fontWeight={"bold"}
              sx={{
                fontSize: {
                  xs: "18px",
                },
              }}
              textAlign={"center"}
            >
              Add New Employee
            </Typography>
            <IconButton onClick={handlecloseButton}>
              <CloseIcon />
            </IconButton>
          </Flexcontainer>
        </Box>
        <Box sx={{ overflowY: "auto", maxHeight: "80vh", padding: "0 8px" }}>
          <Grid container spacing={2} justifyContent={"space-between"}>
            <Grid item xs={12}>
              <Typography> Name</Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <TextField
                  id="First_Name"
                  sx={{ width: "45%" }}
                  size="small"
                  value={firstName}
                  placeholder="First Name"
                  variant="standard"
                  InputProps={{
                    sx: { height: "35px", borderRadius: 3 }, // Controls the height of the input field
                  }}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {/* { <Typography color="error">* Required</Typography>} */}
                <TextField
                  sx={{ width: "45%" }}
                  size="small"
                  value={lastName}
                  placeholder="Last Name"
                  variant="standard"
                  InputProps={{
                    sx: { height: "35px", borderRadius: 3 }, // Controls the height of the input field
                  }}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {/* { <Typography color="error">* Required</Typography>} */}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography>User Name</Typography>
              <TextField
                size="small"
                fullWidth
                value={email}
                placeholder="User_Name@email.com"
                variant="standard"
                InputProps={{
                  sx: { height: "35px", borderRadius: 3 }, // Controls the height of the input field
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* { <Typography color="error">* Required</Typography>} */}
            </Grid>
            <Grid item xs={12}>
              <Typography>Password</Typography>
              <TextField
                size="small"
                fullWidth
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="12@#WdAa "
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: { height: "35px", borderRadius: 3 }, // Controls the height of the input field
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* { <Typography color="error">* Required</Typography>} */}
            </Grid>
            <Grid item xs={12}>
              <Typography>Conform Password</Typography>
              <TextField
  size="small"
  fullWidth
  value={conformPassword}
  placeholder="12@#WdAa"
  variant="standard"
  type={showConfirmPassword ? "text" : "password"} 
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          onClick={handleClickShowConfirmPassword}
          onMouseDown={(e) => e.preventDefault()}
          edge="end"
        >
          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
    sx: { height: "35px", borderRadius: 3 },
  }}
  onChange={(e) => setConformPassword(e.target.value)}
/>

              {/* { <Typography color="error">* Required</Typography>} */}
            </Grid>
            <Grid item xs={5}>
              <Typography>NIC </Typography>
              <TextField
                size="small"
                fullWidth
                value={nic}
                placeholder="XXXXXXXXXX "
                variant="standard"
                InputProps={{
                  sx: { height: "35px", borderRadius: 3 }, // Controls the height of the input field
                }}
                onChange={(e) => setNic(e.target.value)}
              />
              {/* { <Typography color="error">* Required</Typography>} */}
            </Grid>
            <Grid item xs={5}>
              <Typography>Phone </Typography>
              <TextField
                size="small"
                fullWidth
                value={phone}
                placeholder="+XX XXXXXXXXX "
                variant="standard"
                InputProps={{
                  sx: { height: "35px", borderRadius: 3 }, // Controls the height of the input field
                }}
                onChange={(e) => setPhone(e.target.value)}
              />
              {/* { <Typography color="error">* Required</Typography>} */}
            </Grid>
            <Grid item xs={12}>
              <Typography>Address </Typography>
              <TextField
                size="small"
                fullWidth
                value={address}
                placeholder="Lorem ipsum dolor sit amet, consectetur. "
                variant="standard"
                InputProps={{
                  sx: { height: "35px", borderRadius: 3 }, // Controls the height of the input field
                }}
                onChange={(e) => setAddress(e.target.value)}
              />
              {/* { <Typography color="error">* Required</Typography>} */}
            </Grid>
            <Grid item xs={12}>
              <Typography>Designation </Typography>
              <Box sx={{ width: "50%" }}>
                <FormControl sx={{ minWidth: 120 }} fullWidth>
                  <Select
                    size="small"
                    value={designation}
                    variant="standard"
                    label="Age"
                    onChange={handlerole}
                  >
                    <MenuItem value="default" disabled selected>
                      Select an option
                    </MenuItem>
                    <MenuItem value={1}>Admin</MenuItem>
                    <MenuItem value={2}>Supervisor</MenuItem>
                    <MenuItem value={3}>Operator</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ mb: 0 }}>
              <FormControl component="fieldset" variant="standard">
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={state.unit01}
                        onChange={handleResponsibilities}
                        name="unit01"
                      />
                    }
                    label="Unit 01"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={state.unit02}
                        onChange={handleResponsibilities}
                        name="unit02"
                      />
                    }
                    label="Unit 02 "
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={state.unit03}
                        onChange={handleResponsibilities}
                        name="unit03"
                      />
                    }
                    label="Unit 03 "
                  />
                </FormGroup>
                {/* <FormHelperText>Be careful</FormHelperText> */}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  mb: 2,
                }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ marginRight: "8px" }}
                  onClick={handlecloseButton}
                  sx={{
                    borderRadius: 3,
                  }}
                >
                  cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlesaveButton}
                  sx={{
                    borderRadius: 3,
                  }}
                >
                  Save
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddEmployeeModal;
