import {
  Box,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import Typewriter from "typewriter-effect";
import React, { useState, useEffect, useContext } from "react";
import "../styles/Banner.css";
import { getElementTopPosition } from "../context/elementTop";
import Dropdown from "./Common/Dropdown";

const Banner = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [value, setValue] = React.useState("one");
  const [viewerIsOpen, setViewerIsOpen] = useContext(getElementTopPosition);
  const theme = createTheme({
    typography: {
      fontFamily: '"Montserrat", "sans-serif"',
      fontSize: 2,
    },
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <Box sx={{ position: "relative" }}>
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
            height: { lg: "80vh", md: "75vh", sm: "55vh", xs: "50vh" },
          }}
        >
          <Box
            sx={{
              width: { lg: "55%", md: "55%", sm: "95%", xs: "95%" },
              height: "auto",
            }}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
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
                <Typewriter
                  options={{
                    strings: [
                      "bilimlarini puxta egallang",
                      "mahoratingizni oshiring",
                      "orqali dunyoni zapt eting :)",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    pauseFor: 3000,
                  }}
                />
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
            {!matches && !viewerIsOpen && scrollTop <= 100 && (
              <Dropdown handleChange={handleChange} value={value} />
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
                src="https://res.cloudinary.com/dkmi1dgqv/image/upload/v1691904732/Stanford%20english/banner_as8xbs.png"
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
