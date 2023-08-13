import React, { useState, useEffect } from 'react';

import img from '../assets/img/game_area.png';

import Hole from './Hole';

const gameSceneStyle = {
    backgroundImage: `url(${img})`,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
}



const GameScene = () => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(5);
    const [gameOver, setGameOver] = useState(false);

    // Function to handle mole whack event
    const handleWhack = () => {
        setScore(score + 1);
        console.log(score);
    };

    // useEffect hook to start the game when the component mounts
    useEffect(() => {
        const interval = setInterval(() => {
            if (timeLeft === 0) {
                setGameOver(true);
                // alert(`Game Over! Your score is ${score}`);
                clearInterval(interval);
            } else {
                setTimeLeft(timeLeft - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    return (
        <div
            className="container d-flex justify-content-center align-items-center flex-column rounded col-xl-4 col-lg-6 col-md-8 col-10"
            style={gameSceneStyle}
        >
            <div className="row d-flex justify-content-center">
                <Hole onClick={handleWhack} />
                <Hole onClick={handleWhack} />
                <Hole onClick={handleWhack} />
            </div>
            <div className="row d-flex justify-content-center">
                <Hole onClick={handleWhack} />
                <Hole onClick={handleWhack} />
                <Hole onClick={handleWhack} />
            </div>
            <div className="row d-flex justify-content-center d-none d-md-flex">
                <Hole onClick={handleWhack} />
                <Hole onClick={handleWhack} />
                <Hole onClick={handleWhack} />
            </div>
        </div>
    );
};

export default GameScene;
