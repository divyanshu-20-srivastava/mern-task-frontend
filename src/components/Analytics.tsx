import { useState, useEffect } from "react";
import { BASE_URL } from "../services/helper"

const Analytics = () => {
  const [addCount, setAddCount] = useState(0);
  const [clearCount, setClearCount] = useState(0);

  useEffect(() => {
    fetch(`${BASE_URL}/analytics`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is in the format { addCount: x, clearCount: y }
        setAddCount(data.addCount);
        setClearCount(data.clearCount);
      })
      .catch((error) => {
        console.error("Error fetching analytics data:", error);
      });
  }, []);

  return (
    <div style={{
      backgroundColor: "#333",
      color: "#fff",
      textAlign: "center",
      padding: "20px",
      borderRadius: "10px",
      marginTop: "50px"
    }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Analytics</h2>
      <p style={{ fontSize: "18px", marginBottom: "10px" }}>Add Button Count: {addCount}</p>
      <p style={{ fontSize: "18px" }}>Clear Button Count: {clearCount}</p>
    </div>
  );
};

export default Analytics;
