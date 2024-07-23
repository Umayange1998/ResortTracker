import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import BG from"../../assests/BG.jpg"

import {
  Box,
  Grid,
  TablePagination,
  styled,
} from "@mui/material";



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

  const handleempinfoClick=()=>{

  };
  return (
    <MainDiv>

    <Grid >
      <Grid item 
       xs={.5}
       sm={1.5}
       md={2.5}
       lg={3.5}
       ></Grid>
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
          borderRadius: 2,
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
            }}>
          <table stickyHeader aria-label="sticky table">
            <thead>
            <tr>
               <th style={{ textAlign: "center" }} width={60}>No</th>
               <th style={{ textAlign: "left" }}width={200}>Name</th>

               <th width={100}>User Name</th>
               </tr>
            </thead>
            <tbody>
              {listofUsers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((value, key) => {
                  return (
                    <tr 
                    key={key}
                    onClick={() => handleempinfoClick(value)}>
                     <td> {value?.id} </td>
                     <td style={{ textAlign: "left" }}>{`${value?.title} ${value?.firstName} ${value?.lastName}`} </td>
                     <td> {value?.email} </td>

                    </tr>
                    // <TableRow
                    //   hover
                    //   role="checkbox"
                    //   tabIndex={-1}
                    //   key={value.code}
                    // >
                    //   {columns.map((column) => {
                    //     const value = row[column.id];
                    //     return (
                    //       <TableCell key={column.id} align={column.align}>
                    //         {column.format && typeof value === "number"
                    //           ? column.format(value)
                    //           : value}
                    //       </TableCell>
                    //     );
                    //   })}
                    // </TableRow>
                  );
                })}
            </tbody>
          </table>
        </Box>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={listofUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
      <Grid item sx></Grid>
    </Grid>
    </MainDiv>

  );
}

export default Employeeinfo;
