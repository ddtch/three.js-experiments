import * as THREE from 'three';
import { MeshBasicMaterial } from 'three';

const textureLoader = new THREE.TextureLoader();

const doorColorTexture = textureLoader.load('../textures/door/color.jpg');
const doorAlphaTexture = textureLoader.load('../textures/door/alpha.jpg');
const doorAmbientOcclusionTexture = textureLoader.load('../textures/door/ambientOcclusion.jpg');
const doorHeightTexture = textureLoader.load('../textures/door/height.jpg');
const doorMetalnessTexture = textureLoader.load('../textures/door/metalness.jpg');
const doorNormalTexture = textureLoader.load('../textures/door/normal.jpg');
const doorRoughnessTexture = textureLoader.load('../textures/door/roughness.jpg');

const matCapTexture = textureLoader.load('../textures/matcaps/5.png');

const gradientTexture = textureLoader.load('../textures/gradients/3.jpg');

const cubeTextureLoader = new THREE.CubeTextureLoader()

const environmentMapTexture = cubeTextureLoader.load([
    '../textures/environmentMaps/1/px.jpg',
    '../textures/environmentMaps/1/nx.jpg',
    '../textures/environmentMaps/1/py.jpg',
    '../textures/environmentMaps/1/ny.jpg',
    '../textures/environmentMaps/1/pz.jpg',
    '../textures/environmentMaps/1/nz.jpg'
]);

const meshBasicMaterial = new MeshBasicMaterial();


export {
  doorColorTexture,
  doorAlphaTexture,
  doorAmbientOcclusionTexture,
  doorHeightTexture,
  doorMetalnessTexture,
  doorNormalTexture,
  doorRoughnessTexture,
  matCapTexture,
  gradientTexture,
  environmentMapTexture,
}