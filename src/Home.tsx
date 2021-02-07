import React from 'react';
import { useThree, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { Logos } from './components/Logos';
import { MainText } from './components/Texts';

extend({ OrbitControls });

export default function App() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  return (
    <>
      <MainText />
      <Logos />
      <orbitControls args={[camera, domElement]} />
    </>
  );
}
