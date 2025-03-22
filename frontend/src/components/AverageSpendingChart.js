import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const AverageSpendingChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/detailed-analysis/average-spending")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Erreur lors du chargement des données :", error));
  }, []);

  return (
    <div >
      <h2>Dépenses moyennes par catégorie</h2>
      <ResponsiveContainer width="80%" height={300} style={styles.container}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="averageSpending" fill="#82ca9d" barSize={50} />
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

export default AverageSpendingChart;
