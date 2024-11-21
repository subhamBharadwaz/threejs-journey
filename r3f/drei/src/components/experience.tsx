import {
  OrbitControls,
  // TransformControls,
  PivotControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
} from '@react-three/drei';
import { useRef } from 'react';
import type { Mesh } from 'three';

const Experience = () => {
  const cubeRef = useRef(null);

  const sphereRef = useRef<Mesh>(null);

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group>
        <PivotControls
          anchor={[0, 0, 0]}
          depthTest={false}
          lineWidth={4}
          axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
          scale={1}
          // scale={100}
          // fixed
        >
          <mesh ref={sphereRef} position-x={-2}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
            <Html
              wrapperClass="label"
              center
              distanceFactor={8}
              position={[1, 1, 0]}
              occlude={[sphereRef, cubeRef]}
            >
              That's a sphere{' '}
            </Html>
          </mesh>
        </PivotControls>

        <mesh ref={cubeRef} position-x={2} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
        {/* <TransformControls object={cubeRef} mode="translate" /> */}
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial
          mirror={0.75}
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          color="greenyellow"
        />
      </mesh>
      <Float speed={5} floatIntensity={2}>
        {/* ref: troika-tree-text */}
        <Text
          //  font="./bangers.woff"
          fontSize={0.5}
          color="salmon"
          position-y={2}
          maxWidth={2}
          textAlign="center"
        >
          I LOVE R3F
          {/* <meshNormalMaterial /> */}
        </Text>
      </Float>
    </>
  );
};

export default Experience;
