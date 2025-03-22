import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const AveragePurchaseType = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/detailed-analysis/average-puchase-type")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Erreur lors du chargement des données :", error));
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]; 

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Répartition Moyenne des Achats par Canal</h2>
      <ResponsiveContainer width="80%" height={400} style={styles.container}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(1)}%)`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="averagePurchases"
            nameKey="channel"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
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


export default AveragePurchaseType;