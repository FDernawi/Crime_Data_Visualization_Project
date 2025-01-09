import pandas as pd
import os

# File paths
files = {
    "crime_data_final": "/Users/faisaldernawi/Desktop/Training_And_Development/GW_Bootcamp/Homework/Project_3/Data/Crime/Refined/crime_data_final.csv",
    "total_pop_data": "/Users/faisaldernawi/Desktop/Training_And_Development/GW_Bootcamp/Homework/Project_3/Data/Education/Refined/total_pop_data.csv",
    "male_pop_data": "/Users/faisaldernawi/Desktop/Training_And_Development/GW_Bootcamp/Homework/Project_3/Data/Education/Refined/male_pop_data.csv",
    "female_pop_data": "/Users/faisaldernawi/Desktop/Training_And_Development/GW_Bootcamp/Homework/Project_3/Data/Education/Refined/female_pop_data.csv",
}

# Output directory
output_dir = "/Users/faisaldernawi/Desktop/Training_And_Development/GW_Bootcamp/Homework/Project_3/Data/Cleaning"
os.makedirs(output_dir, exist_ok=True)

# Function to normalize tract numbers
def normalize_tract_numbers(file_path, output_file):
    df = pd.read_csv(file_path)

    # Normalize 'tract' column
    if 'tract' in df.columns:
        print(f"Processing {file_path}")
        print("Before normalization:")
        print(df['tract'].unique()[:10])  # Show first 10 unique values

        # Normalize: Remove decimals, pad with leading zeros to ensure 6 digits
        df['tract'] = df['tract'].astype(str).str.split('.').str[0].str.zfill(6)

        print("After normalization:")
        print(df['tract'].unique()[:10])  # Verify first 10 unique values

        # Ensure 'tract' is treated as string before saving
        df['tract'] = df['tract'].astype(str)

    # Save the normalized file
    output_path = os.path.join(output_dir, output_file)
    df.to_csv(output_path, index=False)

    # Reload and verify saved file
    saved_df = pd.read_csv(output_path, dtype={'tract': str})  # Force 'tract' to load as string
    print("Saved file 'tract' column preview:")
    print(saved_df['tract'].unique()[:10])  # Verify saved file's column

    return output_path

# Process all files
normalized_files = {}
for name, path in files.items():
    output_file = f"{name}_normalized.csv"
    normalized_path = normalize_tract_numbers(path, output_file)
    normalized_files[name] = normalized_path

print("Normalized files created:")
print(normalized_files)