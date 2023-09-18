import React from "react";

const MetroNavBar = () => {
    return (
        <>
            <div class="flex p-1 justify-around">
                <img
                    class ="pr-4"
                    src="/images/logo.svg"
                    width="200"
                    height="50"
                    alt="Metro logo"
                />
                <label class="text-white pr-4">About Us</label>
                <label class="text-white pr-4">Rentals</label>
                <label class="text-white pr-4">Property Management</label>
                <label class="text-white pr-4">Property Inverstors</label>
                <label class="text-white">Contact</label>
                <div class=" flex py-2 space-x-4">
                    <button class=" inline-flex items-center bg-gray-800 hover:bg-gray-900 rounded-lg text-white px-2">
                        <span>My Watchlist</span>
                        <svg class="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </button>
                    <button class="bg-gray-800 hover:bg-gray-900 rounded-lg text-white px-2">My Account</button>
                </div>
                
            </div>
        </>
    );
}

export default MetroNavBar;