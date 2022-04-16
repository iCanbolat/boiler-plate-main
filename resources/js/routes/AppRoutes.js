import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "../routes/helpers";
import ProtectedRoutes from "../routes/ProtectedRoutes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Information from '/resources/js/components/Site/Screens/Information';
import Contact from '/resources/js/components/Site/Screens/Contact';
import Energy1 from '/resources/js/components/Site/Screens/Energy1';
import Wind from '/resources/js/components/Site/Screens/Wind';
import Humanr from '/resources/js/components/Site/Screens/Humanr';
import Dogal from '/resources/js/components/Site/Screens/Dogal';
import Electric from '/resources/js/components/Site/Screens/Electric';
import Kurumsal from '/resources/js/components/Site/Screens/Kurumsal';
import Home from '/resources/js/components/Site/Screens/Home';
import Layout from '/resources/js/components/Site/Layout/Layout';


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

export function AppRoutes({ isAuthenticated }) {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <ThemeProvider theme={theme}>
                <Switch>
                    <Layout>
                    <PublicRoute path="/" exact>
                        <Home />
                    </PublicRoute>
                    <PublicRoute path="/iletisim" >
                        <Contact />
                    </PublicRoute>
                    <PublicRoute path="/bilgi" >
                        <Information />
                    </PublicRoute>
                    <PublicRoute path="/enerji" >
                        <Energy1 />
                    </PublicRoute>
                    <PublicRoute path="/ruzgar-enerjisi" >
                        <Wind />
                    </PublicRoute>
                    <PublicRoute path="/insan-kaynaklari" >
                        <Humanr />
                    </PublicRoute>
                    <PublicRoute path="/dogalgaz-ithalat" >
                        <Dogal />
                    </PublicRoute>
                    <PublicRoute path="/elektrik-satis" >
                        <Electric />
                    </PublicRoute>
                    <PublicRoute path="/kurumsal" >
                        <Kurumsal />
                    </PublicRoute>
                    </Layout>
                    <PublicRoute
                        path="/login"
                        isAuthenticated={isAuthenticated}
                        exact
                    >
                        <LoginPage />
                    </PublicRoute>
                    <PrivateRoute path="/admin" isAuthenticated={isAuthenticated}>
                        <ProtectedRoutes />
                    </PrivateRoute>
                </Switch>
                </ThemeProvider>

            </Suspense>
        </Router>
    );
}
