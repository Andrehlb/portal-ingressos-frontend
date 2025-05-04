// src/componentes/ui/card.jsx
import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`mt-4 ${className}`}>{children}</div>;
}
