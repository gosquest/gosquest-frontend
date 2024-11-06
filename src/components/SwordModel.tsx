import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "@/types";

type GLTFResult = GLTF & {
   nodes: {
      "1_Blade_UV_0": THREE.Mesh;
      "2_Guard_UV_0": THREE.Mesh;
      "3_Handle_UV_0": THREE.Mesh;
      "4_Handle-Wrap_UV_0": THREE.Mesh;
      "5_Pommel_UV_0": THREE.Mesh;
   };
   materials: {
      material: THREE.Material;
   };
};

export const SwordModel = React.forwardRef<THREE.Group>((props, ref) => {
   const { nodes, materials } = useGLTF(
      "/ice_sword/scene.gltf"
   ) as unknown as GLTFResult;
   return (
      <group
         ref={ref}
         {...props}
         dispose={null}
      >
         <group scale={0.04}>
            <mesh
               castShadow
               receiveShadow
               geometry={nodes["1_Blade_UV_0"].geometry}
               material={materials.material}
               scale={[55.083, 4.928, 67.55]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes["2_Guard_UV_0"].geometry}
               material={materials.material}
               position={[44.475, -0.393, 0]}
               rotation={[-Math.PI / 2, 0, 0]}
               scale={[2.691, 2.691, 3.35]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes["3_Handle_UV_0"].geometry}
               material={materials.material}
               position={[44.475, -0.393, 0]}
               rotation={[-Math.PI / 2, 0, 0]}
               scale={[2.691, 2.691, 3.35]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes["4_Handle-Wrap_UV_0"].geometry}
               material={materials.material}
               position={[44.475, -0.393, 0]}
               rotation={[-Math.PI / 2, 0, 0]}
               scale={[2.691, 2.691, 3.35]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes["5_Pommel_UV_0"].geometry}
               material={materials.material}
               position={[44.754, -0.303, 0]}
               rotation={[-Math.PI / 2, 0, 0]}
               scale={[2.691, 2.691, 3.35]}
            />
         </group>
      </group>
   );
});

useGLTF.preload("/ice_sword/scene.gltf");
