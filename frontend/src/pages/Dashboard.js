import React, { useEffect, useState } from "react";
import AgeDistributionChart from "../components/AgeDistributionChart";
import ClientTrend from "../components/ClientTrend";
import TotalRevenue from "../components/TotalRevenue";
import SpendingByMaritalStatus from "../components/SpendingByMaritalStatus";
import TotalClients from "../components/TotalClients";
import { Link } from "react-router-dom";
import '../index.css';







function Dashboard() {
  return (
    <div>
      <h1>Dashboard Marketing</h1>
      <p>Bienvenue sur votre application d'analyse des données clients.</p>
      <Link to="/detailed-analysis" style={styles.button}>
        Accéder aux analyses détaillées
      </Link>
      {/* Affichage du camembert */}
      <AgeDistributionChart />
      <TotalClients />
      <TotalRevenue />
      <ClientTrend />
      <SpendingByMaritalStatus />
      
      

      {/* Ici, tu pourras ajouter d'autres composants de visualisation plus tard */}
    </div>
  );
}


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

export default Dashboard;