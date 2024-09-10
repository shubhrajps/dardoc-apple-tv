import React from 'react';

const LocalNav = () => {
    return (
        <nav 
            id="ac-localnav" 
            className="ac-localnav-scrim js no-touch css-sticky ac-ln-allow-transitions bg-white shadow-md" 
            lang="en-US" 
            dir="ltr" 
            data-sticky="" 
            data-analytics-region="local nav" 
            role="navigation" 
            aria-label="Local"
        >
            <div className="ac-ln-wrapper max-w-screen-xl mx-auto px-4 py-2">
                <div className="ac-ln-background"></div>
                <div className="ac-ln-content flex justify-between items-center">
                    <div className="ac-ln-title">
                        <a href="/apple-tv-4k/" data-analytics-title="product index" className="text-lg font-semibold">
                            Apple&nbsp;TV&nbsp;4K
                        </a>
                    </div>
                    <div className="ac-ln-actions flex items-center">
                        <div className="ac-ln-menu flex items-center space-x-6 mr-8">
                            <span className="ac-ln-menu-link current" role="link" aria-disabled="true" aria-current="page">Overview</span>
                            <a href="/apple-tv-4k/specs/" className="ac-ln-menu-link" data-analytics-title="tech specs">Tech Specs</a>
                        </div>
                        <div className="ac-ln-action ac-ln-action-button">
                            <a className="ac-ln-button bg-blue-500 text-white px-4 py-2 rounded-3xl text-xs hover:bg-blue-600" href="/us/shop/goto/buy_tv/apple_tv_4k" data-analytics-title="buy - apple tv 4k">
                                Buy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default LocalNav;