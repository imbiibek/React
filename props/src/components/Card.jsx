import React from 'react'
import pp from '../assets/pexels.jpg'

const Card = () => {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-xl overflow-hidden mx-auto border-4 border-black">
      
      {/* Top maroon section */}
      <div className="relative bg-red-900 pt-6 pb-16 text-center">
        <h3 className="text-white text-sm tracking-widest">School Inc.</h3>

        {/* Profile image */}
        <img
          src={pp}
          alt="profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-white mx-auto mt-4 relative z-10"
        />

        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 w-full h-10 bg-yellow-100 rounded-t-[50%]"></div>
      </div>

      {/* Bottom white section */}
      <div className="text-center px-4 pb-8 pt-4">
        <h1 className="text-2xl font-serif font-bold text-gray-900">Tom Holland</h1>
        <h2 className="text-gray-700 mt-1">Course: MERN</h2>
        <h2 className="text-gray-700 mt-3">ID No.: 1234</h2>

        {/* Barcode placeholder */}
        <div className="mt-6 flex justify-center">
          <div className="w-48 h-10 bg-[repeating-linear-gradient(90deg,black,black_2px,white_2px,white_4px)]"></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">123456789</p>
      </div>
    </div>
  )
}

export default Card