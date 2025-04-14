import React, { useEffect, useState } from "react";
import axios from "axios";

const DesignSystem = () => {
  const [status, setStatus] = useState("Connecting...");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/ping") // Full URL since you're on Vite
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
      <h1>Design System Page</h1>
      <p>Status: {status}</p>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};

export default DesignSystem;
