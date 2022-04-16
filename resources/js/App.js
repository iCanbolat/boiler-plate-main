import { BrowserRouter, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import Layout from "./components/Site/Layout/Layout";
import Information from "./components/Site/Screens/Information";
import Energy1 from "./components/Site/Screens/Energy1";
import Humanr from "./components/Site/Screens/Humanr";
import Dogal from "./components/Site/Screens/Dogal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Electric from "./components/Site/Screens/Electric";
import Contact from "./components/Site/Screens/Contact";
import Home from "./components/Site/Screens/Home";
import "react-slideshow-image/dist/styles.css";
import Wind from "./components/Site/Screens/Wind";
import Hakkımızda from "./components/Site/Screens/Hakkımızda";
import Kurumsal from "./components/Site/Screens/Kurumsal";
import NotFound from "./components/Site/Screens/NotFound";

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
                        <Route path="/" exact element={<Home />} />
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
