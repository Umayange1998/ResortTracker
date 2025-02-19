import React, { useCallback } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import BG from "../../assests/BG.jpg";
import "./table.css";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { data } from "./Data";
import AddEmployeeModal from "../../Component/AddEmployeeModal/AddEmployeeModal";
import Employeedetailmodal from "../../Component/Employeedetailmodal/Employeedetailmodal"
import Editemployeemodal from "../../Component/Modal/EditEmplyeeModel/Editemployeemodal"
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import palette from "../../theme/palette";

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

function Employeeinfo() {
  const [listofUsers, setlistofUsers] = useState([]);
  const [Search, setSearch] = useState("");
  const [Openmodel, setOpenmodel] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(0);
  const [employeedetailmodelopen, setEmployeedetailmodelopen] = useState(false);
  const [editemployeemodalopen, setEditemployeemodalopen] = useState(true)

  console.log(Search);

  useEffect(() => {
    axios.get("http://localhost:3001/Users").then((response) => {
      setlistofUsers(response.data);
      console.log(response);
    });
  }, []);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleempinfoClick = () => {};
  const handleclick = useCallback(() => {
    setEmployeedetailmodelopen(true);
    console.log("clicked");
  });
  return (
    <MainDiv>
      <Grid container>
        <Grid item xs={0.5} sm={1.5} md={2.5} lg={4}></Grid>
        <Grid
          item
          xs={11}
          sm={9}
          md={7}
          lg={4}
          sx={{
            backgroundColor: "white",
            padding: {
              xs: 2,
              md: 3,
            },
            borderRadius: 4,
            width: "100%",
          }}
        >
          <Box position={"relative"}>
            <Typography
              fontWeight={"bold"}
              sx={{
                fontSize: {
                  xs: "18px",
                  md: "25px",
                },
              }}
              textAlign={"center"}
            >
              Employee
            </Typography>
            <IconButton
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                borderRadius: 2,
                fontSize: {
                  xs: "10px",
                  md: "12px",
                },

                px: {
                  xs: 0.9,
                  md: 1.5,
                },
                backgroundColor: palette.light.primary.main,
                "&:hover": {
                  backgroundColor: palette.light.primary.dark,
                },
                color: "white",
              }}
              variant="contained"
              onClick={() => setOpenmodel(true)}
            >
              <AddIcon />
              Add Employee
            </IconButton>
          </Box>
          <Box
            className="empinfo"
            sx={{
              maxHeight: {
                xs: "500px",
                md: "400px",
              },
              overflow: "auto",
              width: "100%",
            }}
          >
            <table sx={{ minWidth: 650 }} aria-label="simple table">
              <thead>
                <tr>
                  <th>NO</th>
                  <th align="right">Name</th>
                  <th align="right">User Name</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((item) => {
                    return Search.toLowerCase() === ""
                      ? item
                      : item.first_name.toLowerCase().includes(Search) ||
                          item.last_name.toLowerCase().includes(Search);
                  })
                  .map((item, index) => (
                    <tr
                      key={item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <td
                        component="th"
                        scope="row"
                        onClick={() => {
                          console.log("Raw");
                          console.log(index);
                          handleclick();

                          
                        }}
                      >
                        {item.id}
                      </td>
                      <td
                        align="right"
                        onClick={() => {
                          console.log("Raw");
                          console.log(index);
                          handleclick();

                        }}
                      >
                        {item.first_name + " " + item.last_name}
                      </td>
                      <td
                        align="right"
                        onClick={() => {
                          console.log("Raw");
                          console.log(index);
                          handleclick();
                          setSelectedRowIndex(index);
                        }}
                      >
                        {item.email}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </Box>
          <Box
            sx={{
              mt: 2,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TextField
              id="outlined-multiline-flexible"
              placeholder="Search Employee"
              multiline
              maxRows={2}
              size="small"
              sx={{
                width: "200px", // Adjust width as needed
                borderRadius: "12px", // Customize border radius
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px", // Apply border radius to the input field
                },
              }}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>
        <Grid item sx></Grid>
      </Grid>
      {Openmodel && (
        <AddEmployeeModal Openmodel={Openmodel} setOpenmodel={setOpenmodel} />
      )}
      {employeedetailmodelopen &&(<Employeedetailmodal Openmodel={employeedetailmodelopen} setOpenmodel= {setEmployeedetailmodelopen} />)}

      {editemployeemodalopen && (<Editemployeemodal  Openmodel={editemployeemodalopen} setOpenmodel= {setEditemployeemodalopen}/>)}
    </MainDiv>
  );
}

export default Employeeinfo;
