import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { BibleModel } from './BibleModel'
import RotatingSword from './RotatingSword'

const SceneComponents = () => {
  return (
    <div className='h-screen'>
      <Canvas>
        <color attach="background" args={['#b0cbf7']} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          
          <BibleModel position={[0, 0, 0]} scale={0.5} />

          <RotatingSword />
          <OrbitControls enableZoom={false} />
        </Canvas>
    </div>
  )
}

export default SceneComponents
