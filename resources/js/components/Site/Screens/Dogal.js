import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "./image.png";
import PublicIcon from "@mui/icons-material/Public";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Dogalgaz from "./assets/dogalgazbanner.jpg";
import Dogal2 from './assets/dogal2.jpg'

const StyledGrid = styled(Grid)(({ theme }) => ({
  paddingLeft: "15%",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "0%",
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "black",
  borderRadius: 0,
  color: "white",
  "&:hover": {
    backgroundColor: "black",
  },
}));

const steps = [
  {
    description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
  },
  {
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
];

const Dogal = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
            backgroundImage: "url(" + Dogalgaz + ")",
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
            <Typography
              variant="h3"
              style={{ textAlign: "center" }}
              color="white"
              component="div"
            >
              Doğal Gaz İthalat
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Container sx={{ my: 5 }}>
        <Grid container spacing={4}>
          <Grid item md={8} xs={12}>
            <Typography
              sx={{ fontWeight: "bolder", color: "#3fa435", ml: 3 }}
              variant="body1"
              gutterBottom
            >
              Eksim Enerji
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", mb: 3 }}
              variant="h4"
              gutterBottom
            >
              Doğal Gaz İthalat
            </Typography>
            <Typography
              sx={{ fontWeight: "bolder", color: "#0c2c7b", mb: 3 }}
              variant="h2"
              gutterBottom
            >
              BATI HATTI
            </Typography>

            <Typography
              sx={{ fontWeight: "bold", color: "#b4b4b4", mb: 4 }}
              variant="body1"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur,
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "#b4b4b4", mb: 4 }}
              variant="body1"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur,
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "#b4b4b4", mb: 4 }}
              variant="body1"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur,
            </Typography>
          </Grid>

          <Grid item md={4} xs={12}>
            <PublicIcon color="primary" sx={{ fontSize: 50, mb: 3 }} />
            <Typography
              sx={{ fontWeight: "bold", mb: 3 }}
              variant="h5"
              gutterBottom
            >
              5 Stars costumer service
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "#b4b4b4" }}
              variant="body1"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur,
            </Typography>

            <PublicIcon color="primary" sx={{ fontSize: 50, my: 3 }} />
            <Typography
              sx={{ fontWeight: "bold", mb: 3 }}
              variant="h5"
              gutterBottom
            >
              Consult & Planning
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "#b4b4b4" }}
              variant="body1"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur,
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Grid container>
        <StyledGrid
          item
          xs={12}
          style={{
            height: 600,
            width: "100%",
            backgroundImage: "url(" + Dogal2 + ")",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Container
            sx={{
              py: 4,
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "flex-start",
            }}
          >
            <Card sx={{ width: 400, p: 2 }}>
              <CardContent sx={{ p: 5 }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", mb: 3 }}
                  component="div"
                >
                  Eksim Enerji
                </Typography>
                <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
                  <Paper
                    square
                    elevation={0}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pl: 2,
                      bgcolor: "background.default",
                    }}
                  ></Paper>
                  <Box
                    sx={{
                      maxWidth: 360,
                      minHeight: 150,
                      pb: 2,
                      width: "100%",
                    }}
                  >
                    {steps[activeStep].description}
                  </Box>
                  <MobileStepper
                    sx={{ justifyContent: "center" }}
                    variant="none"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                      <StyledButton
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                      >
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowLeft />
                        ) : (
                          <KeyboardArrowRight />
                        )}
                      </StyledButton>
                    }
                    backButton={
                      <StyledButton
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                      >
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowRight />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                      </StyledButton>
                    }
                  />
                </Box>
              </CardContent>
            </Card>
          </Container>
        </StyledGrid>
      </Grid>
    </>
  );
};

export default Dogal;
