import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Offer from "./Components/Offer";
import { Close, Menu } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Tab,
  Tabs,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
const App = () => {
  const [value, setValue] = React.useState("one");
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 940,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      fontFamily: '"Montserrat", "sans-serif"',
      fontSize: 2,
    },
  });
  const matches = useMediaQuery("(max-width:939px)");
  const [click, setClick] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const CustomTabContainer = {
    lineHeight: "3rem",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#000",
    "&.Mui-selected": {
      color: "#000",
    },
  };
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "100%" }}>
        <Navbar />
        {!matches && scrollTop >= 100 && (
          <Box className="dropMenuContainer">
            <Box
              sx={{ background: "#FFE79B", height: "100%" }}
              className={click ? "dropMenu" : "dropdown"}
            >
              <Box sx={{ width: "100%" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example"
                  TabIndicatorProps={{
                    sx: {
                      height: "3.5px",
                      background: "#000",
                    },
                  }}
                >
                  <Tab
                    sx={CustomTabContainer}
                    value="one"
                    label="BOSH SAHIFA"
                  />
                  <Tab
                    sx={CustomTabContainer}
                    value="two"
                    label="QULAYLIKLAR"
                  />
                  <Tab
                    sx={CustomTabContainer}
                    value="three"
                    label="BOG'LANISH"
                  />
                </Tabs>
              </Box>
            </Box>

            <Box
              sx={{ background: "#FFE79B" }}
              display={"flex"}
              alignItems={"center"}
              height={"100%"}
            >
              <IconButton onClick={() => setClick(!click)} variant="outlined">
                {click ? (
                  <Close sx={{ fontSize: "50px", color: "#000" }} />
                ) : (
                  <Menu sx={{ fontSize: "50px", color: "#000" }} />
                )}
              </IconButton>
            </Box>
          </Box>
        )}
        <Banner />
        <Offer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
