import React from "react";
import { Link } from "react-router-dom";
import '../index.css';


function Home() {
  return (
    <div>
      <h1>Accueil</h1>
      <p>Bienvenue sur l'application d'analyse marketing.</p>
      <Link to="/dashboard" style={styles.button}>
        Accéder au Dashboard
      </Link>
    </div>
  );
}

const styles = {
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 15px",
    backgroundColor: "#2ecc71",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default Home;