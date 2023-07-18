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
const ITEM_HEIGHT = 48;

const Navbar = () => {
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

  useEffect(() => {
    const handleScroll = (event) => {
      window.scrollY > 100 ? setScrollTop(true) : setScrollTop(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={"Bosh Sahifa"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MiscellaneousServices />
            </ListItemIcon>
            <ListItemText primary={"Qulayliklar"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
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
        position: matches && "sticky",
        top: "0",
        zIndex: "99",
        background: "#fff",
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
            <Box display={"flex"} alignItems={"center"}>
              <Box
                sx={{
                  width: "28px",
                  margin: "0 .8rem 0 1rem",
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src="./Img/world.png"
                  alt="navLogo"
                />
              </Box>
              <Typography
                variant="h1"
                fontWeight={"900"}
                sx={{
                  fontSize: ".9rem",
                }}
                color={"#C539B4"}
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
        <Box display={"flex"} alignItems={"center"}>
          <Box
            sx={{
              width: { lg: "40px", md: "36px", sm: "35px", xs: "26px" },
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
              src="./Img/world.png"
              alt="navLogo"
            />
          </Box>
          <Typography
            variant="h1"
            fontWeight={"700"}
            sx={{
              fontSize: { lg: "1.8rem", md: "1.4rem", sm: "1.3", xs: ".9rem" },
            }}
            color={"#C539B4"}
          >
            {" "}
            STANFORD SCHOOL{" "}
          </Typography>
        </Box>

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
        <Box
          sx={{
            display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
            color: "#27374D",
            fontWeight: 400,
            fontSize: { lg: "1.2rem", md: "1rem" },
          }}
          gap={"1rem"}
        >
          <Box display={"flex"} gap="1rem">
            <Room />
            <p>Buxoro viloyat, G'ijduvon tuman, G'alaba k. 29-uy</p>
          </Box>
          <Box display={"flex"} gap="1rem">
            <Call />
            <p>+99 7397157</p>
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default Navbar;
