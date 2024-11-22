import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import type { Mesh } from 'three';
import * as THREE from 'three';

type GLTFResult = {
  nodes: {
    bottomBun: Mesh;
    meat: Mesh;
    cheese: Mesh;
    topBun: Mesh;
  };
  materials: {
    BunMaterial: THREE.Material;
    SteakMaterial: THREE.Material;
    CheeseMaterial: THREE.Material;
  };
};

export function Hamburger(props: GroupProps) {
  const { nodes, materials } = useGLTF(
    '/hamburger-draco.glb'
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottomBun.geometry}
        material={materials.BunMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.meat.geometry}
        material={materials.SteakMaterial}
        position={[0, 2.817, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cheese.geometry}
        material={materials.CheeseMaterial}
        position={[0, 3.04, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.topBun.geometry}
        material={materials.BunMaterial}
        position={[0, 1.771, 0]}
      />
    </group>
  );
}

useGLTF.preload('/hamburger-draco.glb');
