from flask import Blueprint
from services.detailed_analysis import get_average_spending
from services.detailed_analysis import get_average_purchases_type
from services.detailed_analysis import get_spending_by_children




detailed_dashboard_bp = Blueprint('detailed_dashboard', __name__)

@detailed_dashboard_bp.route('/average-spending', methods=['GET'])
def average_spending():
    return get_average_spending()

@detailed_dashboard_bp.route('/average-puchase-type', methods=['GET'])
def average_purchase_type():
    return get_average_purchases_type()

@detailed_dashboard_bp.route('/spending-by-children', methods=['GET'])
def spending_by_children():
    return get_spending_by_children()