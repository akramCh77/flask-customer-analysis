import React, { useEffect, useState } from "react";

const TotalRevenueKPI = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    // Récupère le revenu total du mois en cours depuis l'API Flask
    fetch("http://127.0.0.1:5000/dashboard/total-revenue")
      .then((response) => response.json())
      .then((data) => setTotalRevenue(data.totalRevenue))
      .catch((error) => console.error("Erreur :", error));
  }, []);

  return (
    <div style={styles.container}>
      <h2>Revenu Total</h2>
      <div style={styles.kpiBox}>
        <p style={styles.revenueAmount}>{totalRevenue} €</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "inline-block",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "50px",
    width: "300px",
    height: "200px",
  },
  kpiBox: {
    margin: "10px",
    padding: "20px",
    backgroundColor: "#38a0ab",
    borderRadius: "8px",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
  },
 
};

export default TotalRevenueKPI;
