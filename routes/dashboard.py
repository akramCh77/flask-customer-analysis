from flask import Blueprint
from services.analytics import get_age_distribution
from services.analytics import get_client_trend
from services.analytics import get_total_revenue
from services.analytics import get_spending_by_marital_status
from services.analytics import get_total_clients




# Création du blueprint pour le dashboard
dashboard_bp = Blueprint('dashboard', __name__)

# Route pour récupérer la répartition des clients par tranche d'âge
@dashboard_bp.route('/age-distribution', methods=['GET'])
def age_distribution():
    return get_age_distribution()

# Route pour récupérer la répartition des clients par tranche d'âge
@dashboard_bp.route('/client-trend', methods=['GET'])
def client_trend():
    return get_client_trend()

@dashboard_bp.route('/total-revenue', methods=['GET'])
def total_revenue():
    return get_total_revenue()

@dashboard_bp.route('/spending-by-marital-status', methods=['GET'])
def spending_by_marital_status():
    return get_spending_by_marital_status()

@dashboard_bp.route('/total-clients', methods=['GET'])
def total_clients():
    return get_total_clients()





