import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import MyDataList from "./components/data-list"
import MetroNavBar from "./components/navbar";
//import "./App.css"

function App() {
  return (
    <div class="relative">
      <img class="absolute mix-blend-overlay" src='/images/hero.svg'/>
      <div class="mx-24">
        <MetroNavBar/>
        <div class="flex flex-col py-28">
          <h1 class="text-white font-bold text-5xl ">Let us find the perfect Rental</h1>
          <h1 class="text-white font-bold text-5xl">property for you</h1>
          <h2 class="text-white text-lg pt-10">Premium Rentals Await: Begin Your Search Here.</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
