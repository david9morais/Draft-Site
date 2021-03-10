import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <TaskList title="Pendent" />
        <TaskList title="Making" />
        <TaskList title="Finished" />
      </div>
    </div>
  );
}
