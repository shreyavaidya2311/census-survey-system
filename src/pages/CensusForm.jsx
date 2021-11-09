import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@mui/material";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import axios from "axios";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { BarChart } from "@mui/icons-material";
import { saveAs } from "file-saver";

const steps = ["Page 1", "Page 2", "Page 3"];

const CensusForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [firstName, setFirstName] = useState(null);
  const [middleName, setMiddleName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [dob, setDOB] = useState(new Date());
  const [age, setAge] = useState(null);
  const [phoneno, setPhoneNo] = useState(null);
  const [gender, setGender] = useState(null);
  const [aadharno, setAadharNo] = useState(null);
  const [region, setRegion] = useState(null);
  const [religion, setReligion] = useState(null);
  const [pincode, setPincode] = useState(null);
  const [locality, setLocality] = useState(null);
  const [mothertongue, setMotherTongue] = useState(null);
  const [familyno, setFamilyNo] = useState(null);
  const [married, setMarried] = useState(null);
  const [diseases, setDiseases] = useState(null);
  const [education, setEducation] = useState(null);
  const [employed, setEmployed] = useState(null);
  const [income, setIncome] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [vaccinated, setVaccinated] = useState(null);
  const [infected, setInfected] = useState(null);
  const [connectivity, setConnectivity] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Page1
            firstName={firstName}
            setFirstName={setFirstName}
            middleName={middleName}
            setMiddleName={setMiddleName}
            lastName={lastName}
            setLastName={setLastName}
            dob={dob}
            setDOB={setDOB}
            age={age}
            setAge={setAge}
            phoneno={phoneno}
            setPhoneNo={setPhoneNo}
            gender={gender}
            setGender={setGender}
            aadharno={aadharno}
            setAadharNo={setAadharNo}
          />
        );
      case 1:
        return (
          <Page2
            region={region}
            setRegion={setRegion}
            religion={religion}
            setReligion={setReligion}
            pincode={pincode}
            setPincode={setPincode}
            locality={locality}
            setLocality={setLocality}
            mothertongue={mothertongue}
            setMotherTongue={setMotherTongue}
            familyno={familyno}
            setFamilyNo={setFamilyNo}
            married={married}
            setMarried={setMarried}
            diseases={diseases}
            setDiseases={setDiseases}
          />
        );
      case 2:
        return (
          <Page3
            education={education}
            setEducation={setEducation}
            employed={employed}
            setEmployed={setEmployed}
            income={income}
            setIncome={setIncome}
            occupation={occupation}
            setOccupation={setOccupation}
            vaccinated={vaccinated}
            setVaccinated={setVaccinated}
            infected={infected}
            setInfected={setInfected}
            connectivity={connectivity}
            setConnectivity={setConnectivity}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleValidate = () => {
    const body = {
      name: firstName + " " + middleName + " " + lastName,
      dob,
      age,
      phoneno,
      gender,
      aadharno,
      region,
      religion,
      pincode,
      locality,
      mothertongue,
      familyno,
      married,
      diseases,
      education,
      employed,
      income,
      occupation,
      vaccinated,
      infected,
      connectivity,
    };
    var sbody = JSON.stringify(body);
    var blob = new Blob([sbody], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "info.txt");
  };
  const handleSubmit = () => {
    const body = {
      name: firstName + " " + middleName + " " + lastName,
      dob,
      age,
      phoneno,
      gender,
      aadharno,
      region,
      religion,
      pincode,
      locality,
      mothertongue,
      familyno,
      married,
      diseases,
      education,
      employed,
      income,
      occupation,
      vaccinated,
      infected,
      connectivity,
    };
    setLoading(true);
    axios
      .post("http://localhost:8000/submit-form/", body)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        handleNext();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (analytics) {
    return (
      <>
        <Navbar />
        <div
          style={{ marginTop: "7em" }}
          dangerouslySetInnerHTML={{ __html: data }}
        />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "7em" }}>
        {loading ? (
          <Loader />
        ) : (
          <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <>
                {activeStep === steps.length ? (
                  <>
                    <center>
                      <Typography variant="h6" gutterBottom>
                        The form has been submitted successfully!
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<BarChart />}
                        onClick={() => setAnalytics(true)}
                      >
                        View Analytics
                      </Button>
                    </center>
                  </>
                ) : (
                  <>
                    {getStepContent(activeStep)}
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                          Back
                        </Button>
                      )}
                      {activeStep === steps.length - 1 ? (
                        <>
                          <Button
                            variant="outlined"
                            onClick={handleValidate}
                            sx={{ mt: 3, ml: 1 }}
                          >
                            Validate
                          </Button>
                          <Button
                            variant="contained"
                            onClick={handleSubmit}
                            sx={{ mt: 3, ml: 1 }}
                          >
                            Submit
                          </Button>
                        </>
                      ) : (
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 3, ml: 1 }}
                        >
                          Next
                        </Button>
                      )}
                    </Box>
                  </>
                )}
              </>
            </Paper>
          </Container>
        )}
      </div>
    </>
  );
};

export default CensusForm;
