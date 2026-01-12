import React, { useState, useRef, useEffect } from "react";

const Theme = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  // Handle mouse/touch start
  const handleStart = (e) => {
    setIsDragging(true);
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    const rect = buttonRef.current.getBoundingClientRect();
    setDragOffset({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });

    // Prevent text selection during drag
    e.preventDefault();
  };

  // Handle mouse/touch move
  const handleMove = (e) => {
    if (!isDragging) return;

    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    const newX = clientX - dragOffset.x;
    const newY = clientY - dragOffset.y;

    // Keep button within viewport bounds
    const maxX = window.innerWidth - 80; // button width + some margin
    const maxY = window.innerHeight - 50; // button height + some margin

    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY)),
    });

    e.preventDefault();
  };

  // Handle mouse/touch end
  const handleEnd = () => {
    setIsDragging(false);
  };

  // Add global event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleMove, { passive: false });
      document.addEventListener('touchend', handleEnd);

      return () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', handleEnd);
      };
    }
  }, [isDragging, dragOffset]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#000",
        transition: "0.4s ease",
      }}
    >
      {/* Movable Toggle Button */}
      <div
        ref={buttonRef}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        onClick={(e) => {
          // Only toggle theme if not dragging
          if (!isDragging) {
            setDark(!dark);
          }
        }}
        style={{
          width: "60px",
          height: "30px",
          borderRadius: "30px",
          background: dark ? "#444" : "#ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: dark ? "flex-end" : "flex-start",
          padding: "5px",
          cursor: isDragging ? "grabbing" : "grab",
          position: "fixed",
          left: `${position.x}px`,
          top: `${position.y}px`,
          zIndex: "1000",
          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
          transition: isDragging ? "none" : "0.3s ease",
          border: `2px solid ${dark ? "#666" : "#ccc"}`,
          userSelect: "none",
        }}
        title={dark ? "Switch to Light Mode (Drag to move)" : "Switch to Dark Mode (Drag to move)"}
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
            boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
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
