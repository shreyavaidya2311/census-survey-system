import React from "react";
import image from "../assets/india.jpg";
import Navbar from "../components/Navbar";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Grid container style={{ marginTop: "8em" }} justifyContent="center">
        <Grid item lg={5} style={{ marginRight: "5em" }}>
          <Typography variant="h4">What is Census?</Typography>
          <br />

          <Typography style={{ fontSize: "1.1em" }}>
            Population Census is the total process of collecting, compiling,
            analyzing or otherwise disseminating demographic, economic and
            social data pertaining, at a specific time, of all persons in a
            country or a well-defined part of a country. As such, the census
            provides snapshot of the country's population and housing at a given
            point of time.
          </Typography>
          <br />
          <br />
          <Typography variant="h4"> Why Census?</Typography>
          <br />

          <Typography style={{ fontSize: "1.1em" }}>
            The census provides information on size, distribution and
            socio-economic, demographic and other characteristics of the
            country's population. The data collected through the census are used
            for administration, planning and policy making as well as management
            and evaluation of various programmes by the government, NGOs,
            researchers, commercial and private enterprises, etc. Census data is
            also used for demarcation of constituencies and allocation of
            representation to parliament, State legislative Assemblies and the
            local bodies. Researchers and demographers use census data to
            analyze growth and trends of population and make projections. The
            census data is also important for business houses and industries for
            strengthening and planning their business for penetration into
            areas, which had hitherto remained, uncovered.
          </Typography>
        </Grid>
        <Grid item lg={5}>
          <img
            style={{ width: "38em", borderRadius: "5%" }}
            src={image}
            alt="img"
          />
          <center>
            <Link
              to="/form"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                size="large"
                style={{
                  marginRight: "7em",
                  marginTop: "1.5em",
                }}
                variant="contained"
                color="info"
              >
                Go to Census Survey
              </Button>
            </Link>
          </center>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
