import { Html, useProgress } from '@react-three/drei';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from 'react-three-fiber';

import Lights from './components/Lights';
import { Home } from './pages';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <i style={{ color: 'white' }}>{Math.floor(progress)}%</i>
    </Html>
  );
}

ReactDOM.render(
  <Canvas camera={{ position: [-10, 3, 10], fov: 60 }}>
    <Suspense fallback={<Loader />}>
      <color attach="background" args={[0, 0, 0]} />
      <Lights />
      <Home />
    </Suspense>
  </Canvas>,
  document.getElementById('root')
);
