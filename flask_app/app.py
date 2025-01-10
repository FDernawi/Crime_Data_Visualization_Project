from flask import Flask, render_template, jsonify
import pandas as pd

app = Flask(__name__)

# File path for the refined CSV
csv_file_path = "/Users/faisaldernawi/Desktop/Training_And_Development/GW_Bootcamp/Homework/Project_3/flask_app/data/merged_data.csv"

# Load the dataset
def load_data():
    # Ensure the data is loaded and cleaned properly
    data = pd.read_csv(csv_file_path)
    data["tract"] = data["tract"].astype(str).str.zfill(6)  # Ensure tract numbers are zero-padded
    return data

@app.route("/")
def index():
    # Serve the main HTML file
    return render_template("index.html")

@app.route("/api/tracts")
def get_tracts():
    # Provide data for the GeoJSON layer
    data = load_data()
    return jsonify(data.to_dict(orient="records"))

if __name__ == "__main__":
    # Start the Flask application
    app.run(debug=True)