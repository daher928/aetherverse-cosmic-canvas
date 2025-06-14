
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Cosmos } from '@/components/Cosmos';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.2} />
          <Suspense fallback={null}>
            <Cosmos />
          </Suspense>
        </Canvas>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white animate-fade-in">
        <h1 
          className="text-5xl md:text-8xl font-orbitron font-bold"
          style={{ textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #f0f, 0 0 40px #f0f, 0 0 50px #f0f, 0 0 60px #f0f, 0 0 70px #f0f' }}
        >
          AetherVerse
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300">Your 3D corner of the cosmos.</p>
        <Link to="/create" className="mt-8">
          <button className="holographic-button">
            <span className="holographic-button-inner font-orbitron">
              Create Your Cosmos
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
