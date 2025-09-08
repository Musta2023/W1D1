import os, psycopg2
from dotenv import load_dotenv
load_dotenv(override=True, encoding="utf-8")

cfg = {k: os.getenv(k) for k in ["PGHOST","PGPORT","PGDATABASE","PGUSER","PGPASSWORD"]}
print("ENV:", cfg)

try:
    conn = psycopg2.connect(
        host=cfg["PGHOST"], port=cfg["PGPORT"],
        dbname=cfg["PGDATABASE"], user=cfg["PGUSER"], password=cfg["PGPASSWORD"]
    )
    with conn.cursor() as cur:
        cur.execute("SELECT version(), current_database();")
        print("✅ Connecté:", cur.fetchone())
    conn.close()
except Exception as e:
    print("❌ Échec:", repr(e))
