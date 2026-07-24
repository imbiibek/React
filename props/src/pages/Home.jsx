import React from 'react'
import tclass from '../assets/letslearnclass.png'
import cer from '../assets/certificate.webp'
import Mern from '../components/Mern'
import mern from '../assets/mern.png'

const Home = () => {
    return (
        <div className="flex flex-col">

            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-12 max-w-7xl mx-auto bg-blue-50">

                <div className="flex-1 space-y-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Best IT Training Institute in Nepal
                    </h1>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        LetsLearn is the best computer training and IT training institute in Kathmandu, Nepal
                        established in 2015 with the goal of providing professional IT training and computer training
                        in Kathmandu and various parts of Nepal. We are dedicated to the goal of educating and enhancing
                        IT skills through rigorous computer training based on our latest computer courses & IT courses in Nepal.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                            Enroll Now
                        </button>

                        <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition-colors">
                            View All Courses
                        </button>
                    </div>
                </div>

                <div className="flex-1">
                    <img src={tclass} alt="LetsLearn class" className="w-full h-auto rounded-xl shadow-lg" />
                </div>
            </div>

            {/* Complete IT Training Section */}
            <div className="text-center px-6 md:px-16 py-12 max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                    Complete IT Training in Nepal
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Learn from the latest courseware physically or online with expert mentorship, practical training
                    to stand yourself in the front of your IT sector
                </p>
            </div>

            {/* Why LetsLearn Section */}
            <div className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-16 py-12 max-w-7xl mx-auto">

                <div className="flex-1">
                    <img src={cer} alt="certificate" className="w-full h-auto rounded-xl shadow-lg" />
                </div>

                <div className="flex-1 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Why LetsLearn IT training Institute?
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        LetsLearn is committed to building "Future Ready" I.T. professionals. As one of the best IT training institute in Nepal,
                        we provide professional computer classes for various types of IT courses with expert trainers providing hands-on training
                        on each subject to prepare students for todays demanding tech industry. Some of our highlights for IT training are:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-base md:text-lg">
                        <li>Practical, project-based learning approach</li>
                        <li>Modern computer labs with the latest tools</li>
                        <li>Industry-recognized courses and IT certifications</li>
                        <li>Internship opportunities and career support</li>
                    </ul>
                </div>
            </div>

            {/* Popular Courses Section */}
            <div className="text-center px-6 md:px-16 py-12 max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                    Our Popular Computer & IT Courses
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    We provide in-person and online IT and computer class in Nepal taught by proficient educators. IT training classes
                    at LetsLearn include Q&A sessions, weekly tests, projects with personal feedbacks to guide your IT & computer training development.
                </p>
            </div>

            {/* IT Courses */}
            <Mern

                image={mern}

                coursename="MERN Stack"

                coursedetails="Master the MERN stack in Nepal — MongoDB,
            Express, React & Node with hands-on projects, real deployment,
             and certification. Classroom and online batches available." 
             
             
             
              />

             



        </div>
    )
}

export default Home