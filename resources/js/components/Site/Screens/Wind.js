import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Button,
  Grid,
  Typography,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  Paper,
  CardActions,
  CardMedia,
  IconButton,
  Avatar,
} from "@mui/material";
import React from "react";
import Image from "./assets/a.jpg";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Ruzgar from "../Screens/assets/gif.gif";
import Heart from "../Screens/ruzgar_enerji.svg";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { useTheme } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";

const StyledAvatar = styled(Avatar)(() => ({
  width: 56,
  height: 56,
  border: "2px solid green",
}));

const StyledP = styled(Typography)(({ theme }) => ({
  color: "#1c1a1a",
  fontWeight: 600,
  position: "relative",
  "&:after": {
    content: '""',
    height: "1.3px",
    width: "40%",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
  textTransform: "none",
  fontWeight: "bold",
  justifyContent: "flex-start",
}));

const StyledIcon = styled(ArrowCircleRightIcon)(({ theme }) => ({
  backgroundColor: "white",
  color: "black",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  createData("Susurluk RES, Balıkesir	", 'Susurluk Enerji A.Ş.', 75, 75, '-', "-"),
  createData("Silivri RES, İstanbul	", 'Silivri Enerji A.Ş.', '101,4', 63, '-', 38,4),
  createData("Killik RES, Tokat", 'Tokat Enerji A.Ş.', 94, 94, '-', "-"),
  createData("Kayadüzü RES, Amasya", 'Merzifon Enerji A.Ş.', 82, 82, '-', "-"),
  createData("Seferihisar RES, İzmir", 'Seferihisar Enerji A.Ş.', 21, 21, '-', "-"),
  createData("Ovacık RES, İzmir", 'Çeşme Enerji A.Ş.', '28,8', '25,2', '3,6', "-"),
  createData("Geyve RES, Sakarya", 'Hacim Enerji A.Ş.', '129,9', '41,1', '9', "79,8"),
  createData("Skole RES, Ukrayna", 'Atlas Global Energy LLC.', 60, '25,2', 60, "-"),
];

function createData(name, calories, fat, carbs, protein, a) {
  return { name, calories, fat, carbs, protein, a };
}

const content = [
  "Susurluk RES",
  "Kilik RES",
  "Kayakdüzü RES",
  "Silivri RES",
  "Hasanbeyli RES",
  "Seferihisar RES",
  "Ovacık RES",
  "Gevye RES",
  "Skole RES",
];

const StyledTitles = styled(Typography)(({ theme }) => ({
  color: "#1c1a1a",
  fontWeight: 600,
  position: "relative",
  "&:after": {
    content: '""',
    height: "1.3px",
    width: "45%",
    position: "absolute",
    bottom: "0",
    left: '28%',
    backgroundColor: '#1c1a1a',
  },
}));


const Wind = () => {
  const [modalOpen1, setModalOpen1] = React.useState(false);
  const [modalOpen3, setModalOpen3] = React.useState(false);
  const [modalOpen4, setModalOpen4] = React.useState(false);
  const [modalOpen5, setModalOpen5] = React.useState(false);
  const [modalOpen6, setModalOpen6] = React.useState(false);
  const [modalOpen7, setModalOpen7] = React.useState(false);
  const [modalOpen8, setModalOpen8] = React.useState(false);
  const [modalOpen16, setModalOpen16] = React.useState(false);
  

  const [open1, setOpen1] = React.useState(false);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const [open3, setOpen3] = React.useState(false);
  const [anchorEl3, setAnchorEl3] = React.useState(null);

  const [open4, setOpen4] = React.useState(false);
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const [open5, setOpen5] = React.useState(false);
  const [anchorEl5, setAnchorEl5] = React.useState(null);

  const [open6, setOpen6] = React.useState(false);
  const [anchorEl6, setAnchorEl6] = React.useState(null);

  const [open7, setOpen7] = React.useState(false);
  const [anchorEl7, setAnchorEl7] = React.useState(null);

  const [open8, setOpen8] = React.useState(false);
  const [anchorEl8, setAnchorEl8] = React.useState(null);

  const [open16, setOpen16] = React.useState(false);
  const [anchorEl16, setAnchorEl16] = React.useState(null);

  const handlePopper1 = (event) => {
    setAnchorEl1(event.currentTarget);
    setOpen1((previousOpen) => !previousOpen);
  };

  const handlePopper3 = (event) => {
    setAnchorEl3(event.currentTarget);
    setOpen3((previousOpen) => !previousOpen);
  };
  const handlePopper4 = (event) => {
    setAnchorEl4(event.currentTarget);
    setOpen4((previousOpen) => !previousOpen);
  };
  const handlePopper5 = (event) => {
    setAnchorEl5(event.currentTarget);
    setOpen5((previousOpen) => !previousOpen);
  };
  const handlePopper6 = (event) => {
    setAnchorEl6(event.currentTarget);
    setOpen6((previousOpen) => !previousOpen);
  };
  const handlePopper7 = (event) => {
    setAnchorEl7(event.currentTarget);
    setOpen7((previousOpen) => !previousOpen);
  };
  const handlePopper8 = (event) => {
    setAnchorEl8(event.currentTarget);
    setOpen8((previousOpen) => !previousOpen);
  };

  const handlePopper16 = (event) => {
    setAnchorEl16(event.currentTarget);
    setOpen16((previousOpen) => !previousOpen);
  };

  const theme = useTheme();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height:'90%',
    bgcolor: "background.paper",
    borderRadius:'1%',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            height: 300,
            width: "100%",
            backgroundImage: "url(" + Image + ")",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position:'relative'
          }}
        >
          <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            position:'absolute',
            width:'100%',
            background:'#8080807a'
          }}>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              position:'absolute',
              mb: 1,
              
            }}
          >
            <Typography
              variant="h2"
              sx={{ ml:'14%' }}
              color="white"
              component="div"
            >
              Rüzgar Enerjisi <br></br> Santralleri
            </Typography>
          </Container>
          </Box>
        </Grid>
      </Grid>
      <Container sx={{ pb: 2 }}>
        <Typography variant="body1" sx={{ pt: 2 }} component="div">
          Elektrik Enerji > Enerji üretim > Rüzgar Enerjisi Santralleri
        </Typography>
      </Container>
      <Divider></Divider>
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={5}>
          <Grid item md={4} xs={12}>
            <Card sx={{ minWidth: 275, p: 3, backgroundColor: "#e5f2e1" }}>
              <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }} component="div">
                  Santrallerimiz
                </Typography>
                {content.map((x) => (
                  <Grid item xs={12} sx={{ mb: 1 }}>
                    <StyledButton
                      startIcon={<StyledIcon />}
                      variant="outlined"
                      size="medium"
                      fullWidth
                      sx={{ py: 2, px: 4 }}
                    >
                      {x}
                    </StyledButton>
                  </Grid>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={8} xs={12}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: "bold" }}
              component="div"
            >
              Rüzgar Enerjisi Santralleri
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontWeight: "bold" }}
              component="div"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ mb: 2, fontWeight: "bold" }}
              component="div"
            >
              Liste Projeler:
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Proje Adı ve Lokasyonu</StyledTableCell>
                    <StyledTableCell align="center">
                      Proje Şirketi
                    </StyledTableCell>
                    <StyledTableCell align="center">Lisans</StyledTableCell>
                    <StyledTableCell align="center">
                     Aktif Kapasite
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      İnşaat Kapasite
                    </StyledTableCell>
                    <StyledTableCell align="center">Ek Kapasite</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.fat}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.carbs}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.protein}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.a}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography
              variant="h4"
              sx={{ mt: 5, mb: 2, fontWeight: "bold", textAlign: "center" }}
              color="primary"
              component="div"
            >
              Rüzgar Enerjisi Santrali
            </Typography>
            <Typography
              textAlign="center"
              variant="h5"
              sx={{ fontWeight: "bolder", color: "#275d1f", mb: 5 }}
              component="div"
            >
              RES: 642 MW
            </Typography>

            
            <Grid container>
      <Grid item md={12} xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            md={12}
            sx={{
              [theme.breakpoints.up("lg")]:{
                height: 830,
                  width: "100%",
                  backgroundImage: "url(" + Heart + ")",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  position: "relative"
              },[theme.breakpoints.up('md')]:{
                height: 710,
                width: "100%",
                backgroundImage: "url(" + Heart + ")",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                position: "relative"
              },[theme.breakpoints.up('sm')]:{
                height: 570,
                width: "100%",
                backgroundImage: "url(" + Heart + ")",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                position: "relative"
              },[theme.breakpoints.up('xs')]:{
                height: 303,
                width: "100%",
                backgroundImage: "url(" + Heart + ")",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                position: "relative"
              }
              
            }}
          >
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "43%",
                  top: "37%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "44.5%",
                  top: "40.5%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "46.1%",
                  top: "42.1%",
                },
                [theme.breakpoints.up('xs')]:{
                  left:"44.5%",
                  top:"37%",
                },
              }}
              onClick={handlePopper1}
            >
              <Box component='img' 
              sx={{ 
             [theme.breakpoints.up("lg")]:{
              width: "100%",
            },[theme.breakpoints.up('md')]:{
              width:"65%"
            },[theme.breakpoints.up('sm')]:{
               width:"50%"
            },[theme.breakpoints.up('xs')]:{
              width:'39%'
            },  
            }} src={Ruzgar}></Box>
              <Popper
                id="tokat"
                open={open1}
                placement="top"
                anchorEl={anchorEl1}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box
                      sx={{
                        
                        py: 3,
                        px: 2,
                        bgcolor: "transparent",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "100%",
                      }}
                    >
                      <Box
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Box sx={{ display: "flex", justifyContent: "center",minWidth:'40vh' }}>
                          <StyledAvatar
                            src={Image}
                            sx={{
                              marginRight: "30px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bolder",
                              lineHeight: 1.3,
                              width: "45%",
                            }}
                            gutterBottom
                            component="div"
                          >
                            Silivri Rüzgar Enerjisi Santrali
                          </Typography>

                          <Box>
                            <Typography
                              variant="h4"
                              sx={{ fontWeight: 600 }}
                              component="div"
                            >
                              101
                            </Typography>
                            <StyledP
                              variant="h6"
                              sx={{ fontWeight: 600, mb: 1 }}
                              component="div"
                            >
                              MW
                            </StyledP>
                          </Box>
                        </Box>

                        <Button
                          sx={{ textTransform: "none" }}
                          variant="contained"
                          fullWidth
                          size="small"
                          onClick={() => setModalOpen1(true)}
                        >
                          Detayını Gör
                        </Button>
                      </Box>
                    </Box>
                  </Fade>
                )}
              </Popper>
            </Box>
            <Modal
              open={modalOpen1}
              onClose={() => setModalOpen1(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={modalOpen1}>
                <Box sx={style}>
                  <Grid container>
                    <Box
                      item
                      md={12}
                      style={{
                        height: 300,
                        width: "100%",
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></Box>
                    <Grid item md={12}>
                      <Typography
                        variant="h5"
                        component="h2"
                        color='primary'
                        sx={{ textAlign: "center", mt: 3, fontWeight:'bolder' }}
                      >
                        Silivri Rüzgar Enerjisi Santrali
                      </Typography>
                      <Typography
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Toplam Enerji : 101 MW
                      </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Firma Adı
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      Ütopya Elektrik Üretim Sanayi ve Ticaret A.Ş.
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Lokasyon
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      İzmir - Bergama
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Kapasite
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      51.MWe / 51.5 MWm
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Faaliyete Başlangıç
                      </StyledTitles>
                      <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      2009 (15 MWe), 2010 (30 MWe),2013 (40 MWe),2014 (50 MWe),2015 (51.5 MWe)
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Karbon Kredi Sertifikası
                      </StyledTitles>
                      <Grid item xs={12} style={{
                        height: 50,
                        textAlign:'center',
                        width: "50%",
                        margin:'auto',
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",}}></Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </Modal>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "14%",
                  top: "34.5%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "15.4%",
                  top: "38.2%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "17%",
                  top: "38.6%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "15.2%",
                  top: "33.5%",
                },
              }}
              onClick={handlePopper3}
            >
              <Box component='img' 
              sx={{ 
             [theme.breakpoints.up("lg")]:{
              width: "100%",
            },[theme.breakpoints.up('md')]:{
              width:"65%"
            },[theme.breakpoints.up('sm')]:{
               width:'50%'
            },[theme.breakpoints.up('xs')]:{
              width:'39%'
            },  
            }} src={Ruzgar}></Box>
              <Popper
                id="tokat"
                open={open3}
                placement="top"
                anchorEl={anchorEl3}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box
                      sx={{
                        
                        py: 3,
                        px: 2,
                        bgcolor: "transparent",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "100%",
                      }}
                    >
                      <Box
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Box sx={{ display: "flex", justifyContent: "center", minWidth:'40vh' }}>
                          <StyledAvatar
                            src={Image}
                            sx={{
                              marginRight: "30px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bolder",
                              lineHeight: 1.3,
                              width: "45%",
                            }}
                            gutterBottom
                            component="div"
                          >
                            Silivri 
                          </Typography>

                          <Box>
                            <Typography
                              variant="h4"
                              sx={{ fontWeight: 600 }}
                              component="div"
                            >
                              101
                            </Typography>
                            <StyledP
                              variant="h6"
                              sx={{ fontWeight: 600, mb: 1 }}
                              component="div"
                            >
                              MW
                            </StyledP>
                          </Box>
                        </Box>

                        <Button
                          sx={{ textTransform: "none" }}
                          variant="contained"
                          fullWidth
                          size="small"
                          onClick={() => setModalOpen3(true)}
                        >
                          Detayını Gör
                        </Button>
                      </Box>
                    </Box>
                  </Fade>
                )}
              </Popper>
            </Box>
            <Modal
              open={modalOpen3}
              onClose={() => setModalOpen3(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={modalOpen3}>
                <Box sx={style}>
                  <Grid container>
                    <Box
                      item
                      md={12}
                      style={{
                        height: 300,
                        width: "100%",
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></Box>
                    <Grid item md={12}>
                      <Typography
                        variant="h5"
                        component="h2"
                        color='primary'
                        sx={{ textAlign: "center", mt: 3, fontWeight:'bolder' }}
                      >
                        Silivri  
                      </Typography>
                      <Typography
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Toplam Enerji : 101 MW
                      </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Firma Adı
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      Ütopya Elektrik Üretim Sanayi ve Ticaret A.Ş.
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Lokasyon
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      İzmir - Bergama
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Kapasite
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      51.MWe / 51.5 MWm
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Faaliyete Başlangıç
                      </StyledTitles>
                      <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      2009 (15 MWe), 2010 (30 MWe),2013 (40 MWe),2014 (50 MWe),2015 (51.5 MWe)
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Karbon Kredi Sertifikası
                      </StyledTitles>
                      <Grid item xs={12} style={{
                        height: 50,
                        textAlign:'center',
                        width: "50%",
                        margin:'auto',
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",}}></Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </Modal>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "17.9%",
                  top: "39.4%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "19.6%",
                  top: "42.9%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "21.2%",
                  top: "45.5%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "19.5%",
                  top: "40.4%",
                },
              }}
              onClick={handlePopper4}
            >
              <Box component='img' 
              sx={{ 
             [theme.breakpoints.up("lg")]:{
              width: "100%",
            },[theme.breakpoints.up('md')]:{
              width:"65%"
            },[theme.breakpoints.up('sm')]:{
               width:"50%"
            },[theme.breakpoints.up('xs')]:{
              width:'39%'
            },  
            }} src={Ruzgar}></Box>
              <Popper
                id="tokat"
                open={open4}
                placement="top"
                anchorEl={anchorEl4}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box
                      sx={{
                        
                        py: 3,
                        px: 2,
                        bgcolor: "transparent",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "100%",
                      }}
                    >
                      <Box
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Box sx={{ display: "flex", justifyContent: "center",minWidth:'40vh' }}>
                          <StyledAvatar
                            src={Image}
                            sx={{
                              marginRight: "30px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bolder",
                              lineHeight: 1.3,
                              width: "45%",
                            }}
                            gutterBottom
                            component="div"
                          >
                            Silivri Rüzgar Enerjisi Santrali
                          </Typography>

                          <Box>
                            <Typography
                              variant="h4"
                              sx={{ fontWeight: 600 }}
                              component="div"
                            >
                              101
                            </Typography>
                            <StyledP
                              variant="h6"
                              sx={{ fontWeight: 600, mb: 1 }}
                              component="div"
                            >
                              MW
                            </StyledP>
                          </Box>
                        </Box>

                        <Button
                          sx={{ textTransform: "none" }}
                          variant="contained"
                          fullWidth
                          size="small"
                          onClick={() => setModalOpen4(true)}
                        >
                          Detayını Gör
                        </Button>
                      </Box>
                    </Box>
                  </Fade>
                )}
              </Popper>
            </Box>
            <Modal
              open={modalOpen4}
              onClose={() => setModalOpen4(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={modalOpen4}>
                <Box sx={style}>
                  <Grid container>
                    <Box
                      item
                      md={12}
                      style={{
                        height: 300,
                        width: "100%",
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></Box>
                    <Grid item md={12}>
                      <Typography
                        variant="h5"
                        component="h2"
                        color='primary'
                        sx={{ textAlign: "center", mt: 3, fontWeight:'bolder' }}
                      >
                        Silivri Rüzgar Enerjisi Santrali
                      </Typography>
                      <Typography
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Toplam Enerji : 101 MW
                      </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Firma Adı
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      Ütopya Elektrik Üretim Sanayi ve Ticaret A.Ş.
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Lokasyon
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      İzmir - Bergama
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Kapasite
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      51.MWe / 51.5 MWm
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Faaliyete Başlangıç
                      </StyledTitles>
                      <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      2009 (15 MWe), 2010 (30 MWe),2013 (40 MWe),2014 (50 MWe),2015 (51.5 MWe)
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Karbon Kredi Sertifikası
                      </StyledTitles>
                      <Grid item xs={12} style={{
                        height: 50,
                        textAlign:'center',
                        width: "50%",
                        margin:'auto',
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",}}></Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </Modal>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "12.4%",
                  top: "42.8%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "13.8%",
                  top: "46.3%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "15.4%",
                  top: "50%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "13.8%",
                  top: "45%",
                },
              }}
              onClick={handlePopper5}
            >
             <Box component='img' 
              sx={{ 
             [theme.breakpoints.up("lg")]:{
              width: "100%",
            },[theme.breakpoints.up('md')]:{
              width:"65%"
            },[theme.breakpoints.up('sm')]:{
               width:"50%"
            },[theme.breakpoints.up('xs')]:{
              width:'39%'
            },  
            }} src={Ruzgar}></Box>
              <Popper
                id="tokat"
                open={open5}
                placement="top"
                anchorEl={anchorEl5}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box
                      sx={{
                        
                        py: 3,
                        px: 2,
                        bgcolor: "transparent",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "100%",
                      }}
                    >
                      <Box
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Box sx={{ display: "flex", justifyContent: "center",minWidth:'40vh' }}>
                          <StyledAvatar
                            src={Image}
                            sx={{
                              marginRight: "30px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bolder",
                              lineHeight: 1.3,
                              width: "45%",
                            }}
                            gutterBottom
                            component="div"
                          >
                            Silivri Rüzgar Enerjisi Santrali
                          </Typography>

                          <Box>
                            <Typography
                              variant="h4"
                              sx={{ fontWeight: 600 }}
                              component="div"
                            >
                              101
                            </Typography>
                            <StyledP
                              variant="h6"
                              sx={{ fontWeight: 600, mb: 1 }}
                              component="div"
                            >
                              MW
                            </StyledP>
                          </Box>
                        </Box>

                        <Button
                          sx={{ textTransform: "none" }}
                          variant="contained"
                          fullWidth
                          size="small"
                          onClick={() => setModalOpen5(true)}
                        >
                          Detayını Gör
                        </Button>
                      </Box>
                    </Box>
                  </Fade>
                )}
              </Popper>
            </Box>
            <Modal
              open={modalOpen5}
              onClose={() => setModalOpen5(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={modalOpen5}>
                <Box sx={style}>
                  <Grid container>
                    <Box
                      item
                      md={12}
                      style={{
                        height: 300,
                        width: "100%",
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></Box>
                    <Grid item md={12}>
                      <Typography
                        variant="h5"
                        component="h2"
                        color='primary'
                        sx={{ textAlign: "center", mt: 3, fontWeight:'bolder' }}
                      >
                        Silivri Rüzgar Enerjisi Santrali
                      </Typography>
                      <Typography
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Toplam Enerji : 101 MW
                      </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Firma Adı
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      Ütopya Elektrik Üretim Sanayi ve Ticaret A.Ş.
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Lokasyon
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      İzmir - Bergama
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Kapasite
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      51.MWe / 51.5 MWm
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Faaliyete Başlangıç
                      </StyledTitles>
                      <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      2009 (15 MWe), 2010 (30 MWe),2013 (40 MWe),2014 (50 MWe),2015 (51.5 MWe)
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Karbon Kredi Sertifikası
                      </StyledTitles>
                      <Grid item xs={12} style={{
                        height: 50,
                        textAlign:'center',
                        width: "50%",
                        margin:'auto',
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",}}></Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </Modal>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "4.7%",
                  top: "48.4%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "6.2%",
                  top: "51.9%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "7.7%",
                  top: "58%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "6.1%",
                  top: "53%",
                },
              }}
              onClick={handlePopper6}
            >
              <Box component='img' 
              sx={{ 
             [theme.breakpoints.up("lg")]:{
              width: "100%",
            },[theme.breakpoints.up('md')]:{
              width: "65%"
            },[theme.breakpoints.up('sm')]:{
               width:"50%"
            },[theme.breakpoints.up('xs')]:{
              width:'39%'
            },  
            }} src={Ruzgar}></Box>
              <Popper
                id="tokat"
                open={open6}
                placement="top"
                anchorEl={anchorEl6}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box
                      sx={{
                        
                        py: 3,
                        px: 2,
                        bgcolor: "transparent",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "100%",
                      }}
                    >
                      <Box
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Box sx={{ display: "flex", justifyContent: "center",minWidth:'40vh' }}>
                          <StyledAvatar
                            src={Image}
                            sx={{
                              marginRight: "30px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bolder",
                              lineHeight: 1.3,
                              width: "45%",
                            }}
                            gutterBottom
                            component="div"
                          >
                            Silivri Rüzgar Enerjisi Santrali
                          </Typography>

                          <Box>
                            <Typography
                              variant="h4"
                              sx={{ fontWeight: 600 }}
                              component="div"
                            >
                              101
                            </Typography>
                            <StyledP
                              variant="h6"
                              sx={{ fontWeight: 600, mb: 1 }}
                              component="div"
                            >
                              MW
                            </StyledP>
                          </Box>
                        </Box>

                        <Button
                          sx={{ textTransform: "none" }}
                          variant="contained"
                          fullWidth
                          size="small"
                          onClick={() => setModalOpen6(true)}
                        >
                          Detayını Gör
                        </Button>
                      </Box>
                    </Box>
                  </Fade>
                )}
              </Popper>
            </Box>
            <Modal
              open={modalOpen6}
              onClose={() => setModalOpen6(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={modalOpen6}>
                <Box sx={style}>
                  <Grid container>
                    <Box
                      item
                      md={12}
                      style={{
                        height: 300,
                        width: "100%",
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></Box>
                    <Grid item md={12}>
                      <Typography
                        variant="h5"
                        component="h2"
                        color='primary'
                        sx={{ textAlign: "center", mt: 3, fontWeight:'bolder' }}
                      >
                        Silivri Rüzgar Enerjisi Santrali
                      </Typography>
                      <Typography
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Toplam Enerji : 101 MW
                      </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Firma Adı
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      Ütopya Elektrik Üretim Sanayi ve Ticaret A.Ş.
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Lokasyon
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      İzmir - Bergama
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Kapasite
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      51.MWe / 51.5 MWm
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Faaliyete Başlangıç
                      </StyledTitles>
                      <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      2009 (15 MWe), 2010 (30 MWe),2013 (40 MWe),2014 (50 MWe),2015 (51.5 MWe)
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Karbon Kredi Sertifikası
                      </StyledTitles>
                      <Grid item xs={12} style={{
                        height: 50,
                        textAlign:'center',
                        width: "50%",
                        margin:'auto',
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",}}></Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </Modal>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "6.2%",
                  top: "51.2%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "7.8%",
                  top: "54.7%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "9.3%",
                  top: "61.5%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "7.8%",
                  top: "56.5%",
                },
              }}
              onClick={handlePopper7}
            >
              <Box component='img' 
              sx={{ 
             [theme.breakpoints.up("lg")]:{
              width: "100%",
            },[theme.breakpoints.up('md')]:{
              width: "65%"
            },[theme.breakpoints.up('sm')]:{
               width:"50%"
            },[theme.breakpoints.up('xs')]:{
              width:'39%'
            },  
            }} src={Ruzgar}></Box>
              <Popper
                id="tokat"
                open={open7}
                placement="top"
                anchorEl={anchorEl7}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box
                      sx={{
                        
                        py: 3,
                        px: 2,
                        bgcolor: "transparent",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "100%",
                      }}
                    >
                      <Box
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Box sx={{ display: "flex", justifyContent: "center",minWidth:'40vh' }}>
                          <StyledAvatar
                            src={Image}
                            sx={{
                              marginRight: "30px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bolder",
                              lineHeight: 1.3,
                              width: "45%",
                            }}
                            gutterBottom
                            component="div"
                          >
                            Silivri Rüzgar Enerjisi Santrali
                          </Typography>

                          <Box>
                            <Typography
                              variant="h4"
                              sx={{ fontWeight: 600 }}
                              component="div"
                            >
                              101
                            </Typography>
                            <StyledP
                              variant="h6"
                              sx={{ fontWeight: 600, mb: 1 }}
                              component="div"
                            >
                              MW
                            </StyledP>
                          </Box>
                        </Box>

                        <Button
                          sx={{ textTransform: "none" }}
                          variant="contained"
                          fullWidth
                          size="small"
                          onClick={() => setModalOpen7(true)}
                        >
                          Detayını Gör
                        </Button>
                      </Box>
                    </Box>
                  </Fade>
                )}
              </Popper>
            </Box>
            <Modal
              open={modalOpen7}
              onClose={() => setModalOpen7(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={modalOpen7}>
                <Box sx={style}>
                  <Grid container>
                    <Box
                      item
                      md={12}
                      style={{
                        height: 300,
                        width: "100%",
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></Box>
                    <Grid item md={12}>
                      <Typography
                        variant="h5"
                        component="h2"
                        color='primary'
                        sx={{ textAlign: "center", mt: 3, fontWeight:'bolder' }}
                      >
                        Silivri Rüzgar Enerjisi Santrali
                      </Typography>
                      <Typography
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Toplam Enerji : 101 MW
                      </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Firma Adı
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      Ütopya Elektrik Üretim Sanayi ve Ticaret A.Ş.
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Lokasyon
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      İzmir - Bergama
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Kapasite
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      51.MWe / 51.5 MWm
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Faaliyete Başlangıç
                      </StyledTitles>
                      <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      2009 (15 MWe), 2010 (30 MWe),2013 (40 MWe),2014 (50 MWe),2015 (51.5 MWe)
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Karbon Kredi Sertifikası
                      </StyledTitles>
                      <Grid item xs={12} style={{
                        height: 50,
                        textAlign:'center',
                        width: "50%",
                        margin:'auto',
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",}}></Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </Modal>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "45.4%",
                  top: "40.4%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "46.7%",
                  top: "44%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "48.5%",
                  top: "46.5%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "46.8%",
                  top: "41.5%",
                },
              }}
              onClick={handlePopper16}
            >
              <Box component='img' 
              sx={{ 
             [theme.breakpoints.up("lg")]:{
              width: "100%",
            },[theme.breakpoints.up('md')]:{
              width: "65%"
            },[theme.breakpoints.up('sm')]:{
               width:"50%"
            },[theme.breakpoints.up('xs')]:{
              width:'39%'
            },  
            }} src={Ruzgar}></Box>
              <Popper
                id="tokat"
                open={open16}
                placement="top"
                anchorEl={anchorEl16}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box
                      sx={{
                        
                        py: 3,
                        px: 2,
                        bgcolor: "transparent",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "100%",
                      }}
                    >
                      <Box
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Box sx={{ display: "flex", justifyContent: "center",minWidth:'40vh' }}>
                          <StyledAvatar
                            src={Image}
                            sx={{
                              marginRight: "30px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bolder",
                              lineHeight: 1.3,
                              width: "45%",
                            }}
                            gutterBottom
                            component="div"
                          >
                            Silivri Rüzgar Enerjisi Santrali
                          </Typography>

                          <Box>
                            <Typography
                              variant="h4"
                              sx={{ fontWeight: 600 }}
                              component="div"
                            >
                              101
                            </Typography>
                            <StyledP
                              variant="h6"
                              sx={{ fontWeight: 600, mb: 1 }}
                              component="div"
                            >
                              MW
                            </StyledP>
                          </Box>
                        </Box>

                        <Button
                          sx={{ textTransform: "none" }}
                          variant="contained"
                          fullWidth
                          size="small"
                          onClick={() => setModalOpen16(true)}
                        >
                          Detayını Gör
                        </Button>
                      </Box>
                    </Box>
                  </Fade>
                )}
              </Popper>
            </Box>
            <Modal
              open={modalOpen16}
              onClose={() => setModalOpen16(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={modalOpen16}>
                <Box sx={style}>
                  <Grid container>
                    <Box
                      item
                      md={12}
                      style={{
                        height: 300,
                        width: "100%",
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></Box>
                    <Grid item md={12}>
                      <Typography
                        variant="h5"
                        component="h2"
                        color='primary'
                        sx={{ textAlign: "center", mt: 3, fontWeight:'bolder' }}
                      >
                        Silivri Rüzgar Enerjisi Santrali
                      </Typography>
                      <Typography
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Toplam Enerji : 101 MW
                      </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Firma Adı
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      Ütopya Elektrik Üretim Sanayi ve Ticaret A.Ş.
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Lokasyon
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      İzmir - Bergama
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Kapasite
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      51.MWe / 51.5 MWm
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Faaliyete Başlangıç
                      </StyledTitles>
                      <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      2009 (15 MWe), 2010 (30 MWe),2013 (40 MWe),2014 (50 MWe),2015 (51.5 MWe)
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Karbon Kredi Sertifikası
                      </StyledTitles>
                      <Grid item xs={12} style={{
                        height: 50,
                        textAlign:'center',
                        width: "50%",
                        margin:'auto',
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",}}></Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </Modal>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "43.1%",
                  top: "56.3%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "44.5%",
                  top: "59.7%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "46%",
                  top: "68.7%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "44.4%",
                  top: "64%",
                },
              }}
              onClick={handlePopper8}
            >
              <Box component='img' 
              sx={{ 
             [theme.breakpoints.up("lg")]:{
              width: "100%",
            },[theme.breakpoints.up('md')]:{
              width: "65%"
            },[theme.breakpoints.up('sm')]:{
               width:"50%"
            },[theme.breakpoints.up('xs')]:{
              width:'39%'
            },  
            }} src={Ruzgar}></Box>
              <Popper
                id="tokat"
                open={open8}
                placement="top"
                anchorEl={anchorEl8}
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box
                      sx={{
                        
                        py: 3,
                        px: 2,
                        bgcolor: "transparent",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "100%",
                      }}
                    >
                      <Box
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Box sx={{ display: "flex", justifyContent: "center",minWidth:'40vh' }}>
                          <StyledAvatar
                            src={Image}
                            sx={{
                              marginRight: "30px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bolder",
                              lineHeight: 1.3,
                              width: "45%",
                            }}
                            gutterBottom
                            component="div"
                          >
                            Silivri Rüzgar Enerjisi Santrali
                          </Typography>

                          <Box>
                            <Typography
                              variant="h4"
                              sx={{ fontWeight: 600 }}
                              component="div"
                            >
                              101
                            </Typography>
                            <StyledP
                              variant="h6"
                              sx={{ fontWeight: 600, mb: 1 }}
                              component="div"
                            >
                              MW
                            </StyledP>
                          </Box>
                        </Box>

                        <Button
                          sx={{ textTransform: "none" }}
                          variant="contained"
                          fullWidth
                          size="small"
                          onClick={() => setModalOpen8(true)}
                        >
                          Detayını Gör
                        </Button>
                      </Box>
                    </Box>
                  </Fade>
                )}
              </Popper>
            </Box>
            <Modal
              open={modalOpen8}
              onClose={() => setModalOpen8(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={modalOpen8}>
                <Box sx={style}>
                  <Grid container>
                    <Box
                      item
                      md={12}
                      style={{
                        height: 300,
                        width: "100%",
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></Box>
                    <Grid item md={12}>
                      <Typography
                        variant="h5"
                        component="h2"
                        color='primary'
                        sx={{ textAlign: "center", mt: 3, fontWeight:'bolder' }}
                      >
                        Silivri Rüzgar Enerjisi Santrali
                      </Typography>
                      <Typography
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Toplam Enerji : 101 MW
                      </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Firma Adı
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      Ütopya Elektrik Üretim Sanayi ve Ticaret A.Ş.
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Lokasyon
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      İzmir - Bergama
                    </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Kapasite
                      </StyledTitles>
                    <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      51.MWe / 51.5 MWm
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Faaliyete Başlangıç
                      </StyledTitles>
                      <Typography  
                      sx={{ textAlign: "center", mb:2}}>
                      2009 (15 MWe), 2010 (30 MWe),2013 (40 MWe),2014 (50 MWe),2015 (51.5 MWe)
                    </Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <StyledTitles
                        variant="h6"
                        component="h2"
                        sx={{ textAlign: "center", fontWeight:'bolder', mb:2}}
                      >
                        Karbon Kredi Sertifikası
                      </StyledTitles>
                      <Grid item xs={12} style={{
                        height: 50,
                        textAlign:'center',
                        width: "50%",
                        margin:'auto',
                        backgroundImage: "url(" + Image + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",}}></Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </Modal>
          </Grid>
        </Grid>
      </Grid>
            </Grid>




            <Typography
              variant="h5"
              sx={{ fontWeight: "bolder", mb: 3 }}
              component="div"
            >
              Lorem Ipsum
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "#b4b4b4", mb: 4 }}
              variant="body1"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
              inventore consectetur,
            </Typography>
            <Grid container spacing={3}>
              <Grid item md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={Image}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{ fontWeight: 600, mb: 2 }}
                      component="div"
                    >
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <StyledIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={Image}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{ fontWeight: 600, mb: 2 }}
                      component="div"
                    >
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <StyledIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={Image}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{ fontWeight: 600, mb: 2 }}
                      component="div"
                    >
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton>
                      <StyledIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Wind;
