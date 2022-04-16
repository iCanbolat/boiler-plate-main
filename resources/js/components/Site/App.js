import { BrowserRouter, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import Layout from "./Layout/Layout";
import Information from "./Screens/Information";
import Energy1 from "./Screens/Energy1";
import Humanr from "./Screens/Humanr";
import Dogal from "./Screens/Dogal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Electric from "./Screens/Electric";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
import "react-slideshow-image/dist/styles.css";
import Wind from "./Screens/Wind";
import Hakkımızda from "./Screens/Hakkımızda";
import Kurumsal from "./Screens/Kurumsal";
import NotFound from "./Screens/NotFound";

const x = "#FF0000";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#3fa435",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: x,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
              <Route path="/" exact  > <Home/></Route>
            <Route path="/bilgi" element={<Information />} />
            <Route path="/enerji" element={<Energy1 />} />
            <Route path="/ruzgar-enerjisi" element={<Wind />} />
            <Route path="/insan-kaynaklari" element={<Humanr />} />
            <Route path="/dogalgaz-ithalat" element={<Dogal />} />
            <Route path="/elektrik-satis" element={<Electric />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/kurumsal" element={<Kurumsal />} />
            <Route path="*" element={<NotFound />} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
