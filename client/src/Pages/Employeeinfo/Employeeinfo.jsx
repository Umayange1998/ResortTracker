import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import BG from "../../assests/BG.jpg";
import "./table.css";


import { Box, Grid, Paper, TableContainer, TablePagination,  Typography, styled } from "@mui/material";
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
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
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
        
        <Grid item xs={0.5} sm={1.5} md={2.5} lg={3.5}>
      
        </Grid>
        <Grid
          item
          xs={11}
          sm={9}
          md={7}
          lg={5}
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
          
          <Box
            className="empinfo"
            sx={{
              maxHeight: {
                xs: "500px",
                md: "300px",
              },
              overflow: "auto",
              width: "100%",
            }}
          >
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
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
              overflow: "auto",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TablePagination
              sx={{ width: "100%" }}
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={listofUsers.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </Grid>
        <Grid item sx></Grid>
      </Grid>
    </MainDiv>
  );
}

export default Employeeinfo;
