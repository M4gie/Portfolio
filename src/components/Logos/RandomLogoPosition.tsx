import React from 'react';

import Logo from './Logo';

export default function RandomLogoPosition({ logo }: { logo: string }) {
  const x = (100 + Math.random() * 200) * (Math.round(Math.random()) ? -1 : 1);
  const y = (50 + Math.random() * 150) * (Math.round(Math.random()) ? -1 : 1);
  const z = Math.random() * 100 * (Math.round(Math.random()) ? -1 : 1);
  console.log(Math.round(x), Math.round(x), Math.round(z));
  return <Logo position={[x, y, z]} url={`/${logo}.glb`} />;
}
