import React from "react";
import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

const Page3 = () => {
  const education = [
    {
      value: "Primary",
      label: "Primary",
    },
    {
      value: "Secondary",
      label: "Secondary",
    },
    {
      value: "Senior Secondary",
      label: "Senior Secondary",
    },
    {
      value: "Graduate",
      label: "Graduate",
    },
    {
      value: "Post Graduate",
      label: "Post Graduate",
    },
    {
      value: "Doctrate",
      label: "Doctrate",
    },
    {
      value: "None",
      label: "None",
    },
  ];
  const connectivity = [
    {
      value: "3G",
      label: "3G",
    },
    {
      value: "4G",
      label: "4G",
    },
    {
      value: "5G",
      label: "5G",
    },
    {
      value: "Broadband",
      label: "Broadband",
    },
    {
      value: "None",
      label: "None",
    },
  ];
  return (
    <>
      <center>
        <Typography variant="h6" gutterBottom>
          Education {"&"} Employment Information
        </Typography>
      </center>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField id="education" select label="Education" fullWidth>
            {education.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={7}>
          <FormControl component="fieldset">
            <FormLabel>Employment Status</FormLabel>
            <RadioGroup row name="employment">
              <FormControlLabel
                value="Employed"
                control={<Radio />}
                label="Employed"
              />
              <FormControlLabel
                value="Unemployed"
                control={<Radio />}
                label="Unemployed"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            required
            id="income"
            name="income"
            label="Annual Family Income"
            type="number"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="field"
          name="field"
          label="Field of Employment"
          type="text"
          fullWidth
          variant="standard"
        />
      </Grid>
      <center>
        <hr
          style={{
            margin: "1.5em",
            width: "12em",
            border: "0.75px solid royalblue",
            borderRadius: "10px",
          }}
        />
      </center>

      <center>
        <Typography variant="h6" gutterBottom>
          Pandemic related Information
        </Typography>
      </center>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel>Vaccination Status</FormLabel>
            <RadioGroup row name="vaccine">
              <FormControlLabel
                value="Not Vaccinated"
                control={<Radio />}
                label="Not Vaccinated"
              />
              <FormControlLabel
                value="1 Dose taken"
                control={<Radio />}
                label="1 Dose taken"
              />
              <FormControlLabel
                value="Fully Vaccinated"
                control={<Radio />}
                label="Fully Vaccinated"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel>Have you had Covid-19 before?</FormLabel>
            <RadioGroup row name="covid">
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="connect" select label="Digital Connectivity" fullWidth>
            {connectivity.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </>
  );
};

export default Page3;
