from fastapi import APIRouter
from fastapi import Depends
from models1 import Actors,ActorsRequestResponseModel
from database1 import get_db
from fastapi import HTTPException
router = APIRouter()
@router.post("/actor")
def post_actor(actor:ActorsRequestResponseModel,db = Depends(get_db)):
    db_actor = Actors(name = actor.name, age = actor.age, debut_movie = actor.debut_movie)
    db.add(db_actor)
    db.commit()
    db.refresh(db_actor)
    return {"Message" : "Data Added Succsessfully"}
@router.get("/actor")
def get_actors(db = Depends(get_db)):
    data = db.query(Actors).all()
    return {"DATA":data}
@router.get("/actors/{id}")
def get_actor_id(id:int,db =Depends(get_db)):
    data_id = db.query(Actors).filter(Actors.id == id).first()
    if data_id is None:
        raise HTTPException (status_code=404,detail="Not found")
    return {
        "data ":data_id
    }
@router.put("/actors/{id}")
def update_actors(id:int,actors:ActorsRequestResponseModel,db = Depends(get_db)):
    data_actor_id = db.query(Actors).filter(Actors.id == id).first()
    if data_actor_id is None:
        raise HTTPException(status_code=404,detail="Id not Found")
    data_actor_id.name = actors.name
    data_actor_id.age = actors.age
    data_actor_id.debut_movie = actors.debut_movie
    db.commit()
    db.refresh(data_actor_id)
    return {
        "msg":"Updates Succsessfully"
    }
@router.delete("/actor/{id}")
def delete_actor(id:int,db = Depends(get_db)):
    db_delete = db.query(Actors).filter(Actors.id == id).first()
    if db_delete is None:
        raise HTTPException (status_code=404,detail="ID NOT FOUND")
    db.delete(db_delete)
    db.commit()
    return {"Msg": "delete successfully"}

