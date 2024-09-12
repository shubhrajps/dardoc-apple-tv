import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const LocalNav = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav 
            id="ac-localnav" 
            className="ac-localnav-scrim js no-touch css-sticky bg-white shadow-md" 
            lang="en-US" 
            dir="ltr" 
            role="navigation" 
            aria-label="Local"
        >
            <div className="ac-ln-wrapper max-w-screen-xl mx-auto px-4 py-2">
                <div className="ac-ln-background"></div>
                <div className="ac-ln-content flex justify-between items-center">
                    <div className="ac-ln-title">
                        <a href="/apple-tv-4k/" className="text-lg font-semibold">
                            Apple&nbsp;TV&nbsp;4K
                        </a>
                    </div>
                    <div className="ac-ln-actions flex items-center">
                        <div className="ac-ln-menu hidden items-center space-x-6 mr-8 lg:flex">
                            <span className="ac-ln-menu-link current" role="link" aria-disabled="true" aria-current="page">Overview</span>
                            <a href="/apple-tv-4k/specs/" className="ac-ln-menu-link" data-analytics-title="tech specs">Tech Specs</a>
                        </div>
                        <div className="relative lg:hidden w-full">
                            <button 
                                onClick={toggleDropdown} 
                                className="flex items-center text-gray-700 w-full justify-between"
                            >
                                <FaChevronDown />
                            </button>
                        </div>
                        <div className="ac-ln-action ml-4 ac-ln-action-button">
                            <a className="ac-ln-button bg-blue-500 text-white px-4 py-2 rounded-3xl text-xs hover:bg-blue-600" href="/us/shop/goto/buy_tv/apple_tv_4k" data-analytics-title="buy - apple tv 4k">
                                Buy
                            </a>
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                    {isDropdownOpen && (
                        <motion.div
                            className='flex'
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="absolute left-0 mt-2 bg-white z-10 w-full">
                                <a 
                                    href="/apple-tv-4k/" 
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    data-analytics-title="overview"
                                >
                                    | Overview
                                </a>
                                <a 
                                    href="/apple-tv-4k/specs/" 
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                                    data-analytics-title="tech specs"
                                >
                                    | Tech Specs
                                </a>
                            </div>
                            <div className='h-[100vh]' />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default LocalNav;