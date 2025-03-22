from flask import jsonify
# from models.mongo import db
from models.mongo import collection



def get_average_spending():
    
    pipeline = [
        {
            "$group": {
                "_id": None,  # On ne regroupe pas par catégorie, on veut la moyenne globale
                "avg_Wines": { "$avg": "$MntWines" },
                "avg_Fruits": { "$avg": "$MntFruits" },
                "avg_Meat": { "$avg": "$MntMeatProducts" },
                "avg_Fish": { "$avg": "$MntFishProducts" },
                "avg_Sweet": { "$avg": "$MntSweetProducts" },
                "avg_Gold": { "$avg": "$MntGoldProds" }
            }
        }
    ]
    
    result = list(collection.aggregate(pipeline))

    # Formatage du résultat pour le JSON
    formatted_result = []
    if result:
        formatted_result = [
            {"category": "WINE", "averageSpending": result[0]["avg_Wines"]},
            {"category": "FRUITS", "averageSpending": result[0]["avg_Fruits"]},
            {"category": "MEAT", "averageSpending": result[0]["avg_Meat"]},
            {"category": "FISH", "averageSpending": result[0]["avg_Fish"]},
            {"category": "SWEET", "averageSpending": result[0]["avg_Sweet"]},
            {"category": "GOLD", "averageSpending": result[0]["avg_Gold"]}
        ]

    return jsonify(formatted_result)



def get_average_purchases_type():
    pipeline = [
        {
            "$group": {
                "_id": None,
                "avW": { "$avg": "$NumWebPurchases" },
                "avC": { "$avg": "$NumCatalogPurchases" },
                "avS": { "$avg": "$NumStorePurchases" }
            }
        },
        {
            "$project": {
                "_id": 0,
                "AVG_web": { "$round": ["$avW", 2] },
                "AVG_catalog": { "$round": ["$avC", 2] },
                "AVG_store": { "$round": ["$avS", 2] }
            }
        }
    ]

    result = list(collection.aggregate(pipeline))  # Exécute la requête

    if result:
        formatted_result = [
            {"channel": "Web", "averagePurchases": result[0]["AVG_web"]},
            {"channel": "Catalog", "averagePurchases": result[0]["AVG_catalog"]},
            {"channel": "Store", "averagePurchases": result[0]["AVG_store"]}
        ]
        return jsonify(formatted_result)  # Retourne un JSON bien structuré
    else:
        return jsonify([])  # Retourne une liste vide si aucun résultat


def get_spending_by_children():
    pipeline = [
        {
            "$project": {
                "has_children": { "$gt": [{ "$add": ["$Kidhome", "$Teenhome"] }, 0] },
                "total_spending": {
                    "$add": [
                        "$MntWines", "$MntFruits", "$MntMeatProducts",
                        "$MntFishProducts", "$MntSweetProducts", "$MntGoldProds"
                    ]
                }
            }
        },
        {
            "$group": {
                "_id": "$has_children",
                "spending": { "$push": "$total_spending" }  # Liste des dépenses pour chaque groupe
            }
        },
        {
            "$project": {
                "_id": 0,
                "has_children": "$_id",
                "spending": 1
            }
        }
    ]
    
    result = list(collection.aggregate(pipeline))
    
    return jsonify(result)