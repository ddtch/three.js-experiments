import '../style.scss'
import {
  Scene,
  Clock,
  WebGLRenderer,
  PerspectiveCamera,
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  TextureLoader,
  PointsMaterial,
  Points,
  BufferGeometry,
  BufferAttribute,
  Color,
  AdditiveBlending,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
/**
 * Base
 */

import mGui from "../gui";

// Debug
const gui = mGui.gui;

// Canvas
const canvas: HTMLCanvasElement = document.querySelector("canvas.webgl");

// Scene
const scene = new Scene();

/**
 * Textures
 */
const textureLoader = new TextureLoader();
const starTexture = textureLoader.load('textures/particles/2.png');

/**
 * Test cube
 */
const cube = new Mesh(new BoxGeometry(1, 1, 1), new MeshBasicMaterial());
// scene.add(cube);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));


/**
 * Particles
 */
// Geometry
const particlesGeometry = new BufferGeometry();
const count = 50000;
const position = new Float32Array(count * 3);
const colors = new Float32Array(count * 3);

for (let i = 0; i < count; i++) {
  position[i] = (Math.random() - .5) * 10;
  colors[i] = Math.random()
}
particlesGeometry.setAttribute(
  'position', new BufferAttribute(position, 3),
);
particlesGeometry.setAttribute(
  'color', new BufferAttribute(colors, 3),
);

// Material
const particlesMaterial = new PointsMaterial({
  // color: new Color('#ff88cc'),
  size: .1,
  sizeAttenuation: true,
  alphaMap: starTexture,
  transparent: true,
  // alphaTest: .001,
  // depthTest: false,
  depthWrite: false,
  blending: AdditiveBlending,
  vertexColors: true,
});

// Points
const particles = new Points(
  particlesGeometry,
  particlesMaterial,
)


scene.add(
  particles,
  // cube
)

/**
 * Animate
 */
const clock = new Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const x = particlesGeometry.attributes.position.array[i3 + 0];
    //@ts-ignore
    particlesGeometry.attributes.position.array[i3 + 1] = Math.sin(elapsedTime + x);
  }
  particlesGeometry.attributes.position.needsUpdate = true;
  // particles.rotation.y = elapsedTime * .2

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
