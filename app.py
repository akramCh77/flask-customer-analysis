from flask import Flask
from models.mongo import db
from routes.dashboard import dashboard_bp  # Import du blueprint
from routes.detailed_dashboard import detailed_dashboard_bp  # Import du blueprint
from routes.home import home_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Test de la connexion MongoDB
# @app.route("/test-db")
# def test_db():
#     list_collections = db.list_collection_names()
#     return f"Collections disponibles : {list_collections}"

# Enregistrement du blueprint pour les routes du dashboard
app.register_blueprint(dashboard_bp, url_prefix='/dashboard')
app.register_blueprint(detailed_dashboard_bp, url_prefix='/detailed-analysis')

# Enregistre la route pour la page d'accueil
app.register_blueprint(home_bp)


if __name__ == "__main__":
    app.run(debug=True)