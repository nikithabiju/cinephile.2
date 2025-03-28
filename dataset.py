import pandas as pd

# Load datasets (update path with your actual folder)movies = pd.read_csv(r"C:\Users\bijum\Downloads\ml-latest\movies.csv")
ratings = pd.read_csv(r"C:\Users\bijum\Downloads\ml-latest-small (1)\ml-latest-small\ratings.csv")
movies = pd.read_csv(r"C:\Users\bijum\Downloads\ml-latest-small (1)\ml-latest-small\movies.csv")



# Preview data
print(ratings.head())  # Shows first few rows of ratings
print(movies.head())  # Shows first few rows of movies
