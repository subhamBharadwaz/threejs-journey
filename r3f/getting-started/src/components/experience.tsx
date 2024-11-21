import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Mesh, Group } from 'three';
import { OrbitControls } from '@react-three/drei';
import CustomObject from './custom-object';

const Experience = () => {
  const cubRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    // animate camera in circular path
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);

    if (!cubRef.current || !groupRef.current) return null;
    cubRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta;
  });
  return (
    <>
      <OrbitControls />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh
          ref={cubRef}
          rotation-y={Math.PI * 0.25}
          position-x={2}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <CustomObject />
    </>
  );
};

export default Experience;
