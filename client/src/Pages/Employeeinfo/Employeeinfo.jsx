import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import BG from "../../assests/BG.jpg";
import "./table.css";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Divider,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  OutlinedInput,
  Paper,
  TableContainer,
  TablePagination,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import palette from "../../theme/palette";
function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

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
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  const [listofUsers, setlistofUsers] = useState([]);

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
              onClick={() => {
                // navigate("/");
              }}
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
                  <th>Dessert (100g serving)</th>
                  <th align="right">Calories</th>
                  <th align="right">Fat&nbsp;(g)</th>
                  <th align="right">Carbs&nbsp;(g)</th>
                  <th align="right">Protein&nbsp;(g)</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <td component="th" scope="row">
                      {row.name}
                    </td>
                    <td align="right">{row.calories}</td>
                    <td align="right">{row.fat}</td>
                    <td align="right">{row.carbs}</td>
                    <td align="right">{row.protein}</td>
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
    </MainDiv>
  );
}

export default Employeeinfo;
