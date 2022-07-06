import { BoxBufferGeometry, BufferAttribute, Mesh, PlaneGeometry, SphereGeometry, TorusGeometry } from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { meshStandardMaterial, meshBasicMaterial, textMaterial } from "../materials";

// SPHERE
const sphere = new Mesh(
  new SphereGeometry(1, 64, 64),
  meshStandardMaterial,
);
sphere.position.x = -1.2;
sphere.geometry.setAttribute(
  'uv2',
  new BufferAttribute(sphere.geometry.attributes.uv.array, 2)
);

// PLANE
const plane = new Mesh(
  new PlaneGeometry(2, 2, 100, 100),
  meshStandardMaterial,
);
plane.position.x = 1.2;
plane.geometry.setAttribute(
  'uv2',
  new BufferAttribute(plane.geometry.attributes.uv.array, 2)
);

// TORUS
const torus = new Mesh(
  new TorusGeometry(0.3, 0.2, 64, 120),
  meshStandardMaterial,
);
torus.position.y = 1.5;
torus.geometry.setAttribute(
  'uv2',
  new BufferAttribute(torus.geometry.attributes.uv.array, 2)
);

const cube = new Mesh(
  new BoxBufferGeometry(1, 1, 1),
  meshBasicMaterial,
);

/**
 * FONT for object 
 * @TODO figure out how to take it like a class
 */

// const textObject = new Mesh(
//   new TextGeometry(
//     'David Tch',
//     {
//       font: mainFont,
//       size: .5,
//       height: .2,
//       curveSegments: 12,
//       bevelEnabled: true,
//       bevelThickness: .03,
//       bevelSize: .02,
//       bevelOffset: 0,
//       bevelSegments: 5,
//     }
//   ),
//   textMaterial,
// );




export {
  plane,
  cube,
  sphere,
  torus,
  // textObject,
}