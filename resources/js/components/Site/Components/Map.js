import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Image from "../Screens/image.png";
import Ruzgar from "../Screens/assets/gif.gif";
import Arka from "../Screens/assets/maparka.png"
import Su from "../Screens/assets/su_damlasi.png";
import Gunes from "../Screens/assets/gunes_paneli.png";
import Heart from "../Screens/harita.svg";
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
    bottom: "0",
    left: 0,
    backgroundColor: theme.palette.primary.main,
  },
}));

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


const Map = () => {
  const [modalOpen1, setModalOpen1] = React.useState(false);
  const [modalOpen2, setModalOpen2] = React.useState(false);
  const [modalOpen3, setModalOpen3] = React.useState(false);
  const [modalOpen4, setModalOpen4] = React.useState(false);
  const [modalOpen5, setModalOpen5] = React.useState(false);
  const [modalOpen6, setModalOpen6] = React.useState(false);
  const [modalOpen7, setModalOpen7] = React.useState(false);
  const [modalOpen8, setModalOpen8] = React.useState(false);
  const [modalOpen9, setModalOpen9] = React.useState(false);
  const [modalOpen10, setModalOpen10] = React.useState(false);
  const [modalOpen11, setModalOpen11] = React.useState(false);
  const [modalOpen12, setModalOpen12] = React.useState(false);
  const [modalOpen13, setModalOpen13] = React.useState(false);
  const [modalOpen14, setModalOpen14] = React.useState(false);
  const [modalOpen15, setModalOpen15] = React.useState(false);
  const [modalOpen16, setModalOpen16] = React.useState(false);
  

  const [open1, setOpen1] = React.useState(false);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const [open2, setOpen2] = React.useState(false);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

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
  
  const [open9, setOpen9] = React.useState(false);
  const [anchorEl9, setAnchorEl9] = React.useState(null);

  const [open10, setOpen10] = React.useState(false);
  const [anchorEl10, setAnchorEl10] = React.useState(null);

  const [open11, setOpen11] = React.useState(false);
  const [anchorEl11, setAnchorEl11] = React.useState(null);

  const [open12, setOpen12] = React.useState(false);
  const [anchorEl12, setAnchorEl12] = React.useState(null);

  const [open13, setOpen13] = React.useState(false);
  const [anchorEl13, setAnchorEl13] = React.useState(null);

  const [open14, setOpen14] = React.useState(false);
  const [anchorEl14, setAnchorEl14] = React.useState(null);

  const [open15, setOpen15] = React.useState(false);
  const [anchorEl15, setAnchorEl15] = React.useState(null);

  const [open16, setOpen16] = React.useState(false);
  const [anchorEl16, setAnchorEl16] = React.useState(null);

  const handlePopper1 = (event) => {
    setAnchorEl1(event.currentTarget);
    setOpen1((previousOpen) => !previousOpen);
  };
  const handlePopper2 = (event) => {
    setAnchorEl2(event.currentTarget);
    setOpen2((previousOpen) => !previousOpen);
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
  const handlePopper9 = (event) => {
    setAnchorEl9(event.currentTarget);
    setOpen9((previousOpen) => !previousOpen);
  };
  const handlePopper10 = (event) => {
    setAnchorEl10(event.currentTarget);
    setOpen10((previousOpen) => !previousOpen);
  };
  const handlePopper11 = (event) => {
    setAnchorEl11(event.currentTarget);
    setOpen11((previousOpen) => !previousOpen);
  };
  const handlePopper12 = (event) => {
    setAnchorEl12(event.currentTarget);
    setOpen12((previousOpen) => !previousOpen);
  };
  const handlePopper13 = (event) => {
    setAnchorEl13(event.currentTarget);
    setOpen13((previousOpen) => !previousOpen);
  };
  const handlePopper14 = (event) => {
    setAnchorEl14(event.currentTarget);
    setOpen14((previousOpen) => !previousOpen);
  };
  const handlePopper15 = (event) => {
    setAnchorEl15(event.currentTarget);
    setOpen15((previousOpen) => !previousOpen);
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
    <Grid container 
        style={{ 
          width: "100%",
          backgroundImage: "url(" + Arka + ")",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          position: "relative" }}>
      <Grid item md={12} sx={{ width: "100%", mt: 5 }}>
        <Typography
          textAlign="center"
          variant="h3"
          color="primary"
          sx={{ fontWeight: "bold", mt: 5, mb: 3 }}
          component="div"
        >
          Eksim Yenilenebilir Yatırım Haritası
        </Typography>
        <Typography
          textAlign="center"
          variant="h4"
          sx={{ fontWeight: "bolder", color: "#275d1f", mb: 3 }}
          component="div"
        >
          TOPLAM 879 MW
        </Typography>
        <Typography
          textAlign="center"
          variant="h5"
          sx={{ fontWeight: "bolder", color: "#275d1f", mb: 5 }}
          component="div"
        >
          RES: 642 MW | HES: 162 MW | GES: 70 MW | BES: 5 MW
        </Typography>
      </Grid>
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
                  left: "46.3%",
                  top: "38.4%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "46.5%",
                  top: "41.7%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "46.4%",
                  top: "42.3%",
                },
                [theme.breakpoints.up('xs')]:{
                  left:"45%",
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
                  left: "12.9%",
                  top: "2.3%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "6.3%",
                  top: "5.7%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "4%",
                  top: "6.8%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "2.5%",
                  top: "1%",
                },
              }}
              onClick={handlePopper2}
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
                open={open2}
                placement="top"
                anchorEl={anchorEl2}
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
                          onClick={() => setModalOpen2(true)}
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
              open={modalOpen2}
              onClose={() => setModalOpen2(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={modalOpen2}>
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
                  left: "23.2%",
                  top: "34.5%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "18.8%",
                  top: "38%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "17.2%",
                  top: "38.6%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "15.8%",
                  top: "33.2%",
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
                  left: "26.4%",
                  top: "42%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "22.7%",
                  top: "45.6%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "21.3%",
                  top: "46%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "20%",
                  top: "41%",
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
                  left: "22%",
                  top: "46.8%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "17.3%",
                  top: "50.5%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "15.4%",
                  top: "50.7%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "14.2%",
                  top: "45.4%",
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
                  left: "16%",
                  top: "55.5%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "10.1%",
                  top: "58.9%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "8%",
                  top: "59%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "6.5%",
                  top: "54.6%",
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
                  left: "17.1%",
                  top: "59.3%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "11.5%",
                  top: "62.8%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "9.5%",
                  top: "62.8%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "8%",
                  top: "58.5%",
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
                  left: "47.9%",
                  top: "42.9%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "48.6%",
                  top: "46.6%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "48.5%",
                  top: "47%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "47%",
                  top: "41.6%",
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
                  left: "46.3%",
                  top: "67.2%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "46.4%",
                  top: "70.7%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "46.3%",
                  top: "70.6%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "44.8%",
                  top: "66%",
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
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "53.8%",
                  top: "82%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "55.1%",
                  top: "82.5%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "55.4%",
                  top: "82%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "54.6%",
                  top: "80%",
                },
              }}
              onClick={handlePopper9}
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
            }} src={Gunes}></Box>
              <Popper
                id="tokat"
                open={open9}
                placement="top"
                anchorEl={anchorEl9}
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
                          onClick={() => setModalOpen9(true)}
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
              open={modalOpen9}
              onClose={() => setModalOpen9(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={modalOpen9}>
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
                  left: "66.6%",
                  top: "77%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "70.3%",
                  top: "78%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "71.3%",
                  top: "78%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "70.3%",
                  top: "76%",
                },
              }}
              onClick={handlePopper10}
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
            }} src={Gunes}></Box>
              <Popper
                id="tokat"
                open={open10}
                placement="top"
                anchorEl={anchorEl10}
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
                          onClick={() => setModalOpen10(true)}
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
              open={modalOpen10}
              onClose={() => setModalOpen10(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={modalOpen10}>
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
                [theme.breakpoints.up("lg")]: {
                  left: "51.5%",
                  top: "56%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "52.4%",
                  top: "56.8%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "52.5%",
                  top: "56.3%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "51.7%",
                  top: "53.6%",
                },
              }}
            >
              <Box component='img' 
              sx={{ 
             [theme.breakpoints.up("lg")]:{
              width: "90%",
            },[theme.breakpoints.up('md')]:{
              width: "60%"
            },[theme.breakpoints.up('sm')]:{
               width:"45%"
            },[theme.breakpoints.up('xs')]:{
              width:'39%'
            },  
            }} src={Gunes}></Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                [theme.breakpoints.up("lg")]: {
                  left: "30%",
                  top: "55.5%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "26.3%",
                  top: "55.8%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "25%",
                  top: "55.7%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "25.3%",
                  top: "52.7%",
                },
              }}
            >
              <Box component='img' 
              sx={{ 
             [theme.breakpoints.up("lg")]:{
              width: "90%",
            },[theme.breakpoints.up('md')]:{
              width: "60%"
            },[theme.breakpoints.up('sm')]:{
               width:"45%"
            },[theme.breakpoints.up('xs')]:{
              width:'34%'
            },  
            }} src={Gunes}></Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                [theme.breakpoints.up("lg")]: {
                  left: "46.7%",
                  top: "51%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "46.4%",
                  top: "51.6%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "46.3%",
                  top: "51.3%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "45.9%",
                  top: "48.6%",
                },
              }}
            >
              <Box component='img' 
              sx={{ 
             [theme.breakpoints.up("lg")]:{
              width: "90%",
            },[theme.breakpoints.up('md')]:{
              width: "60%"
            },[theme.breakpoints.up('sm')]:{
               width:"45%"
            },[theme.breakpoints.up('xs')]:{
              width:'34%'
            },  
            }} src={Gunes}></Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                cursor: "pointer",
                [theme.breakpoints.up("lg")]: {
                  left: "65%",
                  top: "71.5%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "68.4%",
                  top: "72%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "69.5%",
                  top: "72%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "68.5%",
                  top: "69.2%",
                },
              }}
              onClick={handlePopper11}
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
            }} src={Gunes}></Box>
              <Popper
                id="tokat"
                open={open11}
                placement="top"
                anchorEl={anchorEl11}
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
                          onClick={() => setModalOpen11(true)}
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
              open={modalOpen11}
              onClose={() => setModalOpen11(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={modalOpen11}>
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
                  left: "74.2%",
                  top: "76.5%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "79.6%",
                  top: "76.5%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "81.2%",
                  top: "76.5%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "79.8%",
                  top: "74.5%",
                },
              }}
              onClick={handlePopper12}
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
            }} src={Gunes}></Box>
              <Popper
                id="tokat"
                open={open12}
                placement="top"
                anchorEl={anchorEl12}
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
                          onClick={() => setModalOpen12(true)}
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
              open={modalOpen12}
              onClose={() => setModalOpen12(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={modalOpen12}>
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
                  left: "64.4%",
                  top: "47%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "67.5%",
                  top: "47.1%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "68.7%",
                  top: "47.7%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "68.6%",
                  top: "47.6%",
                },
              }}
              onClick={handlePopper13}
            >
              <Box component='img' 
              sx={{ 
             [theme.breakpoints.up("lg")]:{
              width: "80%",
            },[theme.breakpoints.up('md')]:{
              width: "65%"
            },[theme.breakpoints.up('sm')]:{
               width:"50%"
            },[theme.breakpoints.up('xs')]:{
              width:'23%'
            },  
            }} src={Su}></Box>
              <Popper
                id="tokat"
                open={open13}
                placement="top"
                anchorEl={anchorEl13}
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
                          onClick={() => setModalOpen13(true)}
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
              open={modalOpen13}
              onClose={() => setModalOpen13(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={modalOpen13}>
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
                  left: "68.8%",
                  top: "39%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "73%",
                  top: "39.4%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "74.5%",
                  top: "39.8%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "74.2%",
                  top: "39.8%",
                },
              }}
              onClick={handlePopper14}
            >
              <Box component='img' 
              sx={{ 
             [theme.breakpoints.up("lg")]:{
              width: "80%",
            },[theme.breakpoints.up('md')]:{
              width: "65%"
            },[theme.breakpoints.up('sm')]:{
               width:"50%"
            },[theme.breakpoints.up('xs')]:{
              width:'23%'
            },  
            }} src={Su}></Box>
              <Popper
                id="tokat"
                open={open14}
                placement="top"
                anchorEl={anchorEl14}
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
                          onClick={() => setModalOpen14(true)}
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
              open={modalOpen14}
              onClose={() => setModalOpen14(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={modalOpen14}>
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
                  left: "71.3%",
                  top: "39.1%",
                },
                [theme.breakpoints.up("md")]: {
                  left: "75.8%",
                  top: "39.5%",
                },
                [theme.breakpoints.up("sm")]: {
                  left: "77.2%",
                  top: "39.8%",
                },
                [theme.breakpoints.up("xs")]: {
                  left: "76.8%",
                  top: "39.8%",
                },
              }}
              onClick={handlePopper15}
            >
              <Box component='img' 
              sx={{ 
             [theme.breakpoints.up("lg")]:{
              width: "80%",
            },[theme.breakpoints.up('md')]:{
              width: "65%"
            },[theme.breakpoints.up('sm')]:{
               width:"50%"
            },[theme.breakpoints.up('xs')]:{
              width:'24%'
            },  
            }} src={Su}></Box>
              <Popper
                id="tokat"
                open={open15}
                placement="top"
                anchorEl={anchorEl15}
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
                          onClick={() => setModalOpen15(true)}
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
              open={modalOpen15}
              onClose={() => setModalOpen15(false)}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={modalOpen15}>
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
  );
};

export default Map;
