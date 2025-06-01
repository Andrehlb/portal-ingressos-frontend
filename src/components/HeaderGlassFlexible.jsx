// src/components/ui/HeaderGlassFlexible.jsx
import React from "react";

export default function HeaderGlassFlexible({ children, style }) {
  return (
    <header
      className="
        sticky top-0 z-50
        w-full
        bg-white/60
        backdrop-blur-md
        shadow
        border-b border-slate-200
        flex items-center
        px-8
        transition-all
      "
      style={style} // permite height, minHeight ou qualquer ajuste dinâmico externo
    >
      {children}
    </header>
  );
}
