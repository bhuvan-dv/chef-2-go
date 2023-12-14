import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from './Animation - 1702480562531.json';
const VerificationLoader = () => {
    const [screenDimensions, setScreenDimensions] = useState({ width: 0, height: 0 });
 /**
   * State to store screen dimensions for responsive rendering.
   */
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
        <div className='lottieContainer flex justify-center align-middle' style={{ height: 0.7 * screenDimensions.height, width: '50%', margin: "auto 0px" }} >
            <Lottie animationData={animationData} />
        </div>
    );
}

export default VerificationLoader