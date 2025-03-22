import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const SpendingByMaritalStatus = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/dashboard/spending-by-marital-status")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Erreur :", error));
  }, []);

  return (
    <div>
      <h2>Dépenses Totales par Statut Marital</h2>
      <ResponsiveContainer width="80%" height={400} style={styles.container}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="maritalStatus" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalSpending" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const styles = {
  container: {
    display: "inline-block",
    margin: "50px",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    width: "300px",
  }
};

export default SpendingByMaritalStatus;