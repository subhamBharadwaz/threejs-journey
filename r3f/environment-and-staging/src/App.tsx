import { Canvas } from '@react-three/fiber';
import Experience from './components/experience';

function App() {
  return (
    <div className="container">
      <Canvas shadows={false}>
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
