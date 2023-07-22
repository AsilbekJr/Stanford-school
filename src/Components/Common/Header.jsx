import { Typography } from "@mui/material";
import React from "react";

const Header = ({ title }) => {
  return (
    <Typography
      sx={{
        padding: "20px",
        fontWeight: "600",
        fontSize: {
          lg: "1.9rem",
          md: "1.7rem",
          sm: "1.5rem",
          xs: "1rem",
        },
        letterSpacing: "1px",
        textTransform: "uppercase",
      }}
    >
      {title}
    </Typography>
  );
};

export default Header;
