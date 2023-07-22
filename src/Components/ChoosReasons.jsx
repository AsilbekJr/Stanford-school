import { Badge, Box, Grid, Typography } from "@mui/material";
import React from "react";
import "../styles/ChReasons.css";
import { CheckCircle, Info, MenuBook, Paid } from "@mui/icons-material";
import Header from "./Common/Header";

const ChoosReasons = () => {
  return (
    <Box className="container">
      <Header title={" Bizni tanlab adashmaysiz !"} />
      <Grid container spacing={3} sx={{ marginTop: "2rem", width: "100%" }}>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            gap: {
              lg: "3rem",
              md: "3rem",
              sm: "2rem",
              xs: "2rem",
            },
            width: "50%",
          }}
        >
          <Badge
            badgeContent={1}
            sx={{
              ".MuiBadge-badge": {
                fontSize: "1rem",
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                color: "#000",
                background: "#fff",
                border: "1px solid #3fcd6f",
                boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
              },
            }}
            color="secondary"
          >
            <Box className="chReasonsIcon" sx={{ background: "#3fcd6f" }}>
              <CheckCircle fontSize="large" />
            </Box>
          </Badge>
          <Box>
            <Typography
              sx={{
                fontSize: {
                  lg: "1.9rem",
                  md: "1.7rem",
                  sm: "1.5rem",
                  xs: "1.3rem",
                },
              }}
            >
              Tez natijalar
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "1rem",
                  md: ".945rem",
                  sm: ".9rem",
                  xs: ".8rem",
                },
                color: "gray",
              }}
            >
              Eng yaxshi o'qituvchilar bilan tez va kafolatlangan natijalarga
              erishing.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            gap: {
              lg: "3rem",
              md: "3rem",
              sm: "2rem",
              xs: "2rem",
            },
            width: "50%",
          }}
        >
          <Badge
            badgeContent={2}
            sx={{
              ".MuiBadge-badge": {
                fontSize: "1rem",
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                color: "#000",
                background: "#fff",
                border: "1px solid #F99417",
                boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
              },
            }}
            color="secondary"
          >
            <Box className="chReasonsIcon" sx={{ background: "#F99417" }}>
              <Paid fontSize="large" />
            </Box>
          </Badge>
          <Box>
            <Typography
              sx={{
                fontSize: {
                  lg: "1.9rem",
                  md: "1.7rem",
                  sm: "1.5rem",
                  xs: "1.3rem",
                },
              }}
            >
              Pulingizni tejang
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "1rem",
                  md: ".945rem",
                  sm: ".9rem",
                  xs: ".8rem",
                },
                color: "gray",
              }}
            >
              Siz bizning darslarimiz va resurslarimizga ko'p pul tejashingiz
              mumkin.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            gap: {
              lg: "3rem",
              md: "3rem",
              sm: "2rem",
              xs: "2rem",
            },
            width: "50%",
          }}
        >
          <Badge
            badgeContent={3}
            sx={{
              ".MuiBadge-badge": {
                fontSize: "1rem",
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                color: "#000",
                background: "#fff",
                border: "1px solid #BB2205",
                boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
              },
            }}
            color="secondary"
          >
            <Box className="chReasonsIcon" sx={{ background: "#BB2205" }}>
              <MenuBook fontSize="large" />
            </Box>
          </Badge>
          <Box>
            <Typography
              sx={{
                fontSize: {
                  lg: "1.9rem",
                  md: "1.7rem",
                  sm: "1.5rem",
                  xs: "1.3rem",
                },
              }}
            >
              Bepul darsliklar
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "1rem",
                  md: ".945rem",
                  sm: ".9rem",
                  xs: ".8rem",
                },
                color: "gray",
              }}
            >
              O'quv materiallari va darsliklar uchun qo'shimcha to'lov talab
              qilinmaydi.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            gap: {
              lg: "3rem",
              md: "3rem",
              sm: "2rem",
              xs: "2rem",
            },
            width: "50%",
          }}
        >
          <Badge
            badgeContent={4}
            sx={{
              ".MuiBadge-badge": {
                fontSize: "1rem",
                width: "25px",
                height: "25px",
                borderRadius: "50%",
                color: "#000",
                background: "#fff",
                border: "1px solid #0078AA",
                boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
              },
            }}
            color="secondary"
          >
            <Box className="chReasonsIcon" sx={{ background: "#0078AA" }}>
              <Info fontSize="large" />
            </Box>
          </Badge>
          <Box>
            <Typography
              sx={{
                fontSize: {
                  lg: "1.9rem",
                  md: "1.7rem",
                  sm: "1.5rem",
                  xs: "1.3rem",
                },
              }}
            >
              Yordam oling
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "1rem",
                  md: ".945rem",
                  sm: ".9rem",
                  xs: ".8rem",
                },
                color: "gray",
              }}
            >
              Bizning xodimlarimiz va o'qituvchilarimiz har doim sizga yordam
              berishga tayyor.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChoosReasons;
