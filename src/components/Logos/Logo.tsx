import React, { useRef } from 'react';
import { SceneProps, useFrame, useLoader } from 'react-three-fiber';
import type { Group } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface LogoProps extends SceneProps {
  url: string;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
}

export default function Logo({ url, rotationX, rotationY, rotationZ, ...props }: LogoProps) {
  const { nodes, materials } = useLoader(GLTFLoader, url);
  const group = useRef<Group>();

  useFrame((_state, delta) => {
    if (!group.current) return;
    group.current.rotation.y +=
      Math.sin((delta * 0.5) / 2) * Math.cos((delta * 0.5) / 2) * 1 * rotationX;
    group.current.rotation.x += 0.005 * rotationX;
    group.current.rotation.z += 0.005 * rotationZ;
  });

  return (
    <group ref={group} dispose={null} scale={[0.1, 0.1, 0.1]}>
      <scene name="Scene" {...props}>
        <mesh
          name="mesh_0"
          //@ts-ignore nothing to see here, go to another file
          geometry={nodes.Mesh_Mesh_head_geo001_lambert2SG001.geometry}
          material={materials['lambert2SG.001']}
        />
      </scene>
    </group>
  );
}
