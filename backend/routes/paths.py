from fastapi import *
from pydantic import BaseModel
import subprocess
from fastapi.responses import FileResponse
import csv

class body(BaseModel):
    name: str
    dob: str
    age: int
    phoneno: int
    gender: str
    aadharno: int
    region: str
    religion: str
    pincode: int
    locality: str
    mothertongue: str
    familyno: int
    married: str
    diseases: str
    education: str
    employed: str
    income: int
    occupation: str
    vaccinated: str
    infected: str
    connectivity: str

router = APIRouter()

@router.post('/submit-form/')
async def submit_form(body: body): 
    edu = ["Primary","Secondary","Senior Secondary","Graduate","Post Graduate","Doctrate"]
    conn = ["3G","4G","5G","Broadband"]

    def checkgender(gender):
        if gender == 'M':
            gender = 0
        else:
            gender = 1
        return gender

    def checklocality(locality):
        if locality == 'Urban':
            locality = 1
        else:
            locality = 0
        return locality

    def checkemployed(employed):
        if employed == 'Unemployed':
            employed = 0
        else:
            employed = 1
        return employed

    def checkincome(income):
        if income > 0 and income < 70000 :
            income = 1
        elif income >= 70000 and income <= 300000:
            income = 2
        else:
            income = 3
        return income

    def checkeducation(education):
        if education not in edu:
            education = 0
        else:
            education = 1
        return education

    def checkmarried(married):
        if married == 'Single':
            married = 0
        else:
            married = 1
        return married

    def checkvaccinated(vaccinated):
        if vaccinated == "Not Vaccinated":
            vaccinated = 0
        elif vaccinated == "1 Dose taken":
            vaccinated = 1
        else:
            vaccinated = 2
        return vaccinated

    def checkinfected(infected):
        if infected == 'No':
            infected = 0
        else:
            infected = 1
        return infected

    def checkconnectivity(connectivity):
        if connectivity not in conn:
            connectivity = 0
        else:
            connectivity = 1
        return connectivity    

    row = [f"{body.name}",f"{body.phoneno}",f"{body.aadharno}",f"{body.age}",f"{body.dob[0:10]}",f"{checkgender(body.gender)}",
    f"{checklocality(body.locality)}",f"{body.familyno}",f"{checkemployed(body.employed)}",f"{checkincome(body.income)}",
    f"{checkeducation(body.education)}",f"{body.region}",f"{body.religion}",f"{body.mothertongue}",f"{checkmarried(body.married)}",
    f"{body.occupation}",f"{body.diseases}",f"{checkvaccinated(body.vaccinated)}",f"{checkinfected(body.infected)}",\
    f"{checkconnectivity(body.connectivity)}"]

    with open('census-data.csv', 'a' ,newline='') as f:
        writer = csv.writer(f)
        writer.writerow(row)
        f.close()
    subprocess.call(["./execute.sh"])
    return FileResponse('census-data-analysis.html')
    