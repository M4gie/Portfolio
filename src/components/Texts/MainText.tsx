import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import type { Group } from 'three';

import Text from './Text';

export default function MainText() {
  const ref = useRef<Group>();

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const rotation = Math.cos(clock.getElapsedTime()) * 0.3;
    ref.current.rotation.x = rotation;
    ref.current.rotation.y = rotation;
    ref.current.rotation.z = rotation;
  });

  return (
    <group ref={ref}>
      <Text position={[0, 0, 0]} children="MAJI" />
    </group>
  );
}
