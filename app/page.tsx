import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
      }}
    >
      <h1>Welcome to the Mini Apps</h1>
      <h2>Click on the links below to explore:</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/todoList">Todo List</a>
        <a href="/stopwatch">Stopwatch</a>
        <a href="/callBack">Callback Example</a>
      </div>
    </div>
  );
}
