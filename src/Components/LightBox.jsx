import * as React from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
// import { Paragraph } from "@/components";
import { slides } from "../data/slides";
import { Box } from "@mui/material";

export default function LightboxComponent() {
  const [index, setIndex] = React.useState(-1);

  return (
    <Box>
      <PhotoAlbum
        layout="rows"
        photos={slides}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </Box>
  );
}
