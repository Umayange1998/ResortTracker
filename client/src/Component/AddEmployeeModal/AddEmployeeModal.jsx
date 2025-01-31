import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import React, { useCallback } from "react";
import Flexcontainer from "../../Component/FlexContainer/FlexContainer";
import CloseIcon from "@mui/icons-material/Close";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 10,
  p: 3,
  borderRadius: 2,
};

const AddEmployeeModal = ({ Openmodel,setOpenmodel }) => {

  const handlecloseButton= useCallback(()=>{
    setOpenmodel(false)
  },[setOpenmodel])
  return (
    <Modal open={Openmodel} onClose={handlecloseButton}>
      <Box sx={style}>
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
    </Modal>
  );
};

export default AddEmployeeModal;
