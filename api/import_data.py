# import_books.py
from api.models import foods  

# def import_books(file_path):
#     with open(file_path, 'r') as file:
#         reader = csv.DictReader(file)
#         for row in reader:
#             foods.objects.create(
#                 name = row['Food Name'],
#                 category = row['Category'],
#                 spiciness = row['Spiciness'],
#                 carb = row['Rice/Noodle/Bread'],
#                 temperature = row['Hot/Cold'],
#                 soup = row['Soup']
#             )

# if __name__ == '__main__':
#      # Replace with your actual file path
#     import_books(csv_file_path)
    
import pandas as pd
from django.contrib.auth.models import User

# Read CSV file into a DataFrame
csv_file_path = '/Users/jason/Projects/HCIProject/WFL/api/food_data.csv' 
df = pd.read_csv(csv_file_path)

# Iterate through the DataFrame and create model instances
for index, row in df.iterrows():

    # Create the Product instance
    product = foods(
                name = row['Food Name'],
                category = row['Category'],
                spiciness = row['Spiciness'],
                carb = row['Rice/Noodle/Bread'],
                temperature = row['Hot/Cold'],
                soup = row['Soup']
    )
    #to save the current product
    product.save()

print("CSV data has been loaded into the Django database.")