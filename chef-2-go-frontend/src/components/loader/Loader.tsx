import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from './Animation - 1701908507310.json';

type LoaderProps = {
    loading: boolean
}
const Loader = (props: LoaderProps) => {
    useEffect(()=>{

    },[props.loading])

    return (<div className='lottieContainer flex justify-center align-middle' style={{ height: "200px"}} >
        <Lottie animationData={animationData} />
    </div>);
};

export default Loader;

