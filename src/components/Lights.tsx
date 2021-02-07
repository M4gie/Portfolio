import React from 'react';

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[40, 40, 40]} />
    </>
  );
}
