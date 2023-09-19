import React from "react";

const ReviewsCarousel = () => {
    return (
        <>
            <div class="flex justify-center items-center bg-gray-100 h-72">
                <button type="button" class="text-black text-xl font-bold border border-gray-400 hover:bg-gray-400 rounded-full h-8 w-8">&lt;</button>
                <div class="text-center shadow-md p-5 bg-white">
                    <p class="italic font-semibold">"They've significantly increased the value of my investment properties and</p>
                    <p class="italic font-semibold">I'm so grateful for their support on finding my dream rental home"</p>
                    <p class="text-indigo-400 pt-3">Susan Rogers-Allan</p>                
                    <p class="text-gray-600">Property Owner, Auckland</p>
                </div>
                <button type="button" class="text-black text-xl font-bold border border-gray-400 hover:bg-gray-400 rounded-full h-8 w-8">&gt;</button>
            </div>
        </>
    );
}

export default ReviewsCarousel;