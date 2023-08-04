import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
// import GoogleMapReact from "google-map-react";
import Map from "react-map-gl";

const ContactUs = () => {
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
          Biz bilan bog'lanish
        </Box>
      </Box>
      <Box sx={{ margin: "4rem  0 0 0" }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box
                sx={{
                  background: "linear-gradient(135deg, #8A49AA, #D25CA4)",
                  color: "#fff",
                  padding: "1rem 1rem",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "70px",
                    border: "3px solid #fff",
                    borderRadius: "50%",
                    padding: "10px",
                    margin: "1rem",
                  }}
                >
                  <img
                    src="./Img/location.png"
                    style={{ width: "100%", objectFit: "cover" }}
                    alt="location"
                  />
                </Box>
                <Box
                  sx={{
                    lineHeight: "1.3rem",
                    fontSize: ".9rem",
                    fontWeight: "500",
                  }}
                >
                  <Box>Buxoro viloyati, G'ijduvon tuman</Box>
                  <Box>G'alaba ko'chasi, 29-uy</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box
                sx={{
                  background: "linear-gradient(135deg, #8A49AA, #D25CA4)",
                  color: "#fff",
                  padding: "1rem 1rem",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "70px",
                    border: "3px solid #fff",
                    borderRadius: "50%",
                    padding: "10px",
                    margin: "1rem",
                  }}
                >
                  <img
                    src="./Img/mail.png"
                    style={{ width: "100%", objectFit: "cover" }}
                    alt="location"
                  />
                </Box>
                <Box
                  sx={{
                    lineHeight: "1.3rem",
                    fontSize: ".9rem",
                    fontWeight: "500",
                  }}
                >
                  <Box>stanford@gmail.com</Box>
                  <Box>admin@gmail.com</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box
                sx={{
                  background: "linear-gradient(135deg, #8A49AA, #D25CA4)",
                  color: "#fff",
                  padding: "1rem 1rem",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "70px",
                    border: "3px solid #fff",
                    borderRadius: "50%",
                    padding: "10px",
                    margin: "1rem",
                  }}
                >
                  <img
                    src="./Img/phone.png"
                    style={{ width: "100%", objectFit: "cover" }}
                    alt="location"
                  />
                </Box>
                <Box
                  sx={{
                    lineHeight: "1.3rem",
                    fontSize: ".9rem",
                    fontWeight: "500",
                  }}
                >
                  <Box>+998997397157</Box>
                  <Box>+998973007157</Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ margin: "4rem 0 0 0 " }}>
          <Map
            mapboxAccessToken="pk.eyJ1IjoiYXNpbGJla2pyIiwiYSI6ImNrczdoYzMybzNoOTcycXM3ZDR2cmI3bGYifQ.6p2OnMjAjcmgjQhXT_SBDQ"
            initialViewState={{
              longitude: 64.680503,
              latitude: 40.096469,
              zoom: 14,
            }}
            style={{ width: "100%", height: 400 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          />
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
