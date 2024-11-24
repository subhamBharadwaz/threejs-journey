import {
  PresentationControls,
  useGLTF,
  Environment,
  Float,
  ContactShadows,
  Html,
  Text,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Experience() {
  const laptop = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
  );
  // Create a target vector to smoothly interpolate the camera position
  const targetPosition = new THREE.Vector3();

  useFrame((state) => {
    // Set the target position based on pointer movement
    targetPosition.set(
      -state.pointer.x * 1.5, // Adjust multiplier for sensitivity
      -state.pointer.y * 1.5,
      8 // Distance from the object
    );

    // Interpolate the camera position towards the target
    state.camera.position.lerp(targetPosition, 0.1);
    state.camera.lookAt(1, 0, 0); // Ensure the camera always looks at the origin
    state.camera.updateProjectionMatrix();
  });
  return (
    <>
      <Environment preset="city" />

      <color args={['#241a1a']} attach="background" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]} //vertical drag
        azimuth={[-1, 0.75]} // horizontal drag
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          {/* website  */}
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={'#0F0F0E'}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.56, -1.15]}
          />
          <primitive object={laptop.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="html-screen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://subhambharadwaz.com" />
            </Html>
          </primitive>
          <Text
            font="/bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[3, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign="center"
          >
            SUBHAM BHARADWAZ
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
