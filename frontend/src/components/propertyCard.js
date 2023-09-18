import React from "react";

const PropertyCard = () => {
    return (
        <>
            <div class="max-w-sm">
                <a href="#">
                    <img class="rounded-t-lg" src="/images/housecard.svg"/>
                </a>
                <div class="">
                    <h4 class="border-b border-gray-500 text-2xl px-3 py-3 font-bold">$575pw</h4>
                    <h5 class="px-3 pb-1 font-bold">40 Rose Road, Gery Lynn</h5>
                    <h6 class="px-3 pb-1 font-bold text-xs text-gray-600">Grey Lynn, Auckland</h6>
                    <p class="px-3 pb-1 text-xs text-gray-400">Fabulous opportunity to rent a 2 bedroom villa on Rose Road, walking distance to Countdown, all the Ponsonby Rd cafes and back...</p>
                </div>
            </div>
        </>
    );
}

export default PropertyCard;
