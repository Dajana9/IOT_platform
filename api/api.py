from flask import Flask
import time

app = Flask(__name__)


@app.route("/")
def hello():
  return "Hello Woaarld!"


@app.route("/time")
def get_current_time():
  return {"time":time.time()}
