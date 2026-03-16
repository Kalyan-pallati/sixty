from fastapi import FastAPI
from pydantic import BaseModel
import resend
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

resend.api_key = "YOUR_RESEND_API_KEY"


class ContactForm(BaseModel):
    firstName: str
    lastName: str
    email: str
    message: str


@app.post("/send-email")
async def send_email(data: ContactForm):

    params: resend.Emails.SendParams = {
    "from": "Acme <onboarding@resend.dev>",
    "to": ["pallatikalyansai@gmail.com"],
    "subject": "hello world",
    "html": "<strong>Shut your bitch ass up </strong>",
    }

    response = resend.Emails.send(params)
    return {"status": "sent", "response": response}