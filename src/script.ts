import './style.scss';
import gsap from 'gsap';
import { AxesHelper, BooleanKeyframeTrack, BufferAttribute, Clock, Group, Mesh, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { ambientLight, pointLight } from './lights';
import { cube } from './objects';
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
scene.add(pointLight);
scene.add(ambientLight);
// scene.add(cube);
scene.add(camera);

/**
 * Objects & Fonts
 */

const helper = new AxesHelper();
scene.add(helper);

 const fLoader = new FontLoader()
 fLoader.load('../fonts/helvetiker_regular.typeface.json', (font => {
    const textGeometry = new TextGeometry(
        'Hello Three.js',
        {
            font: font,
            size: 0.5,
            height: 0.2,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        }
    );
    // textMaterial.wireframe = true;
    // textGeometry.computeBoundingBox();
    // textGeometry.translate(
    //     -textGeometry.boundingBox.max.x * .5,
    //     -textGeometry.boundingBox.max.y * .5,
    //     -textGeometry.boundingBox.max.z * .5,
    // );
    textGeometry.center()
    const text = new Mesh(textGeometry, textMaterial);
    scene.add(text)

 }));

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

    contorls.update();

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
}

tick()