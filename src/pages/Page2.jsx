import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { Autocomplete } from "@mui/lab";

const Page2 = () => {
  const religion = [
    { value: "Hindu", label: "Hindu" },
    { value: "Muslim", label: "Muslim" },
    { value: "Sikh", label: "Sikh" },
    { value: "Buddhist", label: "Buddhist" },
    { value: "Jain", label: "Jain" },
    { value: "Other", label: "Other" },
  ];
  const region = [
    {
      value: "Ahmednagar",
      label: "Ahmednagar",
    },
    {
      value: "Akola",
      label: "Akola",
    },
    {
      value: "Amravati",
      label: "Amravati",
    },
    {
      value: "Aurangabad",
      label: "Aurangabad",
    },
    {
      value: "Beed",
      label: "Beed",
    },
    {
      value: "Bhandara",
      label: "Bhandara",
    },
    {
      value: "Buldhana",
      label: "Buldhana",
    },
    {
      value: "Chandrapur",
      label: "Chandrapur",
    },
    {
      value: "Dhule",
      label: "Dhule",
    },
    {
      value: "Gadchiroli",
      label: "Gadchiroli",
    },
    {
      value: "Gondia",
      label: "Gondia",
    },
    {
      value: "Hingoli",
      label: "Hingoli",
    },
    {
      value: "Jalgaon",
      label: "Jalgaon",
    },
    {
      value: "Jalna",
      label: "Jalna",
    },
    {
      value: "Kolhapur",
      label: "Kolhapur",
    },
    {
      value: "Latur",
      label: "Latur",
    },
    {
      value: "Mumbai City",
      label: "Mumbai City",
    },
    {
      value: "Mumbai Suburban",
      label: "Mumbai Suburban",
    },
    {
      value: "Nagpur",
      label: "Nagpur",
    },
    {
      value: "Nanded",
      label: "Nanded",
    },
    {
      value: "Nandurbar",
      label: "Nandurbar",
    },
    {
      value: "Nashik",
      label: "Nashik",
    },
    {
      value: "Osmanabad",
      label: "Osmanabad",
    },
    {
      value: "Palghar",
      label: "Palghar",
    },
    {
      value: "Parbhani",
      label: "Parbhani",
    },
    {
      value: "Pune",
      label: "Pune",
    },
    {
      value: "Ratnagiri",
      label: "Ratnagiri",
    },
    {
      value: "Sangli",
      label: "Sangli",
    },
    {
      value: "Satara",
      label: "Satara",
    },
    {
      value: "Sindhudurg",
      label: "Sindhudurg",
    },
    {
      value: "Solapur",
      label: "Solapur",
    },
    {
      value: "Thane",
      label: "Thane",
    },
    {
      value: "Wardha",
      label: "Wardha",
    },
    {
      value: "Washim",
      label: "Washim",
    },
    {
      value: "Yavatmal",
      label: "Yavatmal",
    },
  ];
  return (
    <>
      <center>
        <Typography variant="h6" gutterBottom>
          Regional Information
        </Typography>
      </center>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <Autocomplete
            disablePortal
            id="region"
            options={region}
            fullWidth
            renderInput={(params) => <TextField {...params} label="Region" />}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Autocomplete
            disablePortal
            id="religion"
            options={religion}
            fullWidth
            renderInput={(params) => <TextField {...params} label="Religion" />}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            required
            id="pincode"
            name="pincode"
            label="Pincode"
            type="number"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <FormControl component="fieldset">
            <RadioGroup row name="locality">
              <FormControlLabel
                value="Urban"
                control={<Radio />}
                label="Urban"
              />
              <FormControlLabel
                value="Rural"
                control={<Radio />}
                label="Rural"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="mothertongue"
            name="mothertongue"
            label="Mother Tongue"
            type="text"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <center>
        <hr
          style={{
            margin: "1.5em",
            width: "12em",
            border: "1px solid #7431a7",
            borderRadius: "10px",
          }}
        />
      </center>

      <center>
        <Typography variant="h6" gutterBottom>
          Family Information
        </Typography>
      </center>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fno"
            name="fno"
            label="Number of Family Members"
            type="number"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel>Marital Status</FormLabel>
            <RadioGroup row name="marital">
              <FormControlLabel
                value="Single"
                control={<Radio />}
                label="Single"
              />
              <FormControlLabel
                value="Married"
                control={<Radio />}
                label="Married"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="hereditary"
            name="hereditary"
            label="Hereditary Diseases"
            type="text"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Page2;
