import { useFrame } from '@react-three/fiber';
import {
  AccumulativeShadows,
  SoftShadows,
  useHelper,
  OrbitControls,
  BakeShadows,
  RandomizedLight,
  ContactShadows,
  Sky,
  Environment,
  Lightformer,
  Stage,
} from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useRef } from 'react';
import * as THREE from 'three';
import type { Mesh } from 'three';
import { useControls } from 'leva';

const Experience = () => {
  const directionalLightRef = useRef(null);
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);

  const cubeRef = useRef<Mesh>(null);

  const { color, opacity, blur } = useControls('contact shadows', {
    color: '#4b2789',
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
  });

  const { sunPosition } = useControls('sky', {
    sunPosition: { value: [1, 2, 3] },
  });

  const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } =
    useControls('environment map', {
      envMapIntensity: { value: 3.5, min: 0, max: 12 },
      envMapHeight: { value: 7, min: 0, max: 100 },
      envMapRadius: { value: 28, min: 10, max: 1000 },
      envMapScale: { value: 100, min: 10, max: 1000 },
    });

  useFrame((state, delta) => {
    if (cubeRef.current) {
      // const time = state.clock.elapsedTime;
      // cubeRef.current.position.x = 2 + Math.sin(time);
      cubeRef.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <>
      {/* <Environment
        background
        // files={'/environmentMaps/the_sky_is_on_fire_2k.hdr'}
        preset="sunset"
        ground={{
          height: envMapHeight,
          radius: envMapRadius,
          scale: envMapScale,
        }} */}
      {/* // resolution={32} */}
      {/* > */}
      {/* <color args={['#000000']} attach="background" /> */}
      {/* <Lightformer
          position-z={-5}
          scale={10}
          color="red"
          intensity={10}
          form="ring"
        /> */}

      {/* <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={[1, 0, 0]} />
        </mesh> */}
      {/* </Environment> */}
      {/* <SoftShadows size={35} samples={17} focus={0.5} /> */}
      {/* <BakeShadows /> */}
      {/* <color args={['ivory']} attach="background" /> */}

      <Perf position="top-left" />
      <OrbitControls makeDefault />

      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        color="#316d39"
        scale={10}
        opacity={0.8}
        frames={Infinity}
        temporal
        blend={100}
      >
        <RandomizedLight
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          position={[1, 2, 3]}
          bias={0.001}
        />
      </AccumulativeShadows> */}
      {/* <ContactShadows
        position={[0, 0, 0]}
        scale={10}
        resolution={512}
        far={5}
        color={color}
        opacity={opacity}
        blur={blur}
        frames={1}
      /> */}

      {/* <directionalLight
        ref={directionalLightRef}
        position={[1, 2, 3]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      />
      <ambientLight intensity={0.5} />

      <Sky sunPosition={sunPosition} /> */}

      {/* <group>
        <mesh position-y={1} position-x={-2} castShadow>
          <sphereGeometry />
          <meshStandardMaterial
            color="orange"
            envMapIntensity={envMapIntensity}
          />
        </mesh>
        <mesh
          position-y={1}
          position-x={2}
          castShadow
          scale={1.5}
          ref={cubeRef}
        >
          <boxGeometry />
          <meshStandardMaterial
            color="mediumpurple"
            envMapIntensity={envMapIntensity}
          />
        </mesh>
      </group> */}

      {/* <mesh position-y={0} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial
          color="greenyellow"
          envMapIntensity={envMapIntensity}
        />
      </mesh> */}

      <Stage
        shadows={{ type: 'contact', opacity: 0.2, blur: 3 }}
        environment="sunset"
        preset="portrait"
        intensity={0.5}
      >
        <group>
          <mesh position-y={1} position-x={-2} castShadow>
            <sphereGeometry />
            <meshStandardMaterial
              color="orange"
              envMapIntensity={envMapIntensity}
            />
          </mesh>
          <mesh
            position-y={1}
            position-x={2}
            castShadow
            scale={1.5}
            ref={cubeRef}
          >
            <boxGeometry />
            <meshStandardMaterial
              color="mediumpurple"
              envMapIntensity={envMapIntensity}
            />
          </mesh>
        </group>
      </Stage>
    </>
  );
};

export default Experience;
