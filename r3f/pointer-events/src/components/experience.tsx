import { useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  useCursor,
  useGLTF,
  meshBounds,
} from '@react-three/drei';
import { useRef, useState } from 'react';
import type { Mesh } from 'three';

export default function Experience() {
  const [hovered, setIsHovered] = useState<boolean>(false);
  const cubeRef = useRef<Mesh>(null);

  const model = useGLTF('/hamburger.glb');

  useFrame((state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta * 0.2;
    }
  });

  useCursor(hovered /*'pointer', 'auto', document.body*/);

  const handleCubeClick = () => {
    if (!cubeRef.current) return null;

    cubeRef.current.material.color.set(
      `hsl(${Math.random() * 360}, 100%, 75%)`
    );
  };

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh position-x={-2} onClick={(e) => e.stopPropagation()}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh
        ref={cubeRef}
        raycast={meshBounds}
        position-x={2}
        scale={1.5}
        onClick={handleCubeClick}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
        // onContextMenu={handleCubeClick} // right click /long press on mobile
        // onDoubleClick={handleCubeClick}
        // onPointerUp={handleCubeClick}
        // onPointerDown={handleCubeClick}
        // onPointerOver={handleCubeClick}
      >
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <primitive
        object={model.scene}
        scale={0.25}
        position-y={0.5}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    </>
  );
}
