# Import required python libraries
from flask import Flask
import random

# API definition
app = Flask(__name__)

@app.route('/samp1', methods=['GET','POST'])
def sample1():
    res = random.randint(1,100)
 
    return str(res)

@app.route('/samp2', methods=['GET','POST'])
def sample2():
    res = random.randint(1000,2000)
 
    return str(res)
           
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5804, debug=True)