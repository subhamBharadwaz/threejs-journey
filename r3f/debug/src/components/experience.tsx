import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useControls } from 'leva';

const Experience = () => {
  const { perfVisible } = useControls({
    perfVisible: false,
  });
  const { position, color, visible } = useControls('sphere', {
    position: {
      value: { x: -2, y: 0 },
      step: 0.01,
      joystick: 'invertY',
    },
    color: 'orange',
    visible: true,
  });

  return (
    <>
      {perfVisible ? <Perf position="top-left" /> : null}
      <OrbitControls />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group>
        <mesh position={[position.x, position.y, 0]} visible={visible}>
          <sphereGeometry />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh position-x={2} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};

export default Experience;
