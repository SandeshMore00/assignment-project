import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from app.microservice.company.company_rount import router_v1 as company_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

app.include_router(company_router)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=9000)