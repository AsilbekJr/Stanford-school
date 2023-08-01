import { Close, Menu } from "@mui/icons-material";
import { Box, IconButton, Tab, Tabs } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ handleChange, value }) => {
  const [click, setClick] = React.useState(false);
  const CustomTabContainer = {
    lineHeight: "3rem",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#000",
    "&.Mui-selected": {
      color: "#000",
    },
  };
  return (
    <Box className="dropMenuContainer">
      <Box
        sx={{ background: "#FFE79B", height: "100%" }}
        className={click ? "dropMenu" : "dropdown"}
      >
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            TabIndicatorProps={{
              sx: {
                height: "3.5px",
                background: "#000",
              },
            }}
          >
            <Tab
              sx={CustomTabContainer}
              value="one"
              label="BOSH SAHIFA"
              component={Link}
              to={"/"}
            />
            <Tab
              sx={CustomTabContainer}
              value="two"
              label="QULAYLIKLAR"
              component={Link}
              to={"/facilities"}
            />
            <Tab
              sx={CustomTabContainer}
              value="three"
              label="BOG'LANISH"
              component={Link}
              to={"/contact"}
            />
          </Tabs>
        </Box>
      </Box>

      <Box
        sx={{ background: "#FFE79B" }}
        display={"flex"}
        alignItems={"center"}
        height={"100%"}
      >
        <IconButton onClick={() => setClick(!click)} variant="outlined">
          {click ? (
            <Close sx={{ fontSize: "50px", color: "#000" }} />
          ) : (
            <Menu sx={{ fontSize: "50px", color: "#000" }} />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Dropdown;
