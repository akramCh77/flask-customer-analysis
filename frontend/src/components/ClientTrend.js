import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ClientTrendChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/dashboard/client-trend")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Erreur :", error));
  }, []);

  return (
    <div>
      <h2>Évolution du nombre de nouveaux clients</h2>
      <ResponsiveContainer width="80%" height={400} style={styles.container}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="newClientsCount" stroke="#82ca9d" />
        </LineChart>
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

export default ClientTrendChart;