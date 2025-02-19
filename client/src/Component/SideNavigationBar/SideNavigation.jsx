import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled, useMediaQuery, useTheme, Grid } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import employee from "../../assests/employeew.svg";
import units from "../../assests/units.svg";

// import CalImage from "../../assets/Cal.svg";
// import ConsultImage from "../../assets/Consult.svg";
// import HistoryImage from "../../assets/History.svg";
import ResortTrackerLogo from "../../assests/logo-no-background.svg";
// import prescription from "../../assets/prescription.svg";

function removePart(originalString, partToRemove) {
  var regex = new RegExp(partToRemove, "g");
  var modifiedString = originalString.replace(regex, "");
  return modifiedString;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#ffff" : "#1351BF",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "center",
  borderRadius: 0,
  cursor: "pointer",
  position: "relative",
  color: "white",
  fontSize: 10,
}));

const HoverBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: 40,
  height: 2,
  backgroundColor: "white",
  left: 0,
  [theme.breakpoints.up("lg")]: {
    position: "absolute",
    width: 3,
    height: 50,
    left: 2,
  },
}));

const SideNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation hook to get the current location
  const [activeItem, setActiveItem] = useState("Medica Logo");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [urlLocation, setUrlLocation] = useState("");
  useEffect(() => {
    // Use location.pathname to get the current URL path
    const currentUrl = location.pathname;

    const firstPath = currentUrl.split("/")[1];
    console.log("path", firstPath);
    setUrlLocation(firstPath);
    // const setUrl = removePart(location)
    // Your existing removePart function can be used here if needed
  }, [location.pathname]); // Add location.pathname to the dependency array

  const navigationItems = [
    { image: ResortTrackerLogo },
    { name: "Employee Info", image: employee, path: "/employeeinfo" },
    { name: "Units", image: units, path: "/Units" },
    // { name: "Reports", image: prescription, path: "ReportsV2" },
    // { name: "CPOE", image: CPOEImage, path: "CPOE" },
    // { name: "Calculators", image: CalImage, path: "Calculators" },
  ];

  const handleItemClick = (itemName, path) => {
    setActiveItem(itemName);
    navigate(path);
  };

  return (
    <Box
      sx={{
        position: isMobile ? "fixed" : "absolute",
        bottom: isMobile ? 0 : "auto",
        left: 0,
        width: isMobile ? "100%" : "5%",
        backgroundColor: "#1351BF",
        overflow: "hidden",
        zIndex: 500,
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        minHeight: { lg: "100%"},
      }}
    >
      <Grid
        container
        color="white"
        sx={{ pt: { xs: 1, lg: 5 }, gap: { xs: 1, lg: 5 } }}
      >
        {navigationItems.map((item) => (
          <Grid
            item
            xs={2.1}
            lg={12}
            sx={{
              display: {
                xs: item.name ? "flex" : "none",
                lg: "flex",
              },
            }}
            justifyContent={"center"}
            key={item.name}
          >
            <Box sx={{mt:2}} onClick={() => handleItemClick(item.name, item.path)}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={item.image} width={40} alt={item.name} />
                <Typography fontWeight={"bold"} fontSize={10}>
                  {item.name}
                </Typography>
                {urlLocation === item.path && <HoverBox />}
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SideNavigation;
