import { Color, DoubleSide, Mesh, MeshBasicMaterial, Plane, PlaneGeometry } from "three";

const floorGeomtry = new PlaneGeometry(22, 22, 4, 4);
const floorMaterial = new MeshBasicMaterial({
  color: new Color('#fff'),
  side: DoubleSide,
  // wireframe: true,
})

export const floorPlane = new Mesh(floorGeomtry, floorMaterial);
floorPlane.rotateX(Math.PI / 2);
floorPlane.position.set(0, 0, 0);