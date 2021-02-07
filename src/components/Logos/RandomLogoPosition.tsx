import React, { Suspense } from 'react';

import Logo from './Logo';

function HeadsOrTails() {
  return Math.round(Math.random()) ? -1 : 1;
}

export default function RandomLogoPosition({ logo }: { logo: string }) {
  const x = (100 + Math.random() * 200) * HeadsOrTails();
  const y = (50 + Math.random() * 80) * HeadsOrTails();
  const z = Math.random() * (20 * HeadsOrTails());
  const rotationX = HeadsOrTails();
  const rotationY = HeadsOrTails();
  const rotationZ = HeadsOrTails();

  return (
    <Suspense fallback={null}>
      <Logo
        position={[x, y, z]}
        url={`/${logo}.glb`}
        rotationX={rotationX}
        rotationY={rotationY}
        rotationZ={rotationZ}
      />
    </Suspense>
  );
}
