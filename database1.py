from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker,declarative_base
Db_url = "mysql+pymysql://root:SVC_2005@localhost:3306/movies"
Engine = create_engine(Db_url)
SessionLocal = sessionmaker(bind=Engine)
Base = declarative_base()
def get_db ():
    db = SessionLocal
    try:
        yield db
    finally :
        db.close()



