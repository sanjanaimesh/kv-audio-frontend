import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full h-[80px] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-2xl flex justify-between items-center px-6 lg:px-12 relative sticky top-0 z-50 border-b border-slate-800/50 backdrop-blur-sm">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group z-10">
                <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-400/30 transition-all duration-500"></div>
                    <img 
                        src="/logo.jpg" 
                        alt="logo" 
                        className="relative h-[60px] w-[60px] object-cover rounded-full ring-2 ring-cyan-500/50 group-hover:ring-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-cyan-500/20" 
                    />
                </div>
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 hidden lg:block group-hover:tracking-wider transition-all duration-300">
                    Your Brand
                </span>
            </Link>
            
            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex gap-1 absolute left-1/2 transform -translate-x-1/2">
                <Link 
                    to="/" 
                    className="text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group px-6 py-2.5 rounded-lg overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Home
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"></span>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-full transition-all duration-500"></span>
                </Link>
                
                <Link 
                    to="/contact" 
                    className="text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group px-6 py-2.5 rounded-lg overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"></span>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-full transition-all duration-500"></span>
                </Link>
                
                <Link 
                    to="/gallery" 
                    className="text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group px-6 py-2.5 rounded-lg overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Gallery
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"></span>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-full transition-all duration-500"></span>
                </Link>
                
                <Link 
                    to="/items" 
                    className="text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group px-6 py-2.5 rounded-lg overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        Items
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"></span>
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-full transition-all duration-500"></span>
                </Link>
            </nav>

            {/* Right Side - Cart/Search Icons (Optional)
            <div className="hidden md:flex items-center gap-4">
                <button className="text-gray-300 hover:text-cyan-400 transition-all duration-300 p-2 rounded-lg hover:bg-cyan-500/10 relative group">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
                <button className="text-gray-300 hover:text-cyan-400 transition-all duration-300 p-2 rounded-lg hover:bg-cyan-500/10 relative group">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-500 text-white text-xs rounded-full flex items-center justify-center font-bold">3</span>
                </button>
            </div> */} 

            {/* Mobile Menu Button */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-cyan-500/10 relative group z-10"
                aria-label="Toggle menu"
            >
                <div className="relative w-7 h-7 flex flex-col justify-center items-center">
                    <span className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                    <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
                </div>
            </button>

            {/* Mobile Navigation */}
            <div 
                className={`absolute top-[80px] left-0 w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl transition-all duration-500 ease-in-out md:hidden border-b border-slate-800/50 backdrop-blur-lg ${
                    isMenuOpen 
                        ? 'opacity-100 translate-y-0 pointer-events-auto' 
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}
            >
                <nav className="flex flex-col p-6 gap-2">
                    <Link 
                        to="/" 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-base font-semibold text-gray-300 hover:text-cyan-400 transition-all duration-300 px-5 py-4 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 border border-transparent hover:border-cyan-500/30 flex items-center gap-3 group"
                    >
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Home
                    </Link>
                    
                    <Link 
                        to="/contact" 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-base font-semibold text-gray-300 hover:text-cyan-400 transition-all duration-300 px-5 py-4 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 border border-transparent hover:border-cyan-500/30 flex items-center gap-3 group"
                    >
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact Us
                    </Link>
                    
                    <Link 
                        to="/gallery" 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-base font-semibold text-gray-300 hover:text-cyan-400 transition-all duration-300 px-5 py-4 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 border border-transparent hover:border-cyan-500/30 flex items-center gap-3 group"
                    >
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Gallery
                    </Link>
                    
                    <Link 
                        to="/items" 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-base font-semibold text-gray-300 hover:text-cyan-400 transition-all duration-300 px-5 py-4 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 border border-transparent hover:border-cyan-500/30 flex items-center gap-3 group"
                    >
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        Items
                    </Link>
                </nav>
            </div>
        </header>
    );
}   