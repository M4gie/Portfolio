import Logo from '@Src/components/Logo';
import React from 'react';

export default function Technologies() {
  return (
    <>
      <Logo
        url="/react.glb"
        color="#5ED3F3"
        position={[5, 0.5, -2]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Logo
        url="/typescript.glb"
        color="#3074C0"
        position={[5, 0.5, -1]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Logo
        url="/nodejs.glb"
        color="#509941"
        position={[5, 0.5, 0.2]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Logo
        url="/docker.glb"
        color="#2391E6"
        position={[5, 0.1, 0.8]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </>
  );
}
