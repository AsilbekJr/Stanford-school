import {
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState, useCallback, useContext } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../data/slides";
import { getElementTopPosition } from "../context/elementTop";
import { Comment } from "@mui/icons-material";

const MyGallery = () => {
  const [viewerIsOpen, setViewerIsOpen] = useContext(getElementTopPosition);

  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Box className="container" bgcolor={"#f6f6f6"}>
      <Typography
        sx={{
          fontWeight: "600",
          textTransform: "uppercase",
          fontSize: {
            lg: "1.9rem",
            md: "1.7rem",
            sm: "1.5rem",
            xs: "1rem",
          },
          letterSpacing: "1px",
        }}
        variant="h1"
      >
        {" "}
        Foto Galleriya
      </Typography>
      <Grid container spacing={3} sx={{ padding: "3rem 0" }}>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <div>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map((x) => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title,
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <Box
            sx={{ width: { lg: "70%", md: "70%", sm: "80%", xs: "100%" } }}
            margin={"auto"}
          >
            <Box>
              <Paper elevation={2} sx={{ padding: "2rem" }}>
                <List
                  sx={{
                    width: "100%",
                    // maxWidth: 360,
                    // bgcolor: "background.paper",
                  }}
                >
                  <ListItem
                    disableGutters
                    secondaryAction={
                      <Typography sx={{ fontSize: "1rem", color: "gray" }}>
                        10$
                      </Typography>
                    }
                  >
                    <Typography fontSize={"1rem"}>
                      English for Business
                    </Typography>
                  </ListItem>
                  <ListItem
                    disableGutters
                    secondaryAction={
                      <Typography sx={{ fontSize: "1rem", color: "gray" }}>
                        2$
                      </Typography>
                    }
                  >
                    <Typography fontSize={"1rem"}>English for Kids</Typography>
                  </ListItem>
                  <ListItem
                    disableGutters
                    secondaryAction={
                      <Typography sx={{ fontSize: "1rem", color: "gray" }}>
                        3$
                      </Typography>
                    }
                  >
                    <Typography fontSize={"1rem"}>Online Learning</Typography>
                  </ListItem>
                  <ListItem
                    disableGutters
                    secondaryAction={
                      <Typography sx={{ fontSize: "1rem", color: "gray" }}>
                        5$
                      </Typography>
                    }
                  >
                    <Typography fontSize={"1rem"}>
                      English for Beginners
                    </Typography>
                  </ListItem>
                  <ListItem
                    disableGutters
                    secondaryAction={
                      <Typography sx={{ fontSize: "1rem", color: "gray" }}>
                        15$
                      </Typography>
                    }
                  >
                    <Typography fontSize={"1rem"}>Personal Lessons</Typography>
                  </ListItem>
                  <ListItem
                    disableGutters
                    secondaryAction={
                      <Typography sx={{ fontSize: "1rem", color: "gray" }}>
                        8$
                      </Typography>
                    }
                  >
                    <Typography fontSize={"1rem"}>
                      English for tourism
                    </Typography>
                  </ListItem>
                  <Divider />
                  <Typography
                    sx={{
                      fontSize: ".8rem",
                      textAlign: "center",
                      marginTop: "1rem",
                    }}
                  >
                    Bir dars uchun!!!
                  </Typography>
                </List>
              </Paper>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyGallery;
