import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import Image from "./assets/kurumsal.jpg";
import { styled } from "@mui/material/styles";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

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
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Kurumsal = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            height: 200,
            width: "100%",
            backgroundImage: "url(" + Image + ")",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Grid>
      </Grid>

      <Container sx={{ my: 5 }}>
        <Grid container spacing={5}>
          <Grid item md={12} xs={12}>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: 414,
              }}
            >
              <Grid item md={2}>
                <Tabs
                  orientation="vertical"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{ borderRight: 1, borderColor: "divider" }}
                >
                  <Tab label="Kurucularımız" {...a11yProps(0)} />
                  <Tab label="Yönetim Kadrosu" {...a11yProps(1)} />
                  <Tab label="Tarihçe" {...a11yProps(2)} />
                  <Tab label="Şirket Profili" {...a11yProps(3)} />
                </Tabs>
              </Grid>

              <Grid item md={10}>
                <TabPanel value={value} index={0}>
                  <Typography
                    sx={{ mb: 2, fontWeight: "bold" }}
                    component="div"
                    variant="h6"
                   
                  >
                    Hakkımızda
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mb: 2, fontWeight: "bold" }}
                    component="div"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                  Item Four
                </TabPanel>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Kurumsal;
