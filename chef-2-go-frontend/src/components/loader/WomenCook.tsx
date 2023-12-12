// import React from 'react'
// import Lottie from 'lottie-react';
// import animationData from './Animation - womenCooking.json';
// const WomenCook = () => {
//     return (<div className='lottieContainer flex justify-center align-middle' style={{ height: "25vh", width:"25vw" }} >
//         <Lottie animationData={animationData} />
//     </div>);
// }

// export default WomenCook
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from './Animation - womenCooking.json';

const WomenCook = () => {
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
        <div className='lottieContainer flex justify-center align-middle' style={{ height: 0.75*screenDimensions.height, width: '100%' }} >
            <Lottie animationData={animationData} />
        </div>
    );
}

export default WomenCook;
