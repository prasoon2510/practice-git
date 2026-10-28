from database import get_db
from model import FoodOrders,FoodResponseModel
from fastapi import APIRouter,Depends
from sqlalchemy import select
from fastapi import HTTPException
router=APIRouter()
@router.post("/v1/orders")
def create_orders(food:FoodResponseModel,db=Depends(get_db)):
    db_food=FoodOrders(customer_name=food.customer_name,food_item=food.food_item,quantity=food.quantity,price=food.price)
    db.add(db_food)
    db.commit()
    db.refresh(db_food)
    return {
        "msg":"data created successfully"
    }

@router.get("/v1/orders")
def get_orders(db=Depends(get_db)):
    db_food=db.scalars(select(FoodOrders)).all()
    return {
        "data": db_food
    }

@router.get("/v1/orders/{id}")
def get_order(id:int,db=Depends(get_db)):
    db_food=db.get(FoodOrders,id)
    if db_food is None:
        raise HTTPException(status_code=404,detail="order not found")
    return {
        "data":db_food
    }
@router.put("/v1/orders/{id}")
def update_orders(id:int,food:FoodResponseModel,db=Depends(get_db)):
    db_food=db.get(FoodOrders,id)
    if db_food is None:
        raise HTTPException(status_code=404,detail="order not found")
    db_food.customer_name = food.customer_name
    db_food.food_item=food.food_item
    db_food.quantity=food.quantity
    db_food,price=food.price
    db.commit()
    db.refresh(db_food)
    return {
        "msg":"updated successfully",
    }
@router.delete("/v1/orders/{id}")
def delete(id:int,db=Depends(get_db)):
    db_food=db.get(FoodOrders,id)
    if db_food is None:
        raise HTTPException(status_code=404,detail="order not found")
    db.delete(db_food)
    db.commit()
    return {
        "msg": "order deleted successfully"
        }