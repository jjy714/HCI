# import_books.py
import csv
from models import foods  

def import_books(file_path):
    with open(file_path, 'r') as file:
        reader = csv.DictReader(file)
        for row in reader:
            foods.objects.create(
                name = row['Food Name'],
                category = row['Category'],
                spiciness = row['Spiciness'],
                carb = row['Rice/Noodle/Bread'],
                temperature = row['Hot/Cold'],
                soup = row['Soup']
            )

if __name__ == '__main__':
    csv_file_path = '/Users/jason/Projects/HCIProject/WFL/api/food_data.csv'  # Replace with your actual file path
    import_books(csv_file_path)