import './style.scss';
import gsap from 'gsap';
import {AxesHelper, BoxGeometry, Camera, Clock, Color, Mesh, MeshBasicMaterial, MeshStandardMaterial, PerspectiveCamera, Scene, SphereGeometry, Vector3, WebGLRenderer } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { floorPlane } from './bzaar-core/objects';
import { ambientLight } from './lights';
import mGui from './gui';
import { islandObject } from './bzaar-core/models';
import { mainLight, sunHelper, sunLight } from './bzaar-core/lights';
import {spotLight} from './lights';
import { doorNormalTexture } from './textures';


// Sizes
const SIZES = {
    width: window.innerWidth,
    height: window.innerHeight
};
// Canvas
const canvas = document.querySelector('canvas.webgl') as HTMLElement;
// Camera
const aspectRation = SIZES.width / SIZES.height;
const camera = new PerspectiveCamera(75, aspectRation, .1, 100);
camera.position.set(0, 4, 17);

const camFolder = mGui.gui.addFolder('camera');
const camPosFolder = camFolder.addFolder('position')
camPosFolder.add(camera.position, 'x', 0, 100, .01)
camPosFolder.add(camera.position, 'y', 0, 100, .01)
camPosFolder.add(camera.position, 'z', 0, 100, .01)
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

// scene.add(floorPlane);
scene.add(camera);
const islandFolder = mGui.gui.addFolder('island')
const rotFold = islandFolder.addFolder('rotation');
rotFold.add(islandObject.scene.rotation, 'x', -Math.PI * 2, Math.PI * 2, .001);
rotFold.add(islandObject.scene.rotation, 'y', -Math.PI * 2, Math.PI * 2, .001);
rotFold.add(islandObject.scene.rotation, 'z', -Math.PI * 2, Math.PI * 2, .001);
const posFold = islandFolder.addFolder('positions');
posFold.add(islandObject.scene.position, 'x', -10, 10, .01);
posFold.add(islandObject.scene.position, 'y', -10, 10, .01);
posFold.add(islandObject.scene.position, 'z', -10, 10, .01);

islandObject.scene.rotation.set(-2.434, 0.362, -3.42);
islandObject.scene.position.set(6.6, 2.15, -7);
scene.add(islandObject.scene);
const cuber = new Mesh(
    new SphereGeometry(2),
    new MeshStandardMaterial({
        color: new Color('rgba(126,20,0, .5)'),
        roughness: .7,
        metalness: .2,
    }),
    );
    
// cuber.add(camera);
const cf = mGui.gui.addFolder('cube');
cf.add(cuber.position, 'x', -100, 100, .01);
cf.add(cuber.position, 'y', -100, 100, .01);
cf.add(cuber.position, 'z', -100, 100, .01);

scene.add(cuber)

scene.add(mainLight, sunLight, sunHelper);


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

    // cuber.rotation.set(0, Math.sin(100), 0)
    // cuber.position.set(Math.sin(elapsedTime), 0, 0)
    // camera.lookAt(cuber.position);
    // const newPosX = elapsedTime * 10;
    // console.log(newPosX)
    // camera.position.set(
    //     Math.sin(elapsedTime * .9) * 20,
    //     0,
    //     0,
    // )
    
    contorls.update();

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
}

tick()