import React from 'react'
import ssir from '../assets/sagarsir.png'
import Ourteam from '../components/Ourteam'
import msir from '../assets/mohansir.png'
import snsir from '../assets/sandeepsir.png'
import sasir from '../assets/saugatsir.png'

const About = () => {
    return (
        <div className="flex flex-col">

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-12 max-w-7xl mx-auto bg-blue-50">

                <div className="flex-1 space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        About LetsLearn
                    </h1>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        LetsLearn is committed to mentoring and training the next generation of IT specialists. We combine head knowledge to
                        learn through hands-on practical programs to better prepare you for the realities of the work environment. <br /> <br />

                        We emphasize effective and personalized career-oriented training programs to provide you with the necessary skills
                        for a successful career in IT.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                            Join Our Journey
                        </button>

                    </div>
                </div>

                <div className="flex-1">
                    <img src={ssir} alt="Sagar Sir" className="w-full h-auto rounded-xl shadow-lg" />
                </div>


            </div>

            <div className="text-center px-6 md:px-16 py-12 max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                    Our Team
                </h2>
            </div>

            {/* Our Team */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16 py-12 max-w-7xl mx-auto">

                <Ourteam image={ssir} name="Sagar Sir" />

                <Ourteam image={msir} name="Mohan Sir" />

                <Ourteam image={snsir} name="Sandeep Sir" />


            </div>

        </div>
    )
}

export default About