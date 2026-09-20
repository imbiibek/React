import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-[#0f0f0f] text-gray-300 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Copyright */}
          <div className="text-sm text-center md:text-left">
            <p>© 2026 TheMealDB</p>
            <p>Proudly built in the UK 🇬🇧</p>
          </div>

          {/* Center: Socials */}
          <div className="flex items-center gap-2">
            <span className="text-sm mr-1">Socials:</span>
            <a href="#" className="p-1 bg-blue-600 rounded">
              <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a href="#" className="p-1 bg-sky-400 rounded">
              <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.6 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.8.1c.5 1.6 2 2.8 3.8 2.8A8.3 8.3 0 0 1 2 18.6a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
              </svg>
            </a>
            <a href="#" className="p-1 bg-indigo-500 rounded">
              <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 5.6 2 10c0 2.9 2 5.5 5 7-.1.9-.5 2.3-1.5 3.8 0 0 2.6-.3 4.8-2.4.5.1 1.1.1 1.7.1 5.5 0 10-3.6 10-8S17.5 2 12 2z" />
              </svg>
            </a>
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Refunds</a>
          </div>
        </div>

        {/* Sister sites */}
        <div className="mt-4 flex items-center justify-center gap-6 flex-wrap">
          <span className="text-orange-500 font-bold text-lg">
            The<span className="font-extrabold">Cocktail</span>
            <span className="text-white">DB</span>
          </span>
          <span className="text-red-500 font-bold text-lg">
            <span className="text-xs align-top">The</span>
            <span className="text-white">Audio</span>DB
          </span>
          <span className="text-green-500 font-bold text-lg">
            The<span className="font-extrabold">Sports</span>
            <span className="text-white">DB</span>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
