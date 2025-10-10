import Logo from '@Src/components/Logo';
import React from 'react';

export default function Contact() {
  function onPointerOver() {
    document.body.style.cursor = 'pointer';
  }
  function onPointerOut() {
    document.body.style.cursor = 'auto';
  }

  return (
    <>
      <Logo
        onClick={() => window.open('https://github.com/M4gie')}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
        url="/github.glb"
        color="white"
        position={[-4, 0.1, 4.6]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[0.01, 0.01, 0.01]}
      />
      <Logo
        onClick={() => window.open('https://www.linkedin.com/in/steeven-regnault/')}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
        url="/linkedin.glb"
        color="white"
        position={[-4.6, 0.17, 4]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[0.01, 0.01, 0.01]}
      />
    </>
  );
}
