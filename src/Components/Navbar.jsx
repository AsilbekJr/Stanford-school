import { Call, LocalActivity, Room } from "@mui/icons-material";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";

const Navbar = () => {
  const theme = createTheme({
    typography: {
      fontFamily: '"Montserrat", "sans-serif"',
      fontSize: "2rem",
    },
  });

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      padding={"0 25px"}
      alignItems={"center"}
      width={"100%"}
      height={"100px"}
    //   bgcolor={"#333"}
    >
      {/* left navbar */}
      <ThemeProvider theme={theme}>
        <Box display={'flex'} alignItems={"center"}>
        <img style={{width:"40px", margin:"0 1rem 0 0"}} src="./Img/world.png" alt="navLogo"/>
        <Typography
          variant="h1"
          fontWeight={"700"}
          fontSize={"1.8rem"}
          color={"#C539B4"}
          >
          {" "}
          STANFORD SCHOOL{" "}
        </Typography>
            </Box>
      </ThemeProvider>
      {/* right navbar */}
      <Box display={"flex"} sx={{ color: "#27374D",fontWeight:400, fontSize:"1.2rem"}} gap={"1rem"}>
        <Box display={"flex"} gap="1rem">
          <Room />
          <p>Buxoro viloyat, G'ijduvon tuman, G'alaba k. 29-uy</p>
        </Box>
        <Box display={"flex"}  gap="1rem">
          <Call  />
          <p>+99 7397157</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
