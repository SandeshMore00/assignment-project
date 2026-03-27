from  fastapi import FastAPI, APIRouter, Query, HTTPException
from app.utility.logging_utility import log
from app.microservice.company.company_service import search_company_service

router_v1 = APIRouter(prefix="/api")

@router_v1.get("/search")
async def search_company_handler(
    query : str = Query(...)
):
    try:
        result = await search_company_service(query)

        return result

    except HTTPException as http_exc:
        raise http_exc

    except Exception as e:
        log.error(f"[COMPANY_ROUTE] Unable to Fetch Company Data : {e}")


