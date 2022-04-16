import {
  Container,
  Typography,
  Button,
  Grid,
  CardContent,
  Card,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
  CardMedia,
  CardActions,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "./image.png";
import { styled } from "@mui/material/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MapComponent from "../Components/Map";
import Gul from "./assets/gul.jpg";
import Hidro from "./assets/hidro.jpg";
import Gunes from "./assets/gunes.jpg";
import Biyo from "./assets/biyo.jpg";
import Yesil from "./assets/contact_image.jpg"
import Dogal2 from "./assets/dogalgaz3.jpg";
import Elektrik3 from "./assets/elektrik3.jpg";
import Slider1 from "./assets/slider.jpg";
import {useHistory, useNavigate} from 'react-router-dom';

const StyledButton = styled(Button)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: "#ffff",
    color:theme.palette.primary.main
  },
  textTransform: "none",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const StyledButton2 = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "#1c1a1a",
    color: "white",
  },
  textTransform: "none",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const StyledButton3 = styled(Button)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  backgroundColor: "#1c1a1a",
  "&:hover": {
    backgroundColor: "white",
    color: "#1c1a1a",
  },
  textTransform: "none",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const StyledCardButton = styled(Button)(({ theme }) => ({
  color: "#1c1a1a",
  fontWeight: 600,
  "&:after": {
    content: '""',
    height: "1.3px",
    width: "80%",
    position: "absolute",
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
  },
  backgroundColor: "white",
  border: "1px solid grey",
  textTransform: "none",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const StyledIcon = styled(ArrowRightAltIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: "white",
  borderRadius: "50%",
}));

const StyledIcon2 = styled(ArrowRightAltIcon)(({ theme }) => ({
  color: "white",
  backgroundColor: "#1c1a1a",
  borderRadius: "50%",
}));

const StyledText = styled(Typography)(({ theme }) => ({
  maxWidth: "38%",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 36,
    maxWidth: "100%",
  },
}));

const slideImages = [
  {
    url: Slider1,
    caption: "Yenilenebilir Kaynaklardan Enerji Üretimi 874 MW",
  },
  {
    url: Slider1,
    caption: "Slide 2",
  },
];

