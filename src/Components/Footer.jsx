import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import "../styles/Footer.css";
import { Instagram, Telegram, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Box
      component={"footer"}
      minHeight={"300px"}
      sx={{ background: "#f6f6f6" }}
      p={"4rem 0 0 0"}
    >
      <Container maxWidth="lg" width={"100%"}>
        <Grid
          container
          spacing={4}
          display={"flex"}
          //   alignItems={"center"}
          height={"100%"}
        >
          <Grid
            item
            lg={4}
            md={4}
            sm={6}
            xs={12}
            display={"flex"}
            alignItems={"center"}
            height={"100%"}
          >
            <Box
              sx={{
                width: { lg: "200px", md: "200px", sm: "140px", xs: "80px" },
                borderRadius: "50%",
                paddingLeft: "15px",
              }}
            >
              <img
                className="footerLogo"
                src="./Img/logo.png"
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "1.2px",
                p: "0 0 0 15px",
              }}
            >
              Tezkor o'tish
            </Typography>
            <List>
              <ListItem
                component={Link}
                to="/"
                sx={{
                  marginBottom: "1rem",
                  padding: "0 0 0 15px",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                <ListItemText primary="Bosh sahifa" />
              </ListItem>
              <ListItem
                component={Link}
                to="facilities"
                sx={{
                  marginBottom: "1rem",
                  padding: "0 0 0 15px",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                <ListItemText primary="Qulayliklar" />
              </ListItem>
              <ListItem
                component={Link}
                to="contact"
                sx={{
                  marginBottom: "1rem",
                  padding: "0 0 0 15px",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                <ListItemText primary="Bog'lanish" />
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "1.2px",
                p: "0 0 0 15px",
                textAlign: "center",
              }}
            >
              Bizni kuzatib boring
            </Typography>
            <Box
              display={"flex"}
              marginTop={"15px"}
              justifyContent={"center"}
              gap={"2rem"}
            >
              <Box>
                <Telegram
                  sx={{
                    color: "#808080",
                    fontSize: "27px",
                    cursor: "pointer",
                    ":hover": { color: "#068FFF" },
                    transition: "all .3s ",
                  }}
                />
              </Box>
              <Box>
                <YouTube
                  sx={{
                    color: "#808080",
                    fontSize: "27px",
                    cursor: "pointer",
                    ":hover": { color: "#FF1E00" },
                    transition: "all .3s ",
                  }}
                />
              </Box>
              <Box>
                <Instagram
                  sx={{
                    color: "#808080",
                    fontSize: "27px",
                    cursor: "pointer",
                    ":hover": { color: "#bb298e" },
                    transition: "all .3s ",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ margin: "4rem 0 1rem 0" }} />
      </Container>
      <Typography sx={{ textAlign: "center", padding: "1rem 0" }}>
        Stanford | School {year}
      </Typography>
    </Box>
  );
};

export default Footer;
