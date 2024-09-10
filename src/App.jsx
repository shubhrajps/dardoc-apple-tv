import React from 'react';
import Navbar from './components/Navbar';
import LocalNav from './components/LocalNav';
import VideoSection from './components/VideoSection';
import ScrollParagraphSection from './components/ScrollParagraphSection';

const App = () => {
    return (
        <div>
            <Navbar />
            <LocalNav />
            <VideoSection />
            <ScrollParagraphSection />
        </div>
    );
};

export default App;