const Home = () => {
  const [age, setAge] = React.useState("");
  const [selectedValue, setSelectedValue] = React.useState("a");

  const history = useHistory();

  const handleChangeRadio = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="slide-container" >
        <Slide autoplay={true} indicators={true}>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                  height: 700,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <Container>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: 700,
                      justifyContent: "center",
                    }}
                  >
                    <StyledText
                      variant="h3"
                      color="white"
                      gutterBottom
                      component="div"
                    >
                      {slideImage.caption}
                    </StyledText>
                    <Box style={{ display: "flex", flexDirection: "row" }}>
                      <StyledButton
                        startIcon={<StyledIcon />}
                        variant="contained"
                        size="large"
                        sx={{ px: 4, py: 2, width: "20%", mr: 2 }}
                        onClick={() => {
                          history("/enerji");
                          window.scrollTo(0, 0);
                        }}
                      >
                        Devamını Gör
                      </StyledButton>
                    </Box>
                  </Box>
                </Container>
              </div>
            </div>
          ))}
        </Slide>
      </div>

      <Grid container >
        <Grid
          item
          xs={12}
          md={12}
          style={{ width: "100%", backgroundColor: "#1c1a1a" }}
        >
          <Container style={{ padding: "7%" }}>
            <Grid container spacing={1} sx={{ mb: 2 }}>
              <Grid item md={6}>
                <Typography
                  variant="h5"
                  color="white"
                  style={{ fontWeight: 600 }}
                  gutterBottom
                  component="div"
                >
                  Eksim Enerji Hizmetleri
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography
                  variant="body1"
                  color="white"
                  style={{ fontWeight: 600 }}
                  gutterBottom
                  component="div"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <StyledButton
                  startIcon={<StyledIcon />}
                  variant="contained"
                  size="large"
                  sx={{ px: 4, py: 2, mr: 2, mt: 2 }}
                  onClick={() => {
                    history.push("/enerji");
                    window.scrollTo(0, 0);
                  }}
                >
                  Devamını Gör
                </StyledButton>
              </Grid>
              <Grid container spacing={6} sx={{ mt: 1 }}>
                <Grid item md={4} xs={12}>
                  <Card>
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        height: 420,
                        px: 5,
                        backgroundImage: "url(" + Gul + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <Typography
                        variant="h5"
                        color="white"
                        style={{ fontWeight: 600 }}
                        component="div"
                      >
                        Rüzgar Enerjisi <br></br> Santralleri
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item md={4} xs={12}>
                  <Card style={{ minHeight: 100 }}>
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        height: 420,
                        px: 5,
                        backgroundImage: "url(" + Hidro + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <Typography
                        variant="h5"
                        color="white"
                        style={{ fontWeight: 600 }}
                        component="div"
                      >
                        Hidroelektrik <br></br> Santralleri
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item md={4} xs={12}>
                  <Card style={{ minHeight: 100 }}>
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        height: 420,
                        px: 5,
                        backgroundImage: "url(" + Dogal2 + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <Typography
                        variant="h5"
                        color="white"
                        style={{ fontWeight: 600 }}
                        component="div"
                      >
                        Doğalgaz <br></br> Santralleri
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item md={4} xs={12}>
                  <Card>
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        height: 420,
                        px: 5,
                        backgroundImage: "url(" + Gunes + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <Typography
                        variant="h5"
                        style={{ fontWeight: 600 }}
                        color="white"
                        component="div"
                      >
                        Güneş Enerjisi <br></br> Santralleri
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={4} xs={12}>
                  <Card
                    style={{
                      height: 460,
                      width: "100%",
                      display: "flex",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        position: "relative",
                        minHeight: "100%",
                        width: "100%",
                        px: 5,
                        backgroundImage: "url(" + Biyo + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          zIndex: "10",
                          left: 0,
                          top: 0,
                          position: "absolute",
                          background: "#57a6ca8a",
                        }}
                      />
                    </CardContent>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        pb: 3,
                        pl: 4,
                        position: "absolute",
                        zIndex: 20,
                      }}
                      component="div"
                      color="white"
                      alignItems="flex-end"
                    >
                      Biyokütle Enerji <br></br> Santralleri
                    </Typography>
                  </Card>
                </Grid>
                <Grid item md={4} xs={12}>
                <Card
                    style={{
                      height: 460,
                      width: "100%",
                      display: "flex",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        position: "relative",
                        minHeight: "100%",
                        width: "100%",
                        px: 5,
                        backgroundImage: "url(" + Elektrik3 + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          zIndex: "10",
                          left: 0,
                          top: 0,
                          position: "absolute",
                          background: "#e8857e8c",
                        }}
                      />
                    </CardContent>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        pb: 3,
                        pl: 4,
                        position: "absolute",
                        zIndex: 20,
                      }}
                      component="div"
                      color="white"
                      alignItems="flex-end"
                    >
                      Elektrik  <br></br> Ticareti
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>

      <MapComponent />

      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          style={{
            width: "100%",
            backgroundImage: "url(" + Yesil + ")",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position:'relative'
          }}
        >
          <Box sx={{position:"absolute",width:"100%",height:"100%",background: "#3fa435e8"}}></Box>

          <Container sx={{ padding: "7% 7% 0%" }}>
            <Grid container spacing={5} sx={{ mb: 2, pr: 4 }}>
              <Grid item md={5} sx={{ zIndex:300 }}>
                <Typography
                  variant="h4"
                  color="white"
                  sx={{ fontWeight: 600, pb: 2 }}
                  gutterBottom
                  component="div"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut{" "}
                </Typography>

                <Typography
                  variant="body1"
                  color="white"
                  gutterBottom
                  component="div"
                  lineHeight={2}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt utLorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt utLorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut do eiusmod tempor incididunt utLorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut do eiusmod tempor incididunt utLorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut
                </Typography>
              </Grid>
              <Grid item md={7} xs={12} sx={{ zIndex:300 }}>
                <Card
                  sx={{
                    width: "100%",
                    p: 2,
                    borderRadius: "3%",
                    height: "105%",
                    boxShadow: 3,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: 600, mb: 3 }}
                    >
                      Bize Ulaşın
                    </Typography>
                    <Grid container spacing={3} sx={{ mb: 2 }}>
                      <Grid item md={6}>
                        <TextField
                          id="outlined-basic"
                          fullWidth
                          label="Ad Soyad"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6}>
                        <TextField
                          id="outlined-basic"
                          fullWidth
                          label="Email"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6}>
                        <TextField
                          id="outlined-basic"
                          fullWidth
                          label="Telefon"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item md={6}>
                        <TextField
                          id="outlined-basic"
                          fullWidth
                          label="Adres"
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: 600, mb: 3 }}
                    >
                      Lorem Ipsum
                    </Typography>
                    <Grid container spacing={3} sx={{ mb: 2 }}>
                      <Grid item md={6} xs={12}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Age
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Age
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Age
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Age
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Age
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Age
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: 600, mb: 3 }}
                    >
                      Lorem Ipsum
                    </Typography>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-form-control-label-placement"
                        name="position"
                        defaultValue="top"
                      >
                        <FormControlLabel
                          value="tümü"
                          control={<Radio />}
                          label="Tümü"
                        />
                        <FormControlLabel
                          value="email"
                          control={<Radio />}
                          label="Email"
                        />
                        <FormControlLabel
                          value="telefon"
                          control={<Radio />}
                          label="Telefon"
                        />
                      </RadioGroup>
                    </FormControl>
                    <StyledButton3
                      fullWidth
                      startIcon={<StyledIcon />}
                      variant="contained"
                      size="large"
                      sx={{ px: 4, py: 2, mt: 2 }}
                    >
                      Devamını Gör
                    </StyledButton3>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid container sx={{ mt: 5 }}>
          <Container sx={{ my: 5 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, my: 3 }}
              component="div"
              textAlign="center"
            >
              Bizden Haberler
            </Typography>
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <Card sx={{ border: 0, boxShadow: 0 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={Image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <StyledCardButton
                      sx={{ px: 2 }}
                      startIcon={<StyledIcon2 />}
                      size="medium"
                    >
                      Devamını Oku
                    </StyledCardButton>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4} xs={12}>
                <Card sx={{ border: 0, boxShadow: 0 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={Image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <StyledCardButton
                      sx={{ px: 2 }}
                      startIcon={<StyledIcon2 />}
                      size="medium"
                    >
                      Devamını Oku
                    </StyledCardButton>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4} xs={12}>
                <Card sx={{ border: 0, boxShadow: 0 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={Image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <StyledCardButton
                      sx={{ px: 2 }}
                      startIcon={<StyledIcon2 />}
                      size="medium"
                    >
                      Devamını Oku
                    </StyledCardButton>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
