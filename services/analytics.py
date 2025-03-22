from flask import jsonify
# from models.mongo import db
from models.mongo import collection
from datetime import datetime


def get_age_distribution():
    """Récupère et calcule la répartition des clients par tranche d'âge"""

    

    pipeline = [
    {
        "$project": {
            "age": {"$subtract": [2014, "$Year_Birth"]}
        }
    },
    {
        "$bucket": {
            "groupBy": "$age",
            "boundaries": [0, 30, 40, 50, 60, 200],
            "default": "autre",
            "output": {
                "count": {"$sum": 1},
                "ages": {"$push": "$age"}  # Ajout pour voir les âges classés en "Autre"
            }
        }
    }
]

    result = list(collection.aggregate(pipeline))

    # Mapping des labels pour une meilleure lisibilité
    label_mapping = {
        0: "Moins de 30 ans",
        30: "30-40 ans",
        40: "40-50 ans",
        50: "50-60 ans",
        60: "plus de 60 ans"

    }
    # Formatage des résultats
    formatted_result = [
        {"label": label_mapping.get(r["_id"], "Autre"), "count": r["count"]}
        for r in result
    ]

    return jsonify(formatted_result)


def get_client_trend():
    pipeline = [
        {
            "$project": {
                "year_month": { 
                    "$dateToString": { 
                        "format": "%Y-%m", 
                        "date": { "$dateFromString": { "dateString": "$Dt_Customer" } } 
                    }
                }
            }
        },
        {
            "$group": {
                "_id": "$year_month",
                "newClientsCount": { "$sum": 1 }
            }
        },
        {
            "$sort": { "_id": 1 }
        }
    ]
    
    result = list(collection.aggregate(pipeline))

    formatted_result = [
        {"month": item["_id"], "newClientsCount": item["newClientsCount"]} for item in result
    ]
    
    return jsonify(formatted_result)


def get_total_revenue():
    # Obtient le mois et l'année actuels
    current_month = datetime.now().strftime("%Y-%m")

    pipeline = [
        {
            "$group": {
                "_id": None,
                "totalRevenue": {
                    "$sum": {
                        "$add": [
                            "$MntWines",
                            "$MntFruits",
                            "$MntMeatProducts",
                            "$MntFishProducts",
                            "$MntSweetProducts",
                            "$MntGoldProds"
                        ]
                    }
                }
            }
        }
    ]

    result = list(collection.aggregate(pipeline))

    # Vérification que le résultat est bien présent
    if result:
        total_revenue = result[0]["totalRevenue"]
    else:
        total_revenue = 0
    
    return jsonify({"totalRevenue": total_revenue})


def get_spending_by_marital_status():


    pipeline = [
        {
            "$group": {
                "_id": "$Marital_Status",  # Regroupement par statut marital
                "totalSpending": {
                    "$sum": {
                        "$add": [
                            "$MntWines",
                            "$MntFruits",
                            "$MntMeatProducts",
                            "$MntFishProducts",
                            "$MntSweetProducts",
                            "$MntGoldProds"
                        ]
                    }
                }
            }
        },
        {
            "$sort": { "totalSpending": -1 }  # Trie du plus grand au plus petit
        }
    ]
    
    result = list(collection.aggregate(pipeline))

    # Formatage des résultats pour le JSON
    formatted_result = [
        {"maritalStatus": item["_id"], "totalSpending": item["totalSpending"]} for item in result
    ]
    
    return jsonify(formatted_result)


def get_total_clients():

    
    result = collection.count_documents({})

    return jsonify({"totalClients": result})

