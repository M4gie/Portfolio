import ReflectorPlain from '@Src/components/Reflector';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import React from 'react';
import { extend, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import Contact from './Contact';
import MeText from './MeText';
import Technologies from './Technologies';

extend({ OrbitControls });

export default function Scene() {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return (
    <>
      <orbitControls args={[camera, domElement]} />
      <ReflectorPlain />
      <EffectComposer>
        <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.025} intensity={0.3} />
      </EffectComposer>
      <Contact />
      <Technologies />
      <MeText />
      <spotLight intensity={1} position={[10, 6, 10]} penumbra={1} angle={0.3} />
    </>
  );
}
