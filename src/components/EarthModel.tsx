import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from '@/types';
import * as THREE from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Earth_mesh: THREE.Mesh;
  };
  materials: {
    material0: THREE.Material;
  };
};

const EarthModel: React.FC<{ position?: [number, number, number], scale?: number }> = (props) => {
  const { nodes, materials } = useGLTF('/earth_night/scene.gltf') as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Earth_mesh.geometry}
        material={materials.material0}
      />
    </group>
  );
};

useGLTF.preload('/earth_night/scene.gltf');
export default EarthModel;
