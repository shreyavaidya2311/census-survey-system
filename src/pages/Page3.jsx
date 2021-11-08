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

const Page3 = (props) => {
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
          <TextField
            id="education"
            select
            label="Education"
            fullWidth
            value={props.education}
            onChange={(e) => props.setEducation(e.target.value)}
          >
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
            <RadioGroup
              row
              name="employment"
              value={props.employed}
              onChange={(e) => props.setEmployed(e.target.value)}
            >
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
            value={props.income}
            onChange={(e) => props.setIncome(e.target.value)}
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
          value={props.occupation}
          onChange={(e) => props.setOccupation(e.target.value)}
        />
      </Grid>
      <center>
        <hr
          style={{
            margin: "1.5em",
            width: "12em",
            border: "0.75px solid #0288d1",
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
            <RadioGroup
              row
              name="vaccine"
              value={props.vaccinated}
              onChange={(e) => props.setVaccinated(e.target.value)}
            >
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
            <RadioGroup
              row
              name="covid"
              value={props.infected}
              onChange={(e) => props.setInfected(e.target.value)}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="connect"
            select
            label="Digital Connectivity"
            value={props.connectivity}
            onChange={(e) => props.setConnectivity(e.target.value)}
            fullWidth
          >
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
