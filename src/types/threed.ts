import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Group, Mesh, Material } from 'three';

// Define the custom GLTF interface
export interface GLTF {
  scene: Group;
  scenes: Group[];
  animations: any[];
  cameras: any[];
  asset: any;
  parser: any;
  userData: any;
  nodes: { [name: string]: Mesh };
  materials: { [name: string]: Material };
}