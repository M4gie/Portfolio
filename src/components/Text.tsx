import React, { Suspense, useMemo } from 'react';
import { MeshProps, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import { TextGeometryParameters } from 'three';

interface TextProps extends MeshProps {
  text: string;
  textParams: Omit<TextGeometryParameters, 'font'>;
}

function Text({ text, textParams, children, ...props }: TextProps) {
  const font = useLoader(THREE.FontLoader, '/inter.json');
  const config = useMemo<TextGeometryParameters>(
    () => ({
      ...textParams,
      font,
    }),
    [font]
  );

  return (
    <mesh {...props} scale={[0.1, 0.1, 0.1]}>
      <textBufferGeometry args={[text, config]} />
      {children}
    </mesh>
  );
}

export default function ReliefText(props: TextProps) {
  return (
    <Suspense fallback={null}>
      <Text {...props} />
    </Suspense>
  );
}
