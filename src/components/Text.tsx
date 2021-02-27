import React, { useMemo } from 'react';
import { MeshProps, useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import { TextGeometryParameters } from 'three';

interface TextProps extends MeshProps {
  text: string;
  textParams: Omit<TextGeometryParameters, 'font'>;
}

export default function ReliefText({ text, textParams, children, ...props }: TextProps) {
  const font = useLoader(THREE.FontLoader, '/font.json');
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
