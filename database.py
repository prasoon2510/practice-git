from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker,DeclarativeBase
DATABASE_URL="mysql+pymysql://root:vasanti3013@localhost:3306/fastapi_db"
engine=create_engine(DATABASE_URL)
SessionLocal=sessionmaker(bind=engine)
Base=DeclarativeBase()
def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()