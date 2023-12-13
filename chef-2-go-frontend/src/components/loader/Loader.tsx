import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from './Animation - 1701908507310.json';

const Loader = () => {

    return (<div className='lottieContainer flex justify-center align-middle'  >
        <Lottie animationData={animationData} />
    </div>);
};

export default Loader;

