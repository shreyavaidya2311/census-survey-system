from fastapi import *
from pydantic import BaseModel


class body(BaseModel):
    name: str

router = APIRouter()

@router.post('/submit-form/')
async def submit_form(body: body):
    print(body.name)
    