import React from 'react'
import { Search, User, ShoppingBag } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="w-full bg-[#FAF6F3] border-b border-[#E8D9D3]">
      {/* Top row: logo, search, icons */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">
        {/* Logo */}
        <a href="/" className="text-2xl tracking-wide font-serif text-[#3D2B3A] shrink-0">
          LuxeBoutique
        </a>

        {/* Search bar */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-white border border-[#E8D9D3] rounded-full py-2 pl-4 pr-10 text-sm text-[#3D2B3A] placeholder-[#B49A93] focus:outline-none focus:ring-1 focus:ring-[#C9A063] transition"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B49A93]" />
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5 ml-auto text-[#3D2B3A]">
          <button aria-label="Account" className="hover:text-[#C9A063] transition">
            <User className="w-5 h-5" />
          </button>
          <button aria-label="Cart" className="hover:text-[#C9A063] transition">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>

        
      </div>
    </header>
  )
}

export default Navbar