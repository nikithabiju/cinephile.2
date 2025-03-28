import pandas as pd

# Load the dataset
file_path = r"C:\Users\bijum\Downloads\ml-latest-small (1)\ml-latest-small\ratings.csv"
ratings = pd.read_csv(file_path)

# 1️⃣ Check for missing values
print("Missing values:\n", ratings.isnull().sum())

# 2️⃣ Remove duplicates (if any)
ratings.drop_duplicates(inplace=True)

# 3️⃣ Convert timestamp to readable format (optional)
ratings['timestamp'] = pd.to_datetime(ratings['timestamp'], unit='s')

# 4️⃣ Normalize ratings (optional)
ratings['rating'] = ratings['rating'] / 5.0  # Scale between 0 and 1

# 5️⃣ Print final structure
print(ratings.head())
