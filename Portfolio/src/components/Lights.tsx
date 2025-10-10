import React from 'react';

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight intensity={1} position={[0, 6, 0]} />
    </>
  );
}
