from sqlalchemy import Integer,BigInteger, String, Column, create_engine
from sqlalchemy.orm import declarative_base, sessionmaker
import random
import requests

API_url= "https://restcountries.com/v3.1/all?fields=name,capital,flag,subregion,population"
engine=create_engine("sqlite:///countries.db")
localSession=sessionmaker(bind=engine)
Base=declarative_base()

class Countries(Base):
    __tablename__="Countries"
    id=Column(Integer, primary_key=True)
    name=Column(String(200), nullable=False, unique=True)
    capital=Column(String(200), nullable=False)
    flag=Column(String(200))
    subregion=Column(String(200))
    population= Column(BigInteger)
Base.metadata.create_all(bind=engine)

def normlize_country(raw):
    #safe extraction form countries data
    name=(raw.get("name") or {}).get("common") or (raw.get("name") or {}).get("official") or "Unknwon"
    capital_list=raw.get("capital") or []
    capital=capital_list[0] if capital_list else None
    flag=raw.get("flag")
    subregion=raw.get("subregion")
    population=raw.get("population")
    return {
        "name":name,
        "capital":capital,
        "flag":flag,
        "subregion":subregion,
        "population":population
    }
def fetch_all_countries():
    resp=requests.get(API_url)
    resp.raise_for_status()
    return resp.json()
def rand_countries(countries, k=10):
    filtred=[c for c in countries if (c.get("name") or {}).get("common")]
    if len(filtred)<k:
        k=len(filtred)
    return random.sample(filtred,k)

def save_countries(records):
    with localSession() as session:
        for r in records:
            data=normlize_country(r)
            existe=session.query(Countries).filter(Countries.name==data["name"]).first()
            if existe:
                continue
            session.add(Countries(**data))
        session.commit()

def main()-> None:
    print("fetching countries...")
    all_countries= fetch_all_countries()
    selected= rand_countries(all_countries,k=10)
    save_countries(selected)
    print("Done, saved 10 counties randomly in countries.db")

if __name__ == "__main__":
    main()
