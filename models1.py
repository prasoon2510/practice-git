from sqlalchemy import Column,INTEGER,String
from database1 import Base
from pydantic import BaseModel
class Actors(Base):
    __tablename__ = "actors"
    id = Column (INTEGER,primary_key=True)
    name = Column (String(100))
    age = Column(INTEGER)
    debut_movie = Column (String(1000))
class ActorsRequestResponseModel(BaseModel):
    id : int
    name : str
    age : int
    debut_movie : str


