import {
  Call,
  Close,
  MoreVert,
  Room,
  Home,
  MiscellaneousServices,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
const ITEM_HEIGHT = 48;

const NavbarMenu = () => {
  const [click, setClick] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [scrollTop, setScrollTop] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const matches = useMediaQuery("(max-width:938px)");
  const myTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 939,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      fontFamily: '"Montserrat", "sans-serif"',
    },
  });

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    setClick(!click);
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        zIndex: "11",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={"Bosh Sahifa"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="facilities">
            <ListItemIcon>
              <MiscellaneousServices />
            </ListItemIcon>
            <ListItemText primary={"Qulayliklar"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="contact">
            <ListItemIcon>
              <Call />
            </ListItemIcon>
            <ListItemText primary={"Bog'lanish"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      padding={"0 25px"}
      alignItems={"center"}
      width={"100%"}
      sx={{
        height: "100px",
        ...(scrollTop && !matches && { height: "0" }),
        position: "sticky",
        top: "0",
        zIndex: "99",
        background: "#fff",
        boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)",
      }}
    >
      {/* left navbar */}
      <ThemeProvider theme={myTheme}>
        {matches && (
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            sx={{
              "& .MuiPaper-root": {
                paddingTop: "2rem",
                fontWeight: "600",
                "& .MuiButtonBase-root": {
                  "&:hover": {
                    background: "#7952b3",
                    color: "#fff",
                  },
                  "&:hover .MuiListItemIcon-root": {
                    color: "#fff",
                  },
                },
              },
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              component={Link}
              sx={{ textDecoration: "none" }}
              to={"/"}
            >
              <Box
                sx={{
                  width: "42px",
                  margin: "0 .8rem 0 1rem",
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src="./Img/logo.png"
                  alt="navLogo"
                />
              </Box>

              <Typography
                variant="h1"
                fontWeight={"900"}
                sx={{
                  fontSize: ".9rem",
                }}
                color={"#9b0587"}
              >
                {" "}
                STANFORD SCHOOL{" "}
              </Typography>
            </Box>
            {list("left")}
          </Drawer>
        )}
        <Box
          sx={{
            background: "transparent",
            display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
          }}
          alignItems={"center"}
          height={"100%"}
        >
          <IconButton onClick={toggleDrawer("left", true)} variant="outlined">
            {click ? (
              <Close sx={{ fontSize: "40px", color: "#000" }} />
            ) : (
              <MenuIcon sx={{ fontSize: "30px", color: "#9f9f9" }} />
            )}
          </IconButton>
        </Box>
        <Container>
          <Box
            display={"flex"}
            alignItems={"center"}
            component={Link}
            to={"/"}
            sx={{
              textDecoration: "none",
              justifyContent: {
                lg: "left",
                md: "left",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Box
              sx={{
                width: { lg: "70px", md: "60px", sm: "55px", xs: "46px" },
                marginRight: {
                  lg: "1rem",
                  md: ".9rem",
                  sm: ".8rem",
                  xs: ".7rem",
                },
              }}
            >
              <img
                style={{ width: "100%" }}
                src="./Img/logo.png"
                alt="navLogo"
              />
            </Box>
            <Typography
              variant="h1"
              fontWeight={"700"}
              sx={{
                fontSize: {
                  lg: "1.8rem",
                  md: "1.4rem",
                  sm: "1.3",
                  xs: ".9rem",
                },
              }}
              color={"#9b0587"}
            >
              {" "}
              STANFORD SCHOOL{" "}
            </Typography>
          </Box>
        </Container>

        {/* right navbar */}
        {matches && (
          <div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVert sx={{ color: "#9f9f9", fontSize: "30px" }} />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "25ch",
                  padding: "1rem",
                },
              }}
            >
              <Box
                sx={{
                  display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
                  color: "#27374D",
                  fontWeight: 400,
                  fontSize: {
                    lg: "1.2rem",
                    md: "1rem",
                    sm: ".9rem",
                    xs: ".8rem",
                  },
                  flexDirection: "column",
                }}
                gap={"1rem"}
              >
                <Box sx={{ display: "flex", alignItems: "center" }} gap="1rem">
                  <Room fontSize="small" sx={{ color: "gray" }} />
                  <p>Buxoro viloyat, G'ijduvon tuman, G'alaba k. 29-uy</p>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }} gap="1rem">
                  <Call fontSize="small" sx={{ color: "gray" }} />
                  <p>+99899 739-71-57</p>
                </Box>
              </Box>
            </Menu>
          </div>
        )}
        {/* right navbar */}
        {!matches && (
          <Box width={"45%"}>
            <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
              <li>
                <Typography
                  component={Link}
                  to={"/"}
                  sx={{
                    textDecoration: "none",
                    color: splitLocation[1] === "" ? "#000" : "#61677A",
                    textTransform: "uppercase",
                    fontWeight: "500",
                    fontSize: "1rem",
                    borderBottom:
                      splitLocation[1] === ""
                        ? "2px solid  #000"
                        : "2px solid transparent",
                    paddingBottom: "1rem",
                  }}
                >
                  Bosh sahifa
                </Typography>
              </li>
              <li>
                <Typography
                  component={Link}
                  to={"facilities"}
                  sx={{
                    textDecoration: "none",
                    color:
                      splitLocation[1] === "facilities" ? "#000" : "#61677A",
                    textTransform: "uppercase",
                    fontWeight: "500",
                    fontSize: "1rem",
                    borderBottom:
                      splitLocation[1] === "facilities"
                        ? "2px solid  #000"
                        : "2px solid transparent",
                    paddingBottom: "1rem",
                  }}
                >
                  qulayliklar
                </Typography>
              </li>
              <li>
                <Typography
                  component={Link}
                  to={"contact"}
                  sx={{
                    textDecoration: "none",
                    color: splitLocation[1] === "contact" ? "#000" : "#61677A",
                    textTransform: "uppercase",
                    fontWeight: "500",
                    fontSize: "1rem",
                    borderBottom:
                      splitLocation[1] === "contact"
                        ? "2px solid  #000"
                        : "2px solid transparent",
                    paddingBottom: "1rem",
                  }}
                >
                  bog'lanish
                </Typography>
              </li>
            </ul>
          </Box>
        )}
      </ThemeProvider>
    </Box>
  );
};

export default NavbarMenu;
