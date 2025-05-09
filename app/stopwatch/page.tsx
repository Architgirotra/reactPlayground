"use client";
import React, { useState } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [intervalid, setIntervalid] = useState<any>(null);
  return (
    <>
      <div>{time}</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => {
            let intId = setInterval(() => {
              setTime((prev) => {
                return prev + 1;
              });
            }, 1000);
            setIntervalid(intId);
          }}
        >
          start button
        </button>
        <button
          onClick={() => {
            clearInterval(intervalid);
          }}
        >
          stop button
        </button>
      </div>
    </>
  );
}
