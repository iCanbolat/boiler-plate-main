import React from "react";
import Image from "./assets/enerji.jpg";
import Gul from "./assets/gul.jpg";
import Hidro from "./assets/hidro.jpg"
import Gunes from "./assets/gunes.jpg"
import Biyo from "./assets/biyo.jpg"
import {
  Box,
  CardActionArea,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {useHistory} from 'react-router-dom';

const Energy1 = () => {
  const history = useHistory();

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
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" color="white" component="div">
              Enerji Üretim
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Container sx={{ my: 5 }}>
        <Grid container spacing={6}>
          <Grid item md={6} xs={12}>
            <CardActionArea
              onClick={() => {
                history.history("/ruzgar-enerjisi");
                window.scrollTo(0, 0);
              }}
            >
              <Card style={{ minHeight: 500 }}>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    height: 500,
                    px: 5,
                    width: "100%",
                    backgroundImage: "url(" + Gul + ")",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <Typography variant="h4" color='white' component="div">
                    Rüzgar Enerjisi <br></br> Santralleri
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>

          <Grid item md={6} xs={12}>
            <CardActionArea>
              <Card style={{ minHeight: 500 }}>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    height: 500,
                    px: 5,
                    backgroundImage: "url(" + Hidro + ")",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <Typography
                  variant="h4" color='white' component="div">
                    Hidroelektrik <br></br> Santralleri
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>

          <Grid item md={6} xs={12}>
            <CardActionArea>
              <Card style={{ minHeight: 500 }}>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    height: 500,
                    px: 5,
                    backgroundImage: "url(" + Gunes + ")",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <Typography variant="h4" color='white' component="div">
                    Güneş Enerjisi <br></br> Santralleri
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>

          <Grid item md={6} xs={12}>
            <CardActionArea>
              <Card style={{ minHeight: 500 }}>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    height: 500,
                    px: 5,
                    backgroundImage: "url(" + Biyo + ")",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    position:'relative'
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
                  <Typography
                  sx={{
                    position: "absolute",
                    zIndex: 20,
                  }}
                  variant="h4" color='white' component="div">
                    Biyokütle Enerji <br></br> Santralleri
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Energy1;
