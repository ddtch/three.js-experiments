import { AmbientLight, DirectionalLight, DirectionalLightHelper } from "three";
import mGui from "../../gui";

export const mainLight = new AmbientLight(0xffffff, .6);
export const sunLight = new DirectionalLight();
sunLight.position.set(-15, 16, 16);

const sunFolder = mGui.gui.addFolder('sun').close()
export const sunHelper = new DirectionalLightHelper(sunLight);
const posFolder = sunFolder.addFolder('position');
posFolder.add(sunLight.position, 'x', -100, 100, .01);
posFolder.add(sunLight.position, 'y', -100, 100, .01);
posFolder.add(sunLight.position, 'z', -100, 100, .01);
const rotFolder = sunFolder.addFolder('rotation')
rotFolder.add(sunLight.rotation, 'x', -Math.PI, Math.PI, .01);
rotFolder.add(sunLight.rotation, 'y', -Math.PI, Math.PI, .01);
rotFolder.add(sunLight.rotation, 'z', -Math.PI, Math.PI, .01);