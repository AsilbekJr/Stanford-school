import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";

const Facilities = () => {
  const matches = useMediaQuery("(max-width:938px)");
  return (
    <>
      <Box
        sx={{
          height: { lg: "500px", md: "480px", sm: "400px", xs: "350px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #8A49AA, #D25CA4)",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            fontSize: { lg: "4rem", md: "3.5rem", sm: "2.5rem", xs: "1.5rem" },
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
          minHeight: matches ? "350px" : "420px",
        }}
      >
        <Container maxWidth={"lg"}>
          <Box
            sx={{
              p: {
                lg: "2rem 3rem",
                md: "2rem 3rem",
                sm: "1rem 2rem",
                xs: "1rem 1rem",
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
                sm: "1.1rem",
                xs: ".8rem",
              },
              fontWeight: { lg: "700", md: "600", sm: "600", xs: "600" },
              transform: "translateY(-50%)",
              borderRadius: "5px",
              boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
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
              <Box
                sx={{
                  width: { lg: "200px", md: "200px", sm: "150px", xs: "110px" },
                  padding: { lg: "1rem", md: "1rem", sm: ".8rem", xs: ".7rem" },
                  borderRadius: "7px",

                  border: {
                    lg: "5px solid #fff",
                    md: "5px solid #fff",
                    sm: "3px solid #fff",
                    xs: "3px solid #fff",
                  },
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src="./Img/teacher.png"
                  alt="teacher"
                />
              </Box>
            </Grid>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Box
                sx={{
                  fontSize: {
                    lg: "2rem",
                    md: "1.8rem",
                    sm: "1.2rem",
                    xs: ".9rem",
                  },
                  fontWeight: { lg: "400", ms: "400", sm: "600", xs: "600" },
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
          minHeight: matches ? "350px" : "420px",
        }}
      >
        <Container maxWidth={"lg"}>
          <Box
            sx={{
              p: {
                lg: "2rem 3rem",
                md: "2rem 3rem",
                sm: "1rem 2rem",
                xs: "1rem 1rem",
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
                sm: "1.1rem",
                xs: ".8rem",
              },
              fontWeight: { lg: "700", md: "600", sm: "600", xs: "600" },
              transform: "translateY(-50%)",
              borderRadius: "5px",
              boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
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
              <Box
                sx={{
                  width: { lg: "200px", md: "200px", sm: "150px", xs: "110px" },
                  padding: { lg: "1rem", md: "1rem", sm: ".8rem", xs: ".7rem" },
                  borderRadius: "7px",
                  border: {
                    lg: "5px solid #fff",
                    md: "5px solid #fff",
                    sm: "3px solid #fff",
                    xs: "3px solid #fff",
                  },
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src="./Img/talking.png"
                  alt="comunication"
                />
              </Box>
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
                  fontWeight: { lg: "400", ms: "400", sm: "600", xs: "600" },
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
          minHeight: matches ? "350px" : "420px",
        }}
      >
        <Container maxWidth={"lg"}>
          <Box
            sx={{
              p: {
                lg: "2rem 3rem",
                md: "2rem 3rem",
                sm: "1rem 2rem",
                xs: "1rem 1rem",
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
                sm: "1.1rem",
                xs: ".8rem",
              },
              fontWeight: { lg: "700", md: "600", sm: "600", xs: "600" },
              transform: "translateY(-50%)",
              borderRadius: "5px",
              boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
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
              <Box
                sx={{
                  width: { lg: "200px", md: "200px", sm: "150px", xs: "110px" },
                  padding: { lg: "1rem", md: "1rem", sm: ".8rem", xs: ".7rem" },
                  borderRadius: "7px",

                  border: {
                    lg: "5px solid #fff",
                    md: "5px solid #fff",
                    sm: "3px solid #fff",
                    xs: "3px solid #fff",
                  },
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src="./Img/support.png"
                  alt="comunication"
                />
              </Box>
            </Grid>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Box
                sx={{
                  fontSize: {
                    lg: "2rem",
                    md: "1.8rem",
                    sm: "1.2rem",
                    xs: ".9rem",
                  },
                  fontWeight: { lg: "400", ms: "400", sm: "600", xs: "600" },
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
