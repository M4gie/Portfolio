import React, { Suspense } from 'react';

import Logo from './Logo';

export default function RandomLogoPosition({ logo }: { logo: string }) {
  const x = (100 + Math.random() * 200) * (Math.round(Math.random()) ? -1 : 1);
  const y = (50 + Math.random() * 80) * (Math.round(Math.random()) ? -1 : 1);
  const z = Math.random() * 20 * (Math.round(Math.random()) ? -1 : 1);
  return (
    <Suspense fallback={null}>
      <Logo position={[x, y, z]} url={`/${logo}.glb`} />
    </Suspense>
  );
}
