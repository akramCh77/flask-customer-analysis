import React, { useEffect, useState } from "react";

const TotalClientsKPI = () => {
  const [totalClients, setTotalClients] = useState(0);

  useEffect(() => {
    // Récupère le nombre total de clients depuis l'API Flask
    fetch("http://127.0.0.1:5000/dashboard/total-clients")
      .then((response) => response.json())
      .then((data) => setTotalClients(data.totalClients))
      .catch((error) => console.error("Erreur :", error));
  }, []);

  return (
    <div style={styles.container}>
      <h2>Nombre Total de Clients</h2>
      <div style={styles.kpiBox}>
        <p style={styles.clientCount}>{totalClients}</p>
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

export default TotalClientsKPI;