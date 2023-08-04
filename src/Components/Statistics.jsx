import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "./Common/Header";
import { FormatListNumbered } from "@mui/icons-material";
import CountUp from "react-countup";

const Statistics = () => {
  return (
    <Box textAlign={"center"}>
      <Header title={"Statistika"} />
      <Box
        width={"100%"}
        minHeight={"300px"}
        p={"20px 20px 3rem 20px"}
        sx={{
          background:
            "linear-gradient(rgba(109,6,132,0.9128501400560224), rgba(109,6,132,0.9128501400560224)), url('https://static.vecteezy.com/system/resources/previews/020/277/209/original/learning-english-doodle-set-language-school-in-sketch-style-online-language-education-course-hand-drawn-illustration-isolated-on-white-background-vector.jpg') no-repeat center center/cover",
          color: "#fff",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box
                width={"100%"}
                height={"100%"}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"center"}
                sx={{
                  marginTop: { xm: "1rem", xs: "2rem" },
                  fontSize: { lg: "4rem", md: "3rem", sm: "3rem", xs: "3rem" },
                  fontWeight: "300",
                }}
              >
                <CountUp end={6} duration={5} />
                <Typography
                  sx={{
                    fontSize: {
                      lg: "2.5rem",
                      md: "2rem",
                      sm: "1.9rem",
                      xs: "1.8rem",
                    },
                  }}
                >
                  Kurslar
                </Typography>
                <Box
                  sx={{
                    width: "40%",
                    height: "5px",
                    marginTop: "2rem",
                    background: "#fff",
                  }}
                ></Box>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box
                width={"100%"}
                height={"100%"}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"center"}
                sx={{
                  marginTop: { xm: "1rem", xs: "2rem" },
                  fontSize: { lg: "4rem", md: "3rem", sm: "3rem", xs: "3rem" },
                  fontWeight: "300",
                }}
              >
                <CountUp end={150} duration={5} />
                <Typography
                  sx={{
                    fontSize: {
                      lg: "2.5rem",
                      md: "2rem",
                      sm: "1.9rem",
                      xs: "1.8rem",
                    },
                  }}
                >
                  O'quvchilar
                </Typography>
                <Box
                  sx={{
                    width: "40%",
                    height: "5px",
                    marginTop: "2rem",
                    background: "#fff",
                  }}
                ></Box>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box
                width={"100%"}
                height={"100%"}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"center"}
                sx={{
                  marginTop: { xm: "1rem", xs: "2rem" },
                  fontSize: { lg: "4rem", md: "3rem", sm: "3rem", xs: "3rem" },
                  fontWeight: "300",
                }}
              >
                <CountUp end={5} duration={5} />
                <Typography
                  sx={{
                    fontSize: {
                      lg: "2.5rem",
                      md: "2rem",
                      sm: "1.9rem",
                      xs: "1.8rem",
                    },
                  }}
                >
                  Ustozlar
                </Typography>
                <Box
                  sx={{
                    width: "40%",
                    height: "5px",
                    marginTop: "2rem",
                    background: "#fff",
                  }}
                ></Box>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box
                width={"100%"}
                height={"100%"}
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"center"}
                sx={{
                  marginTop: { xm: "1rem", xs: "2rem" },
                  fontSize: { lg: "4rem", md: "3rem", sm: "3rem", xs: "3rem" },
                  fontWeight: "300",
                }}
              >
                <CountUp end={14} duration={5} />
                <Typography
                  sx={{
                    fontSize: {
                      lg: "2.5rem",
                      md: "2rem",
                      sm: "1.9rem",
                      xs: "1.8rem",
                    },
                  }}
                >
                  Ochiq darslar
                </Typography>
                <Box
                  sx={{
                    width: "40%",
                    height: "5px",
                    marginTop: "2rem",
                    background: "#fff",
                  }}
                ></Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Statistics;
