import React from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import appleTvImage from '../assets/apple-tv.png';

const VideoSection = () => {
    const { scrollY } = useScroll();
    const videoHeight = useTransform(scrollY, [0, 300], ['100vh', '20vh']);
    const videoWidth = useTransform(scrollY, [0, 300], ['100vw', '20vw']);
    const videoOpacity = useTransform(scrollY, [0, 200], [1, 0]);
    const imageOpacity = useTransform(scrollY, [200, 400], [0, 1]);

    return (
        <div className="relative overflow-hidden">
            <div className="flex justify-center">
                <motion.video
                    className="object-cover"
                    style={{ height: videoHeight, opacity: videoOpacity, width: videoWidth }}
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    autoPlay
                    loop
                    muted
                />
            </div>

            <motion.img
                src={appleTvImage}
                alt="Apple TV"
                className="w-full h-full object-contain"
                style={{ opacity: imageOpacity }}
            />

            <div className="w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>

            <div className="w-full my-16 flex flex-col items-center justify-center pb-10">
                <h2 className="text-2xl font-bold text-center text-gray-800">Experience the Future of Entertainment</h2>
                <p className="mt-2 mx-32 text-lg text-center text-gray-600">
                    Apple TV 4K unites your favorite Apple services with all your streaming apps in our best-ever picture and sound quality — thanks to the blazing‑fast A15 Bionic chip. Enjoy a FaceTime experience on TV that brings your friends and family into your living room — and onto the biggest screen in your home. And with seamless interaction with all your devices and smart home accessories, it's everything you love about Apple — at its cinematic best. Starting at $129.
                </p>
            </div>
        </div>
    );
};

export default VideoSection;