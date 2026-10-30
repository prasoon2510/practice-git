from database1 import Base,engine
from fastapi import FastAPI
from controllers import router
app = FastAPI()
Base.metadata.create_all(bind=engine)
app.include_router(router)