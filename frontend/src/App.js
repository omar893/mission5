import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import MyDataList from "./components/data-list"
import MetroNavBar from "./components/navbar";
import PropertyCard from "./components/propertyCard";
//import "./App.css"

function App() {
  return (
    <div>
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
      <div class="flex justify-around mx-24 pt-12">
        <button class="bg-indigo-400 text-white w-full py-2 px-4 rounded-l-md">Rentals</button>
        <button class="bg-gray-600 text-white w-full py-2 px-4">Property Management</button>
        <button class="bg-indigo-400 text-white w-full py-2 px-4">Property Inverstors</button>
        <button class="bg-gray-600 text-white w-full py-2 px-4 rounded-r-md">Tailored Services</button>
      </div>
      <div class="flex gap-x-6 mx-24 pt-8">
        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
      </div>
      <div class="flex justify-center py-8">
       <button class="bg-transparent hover:bg-indigo-400 text-indigo-400 font-semibold hover:text-white py-2 px-4 border border-indigo-400 hover:border-transparent rounded">View Our Latest Listings</button>
      </div>
    </div>
  );
}

export default App;
