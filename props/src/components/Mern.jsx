import React from 'react'

const Mern = (props) => {
    return (
        <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">

            <img src={props.image} alt={props.coursename} className="w-full h-48 object-cover" />

            <div className="p-6 space-y-3">
                <h1 className="text-xl font-bold text-gray-900">{props.coursename}</h1>

                <p className="text-gray-600 text-sm leading-relaxed">{props.coursedetails}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 pt-2 border-t border-gray-100">
                    <h2 className="flex items-center gap-1">
                        📅 2.5 Months
                    </h2>
                    <h2 className="flex items-center gap-1">
                        👥 120+ Enrolled
                    </h2>
                </div>

                <div className="flex items-center justify-between pt-3">
                    <h1 className="text-lg font-bold text-blue-600">NPR. 15000/-</h1>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition-colors">
                        Learn More
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Mern