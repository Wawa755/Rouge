import React, { useEffect, useState } from "react";
import "./sass/styles.scss";
import DesignSystem from "./react/pages/DesignSystem";
import axios from "axios";

const App = () => {
  const [status, setStatus] = useState("Connecting...");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/ping")
      .then((response) => {
        setStatus(response.data.message);
      })
      .catch((err) => {
        console.error("API connection error:", err);
        setStatus("Connection failed");
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <div>
        <p>Status: {status}</p>
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
      </div>
      <DesignSystem />
    </div>
  );
};

export default App;
