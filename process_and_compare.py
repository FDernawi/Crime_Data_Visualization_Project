import pandas as pd
import json

# File paths
geojson_path = "/Users/faisaldernawi/Desktop/Training_And_Development/GW_Bootcamp/Homework/Project_3/flask_app/static/Census_Tracts_in_2020.geojson"
csv_files = {
    "crime_data": "/Users/faisaldernawi/Desktop/Training_And_Development/GW_Bootcamp/Homework/Project_3/Data/Cleaning/crime_data_final_normalized.csv",
    "total_pop_data": "/Users/faisaldernawi/Desktop/Training_And_Development/GW_Bootcamp/Homework/Project_3/Data/Cleaning/total_pop_data_normalized.csv",
    "male_pop_data": "/Users/faisaldernawi/Desktop/Training_And_Development/GW_Bootcamp/Homework/Project_3/Data/Cleaning/male_pop_data_normalized.csv",
    "female_pop_data": "/Users/faisaldernawi/Desktop/Training_And_Development/GW_Bootcamp/Homework/Project_3/Data/Cleaning/female_pop_data_normalized.csv"
}

# Load GeoJSON
with open(geojson_path, 'r') as file:
    geojson_data = json.load(file)

geojson_tracts = set(
    feature["properties"]["TRACT"].zfill(6)  # Ensure zero-padded 6-digit format
    for feature in geojson_data["features"]
)

# Load and merge all CSV files
combined_data = pd.DataFrame()

for name, path in csv_files.items():
    temp_data = pd.read_csv(path)
    temp_data["tract"] = temp_data["tract"].astype(str).str.zfill(6)  # Ensure zero-padded 6-digit format
    temp_data["source"] = name  # Add source column for traceability
    combined_data = pd.concat([combined_data, temp_data], ignore_index=True)

# Extract unique tracts from CSV data
csv_tracts = set(combined_data["tract"])

# Compare GeoJSON and CSV tracts
matching_tracts = geojson_tracts & csv_tracts  # Intersection
missing_in_geojson = csv_tracts - geojson_tracts  # In CSV but not in GeoJSON
missing_in_csv = geojson_tracts - csv_tracts  # In GeoJSON but not in CSV

# Results
print("Total Tracts in GeoJSON:", len(geojson_tracts))
print("Total Tracts in CSV (combined):", len(csv_tracts))
print("Matching Tracts:", len(matching_tracts))
print("Missing in GeoJSON:", len(missing_in_geojson))
print("Missing in CSV:", len(missing_in_csv))

# Optional: Save differences to CSV for debugging
pd.DataFrame({"tract": list(missing_in_geojson)}).to_csv("/Users/faisaldernawi/Desktop/Training_And_Development/GW_Bootcamp/Homework/Project_3/missing_in_geojson.csv", index=False)
pd.DataFrame({"tract": list(missing_in_csv)}).to_csv("/Users/faisaldernawi/Desktop/Training_And_Development/GW_Bootcamp/Homework/Project_3/missing_in_csv.csv", index=False)

# Save combined CSV data for further processing
combined_data.to_csv("/Users/faisaldernawi/Desktop/Training_And_Development/GW_Bootcamp/Homework/Project_3/combined_data.csv", index=False)

# Example Output of Matching Data
print("Sample Matching Tracts:", list(matching_tracts)[:10])