import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import EarthModel from './EarthModel';
import RotatingSword from './RotatingSword';

const SceneComponents = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="h-screen relative flex items-center justify-center">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#b0cbf7] text-black text-2xl font-bold">
          Welcome to Gosquest
        </div>
      )}

      <Canvas onCreated={() => setLoaded(true)}>
        <Suspense fallback={null}>
          <color attach="background" args={['#b0cbf7']} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} />

          <EarthModel position={[0, 0, 0]} scale={0.5} />
          <RotatingSword />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SceneComponents;
