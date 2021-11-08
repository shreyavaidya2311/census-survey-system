import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar color="secondary" style={{ boxShadow: "none" }}>
        <Toolbar>
          <Typography variant="overline" style={{ fontSize: "1.25em" }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <b> Census Survey System</b>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
