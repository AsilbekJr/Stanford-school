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
import Countdown from "react-countdown";

const Offer = () => {
  const countDownStyle = {
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // padding: "15px",
    fontSize: "1.4rem",
    border: "1px solid #f4f4f4",
    borderRadius: "5px",
    backgroundColor: "#c539b4",
    color: "#fff",
    marginRight: "1rem",
  };

  const theme = createTheme({
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
  const Completionist = () => (
    <span>Qabul tugadi. Keyngi qabul haqida e'lon beramiz!</span>
  );

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Box sx={{ marginTop: "3rem" }}>
          <Box sx={{ padding: "1rem 0" }}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "500",
                fontSize: "2rem",
              }}
            >
              Qabul yopilishi
            </Typography>
            <p style={{ margin: "1rem 0" }}>
              Bizga qo'shiling va ingliz tilini tez va sifatli o'rganing!
            </p>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              background: "#c539b4",
              padding: "3rem",
              borderRadius: "8px",
            }}
          >
            {" "}
            <Box sx={countDownStyle}>{days}</Box>{" "}
            <Box sx={countDownStyle}>{hours}</Box>{" "}
            <Box sx={countDownStyle}>{minutes}</Box>{" "}
            <Box sx={countDownStyle}>{seconds}</Box>
          </Box>
        </Box>
      );
    }
  };
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Grid
          container
          mt={"4rem"}
          // p={"0 2rem"}
          mb={4}
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            display={"flex"}
            flexDirection={"column"}
            sx={{ width: "50%", flexWrap: "wrap" }}
          >
            <Box
              margin={"0 0 3rem 0"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "1.9rem",
                  letterSpacing: "1px",
                }}
              >
                TAKLIFLARIMIZ
              </Typography>
              <button className="offer-btn">
                <Typography fontWeight={"600"}>BARCHA</Typography>
              </button>
            </Box>
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              justifyContent={"center"}
              gap={"2rem"}
            >
              <Paper className="offer-paper" sx={{ width: "260px" }}>
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
              <Paper className="offer-paper" sx={{ width: "260px" }}>
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
              <Paper className="offer-paper" sx={{ width: "260px" }}>
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
              <Paper className="offer-paper" sx={{ width: "260px" }}>
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
            </Box>
          </Grid>
          {/* Right side  banner */}
          <Grid item lg={6} md={6} sm={12} width={"40%"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-end"}
              sx={{ marginTop: "-150px" }}
            >
              <Box
                sx={{ width: { lg: "450px", md: "400px" } }}
                bgcolor={"#fff"}
                zIndex={"10"}
                borderRadius={"7px"}
                padding={"2rem 2.2rem"}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      color: "#393646",
                      fontSize: "1.7rem",
                      letterSpacing: "1px",
                    }}
                  >
                    Bizga qo'shiling
                  </Typography>
                  <img
                    style={{ width: "25px", objectFit: "contain" }}
                    src="./Img/pencil.png"
                    alt="pencil"
                  />
                </Box>
                <Box sx={{ "& > :not(style)": { m: 1 }, width: "100%" }}>
                  <Box className="inputItem">
                    <AccountCircleOutlined
                      sx={{
                        color: "action.active",
                        mr: 1,
                        my: 0.5,
                        fontSize: "1.4rem",
                      }}
                    />
                    <TextField
                      type="text"
                      id="input-with-sx"
                      label="Name"
                      variant="standard"
                      sx={{
                        width: "100%",
                      }}
                    />
                  </Box>
                  <Box className="inputItem">
                    <PhoneOutlined
                      sx={{
                        color: "action.active",
                        mr: 1,
                        my: 0.5,
                        fontSize: "1.4rem",
                      }}
                    />

                    <TextField
                      id="input-with-sx"
                      label="Phone"
                      variant="standard"
                      type="number"
                      sx={{
                        width: "100%",
                      }}
                    />
                  </Box>
                  <Box className="inputItem">
                    <MailOutline
                      sx={{
                        color: "action.active",
                        mr: 1,
                        my: 0.5,
                        fontSize: "1.4rem",
                      }}
                    />

                    <TextField
                      id="input-with-sx"
                      label="Email"
                      variant="standard"
                      sx={{
                        width: "100%",
                      }}
                      type="email"
                    />
                  </Box>
                </Box>
                <button className="submit-button"> YUBORISH </button>
                <Countdown date={Date.now() + 80000000} renderer={renderer} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Container>
  );
};

export default Offer;
