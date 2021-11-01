import React from "react";
import { Grid, Typography, TextField, MenuItem } from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const Page1 = (props) => {
  const handleDate = (newValue) => {
    props.setDOB(newValue);
  };

  const gender = [
    {
      value: "M",
      label: "Male",
    },
    {
      value: "F",
      label: "Female",
    },
    {
      value: "O",
      label: "Other",
    },
  ];
  return (
    <>
      <center>
        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
      </center>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First Name"
            fullWidth
            variant="standard"
            value={props.firstName}
            onChange={(e) => props.setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="middleName"
            name="middleName"
            label="Middle Name"
            fullWidth
            variant="standard"
            value={props.middleName}
            onChange={(e) => props.setMiddleName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last Name"
            fullWidth
            variant="standard"
            value={props.lastName}
            onChange={(e) => props.setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date of Birth"
              inputFormat="dd/MM/yyyy"
              value={props.dob}
              onChange={handleDate}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="age"
            name="age"
            label="Age"
            type="number"
            fullWidth
            variant="standard"
            value={props.age}
            onChange={(e) => props.setAge(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="code"
            name="code"
            label="Country Code"
            value="+91"
            fullWidth
            variant="outlined"
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <TextField
            required
            id="phoneno"
            name="phoneno"
            label="Phone Number"
            type="number"
            fullWidth
            variant="standard"
            value={props.phoneno}
            onChange={(e) => props.setPhoneNo(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="gender"
            select
            label="Gender"
            fullWidth
            value={props.gender}
            onChange={(e) => props.setGender(e.target.value)}
          >
            {gender.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={9}>
          <TextField
            required
            id="aadharno"
            name="aadharno"
            label="Aadhar Card Number"
            type="number"
            fullWidth
            variant="standard"
            value={props.aadharno}
            onChange={(e) => props.setAadharNo(e.target.value)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Page1;
