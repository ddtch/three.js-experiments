import './style.scss';
import gsap from 'gsap';
import { AxesHelper, BooleanKeyframeTrack, BufferAttribute, Clock, Group, Mesh, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { ambientLight, directionalLight, directionalLightHelper, hemiSphereLight, hemiSphereLightHelper, pointLight, pointLightHelper, rectAreaLight, rectAreaLightHelper, spotLight, spotLightHelper } from './lights';
import { cube, plane, sphere, torus } from './objects';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { textMaterial } from './materials';

// Sizes
const SIZES = {
    width: window.innerWidth,
    height: window.innerHeight
};
// Canvas
const canvas = document.querySelector('canvas.webgl') as HTMLElement;
// Camera
const aspectRation = SIZES.width / SIZES.height;
const camera = new PerspectiveCamera(75, aspectRation, .1, 1000);
camera.position.z = 3;
// camera.lookAt(cube.position);
// Controls
const contorls = new OrbitControls(camera, canvas);
contorls.enableDamping = true;
// Listeners
window.addEventListener('resize', (ev) => {
    SIZES.width = window.innerWidth;
    SIZES.height = window.innerHeight;
    camera.aspect = SIZES.width / SIZES.height;
    camera.updateProjectionMatrix();
    renderer.setSize(SIZES.width, SIZES.height);
});

// Scene
const scene = new Scene();

// scene.add(ambientLight);

scene.add(directionalLight, directionalLightHelper);

scene.add(hemiSphereLight, hemiSphereLightHelper);

scene.add(pointLight, pointLightHelper);

scene.add(rectAreaLight, rectAreaLightHelper);

scene.add(spotLight, spotLightHelper);

scene.add(cube, plane, torus, sphere);
scene.add(camera);


/**
 * Objects & Fonts & Helpers
 */
const axisHelper = new AxesHelper();
scene.add(axisHelper);

// Renderer
const renderer = new WebGLRenderer({
    canvas: canvas
})
renderer.setSize(SIZES.width, SIZES.height);
renderer.setPixelRatio(window.devicePixelRatio);


//Animations
const clock = new Clock();
const tick = () => {    
    const elapsedTime = clock.getElapsedTime();

    // Update objects
    sphere.rotation.y = 0.1 * elapsedTime
    cube.rotation.y = 0.1 * elapsedTime
    torus.rotation.y = 0.1 * elapsedTime

    sphere.rotation.x = 0.15 * elapsedTime
    cube.rotation.x = 0.15 * elapsedTime
    torus.rotation.x = 0.15 * elapsedTime

    spotLightHelper.update();

    contorls.update();

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
}

tick()