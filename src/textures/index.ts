import * as THREE from 'three';
import { MeshBasicMaterial, RepeatWrapping } from 'three';

const textureLoader = new THREE.TextureLoader();

export const doorColorTexture = textureLoader.load('../textures/door/color.jpg');
export const doorAlphaTexture = textureLoader.load('../textures/door/alpha.jpg');
export const doorAmbientOcclusionTexture = textureLoader.load('../textures/door/ambientOcclusion.jpg');
export const doorHeightTexture = textureLoader.load('../textures/door/height.jpg');
export const doorMetalnessTexture = textureLoader.load('../textures/door/metalness.jpg');
export const doorNormalTexture = textureLoader.load('../textures/door/normal.jpg');
export const doorRoughnessTexture = textureLoader.load('../textures/door/roughness.jpg');

export const bricksColorTexture = textureLoader.load('../textures/bricks/color.jpg');
export const bricksNormalTexture = textureLoader.load('../textures/bricks/normal.jpg');
export const bricksAmbientOclusionTexture = textureLoader.load('../textures/bricks/ambientOcclusion.jpg');
export const bricksRoughnessTexture = textureLoader.load('../textures/bricks/roughness.jpg');

export const grassColorTexture = textureLoader.load('../textures/grass/color.jpg');
export const grassNormalTexture = textureLoader.load('../textures/grass/normal.jpg');
export const grassAmbientOclusionTexture = textureLoader.load('../textures/grass/ambientOcclusion.jpg');
export const grassRoughnessTexture = textureLoader.load('../textures/grass/roughness.jpg');
grassColorTexture.repeat.set(8, 8);
grassColorTexture.wrapT = RepeatWrapping;
grassColorTexture.wrapS = RepeatWrapping;
grassAmbientOclusionTexture.repeat.set(8, 8);
grassAmbientOclusionTexture.wrapT = RepeatWrapping;
grassAmbientOclusionTexture.wrapS = RepeatWrapping;
grassRoughnessTexture.repeat.set(8, 8);
grassRoughnessTexture.wrapT = RepeatWrapping;
grassRoughnessTexture.wrapS = RepeatWrapping;
grassNormalTexture.repeat.set(8, 8);
grassNormalTexture.wrapT = RepeatWrapping;
grassNormalTexture.wrapS = RepeatWrapping;

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

const doorTextures = {
  doorColorTexture,
  doorAlphaTexture,
  doorAmbientOcclusionTexture,
  doorHeightTexture,
  doorMetalnessTexture,
  doorNormalTexture,
  doorRoughnessTexture,
}

const wallsTexture = {
  bricksColorTexture,
  bricksNormalTexture,
  bricksAmbientOclusionTexture,
  bricksRoughnessTexture,
}

const grassTexture = {
  grassColorTexture,
  grassNormalTexture,
  grassAmbientOclusionTexture,
  grassRoughnessTexture,
} 


export {
  doorTextures,
  matCapTexture,
  gradientTexture,
  environmentMapTexture,
  wallsTexture,
  grassTexture,
}