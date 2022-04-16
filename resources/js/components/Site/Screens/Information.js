import { Accordion, Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import Image from "./assets/enerji.jpg";

// const StyledAccordion = styled(Accordion)(({ theme }) => ({
//   backgroundColor: 'black',
//   '&:focus': {
//     backgroundColor: 'green',
//   }
// }));

const Information = () => {
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
            <Typography
              variant="h3"
              style={{ textAlign: "center" }}
              color="white"
              component="div"
            >
              Bilgi Toplumu Hizmetleri
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container sx={{ my: 5, }}>
        <Grid item xs={12} md={12} sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            style={{ textAlign: "center", fontWeight: "bold" }}
            component="div"
          >
            Şirket Bilgileri
          </Typography>
        </Grid>

        <Container>
          <Grid container spacing={5}>
            <Grid item md={6}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "100%", flexShrink: 0 }}>
                    Firma Bilgileri
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>

            <Grid item md={6}>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: "100%", flexShrink: 0 }}>
                    Yönetim Kurulu
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>

            <Grid item md={6}>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: "100%", flexShrink: 0 }}>
                    Denetçi
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>

            <Grid item md={6}>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<AddIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: "100%", flexShrink: 0 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Information;
