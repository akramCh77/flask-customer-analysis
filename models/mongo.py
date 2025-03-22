import os
from pymongo import MongoClient
from dotenv import load_dotenv

# Charger les variables d'environnement
load_dotenv()

# Récupérer l'URI MongoDB depuis le fichier .env
MONGO_URI = os.getenv("MONGO_URI")

# Établir la connexion au cluster MongoDB
client = MongoClient(MONGO_URI)

# Sélectionner la base de données (remplace "test" par le nom réel de ta base)
db = client["analyse_client"]

collection = db["analyse"]
# # Fonction pour récupérer la collection
# def get_collection(collection):
#     return collection["analyse"]