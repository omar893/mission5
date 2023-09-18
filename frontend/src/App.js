import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import MyDataList from "./components/data-list"
import MetroNavBar from "./components/navbar";
//import "./App.css"

function App() {
  return (
    <div class="bg-black h-full">
      <div class="mx-24 my-6">
        <MetroNavBar/>
      </div>
    </div>
  );
}

export default App;
