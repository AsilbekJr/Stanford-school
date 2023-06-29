import {
  Box,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Close, Menu } from "@mui/icons-material";
import "../styles/Banner.css"
const Banner = () => {
  const [value, setValue] = React.useState("one");
  const [click, setClick] = React.useState(false);
  const theme = createTheme({
    typography: {
      fontFamily: '"Montserrat", "sans-serif"',
      fontSize: "2rem",
    },
  });
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
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: "relative" }}>
        <Box
          width={"100%"}
          height="90vh"
          sx={{
            display: "flex",
            background: "#8A49AA",
            background: "linear-gradient(135deg, #8A49AA, #D25CA4)",
            width: "100%", 
            borderLeft: "25px solid #fff",
            borderRight: "25px solid #fff",
            padding: "0px 0 0 20px",
          }}
        >
          <Box
            width={"55%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              width={"75%"}
              color="#fff"
            >
              <Box>
                <img src="./Img/english.png" />
                <p
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "300",
                    marginBottom: "2rem",
                  }}
                >
                  Til markazimiz barcha yoshdagi va bilim darajalari uchun
                  ingliz va boshqa zamonaviy tillarda guruh va shaxsiy darslarni
                  taklif etadi.
                </p>
              </Box>
              <h1
                style={{
                  fontSize: "4.8rem",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                <span style={{ fontWeight: "400" }}>Ingliz tili</span>{" "}
                mahoratingizni oshiring
              </h1>
            </Box>
          </Box>

          <Box width={"45%"} height={'100%'}  display={"flex"} alignItems={"flex-end"} position="relative" className="hello">
            {/* Sticky menu */}
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
            <img
              src="./Img/banner.png"
              style={{ width: "100%", objectFit:"contain" }}
              alt="banner"
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Banner;
