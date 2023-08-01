import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";

const Facilities = () => {
  const matches = useMediaQuery("(max-width:938px)");
  return (
    <>
      <Box
        sx={{
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #8A49AA, #D25CA4)",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            fontSize: { lg: "4rem", md: "3.5rem", sm: "2.5rem", xs: "2rem" },
            fontWeight: "700",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Bizda quyidagi imkoniyatlarga ega bo'lasiz
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#00c4cc",
          minHeight: matches ? "370px" : "420px",
        }}
      >
        <Container maxWidth={"lg"}>
          <Box
            sx={{
              p: {
                lg: "2rem 3rem",
                md: "2rem 3rem",
                sm: "1rem 2rem",
                xs: "1rem 2rem",
              },
              textAlign: "center",
              backgroundColor: "#fff",
              width: "80%",
              m: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "uppercase",
              fontSize: {
                lg: "1.7rem",
                md: "1.5rem",
                sm: "1.3rem",
                xs: "1.1rem",
              },
              fontWeight: "700",
              transform: "translateY(-50%)",
            }}
          >
            Tajribali ustozlardan bilim olish
          </Box>
          <Grid container spacing={3} display={"flex"} alignItems={"center"}>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img
                style={{
                  width: matches ? "150px" : "200px",
                  objectFit: "cover",
                }}
                src="./Img/teacher.png"
                alt="teacher"
              />
            </Grid>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Box
                sx={{
                  fontSize: {
                    lg: "2rem",
                    md: "1.8rem",
                    sm: "1.2rem",
                    xs: "1rem",
                  },
                  fontWeight: "400",
                  color: "#fff",
                }}
              >
                Biz o'qituvchi tanlashga alohida e'tibor beramiz. Bizda ta'lim
                beradigan o'qituvchilar bilim va metod jihatidan ancha tajribali
                hisoblanadi.
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "#ffcc00",
          minHeight: matches ? "370px" : "420px",
        }}
      >
        <Container maxWidth={"lg"}>
          <Box
            sx={{
              p: {
                lg: "2rem 3rem",
                md: "2rem 3rem",
                sm: "1rem 2rem",
                xs: "1rem 2rem",
              },
              textAlign: "center",
              backgroundColor: "#fff",
              width: "80%",
              m: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "uppercase",
              fontSize: {
                lg: "1.7rem",
                md: "1.5rem",
                sm: "1.3rem",
                xs: "1.1rem",
              },
              fontWeight: "700",
              transform: "translateY(-50%)",
            }}
          >
            Ingliz tili muloqot muhiti
          </Box>
          <Grid
            container
            spacing={3}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img
                style={{
                  width: matches ? "150px" : "200px",
                  objectFit: "cover",
                }}
                src="./Img/talking.png"
                alt="comunication"
              />
            </Grid>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Box
                sx={{
                  fontSize: {
                    lg: "2rem",
                    md: "1.8rem",
                    sm: "1.2rem",
                    xs: "1rem",
                  },
                  fontWeight: "400",
                  color: "#000",
                }}
              >
                O'quv markazimizdagi turli darajadagi o'quvchilar ingliz tilida
                muloqotga kirishadilar va bu holat o'quvchilarda ingliz tili
                muhitini his etishga yordam beradi.
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "#00c4cc",
          minHeight: matches ? "370px" : "420px",
        }}
      >
        <Container maxWidth={"lg"}>
          <Box
            sx={{
              p: {
                lg: "2rem 3rem",
                md: "2rem 3rem",
                sm: "1rem 2rem",
                xs: "1rem 2rem",
              },
              textAlign: "center",
              backgroundColor: "#fff",
              width: "80%",
              m: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "uppercase",
              fontSize: {
                lg: "1.7rem",
                md: "1.5rem",
                sm: "1.3rem",
                xs: "1.1rem",
              },
              fontWeight: "700",
              transform: "translateY(-50%)",
            }}
          >
            istalgan payt savollarga javob olish
          </Box>
          <Grid
            container
            spacing={3}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              xs={12}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img
                style={{
                  width: matches ? "150px" : "200px",
                  objectFit: "cover",
                }}
                src="./Img/support.png"
                alt="comunication"
              />
            </Grid>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Box
                sx={{
                  fontSize: {
                    lg: "2rem",
                    md: "1.8rem",
                    sm: "1.2rem",
                    xs: "1rem",
                  },
                  fontWeight: "400",
                  color: "#fff",
                }}
              >
                Biror savolingiz bormi? Biz bilan bog'lanishga tortinmang.
                Operatorlarimiz 24 soat sizning xizmatingizda.
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Facilities;
