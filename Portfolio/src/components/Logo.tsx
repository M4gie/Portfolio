import React from 'react';
import { MeshProps, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface LogoProps extends MeshProps {
  url: string;
  color: string;
}

export default function Logo({ url, color, ...props }: LogoProps) {
  const { nodes, materials } = useLoader(GLTFLoader, url);

  return (
    <mesh
      name="mesh_0"
      //@ts-ignore nothing to see here, go to another file
      geometry={nodes.Mesh_Mesh_head_geo001_lambert2SG001.geometry}
      material={materials['lambert2SG.001']}
      scale={[0.02, 0.02, 0.02]}
      {...props}>
      <meshBasicMaterial color={color} />
    </mesh>
  );
}
