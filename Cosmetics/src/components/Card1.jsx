import React from 'react'
import { Link } from 'react-router-dom'

const Card1 = ({ id, title, price, image }) => {
    return (
        
        <Link to={`/product/${id}`}>
            <div className='w-[300px] h-[400px] bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition-shadow'>

                <div className='image-container'>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover rounded-lg"
                    />
                </div>

                <div className='id-container text-xs text-gray-400 mt-2'>
                    #{id}
                </div>

                <div className='Title-container text-lg font-semibold text-gray-900 mt-1'>
                    {title}
                </div>

                <div className='Price-container text-xl font-bold text-emerald-600 mt-2'>
                    ${price}
                </div>

            </div>
        </Link>
        
    )
}

export default Card1