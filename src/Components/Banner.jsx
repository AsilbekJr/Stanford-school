import {
  Box,
  IconButton,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Close, Menu } from "@mui/icons-material";
import "../styles/Banner.css";

const Banner = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [value, setValue] = React.useState("one");
  const [click, setClick] = React.useState(false);
  const theme = createTheme({
    typography: {
      fontFamily: '"Montserrat", "sans-serif"',
      fontSize: 2,
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

  const matches = useMediaQuery("(max-width:939px)");
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
      <Box sx={{ position: "relative", height: "100%" }}>
        <Box
          width={"100%"}
          sx={{
            display: "flex",
            background: "linear-gradient(135deg, #8A49AA, #D25CA4)",
            width: "100%",
            borderLeft: {
              lg: "25px solid #fff",
              md: "20px solide #fff",
              sm: "15px solid #fff",
              xs: "0px",
            },
            borderRight: {
              lg: "25px solid #fff",
              md: "20px solide #fff",
              sm: "15px solid #fff",
              xs: "0px",
            },
            padding: "0px 0 0 20px",
          }}
        >
          <Box
            sx={{
              width: { lg: "55%", md: "55%", sm: "95%", xs: "95%" },
              height: "auto",
            }}
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
              color="#fff"
              sx={{
                py: { lg: "4rem", md: "3rem", sm: "3rem", xs: "3rem" },
                width: { lg: "75%", md: "75%", sm: "100%", xs: "100%" },
              }}
            >
              <Box>
                <img src="./Img/english.png" />
                <Typography
                  sx={{
                    fontSize: {
                      lg: "1.3rem",
                      md: "1rem",
                      sm: "1rem",
                      xs: "1rem",
                    },
                    fontWeight: "300",
                    marginBottom: "2rem",
                  }}
                >
                  Til markazimiz barcha yoshdagi va bilim darajalari uchun
                  ingliz va boshqa zamonaviy tillarda guruh va shaxsiy darslarni
                  taklif etadi.
                </Typography>
              </Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    lg: "4.5rem",
                    md: "3rem",
                    sm: "2rem",
                    xs: "1.5rem",
                  },
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "900",
                }}
              >
                <span style={{ fontWeight: "400" }}>Ingliz tili</span>{" "}
                mahoratingizni oshiring
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{ width: { lg: "45%", md: "45%", sm: "0%", xs: "0%" } }}
            height={"100%"}
            display={"block"}
            alignItems={"flex-end"}
            // position="relative"
            // className="hello"
          >
            {/* Sticky menu */}
            {!matches && scrollTop <= 100 && (
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
                  <IconButton
                    onClick={() => setClick(!click)}
                    variant="outlined"
                  >
                    {click ? (
                      <Close sx={{ fontSize: "50px", color: "#000" }} />
                    ) : (
                      <Menu sx={{ fontSize: "50px", color: "#000" }} />
                    )}
                  </IconButton>
                </Box>
              </Box>
            )}
            <Box
              sx={{
                display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
                alignItems: "flex-end",
                justifyContent: "end",
                position: { sm: "absolute" },
                right: "25px",
                bottom: "0",
                width: { lg: "500px", md: "400px", sm: "350px" },
              }}
            >
              <img
                src="./Img/banner.png"
                style={{ width: "100%", objectFit: "contain" }}
                alt="banner"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Banner;
