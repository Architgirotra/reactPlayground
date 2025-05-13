"use client";
import { useEffect, useState } from "react";

export default function Child({
  getColor,
}: {
  getColor: (color: string) => void;
}) {
  const [currentColor, setCurrentColor] = useState("");
  useEffect(() => {
    getColor(currentColor);
  }, [currentColor]);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter color"
        value={currentColor}
        style={{
          width: "200px",
          height: "20px",
          padding: "20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "rgba(255,255,255,0.3)",
        }}
        onChange={(e) => {
          setCurrentColor(e.target.value);
        }}
      />
    </div>
  );
}
