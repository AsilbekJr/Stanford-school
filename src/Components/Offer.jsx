import {
  Box,
  Container,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
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
    backgroundColor: "#9336B4",
    color: "#fff",
    // marginRight: "1rem",
  };
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
        <Box>
          <Box
            sx={{
              padding: { lg: "1rem", md: "1rem", sm: "0", xs: "1rem" },
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "500",
                fontSize: {
                  lg: "1.9rem",
                  md: "1.7rem",
                  sm: "1.5rem",
                  xs: "1.3rem",
                },
              }}
            >
              Qabul yopilishi
            </Typography>
            <p style={{ margin: "1rem 0", color: "gray", fontWeight: "300" }}>
              Bizga qo'shiling va ingliz tilini tez va sifatli o'rganing!
            </p>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              background: "#9336B4",
              height: "140px",
              borderRadius: "8px",
              padding: "1rem",
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
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid container spacing={4} width={"100%"} sx={{ margin: "0" }}>
              <Box
                margin={"0 0 3rem 15px"}
                sx={{
                  width: { lg: "100%", md: "100%", sm: "550px", xs: "100%" },
                }}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: {
                      lg: "1.9rem",
                      md: "1.7rem",
                      sm: "1.5rem",
                      xs: "1rem",
                    },
                    letterSpacing: "1px",
                  }}
                >
                  TAKLIFLARIMIZ
                </Typography>
                <button className="offer-btn">
                  <Typography sx={{ fontSize: ".85rem" }} fontWeight={"600"}>
                    BARCHA
                  </Typography>
                </button>
              </Box>
              <Grid
                item
                lg={6}
                md={6}
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
                      <p>
                        Boshlang'ich daraja uchun eng yaxshi ingliz kursimiz.
                      </p>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
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
                lg={6}
                md={6}
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
                lg={6}
                md={6}
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
            </Grid>
          </Grid>
          {/* End  Main item 1 */}

          {/*Main item 2 */}

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              sx={{
                alignItems: {
                  lg: "center",
                  md: "flex-end",
                  sm: "center",
                  xs: "center",
                },
                marginX: { lg: "6rem", md: "3rem", sm: "0", xs: "0" },

                marginTop: {
                  lg: "-100px",
                  md: "-100px",
                  sm: "1rem",
                  xs: "1rem",
                },
              }}
            >
              {/* Main item container */}
              <Grid
                container
                spacing={5}
                sx={{
                  marginRight: "auto",
                  marginLeft: "auto",
                  width: "100%",
                  display: "flex",
                  justifyContent: {
                    lg: "center",
                    md: "flex-end",
                    sm: "flex-end",
                    xs: "flex-end",
                  },
                }}
                bgcolor={"#fff"}
                zIndex={"10"}
                borderRadius={"7px"}
                padding={{
                  lg: "2rem 1rem",
                  md: "1rem .5rem",
                  sm: "1rem 4rem",
                  xs: "1rem",
                }}
              >
                {/* Left */}
                <Grid
                  item
                  sx={{
                    margin: "0",
                    width: "100%",
                    padding: "0",
                    "&.MuiGrid-item": {
                      padding: "10px",
                    },
                  }}
                  lg={12}
                  md={12}
                  sm={6}
                  xs={12}
                >
                  {/* offer header */}
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "500",
                        textTransform: "uppercase",
                        color: "#393646",
                        fontSize: {
                          lg: "1.5rem",
                          md: "1.3rem",
                          sm: "1.1rem",
                          xs: "1rem",
                        },
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
                  {/* end offer header */}
                  <Box className="inputItem">
                    <AccountCircleOutlined
                      sx={{
                        color: "action.active",
                        mr: 1,
                        my: 0.5,
                        fontSize: {
                          lg: "1.4rem",
                          md: "1.3rem",
                          sm: "1.2rem",
                          xs: "1.2rem",
                        },
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
                        fontSize: {
                          lg: "1.4rem",
                          md: "1.3rem",
                          sm: "1.2rem",
                          xs: "1.2rem",
                        },
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
                        fontSize: {
                          lg: "1.4rem",
                          md: "1.3rem",
                          sm: "1.2rem",
                          xs: "1.2rem",
                        },
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
                  <button className="submit-button"> YUBORISH </button>
                </Grid>
                {/* Right */}
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={6}
                  xs={12}
                  sx={{
                    "&.MuiGrid-item": {
                      padding: "20px",
                    },
                  }}
                >
                  <Countdown date={Date.now() + 80000000} renderer={renderer} />
                </Grid>
              </Grid>
              {/* End Main item container */}
            </Box>
          </Grid>
          {/* End  Main item 2 */}
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default Offer;
