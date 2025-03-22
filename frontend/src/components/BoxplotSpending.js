import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

const BoxplotSpending = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/detailed-analysis/spending-by-children")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Erreur :", error));
  }, []);

  if (data.length === 0) return <p>Chargement des données...</p>;

  const childrenData = data.find(d => d.has_children === true)?.spending || [];
  const noChildrenData = data.find(d => d.has_children === false)?.spending || [];

  return (
    <div>
      <h2>Dépenses des clients selon la présence d'enfants</h2>
      <Plot 
        data={[
          {
            y: childrenData,
            type: "box",
            name: "Avec enfants",
            marker: { color: "blue" }
          },
          {
            y: noChildrenData,
            type: "box",
            name: "Sans enfants",
            marker: { color: "red" }
          }
        ]}
        layout={{ title: "Comparaison des dépenses" }}
      />
    </div>
  );
};



export default BoxplotSpending;
