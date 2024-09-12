import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuVariants = {
        open: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        closed: { y: '-100%', opacity: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.nav
            className="bg-white shadow-md"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-6">
                    {!isMenuOpen && (
                        <img
                            src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202110210822"
                            alt="Apple Logo"
                            className="h-[1.5rem]"
                            width={24}
                        />
                    )}
                    <div className="hidden lg:flex space-x-6">
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
                    {!isMenuOpen && <FaSearch className="h-6 w-6 text-gray-700 cursor-pointer hover:text-gray-900" />}
                    {!isMenuOpen && <FaShoppingCart className="h-6 w-6 text-gray-700 cursor-pointer hover:text-gray-900" />}
                    <button className="lg:hidden" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <FaTimes className="h-6 w-6 text-gray-700 cursor-pointer hover:text-gray-900" />
                        ) : (
                            <FaBars className="h-6 w-6 text-gray-700 cursor-pointer hover:text-gray-900" />
                        )}
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="lg:hidden bg-white shadow-md py-3 h-[100vh]"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <div className="flex mx-6 my-4 flex-col space-y-4 px-4">
                            <a href="#" className="text-gray-700 text-2xl font-semibold hover:text-gray-900">Store</a>
                            <a href="#" className="text-gray-700 text-2xl font-semibold hover:text-gray-900">Mac</a>
                            <a href="#" className="text-gray-700 text-2xl font-semibold hover:text-gray-900">iPad</a>
                            <a href="#" className="text-gray-700 text-2xl font-semibold hover:text-gray-900">iPhone</a>
                            <a href="#" className="text-gray-700 text-2xl font-semibold hover:text-gray-900">Watch</a>
                            <a href="#" className="text-gray-700 text-2xl font-semibold hover:text-gray-900">Vision</a>
                            <a href="#" className="text-gray-700 text-2xl font-semibold hover:text-gray-900">AirPods</a>
                            <a href="#" className="text-gray-700 text-2xl font-semibold hover:text-gray-900">TV & Home</a>
                            <a href="#" className="text-gray-700 text-2xl font-semibold hover:text-gray-900">Entertainment</a>
                            <a href="#" className="text-gray-700 text-2xl font-semibold hover:text-gray-900">Accessories</a>
                            <a href="#" className="text-gray-700 text-2xl font-semibold hover:text-gray-900">Support</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;