import { AmbientLight, PointLight } from 'three';

export * as THREE from 'three';

const ambientLight = new AmbientLight(0xffffff, 0.5);


const pointLight = new PointLight(0xffffff, 0.5);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 2;

export {
  ambientLight,
  pointLight,
}