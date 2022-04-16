import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import {useHistory, useNavigate} from 'react-router-dom';
import { Grid, Link, Tab, Tabs } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../Screens/assets/logo.jpg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "transparent",
  color: "black",

  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  height: 400,
  paddingTop: "2%",
  backgroundColor: "#161615",
  [theme.breakpoints.down("sm")]: {
    height: "100%",
  },
}));

const StyledGrid2 = styled(Grid)(({ theme }) => ({
  height: 100,
  padding: "2.5%",
  backgroundColor: "#121213",
  color: "white",
  [theme.breakpoints.down("sm")]: {
    height: "100%",
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  maxWidth: "25%",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    textAlign: "center",
  },
}));

const StyledLogo = styled(Box)(({ theme }) => ({

  [theme.breakpoints.down("sm")]: {
    display: "none",
    width:"0%"
  },
  [theme.breakpoints.up("sm")]: {
    display: "none",
    width:"0%"
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    width:"10%"
  },
}));

const StyledNav = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "60%",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 200,
    marginRight: 0,
    flexWrap: "wrap",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      width: "1ch",
      "&:focus": {
        width: "20ch",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "1ch",
      "&:focus": {
        width: "7ch",
      },
    },
  },
}));

const pages = [
  {
    id: "1",
    name: "Kurumsal",
    path: "/kurumsal",
  },
  {
    id: "2",
    name: "Enerji Üretim",
    path: "/enerji",
  },
  {
    id: "3",
    name: "Elektrik Toptan Satış",
    path: "/elektrik-satis",
  },
  {
    id: "4",
    name: "Doğal Gaz İthalat",
    path: "/dogalgaz-ithalat",
  },
  {
    id: "5",
    name: "İnsan Kaynakları",
    path: "/insan-kaynaklari",
  },
  {
    id: "6",
    name: "Bilgi Toplum Hizmetleri",
    path: "/bilgi",
  },
  {
    id: "7",
    name: "İletişim",
    path: "/iletisim",
  },
];

