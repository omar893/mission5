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
      <div class="mx-24 pt-36 pb-12">
        <img class="border-b border-gray-500 pb-6" src="/images/adbanner.png"/>
      </div>
      <div class="flex justify-center">
        <h4 class="text-gray-600 font-semibold">1000+ HAPPY CLIENTS WORLDWIDE</h4>
      </div>
      <div class="mx-24 pt-28">
        <h6 class="text-indigo-400 text-sm font-bold">WORK WITH THE BEST TODAY</h6>
        <h4 class="text-4xl font-bold pb-3">Your Property, Our Priority</h4>
        <h5 class="text-gray-500 font-semibold">Elevate Your Investment With Our Management Expertise</h5>
      </div>
      <div class="flex mx-20">
        <div class="w-full">
          <img src="/images/video.png"/>
        </div>
        <div class="flex-col">
          <div class="flex flex-wrap">
            <img src="/images/brag2.png"/>
            <img src="/images/brag3.png"/>
            <img src="/images/brag4.png"/>
            <img src="/images/brag1.png"/>
          </div>
          <div class="w-96">
            <p class="text-xs ">We excel in property management tasks, going beyond the norm. Our services include expert staging to attract top-tier renters, rigorous tenant selection, and market-savvy management in Auckland. We guarantee high returns, peace of mind, and risk reduction. Our award-winning systems ensure excellence in every aspect. Contact our experienced Auckland team for top-notch property management.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
