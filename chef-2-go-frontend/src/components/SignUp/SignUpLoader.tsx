import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from './Animation - 1702501584070.json';
const SignUpLoader = () => {
    const [screenDimensions, setScreenDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            setScreenDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', updateDimensions);
        updateDimensions(); // Initialize with current dimensions

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    return (
        <div className='lottieContainer flex justify-center align-middle' style={{ height: 0.75 * screenDimensions.height, width: '50%', margin: "auto 0px" }} >
            <Lottie animationData={animationData} />
        </div>
    );
}

export default SignUpLoader