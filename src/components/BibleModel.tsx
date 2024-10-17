import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

// Extend GLTF type for TypeScript
type GLTFResult = GLTF & {
  nodes: {
    Model_material0_0: THREE.Mesh;
  };
  materials: {
    material0: THREE.Material;
  };
};

export const BibleModel: React.FC<{ position?: [number, number, number], scale?: number }> = (props) => {
  const { nodes, materials } = useGLTF('/bible.glb') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={20}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Model_material0_0.geometry}
          material={materials.material0}
          rotation={[-Math.PI, 0, 0]}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/bible.glb');
