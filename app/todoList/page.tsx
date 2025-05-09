"use client";
import React, { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState<any>("");

  const addtoList = () => {
    // if (!currentInput) return;
    // setTasks((task) => {
    //   return [currentInput, ...task];
    // });
    // setCurrentInput("");
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput) return;
    setTasks((task) => {
      return [currentInput, ...task];
    });
    setCurrentInput("");
  };
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Add a new task"
          required
          onChange={(e) => {
            setCurrentInput(e.target.value);
          }}
          value={currentInput}
        />
        <button type="submit">Add</button>
      </form>
      {tasks.map((task, index) => {
        return (
          <div style={{ display: "flex", gap: "10px" }} key={index}>
            <li key={index}>{task}</li>
            <button
              onClick={() => {
                tasks.splice(index, 1);
                setTasks([...tasks]);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
