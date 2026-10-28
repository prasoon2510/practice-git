from database import Base
from sqlalchemy import Column,Integer,String
#orm model ------creates a table in database
class FoodOrders:
    __tablename__="food_orders"
    id=Column(Integer,primary_key=True)
    customer_name=Column(String(50))
    food_item=Column(String(50))
    quantity=Column(Integer)
    price=Column(Integer)
#pydantic model----validates the input entered by the user
class FoodResponseModel:
    customer_name:str
    food_item:str
    quantity:int
    price:int
