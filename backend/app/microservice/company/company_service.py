from fastapi import HTTPException
from app.db.model.db_base import company_list

async def search_company_service(
        query,
):
    try:
        search = [company for company in company_list if query.lower() in company["name"].lower()]

        return search
    
    except Exception as e:
        raise HTTPException(detail="Insernal Server Error", status_code= 500)