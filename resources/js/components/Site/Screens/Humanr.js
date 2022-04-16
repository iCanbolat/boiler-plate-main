import React from "react";
import Image from "./image.png";
import {
  Accordion,
  Box,
  Button,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Banner from "./assets/ikbanner.jpg"

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "#F0F0F0",
}));

const Humanr = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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
            backgroundImage: "url(" + Banner + ")",
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
              İnsan Kaynakları
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Container sx={{ my: 5 }}>
        <Typography variant="h5" sx={{ mb: 5 }} component="div">
          Politikalarımız
        </Typography>
        <Grid container spacing={5}>
          <Grid item md={12}>
            <StyledAccordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "100%", flexShrink: 0 }}>
                  İŞE ALIM
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          </Grid>

          <Grid item md={12}>
            <StyledAccordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: "100%", flexShrink: 0 }}>
                  GELİŞİM PROGRAMLARI
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          </Grid>

          <Grid item md={12}>
            <StyledAccordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: "100%", flexShrink: 0 }}>
                  KARİYER PLANLAMA
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          </Grid>

          <Grid item md={12}>
            <StyledAccordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: "100%", flexShrink: 0 }}>
                  ÜCRET VE SOSYAL HAKLAR
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          </Grid>

          <Grid item md={12}>
            <StyledAccordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
              >
                <Typography sx={{ width: "100%", flexShrink: 0 }}>
                  PERFORMANS SİSTEMİ
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </StyledAccordion>
          </Grid>

          <Grid item md={12} xs={12}>
            <Typography
              variant="h5"
              sx={{
                mb: 5,
                textAlign: "center",
                color: "#3fa435",
                fontWeight: "bold",
              }}
              component="div"
            >
              Açık Pozisyonlar
            </Typography>
          </Grid>

          <Grid item md={6} xs={12}>
            <Button
              style={{
                minHeight: 100,
                width: "100%",
                backgroundColor: "#3fa435",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: 100,
                  color: "white",
                }}
              >
                <Typography variant="h6" component="div">
                  Aday Profilim <br></br> Mevcut
                </Typography>
              </CardContent>
            </Button>
          </Grid>

          <Grid item md={6} xs={12}>
            <Button
              style={{
                minHeight: 100,
                width: "100%",
                backgroundColor: "#2b2b2b",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: 100,
                  color: "white",
                }}
              >
                <Typography variant="h6" component="div">
                  Aday Profilim <br></br> Mevcut Değil
                </Typography>
              </CardContent>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Humanr;
