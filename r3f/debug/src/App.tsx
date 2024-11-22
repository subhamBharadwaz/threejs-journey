import { Canvas } from '@react-three/fiber';
import Experience from './components/experience';
import { Leva } from 'leva';

function App() {
  return (
    <div className="container">
      <Leva collapsed />
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
