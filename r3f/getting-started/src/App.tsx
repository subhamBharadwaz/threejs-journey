import { Canvas } from '@react-three/fiber';
import Experience from './components/experience';
import * as THREE from 'three';

function App() {
  return (
    <div className="container">
      <Canvas
        // dpr={[1, 2]}
        gl={{ antialias: false, toneMapping: THREE.ACESFilmicToneMapping }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [3, 2, 6],
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
