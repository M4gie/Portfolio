import { Reflector, useTexture } from '@react-three/drei';
import React from 'react';
import { Vector2 } from 'three';

export default function ReflectorPlain() {
  const roughness = useTexture('roughness_floor.jpeg');
  const normal = useTexture('NORM.jpg');
  const distortionMap = useTexture('dist_map.jpeg');
  const _normalScale = new Vector2(0);

  return (
    <Reflector
      resolution={1024}
      args={[10, 10]}
      mirror={0.75}
      mixBlur={10}
      mixStrength={2}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      blur={[500, 500]}
      minDepthThreshold={0.8}
      maxDepthThreshold={1.2}
      depthScale={0}
      depthToBlurRatioBias={0.2}
      debug={0}
      distortion={0}
      distortionMap={distortionMap}>
      {(Material, props) => (
        <Material
          color="#a0a0a0"
          metalness={0.5}
          roughnessMap={roughness}
          roughness={1}
          normalMap={normal}
          normalScale={_normalScale}
          {...props}
        />
      )}
    </Reflector>
  );
}
