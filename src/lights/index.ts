import { AmbientLight, DirectionalLight, DirectionalLightHelper, HemisphereLight, HemisphereLightHelper, PointLight, PointLightHelper, RectAreaLight, SpotLight, SpotLightHelper, Vector3 } from 'three';
import {RectAreaLightHelper} from 'three/examples/jsm/helpers/RectAreaLightHelper';
import mGui from '../gui';

export * as THREE from 'three';

const ambientLight = new AmbientLight(0xffffff, 0.5);

const directionalLight = new DirectionalLight(0x00fffc, .5);
directionalLight.position.set(1, .25, 0);
const directionalLightHelper = new DirectionalLightHelper(directionalLight, .2, 'green');

const pointLight = new PointLight(0xff9000, 0.5, .5, 3);
const pointLightHelper = new PointLightHelper(pointLight, .2);

const hemiSphereLight = new HemisphereLight(0xff0000, 0x0000ff, .3);
const hemiSphereLightHelper = new HemisphereLightHelper(hemiSphereLight, .2);

const rectAreaLight = new RectAreaLight(0x4e00ff, 2, 3, 2);
rectAreaLight.position.set(-2, 0, .5);
rectAreaLight.lookAt(new Vector3());
const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight);

const spotLight = new SpotLight(0x78ff00, .5, 10, Math.PI * .1, .25, 1);
const spotLightHelper = new SpotLightHelper(spotLight);
/**
 * Gui
 */
 mGui.gui.add(ambientLight, 'intensity', 0, 1, .01);

export {
  ambientLight,
  pointLight,
  pointLightHelper,
  directionalLight,
  directionalLightHelper,
  hemiSphereLight,
  hemiSphereLightHelper,
  rectAreaLight,
  rectAreaLightHelper,
  spotLight,
  spotLightHelper,
}