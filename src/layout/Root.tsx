import { Box, Grid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Siderbar";

export default function Root() {
  return (
    <Grid
      h="100vh"
      bg="background.500"
      overflow="hidden"
      color="white"
      gridTemplateColumns="0.9fr 2fr 1.5fr"
    >
      <Navbar />
      <Box borderX="1px solid" borderColor="whiteAlpha.200" p={4}>
        <Outlet />
      </Box>
      <Sidebar />
    </Grid>
  );
}
