import {
  Box,
  Container,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import "../styles/Offer.css";
import TextField from "@mui/material/TextField";
import {
  AccountCircleOutlined,
  MailOutline,
  PhoneOutlined,
} from "@mui/icons-material";
import Header from "./Common/Header";

const Offer = () => {
  // const matches = useMediaQuery("(max-width:938px)");
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 700,
        md: 939,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      fontFamily: '"Montserrat", "sans-serif"',
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& label": {
              color: "#000",
            },
            "& label.Mui-focused": {
              color: "#c539b4",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#000",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#3E68A8",
              },
              "&:hover fieldset": {
                borderColor: "#c539b4",
                borderWidth: "0.15rem",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#c539b4",
              },
            },
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            textTransform: "initial",
            fontSize: "1rem",
          },
        },
      },
    },
  });

  // Renderer callback with condition

  return (
    <Box
      sx={{
        padding: { lg: "0 1.4rem", md: "0 .3rem", xs: "0 6px" },
      }}
    >
      <ThemeProvider theme={theme}>
        {/* main container grid */}
        <Grid
          container
          mt={"4rem"}
          spacing={2}
          // p={"0 2rem"}
          mb={4}
          width={"100%"}
          sx={{
            flexDirection: {
              lg: "row",
              md: "row",
              sm: "column-reverse",
              xs: "column-reverse",
            },
          }}
        >
          {/* Main item 1 */}

          <Grid container spacing={4} width={"100%"} sx={{ margin: "0" }}>
            <Box
              margin={"0 0 3rem 15px"}
              sx={{
                width: { lg: "100%", md: "100%", sm: "550px", xs: "100%" },
              }}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Header title={"TAKLIFLARIMIZ"} />
            </Box>
            <Grid
              item
              lg={4}
              md={4}
              sm={6}
              xs={12}
              sx={{ "&.MuiGrid-item": { paddingTop: "0px" } }}
            >
              <Paper className="offer-paper">
                <Box className="offer nchild1" position={"relative"}>
                  <Box className="offerTitle">
                    <h3>English for Beginners</h3>
                    <h3>5$</h3>
                    <p>Har bir dasr uchun</p>
                  </Box>
                  <Box className="modal">
                    <p>Boshlang'ich daraja uchun eng yaxshi ingliz kursimiz.</p>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={6}
              xs={12}
              sx={{ "&.MuiGrid-item": { paddingTop: "0px" } }}
            >
              <Paper className="offer-paper">
                <Box className="offer nchild2" position={"relative"}>
                  <Box className="offerTitle">
                    <h3>Online Learning</h3>
                    <h3>3$</h3>
                    <p>Har bir dasr uchun</p>
                  </Box>
                  <Box className="modal">
                    <p>Masofaviy darslarni xoxlovchilar uchun.</p>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={6}
              xs={12}
              sx={{ "&.MuiGrid-item": { paddingTop: "0px" } }}
            >
              <Paper className="offer-paper">
                <Box className="offer nchild3" position={"relative"}>
                  <Box className="offerTitle">
                    <h3>English for Business</h3>
                    <h3>10$</h3>
                    <p>Har bir dasr uchun</p>
                  </Box>
                  <Box className="modal">
                    <p>
                      Menejerlar uchun mo'ljallangan biznes ingliz tili kursi.
                    </p>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={6}
              xs={12}
              sx={{ "&.MuiGrid-item": { paddingTop: "0px" } }}
            >
              <Paper className="offer-paper">
                <Box className="offer nchild4" position={"relative"}>
                  <Box className="offerTitle">
                    <h3>English for Kids</h3>
                    <h3>2$</h3>
                    <p>Har bir dasr uchun</p>
                  </Box>
                  <Box className="modal">
                    <p>Bolalar uchun ingliz tilini oson o'rganish kursi.</p>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={6}
              xs={12}
              sx={{ "&.MuiGrid-item": { paddingTop: "0px" } }}
            >
              <Paper className="offer-paper">
                <Box className="offer nchild5" position={"relative"}>
                  <Box className="offerTitle">
                    <h3>English for tourism</h3>
                    <h3>8$</h3>
                    <p>Har bir dasr uchun</p>
                  </Box>
                  <Box className="modal">
                    <p>
                      Xorijga sayohat yoki ishlash uchun ketadiganlar uchun
                      tezkor kurslar.
                    </p>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={6}
              xs={12}
              sx={{ "&.MuiGrid-item": { paddingTop: "0px" } }}
            >
              <Paper className="offer-paper">
                <Box className="offer nchild6" position={"relative"}>
                  <Box className="offerTitle">
                    <h3>Individual Lessons</h3>
                    <h3>10$</h3>
                    <p>Har bir dasr uchun</p>
                  </Box>
                  <Box className="modal">
                    <p>
                      O'zlashtirishi qiyn bo'lgan kishilar uchun maxsus yakka
                      tartibdagi kurslar.
                    </p>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default Offer;
