import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SideNavigation from "../SideNavigationBar/SideNavigation";

function Layout() {
  return (
    <Box
      sx={{
        backgroundColor: "#E2E3EA",
        pl: {
          xs: 0,
          lg: 10,
        },
        display: "flex",
        flexDirection: "row", 
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <SideNavigation />
      <Box
        sx={{
          height: "100vh",
          overflow: "auto",
          pt: 2,
          flexGrow: 1, 
          px: {
            xs: 2,
            lg: 4,
          },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
