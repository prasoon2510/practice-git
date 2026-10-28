from fastapi import FastAPI
from database1 import Base,Engine
from controller1 import router
app = FastAPI()
Base.metadata.create_all(bind=Engine)
app.include_router(router)

