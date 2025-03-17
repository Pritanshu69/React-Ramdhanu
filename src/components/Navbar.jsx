import React from "react";

const Navbar = () => {
    return(
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between item-center">
                <div className="text-2xl font-bold text-pink-500">
                    Ramdhanu Decoration
                </div>
                <div className="space-x-6">
                {['Home', 'About Us', 'Services', 'Gallery', 'Contact Us'].map((item) => (
                     <a href={`#${item.replace(' ', '').toLowerCase()}`} className="text-gray-700 hover:text-pink-500 transition">
                     {item}
                     </a>
                ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;