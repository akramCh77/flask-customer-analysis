from dotenv import load_dotenv
import os

# Charger les variables d'environnement
load_dotenv()

class Config:
    """Configuration de l'application Flask."""

    # URL de connexion à MongoDB (récupérée depuis .env)
    MONGO_URI = os.getenv("MONGO_URI")

    # Clé secrète pour Flask (sessions, tokens, etc.)
    SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey")