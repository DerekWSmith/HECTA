import React from 'react';

import bgImg from './assets/img/bg.png';

import GameScene from './components/GameScene';

const sceneStyle = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: '100% 100%',
  width: '100vw',
  height: '100vh',
}


const App = () => {
  return (
    <div style={sceneStyle}>
      <GameScene />
    </div>
  );
};

export default App;
