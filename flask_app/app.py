from flask import Flask, render_template, jsonify
import pandas as pd

app = Flask(__name__)

# File path for the refined CSV
csv_file_path = "/Users/faisaldernawi/Desktop/Training_And_Development/GW_Bootcamp/Homework/Project_3/flask_app/data/merged_data.csv" 

# Load the dataset
def load_data():
    return pd.read_csv(csv_file_path)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/tracts")
def get_tracts():
    data = load_data()
    data["tract"] = data["tract"].astype(str).str.zfill(6)
    print(data)
    # Convert the data to JSON format (using records for row-based structure)
    return jsonify(data.to_dict(orient="records"))

if __name__ == "__main__":
    app.run(debug=True)