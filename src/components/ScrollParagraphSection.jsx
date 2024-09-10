import React from 'react';
import { motion, useInView } from 'framer-motion';
import appleTvImage from '../assets/apple-tv.png';

const data = [
    {
        text: "Apple TV app. Watch, rent, or buy your favorite shows and movies all in one expertly curated app. Enjoy critically acclaimed Apple Originals series and films from Apple TV+ as they were meant to be seen. Subscribe to just the channels you want. And there are no new apps, accounts, or passwords needed for up to six family members.",
    },
    {
        text: "Live TV. Apple TV 4K is all you need to stream live TV from the world’s biggest and best networks, broadcasters, and pay TV providers. Watch sports from ESPN and MLB. Catch up with news from ABC, CNN, and Bloomberg. And kick back with shows on Hulu, YouTube TV, and Sling TV.",
    },
    {
        text: "Apple TV+. Watch series, feature films, kids’ entertainment, and more from the most creative minds in TV and movies — with new Apple Originals added every month.",
    },
    {
        text: "InSight. You can get information about Apple TV+ Original series and films as you watch them. Just bring up the media player controls to learn more about the actors on the screen and the music that’s playing. The details automatically update as the scene changes.",
    }
];

const ScrollParagraphSection = () => {
    return (
        <div className="flex flex-col justify-between mt-10">
            {data.map((item, index) => {
                const ref = React.useRef(null);
                const isInView = useInView(ref, { once: false });

                return (
                    <div className='flex flex-row h-[100vh] mb-10 items-center' key={index} ref={ref}>
                        <div className="w-1/2 p-10 flex justify-center items-center">
                            <motion.p
                                className="text-lg text-gray-800 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5 }}
                            >
                                {item.text}
                            </motion.p>
                        </div>
                        <div className="w-1/2 p-10 flex justify-center items-center">
                            <motion.img
                                src={appleTvImage}
                                alt="Related content"
                                className="object-contain w-3/4 h-auto"
                                style={{ maxHeight: '300px' }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ScrollParagraphSection;