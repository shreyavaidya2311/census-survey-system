from fastapi import *
from pydantic import BaseModel
import subprocess
from fastapi.responses import FileResponse
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
    print(body)
    subprocess.call(["./execute.sh"])
    return FileResponse('census-data-analysis.html')
    