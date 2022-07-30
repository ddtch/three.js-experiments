import { BoxBufferGeometry, Clock, Color, ConeBufferGeometry, Float32BufferAttribute, Fog, Group, Mesh, MeshStandardMaterial, PCFSoftShadowMap, PlaneBufferGeometry, PointLight, SphereBufferGeometry } from "three";
import { doorTextures, grassTexture, wallsTexture } from "../textures";
import BaseScene from "./base-scene";

const hauntedScene = new BaseScene();

const {scene, sphere, camera, ambientLight, moonLight, renderer, floor, clock} = hauntedScene;
// camera.position.set(7, 7.5, 10);

moonLight.color = new Color('#b9d5ff');
moonLight.intensity = .12;
ambientLight.color = new Color('#b9d5ff');
ambientLight.intensity = .12;

const doorLight = new PointLight('#ff7d46', 1, 7);
doorLight.position.set(0, 2.2, 2.7);

const fog = new Fog('#262837', 1, 15);

/**
 * House
 */
// Group
const house = new Group();

// Walls 
const walls = new Mesh(
  new BoxBufferGeometry(4, 2.5, 4),
  new MeshStandardMaterial({
    map: wallsTexture.bricksColorTexture,
    aoMap: wallsTexture.bricksAmbientOclusionTexture,
    roughnessMap: wallsTexture.bricksRoughnessTexture,
    normalMap: wallsTexture.bricksNormalTexture,
  })
);
walls.geometry.setAttribute(
  'uv2',
  new Float32BufferAttribute(walls.geometry.attributes.uv.array, 2)
);
walls.position.y = 1;
walls.castShadow = true;

// Floor
floor.material.setValues({
  map: grassTexture.grassColorTexture,
  aoMap: grassTexture.grassAmbientOclusionTexture,
  roughnessMap: grassTexture.grassRoughnessTexture,
  normalMap: grassTexture.grassNormalTexture,
});
floor.geometry.setAttribute(
  'uv2',
  new Float32BufferAttribute(floor.geometry.attributes.uv.array, 2)
);
floor.receiveShadow = true

// Roof
const roof = new Mesh(
  new ConeBufferGeometry(3.5, 1, 4),
  new MeshStandardMaterial({color: '#b35f45'})
);
roof.position.y = 2.5 + .25;
roof.rotation.y = Math.PI / 4;
roof.receiveShadow = true

// Door
const door = new Mesh(
  new PlaneBufferGeometry(1.8, 2.2, 100, 100),
  new MeshStandardMaterial({
    transparent: true,
    map: doorTextures.doorColorTexture,
    alphaMap: doorTextures.doorAlphaTexture,
    aoMap: doorTextures.doorAmbientOcclusionTexture,
    displacementMap: doorTextures.doorHeightTexture,
    displacementScale: .02,
    normalMap: doorTextures.doorNormalTexture,
    metalnessMap: doorTextures.doorMetalnessTexture,
    roughnessMap: doorTextures.doorRoughnessTexture,
  })
);
door.geometry.setAttribute(
  'uv2',
  new Float32BufferAttribute(door.geometry.attributes.uv.array, 2)
);
door.position.x = -.12
door.position.y = 1

door.position.z = 2 + .01

// Bushes
const bushGeometry = new SphereBufferGeometry(1, 16, 16);
const bushesMaterial = new MeshStandardMaterial({color: '#89c854'});

const bush1 = new Mesh(bushGeometry, bushesMaterial);
bush1.castShadow = true;
const bush2 = new Mesh(bushGeometry, bushesMaterial);
bush2.castShadow = true;
const bush3 = new Mesh(bushGeometry, bushesMaterial);
bush3.castShadow = true;
const bush4 = new Mesh(bushGeometry, bushesMaterial);
bush4.castShadow = true;

bush1.scale.set(.5, .5, .5);
bush1.position.set(.8, .2, 2.2);

bush2.scale.set(.25, .25, .25);
bush2.position.set(.8, .1, 2.1);

bush3.scale.set(.4, .4, .4);
bush3.position.set(-.8, -.1, 2.2);

bush4.scale.set(.15, .15, .15);
bush4.position.set(-1, .05, 2.6);

// Graves
const graves = new Group();

const graveGeometry = new BoxBufferGeometry(.6, .8, .2);
const graveMaterial = new MeshStandardMaterial({color: '#b2b6b1'});

for (let i = 0; i < 50; i++) {
  const angle = Math.random() * Math.PI * 2;
  const radius = 3.3 + Math.random() * 5.7
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;
  const y = (Math.random() + .27) * .32

  const grave = new Mesh(graveGeometry, graveMaterial);
  
  grave.position.set(x, y, z)
  grave.rotation.y = (Math.random() - .5) * .4
  grave.rotation.z = (Math.random() - .5) * .4
  grave.castShadow = true;
  graves.add(grave)
}

/**
 * Ghosts
 */
const ghost1 = new PointLight('#ff00ff', 2, 3)
const ghost2 = new PointLight('#00ffff', 2, 3)
const ghost3 = new PointLight('#ffff00', 2, 3)

// //@ts-ignore
// hauntedScene.animateGhosts = function() {
//   const clock = new Clock();
// }

// //@ts-ignore
// hauntedScene.animateGhosts();

hauntedScene.additionalAnimation = () => {
  const ghost1Angle = clock.elapsedTime * .5;
  const ghost2Angle = - clock.elapsedTime * .35;
  const ghost3Angle = - clock.elapsedTime * .18;

  ghost1.position.x = Math.cos(ghost1Angle) * 4.2
  ghost1.position.z = Math.sin(ghost1Angle) * 4.2
  ghost1.position.y = Math.sin(clock.elapsedTime * 3)

  ghost2.position.x = Math.cos(ghost2Angle) * 5.2
  ghost2.position.z = Math.sin(ghost2Angle) * 5.2
  ghost2.position.y = Math.sin(clock.elapsedTime * 4) + Math.sin(clock.elapsedTime * 2.2)

  ghost3.position.x = Math.cos(ghost3Angle) * (7 + Math.sin(clock.elapsedTime * .32))
  ghost3.position.z = Math.sin(ghost3Angle) * (7 + Math.sin(clock.elapsedTime * .5))
  ghost3.position.y = Math.sin(clock.elapsedTime * 5) + Math.sin(clock.elapsedTime * 2)
}

moonLight.castShadow = true;
moonLight.shadow.mapSize.width = 256
moonLight.shadow.mapSize.height = 256
moonLight.shadow.camera.far = 15

doorLight.castShadow = true;
doorLight.shadow.mapSize.width = 256
doorLight.shadow.mapSize.height = 256
doorLight.shadow.camera.far = 7

ghost1.castShadow = true;
ghost1.shadow.mapSize.width = 256
ghost1.shadow.mapSize.height = 256
ghost1.shadow.camera.far = 7

ghost2.castShadow = true;
ghost2.shadow.mapSize.width = 256
ghost2.shadow.mapSize.height = 256
ghost2.shadow.camera.far = 7

ghost3.castShadow = true;
ghost3.shadow.mapSize.width = 256
ghost3.shadow.mapSize.height = 256
ghost3.shadow.camera.far = 7

house.add(walls, roof, door, doorLight, bush1, bush2, bush3, bush4);
scene.add(house, graves, ghost1, ghost2, ghost3);
renderer.setClearColor('#262837')
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;
scene.fog = fog;


export default hauntedScene;