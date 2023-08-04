import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { images } from "../data/images";
import { getElementTopPosition } from "../context/elementTop";
import Header from "./Common/Header";

const MyGallery = () => {
  const [viewerIsOpen, setViewerIsOpen] = useContext(getElementTopPosition);

  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => {
    setIndex(index);
    setViewerIsOpen(true);
  };
  const handleClose = () => {
    setIndex(-1);
    setViewerIsOpen(false);
  };
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);
  return (
    <Box className="container" bgcolor={"#f6f6f6"}>
      <Header title={"Galleriya"} />
      <Grid container spacing={3} sx={{ padding: "3rem 0" }}>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <div>
            <Gallery
              images={images}
              onClick={handleClick}
              enableImageSelection={false}
            />
            {!!currentImage && (
              /* @ts-ignore */
              <Lightbox
                mainSrc={currentImage.original}
                imageTitle={currentImage.caption}
                mainSrcThumbnail={currentImage.src}
                nextSrc={nextImage.original}
                nextSrcThumbnail={nextImage.src}
                prevSrc={prevImage.original}
                prevSrcThumbnail={prevImage.src}
                onCloseRequest={handleClose}
                onMovePrevRequest={handleMovePrev}
                onMoveNextRequest={handleMoveNext}
              />
            )}
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
                    <Typography fontSize={"1rem"}>
                      Individual Lessons
                    </Typography>
                  </ListItem>
                  <ListItem
                    disableGutters
                    secondaryAction={
                      <Typography sx={{ fontSize: "1rem", color: "gray" }}>
                        10$
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
                      color: "gray",
                      fontStyle: "italic",
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
