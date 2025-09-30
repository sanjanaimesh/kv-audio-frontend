import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="w-full h-[100px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl flex justify-center items-center relative sticky top-0 z-50">
            <img 
                src="/logo.jpg" 
                alt="logo" 
                className="h-[80px] w-[80px] object-cover absolute left-6 rounded-full ring-2 ring-cyan-400 hover:ring-cyan-300 transition-all duration-300 hover:scale-110" 
            />
            
            <nav className="flex gap-10 ml-20">
                <Link 
                    to="/" 
                    className="text-lg font-bold text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group px-4 py-2"
                >
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
                    <span className="absolute inset-0 bg-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
                
                <Link 
                    to="/contact" 
                    className="text-lg font-bold text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group px-4 py-2"
                >
                    Contact Us
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
                    <span className="absolute inset-0 bg-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
                
                <Link 
                    to="/gallery" 
                    className="text-lg font-bold text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group px-4 py-2"
                >
                    Gallery
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
                    <span className="absolute inset-0 bg-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
                
                <Link 
                    to="/items" 
                    className="text-lg font-bold text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group px-4 py-2"
                >
                    Items
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
                    <span className="absolute inset-0 bg-cyan-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
            </nav>
        </header>
    );
}