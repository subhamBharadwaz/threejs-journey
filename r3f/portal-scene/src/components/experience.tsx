import {
  OrbitControls,
  useGLTF,
  useTexture,
  Center,
  Sparkles,
  shaderMaterial,
} from '@react-three/drei';
import portalVertexShader from '../shaders/portal/vertex.glsl';
import portalFragmentShader from '../shaders/portal/fragment.glsl';
import * as THREE from 'three';
import { extend, Object3DNode, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color('#ffffff'),
    uColorEnd: new THREE.Color('#000000'),
  },
  portalVertexShader,
  portalFragmentShader
);

extend({ PortalMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    portalMaterial: Object3DNode<typeof PortalMaterial, typeof PortalMaterial>;
  }
}

export default function Experience() {
  const portalMaterialRef = useRef(null);

  const { nodes } = useGLTF('/model/portal.glb');

  const bakedTexture = useTexture('/model/baked.jpg');
  bakedTexture.flipY = false;

  useFrame((state, delta) => {
    if (portalMaterialRef.current) {
      portalMaterialRef.current.uTime += delta;
    }
  });

  return (
    <>
      <color args={['#030202']} attach="background" />
      <OrbitControls makeDefault />

      <Center>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
          geometry={nodes.poleLightA.geometry}
          position={nodes.poleLightA.position}
        >
          <meshBasicMaterial color="#ffffe5" />
        </mesh>
        <mesh
          geometry={nodes.poleLightB.geometry}
          position={nodes.poleLightB.position}
        >
          <meshBasicMaterial color="#ffffe5" />
        </mesh>

        <mesh
          geometry={nodes.portalLight.geometry}
          position={nodes.portalLight.position}
          rotation={nodes.portalLight.rotation}
        >
          <portalMaterial ref={portalMaterialRef} />
        </mesh>

        <Sparkles
          size={6}
          scale={[4, 2, 4]}
          position-y={1.1}
          speed={0.5}
          count={40}
        />
      </Center>
    </>
  );
}
