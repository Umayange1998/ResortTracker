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
  MenuItem,
  Modal,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback } from "react";
import Flexcontainer from "../FlexContainer/FlexContainer";
import BorderColorIcon from '@mui/icons-material/BorderColor';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 10,
  p: 3,
  borderRadius: 4,
  maxHeight: "100vh", // Set max height to 80% of the viewport height
};
const Employeedetailmodal = ({ Openmodel, setOpenmodel }) => {
  const handlecloseButton = useCallback(() => {
    setOpenmodel(false);
  }, [setOpenmodel]);

  const handlesaveButton = useCallback(() => {
    setOpenmodel(false);
  }, [setOpenmodel]);

  const [designation, setDesignation] = React.useState("default");

  const handleChange = (event) => {
    setDesignation(event.target.value);
  };
  const [state, setState] = React.useState({
    unit01: false,
    unit02: false,
    unit03: false,
  });

  const handleChangeSwitch = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Modal open={Openmodel} onClose={handlecloseButton}>
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
              Employee info
            </Typography>
            <Button startIcon={<BorderColorIcon />} onClick={handlecloseButton}>
            Edit
          </Button>
          </Flexcontainer>
        </Box>
        <Box sx={{ overflowY: "auto", maxHeight: "80vh", padding: "0 8px" }}>
          <Grid container spacing={2} justifyContent={"space-between"}>
            <Grid item xs={12}>
              <Typography>Name</Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {" "}
                <TextField
                  id="First_Name"
                  sx={{ mt: 0.5, width: "45%" }}
                  size="small"
                  value={""}
                  placeholder="First Name"
                  variant="standard"
                  InputProps={{
                    sx: { height: "35px", borderRadius: 3 }, // Controls the height of the input field
                  }}
                  // onChange={(e) => setDrugName(e.target.value)}
                />
                {/* { <Typography color="error">* Required</Typography>} */}
                <TextField
                  sx={{ mt: 0.5, width: "45%" }}
                  size="small"
                  value={""}
                  placeholder="Last Name"
                  variant="standard"
                  InputProps={{
                    sx: { height: "35px", borderRadius: 3 }, // Controls the height of the input field
                  }}
                  // onChange={(e) => setDrugName(e.target.value)}
                />
                {/* { <Typography color="error">* Required</Typography>} */}
              </Box>
            </Grid>

            <Grid item xs={5}>
              <Typography>ID </Typography>
              <TextField
                sx={{ mt: 0.5 }}
                size="small"
                fullWidth
                value={""}
                placeholder="XXXXXXXXXX "
                variant="standard"
                InputProps={{
                  sx: { height: "35px", borderRadius: 3 }, // Controls the height of the input field
                }}
                // onChange={(e) => setDrugName(e.target.value)}
              />
              {/* { <Typography color="error">* Required</Typography>} */}
            </Grid>
            <Grid item xs={5}>
              <Typography>Phone </Typography>
              <TextField
                sx={{ mt: 0.5 }}
                size="small"
                fullWidth
                value={""}
                placeholder="+XX XXXXXXXXX "
                variant="standard"
                InputProps={{
                  sx: { height: "35px", borderRadius: 3 }, // Controls the height of the input field
                }}
                // onChange={(e) => setDrugName(e.target.value)}
              />
              {/* { <Typography color="error">* Required</Typography>} */}
            </Grid>
            <Grid item xs={12}>
              <Typography>Address </Typography>
              <TextField
                sx={{ mt: 0.5 }}
                size="small"
                fullWidth
                value={""}
                placeholder="Lorem ipsum dolor sit amet, consectetur. "
                variant="standard"
                InputProps={{
                  sx: { height: "35px", borderRadius: 3 }, // Controls the height of the input field
                }}
                // onChange={(e) => setDrugName(e.target.value)}
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
                    onChange={handleChange}
                    sx={{
                      mt: 0.5,
                    }}
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
            <Grid item xs={6}>
              <FormControl component="fieldset" variant="standard">
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={state.unit01}
                        onChange={handleChangeSwitch}
                        name="unit01"
                      />
                    }
                    label="Unit 01"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={state.unit02}
                        onChange={handleChangeSwitch}
                        name="unit02"
                      />
                    }
                    label="Unit 02 "
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={state.unit03}
                        onChange={handleChangeSwitch}
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
                }}
              >
               
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlesaveButton}
                  sx={{
                    borderRadius: 3,
                  }}
                >
                  Exit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default Employeedetailmodal;
