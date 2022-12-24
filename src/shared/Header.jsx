import React, { useState, useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';

const Header = () => {
    const [isVisibleAux, setVisibleAux] = useState(false);
    const size = useWindowSize();

    useEffect(() => {
        if (window.innerWidth < 1500) {
            setVisibleAux(true);
        } else {
            setVisibleAux(false);
        }
    }, [size]);

    return (
        <div className="w-full">
            <div
                hidden={!isVisibleAux}
                className="min-h-[200px] bg-red-500"
            ></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#ef4444"
                    fillOpacity="1"
                    d="M0,160L60,154.7C120,149,240,139,360,160C480,181,600,235,720,240C840,245,960,203,1080,186.7C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                ></path>
            </svg>
            <h1 className="absolute w-full top-32 font-staatliches text-white text-5xl text-center">
                COE Chat
            </h1>
        </div>
    );
};

export default Header;
