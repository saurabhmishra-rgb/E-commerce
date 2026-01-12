import React, { useState, useEffect } from "react";

const Theme = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#000",
        transition: "0.4s ease",
      }}
    >
      {/* Toggle Button - Mobile Responsive */}
      <div
        onClick={() => setDark(!dark)}
        style={{
          width: isMobile ? "50px" : "60px",
          height: isMobile ? "25px" : "30px",
          borderRadius: "30px",
          background: dark ? "#444" : "#ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: dark ? "flex-end" : "flex-start",
          padding: "3px",
          cursor: "pointer",
          position: "fixed",
          top: isMobile ? "60px" : "20px", // Position below navbar on mobile
          right: isMobile ? "10px" : "20px",
          zIndex: "1000",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          transition: "0.3s ease",
          border: `2px solid ${dark ? "#666" : "#ccc"}`,
        }}
        title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <div
          style={{
            width: isMobile ? "18px" : "22px",
            height: isMobile ? "18px" : "22px",
            borderRadius: "50%",
            background: dark ? "#fff" : "#333",
            transition: "0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: isMobile ? "10px" : "12px",
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
