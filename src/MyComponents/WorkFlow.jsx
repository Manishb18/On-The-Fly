import React from "react";
import "../MyCSSForComponents/workFlow.css";
import { Link } from "react-router-dom";
const WorkFlow = () => {
  return (
    <div className="hero-container">
      <div className="tasks">
        <div className="task1">
          <Link to="/todo">View and Add Your Todos</Link>
        </div>
        <div className="task2">
          <Link to="/textStorer">View and Add Texts</Link>
        </div>
        <div className="task3">
          <Link to="/secretStorer">View and Store Your Secrets</Link>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;