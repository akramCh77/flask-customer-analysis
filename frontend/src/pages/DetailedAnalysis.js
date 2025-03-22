import React from "react";
import { Link } from "react-router-dom";
import '../index.css';
import AverageSpendingChart from "../components/AverageSpendingChart";
import AveragePurchaseType from "../components/AveragePurchaseType";
import BoxplotSpending from "../components/BoxplotSpending";
import '../index.css';



const DetailedAnalysis = () => {
  return (
    <div style={styles.container}>
      <h1>Analyses Détaillées</h1>
      <p>Voici des analyses plus approfondies sur les comportements des clients.</p>
      <Link to="/" style={styles.button}>
        Retour à l'accueil
      </Link>
      <AverageSpendingChart />
      <AveragePurchaseType />
      <BoxplotSpending />
    </div>
  );
};

const styles = {
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 15px",
    backgroundColor: "#38a0ab",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default DetailedAnalysis;
