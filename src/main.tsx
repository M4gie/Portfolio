import React from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from 'react-three-fiber';

import Home from './Home';
import Lights from './components/Lights';

ReactDOM.render(
  <Canvas camera={{ position: [0, 0, 35] }}>
    <Lights />
    <Home />
  </Canvas>,
  document.getElementById('root')
);
