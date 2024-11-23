import { Canvas } from '@react-three/fiber';
import Experience from './components/experience';

function App() {
  return (
    <div className="container">
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
