import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <motion.nav 
            className="bg-white shadow-md"
            initial={{ y: -100 }} 
            animate={{ y: 0 }} 
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-6">
                    <img src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202110210822" alt="Apple Logo" className="h-8" width={32} height={32} />
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-gray-700 hover:text-gray-900">Store</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Mac</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">iPad</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">iPhone</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Watch</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Vision</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">AirPods</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">TV & Home</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Entertainment</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Accessories</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Support</a>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <FaSearch className="h-6 w-6 text-gray-700 cursor-pointer hover:text-gray-900" />
                    <FaShoppingCart className="h-6 w-6 text-gray-700 cursor-pointer hover:text-gray-900" />
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;