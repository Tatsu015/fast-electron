from __future__ import print_function
import time
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message" : "hello"}

if __name__ == "__main__":
    print("Hello!")
    app.run(host="127.0.0.1", port=5000)