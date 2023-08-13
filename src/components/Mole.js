import React, { useState, useEffect } from 'react';

import moleImg from '../assets/img/mole.png';

const moleStlyeAppearing = {
    height: '70%',
    width: '80%',
    position: 'absolute',
    top: '0',
    zIndex: '2',
    animation: 'appearing 0.5s linear',
}

const moleStyleDisappearing = {
    height: '70%',
    width: '80%',
    position: 'absolute',
    top: '0',
    zIndex: '2',
    animation: 'disappearing 0.5s linear',
}

const moleStyleHidden = {
    height: '70%',
    width: '80%',
    position: 'absolute',
    top: '0',
    zIndex: '2',
    visibility: 'hidden',
}

const generateDisappearingKeyFrames = () => {
    let keyframesText = `@keyframes disappearing {\n`;
    for (let i = 0; i <= 10; i++) {
        const translateYValue = i * 10;
        const clipPathValue = 100 - translateYValue;
        keyframesText += `  ${i * 10}% {
            clip-path: polygon(0 0, 100% 0, 100% ${clipPathValue}%, 0 ${clipPathValue}%);
            transform: translateY(${translateYValue}%);
        }\n`;
    }
    keyframesText += `};`;
    return keyframesText;
}

function generateAppearingKeyFrames() {
    let keyframesText = `@keyframes appearing {\n`;

    for (let i = 0; i <= 10; i++) {
        const translateYValue = 100 - i * 10;
        const clipPathValue = i * 10;
        keyframesText += `  ${i * 10}% {
      clip-path: polygon(0 0, 100% 0, 100% ${clipPathValue}%, 0 ${clipPathValue}%);
      transform: translateY(${translateYValue}%);
    }\n`;
    }

    keyframesText += `};`;

    return keyframesText;
}

const Mole = (props) => {
    const [isShown, setIsShown] = useState(false);
    const [moleStyle, setMoleStyle] = useState(moleStyleHidden);

    const handleMoleDisappeared = () => {
        setIsShown(false);
        setMoleStyle(moleStyleDisappearing);
        setTimeout(() => {
            setMoleStyle(moleStyleHidden);
        }, 400);
    }

    const handleMoleAppeared = () => {
        setIsShown(true);
        setMoleStyle(moleStlyeAppearing);
    }

    useEffect(() => {
        setTimeout(() => {
            handleMoleAppeared();
        }, 1000);

    }, []);

    const handleClick = () => {
        handleMoleDisappeared()

        setTimeout(() => {
            handleMoleAppeared();
        }, 1000);
    };

    return (
        <>
            <img src={moleImg} alt="mole" onClick={handleClick} style={moleStyle} />
            <style>{generateDisappearingKeyFrames()}</style>
            <style>{generateAppearingKeyFrames()}</style>
        </>
    )
}

export default Mole;