const Layout = ({ children }) => {
  const history = useHistory();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [value, setValue] = React.useState(1);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    history.push(path);
    setAnchorElNav(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <StyledLogo>
              <Box
              component='img'
              sx={{ width: "80%", cursor:'pointer', height: "7%", display:{ xs:"none", md:"flex" } }}
              src={Logo}
              onClick={() => {
                history("/");
                window.scrollTo(0, 0);
              }}
              />
            </StyledLogo>
            <Divider orientation="vertical" sx={ {display:{ xs:"none", md:"flex" } }} flexItem />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    sx={{ justifyContent: "flex-end" }}
                    onClick={() => {
                      handleCloseNavMenu(page.path);
                    }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                mb: 1,
                justifyContent: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Tabs
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu(page.path);
                  }}
                  value={value}
                  onChange={handleChange}
                  textColor="primary"
                  indicatorColor="primary"
                >
                  <Tab
                    sx={{ fontWeight: "bolder", py: 4, mt:1  }}
                    value={page.id}
                    label={page.name}
                  ></Tab>
                </Tabs>
              ))}
            </Box>
            <Divider orientation="vertical" flexItem sx={{ ml: 2 }} />
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase inputProps={{ "aria-label": "search" }} />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>

      {children}

      <Grid container sx={{ pt: 4 }}>
        <StyledGrid item xs={12}>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              height: "100%",
            }}
          >
            <StyledBox sx={{ minHeight: "60%", maxWidth: "25%" }}>
              <Typography
                variant="body1"
                sx={{ mb: 2, fontWeight: "bold" }}
                color="white"
                component="div"
              >
                Quick Contact
              </Typography>

              <Typography
                variant="caption"
                sx={{ color: "#b4b4b4", fontWeight: "bold", mb: 1 }}
                gutterBottom
                component="div"
              >
                Ord. Prof. Dr. Fahrettin Kerim Gökay Cd. No:36, Altunizade 34662
                Üsküdar/İstanbul
              </Typography>

              <Typography
                variant="h5"
                sx={{ color: "#3fa435", fontWeight: "bold", mb: 2 }}
                component="div"
              >
                <CallIcon /> +90 216 544 24 00
              </Typography>

              <Typography
                variant="caption"
                sx={{ color: "#b4b4b4", fontWeight: "bold", mb: 1 }}
                gutterBottom
                component="div"
              >
                info@eksim.com.tr
              </Typography>
            </StyledBox>

            <StyledNav sx={{ mr: 5 }}>
              <Typography
                variant="body1"
                sx={{ mb: 2, fontWeight: "bold" }}
                color="white"
              >
                Kurumsal
              </Typography>

              <Link
                variant="caption"
                href="#"
                underline="none"
                sx={{ color: "#b4b4b4", fontWeight: "bold", mb: 1.5 }}
                gutterBottom
              >
                Kurucularımız
              </Link>

              <Link
                variant="caption"
                href="#"
                underline="none"
                sx={{ color: "#b4b4b4", fontWeight: "bold", mb: 1.5 }}
                gutterBottom
              >
                Yönetim Kadrosu
              </Link>
              <Link
                variant="caption"
                href="#"
                underline="none"
                sx={{ color: "#b4b4b4", fontWeight: "bold", mb: 1.5 }}
                gutterBottom
              >
                Tarihçe
              </Link>
              <Link
                variant="caption"
                href="#"
                underline="none"
                sx={{ color: "#b4b4b4", fontWeight: "bold", mb: 1.5 }}
                gutterBottom
              >
                Şirket Profili
              </Link>
            </StyledNav>

            <StyledNav sx={{ mr: 5 }}>
              <Typography
                variant="body1"
                sx={{ mb: 2, fontWeight: "bold" }}
                color="white"
              >
                İnsan Kaynakları
              </Typography>

              <Link
                variant="caption"
                href="#"
                underline="none"
                sx={{ color: "#b4b4b4", fontWeight: "bold", mb: 1.5 }}
                gutterBottom
              >
                Politikalarımız
              </Link>

              <Link
                variant="caption"
                href="#"
                underline="none"
                sx={{ color: "#b4b4b4", fontWeight: "bold", mb: 1.5 }}
                gutterBottom
              >
                Performans Sistemi
              </Link>
              <Link
                variant="caption"
                href="#"
                underline="none"
                sx={{ color: "#b4b4b4", fontWeight: "bold", mb: 1.5 }}
                gutterBottom
              >
                İşe alım
              </Link>
            </StyledNav>

            <StyledNav sx={{ mr: 5 }}>
              <Typography
                variant="body1"
                sx={{ mb: 2, fontWeight: "bold" }}
                color="white"
              >
                Basın Odası
              </Typography>

              <Link
                variant="caption"
                href="#"
                underline="none"
                sx={{ color: "#b4b4b4", fontWeight: "bold", mb: 1.5 }}
                gutterBottom
              >
                Haberler
              </Link>

              <Link
                variant="caption"
                href="#"
                underline="none"
                sx={{ color: "#b4b4b4", fontWeight: "bold", mb: 1.5 }}
                gutterBottom
              >
                Bize Sorun
              </Link>
            </StyledNav>

            <StyledNav sx={{ ml: "auto" }}>
              <Typography
                variant="body1"
                sx={{ mb: 2, fontWeight: "bold", textAlign: "end" }}
                color="white"
              >
                Sosyal Medya
              </Typography>

              <Box>
                <IconButton sx={{ border: "2px solid #353535", mr: 1 }}>
                  <FacebookIcon color="primary" />
                </IconButton>

                <IconButton sx={{ border: "2px solid #353535", mr: 1 }}>
                  <InstagramIcon color="primary" />
                </IconButton>

                <IconButton sx={{ border: "2px solid #353535" }}>
                  <TwitterIcon color="primary" />
                </IconButton>
              </Box>
            </StyledNav>
          </Container>
        </StyledGrid>
      </Grid>

      <Grid container>
        <StyledGrid2 item xs={12}>
          <Container>
            <Typography variant="subtitle1" gutterBottom component="div">
              Copyrights &copy; {(new Date().getFullYear())} EKSİM ENERJİ. Her Hakkı saklıdır.
            </Typography>
          </Container>
        </StyledGrid2>
      </Grid>
    </>
  );
};

export default Layout;
