import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyDataList from "./components/data-list"

function App() {
  return (
    <div className="container mt-3">
      {MyDataList()}
    </div>
  );
}

export default App;
