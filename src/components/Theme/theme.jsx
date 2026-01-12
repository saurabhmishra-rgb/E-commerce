import React, { useState } from "react";

const Theme = ({ children }) => {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#000",
        transition: "0.4s ease",
      }}
    >
      {/* Toggle Button - Top Right Corner */}
      <div
        onClick={() => setDark(!dark)}
        style={{
          width: "60px",
          height: "30px",
          borderRadius: "30px",
          background: dark ? "#444" : "#ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: dark ? "flex-end" : "flex-start",
          padding: "5px",
          cursor: "pointer",
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: "1000",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          transition: "0.3s ease",
          border: `2px solid ${dark ? "#666" : "#ccc"}`,
        }}
        title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <div
          style={{
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            background: dark ? "#fff" : "#333",
            transition: "0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
          }}
        >
          {dark ? "☀️" : "🌙"}
        </div>
      </div>

     
      {children}
    </div>
  );
};

export default Theme;
