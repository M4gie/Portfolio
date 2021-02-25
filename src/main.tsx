import React from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from 'react-three-fiber';

import Lights from './components/Lights';
import { Home } from './pages';

ReactDOM.render(
  <Canvas camera={{ position: [-10, 3, 10], fov: 60 }}>
    <color attach="background" args={[0, 0, 0]} />
    <Lights />
    <Home />
  </Canvas>,
  document.getElementById('root')
);
