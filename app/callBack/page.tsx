"use client";
import { useState } from "react";
import Child from "./childComp";

export default function Parent() {
  const [color, setColor] = useState("White");
  const getColor = (color: any) => {
    setColor(color);
  };
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: color,
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Child getColor={getColor} />
    </div>
  );
}
