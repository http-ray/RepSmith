from flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return 'Fitness Tracker API running!'
