import { Grid, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight:'60vh' }}
      >
        <Typography variant="h3" gutterBottom component="div">
          404
        </Typography>
        <Typography variant="h5" gutterBottom component="div">
          Sayfa Bulunamadı
        </Typography>
      </Grid>
    </>
  );
};

export default NotFound;
