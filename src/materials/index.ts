import { Color, MeshBasicMaterial, MeshDepthMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, NearestFilter } from "three";
import * as THREE from 'three';
import { doorAlphaTexture, doorAmbientOcclusionTexture, doorColorTexture, doorHeightTexture, doorMetalnessTexture, doorNormalTexture, doorRoughnessTexture, environmentMapTexture, gradientTexture, matCapTexture } from "../textures";
import mGui from "../gui";

const meshStandardMaterial = new MeshStandardMaterial({
  roughness: .4
});
// meshStandardMaterial.roughness = .7;
// meshStandardMaterial.metalness = .2;

// meshStandardMaterial.map = doorColorTexture;
// meshStandardMaterial.aoMap = doorAmbientOcclusionTexture;
// meshStandardMaterial.aoMapIntensity = 1;
// meshStandardMaterial.displacementMap = doorHeightTexture;
// meshStandardMaterial.displacementScale = 0.1;
// meshStandardMaterial.metalnessMap = doorMetalnessTexture;
// meshStandardMaterial.roughnessMap = doorRoughnessTexture;
// meshStandardMaterial.normalMap = doorNormalTexture;
// meshStandardMaterial.normalScale.set(.5, .5);
// meshStandardMaterial.alphaMap = doorAlphaTexture;
// meshStandardMaterial.transparent = true;
// meshStandardMaterial.envMap = environmentMapTexture;

// mGui.gui.add(meshStandardMaterial, 'metalness', 0, 1, .0001);
// mGui.gui.add(meshStandardMaterial, 'roughness', 0, 1, .0001);
// mGui.gui.add(meshStandardMaterial, 'aoMapIntensity', 0, 10, .0001);
// mGui.gui.add(meshStandardMaterial, 'displacementScale', 0, 1, .0001);

const meshPhysicalMaterial = new MeshPhysicalMaterial();

const meshBasicMaterial = new MeshBasicMaterial();

const meshNormalMaterial = new MeshNormalMaterial({
  flatShading: true
});

const meshMatcapMaterial = new MeshMatcapMaterial({
  matcap: matCapTexture,
});

const meshDepthMaterial = new MeshDepthMaterial();

const meshLambertMaterial = new MeshLambertMaterial();

const meshPhongMaterial = new MeshPhongMaterial();
meshPhongMaterial.shininess = 90;
meshPhongMaterial.specular = new Color(0xff0088);

const meshToonMaterial = new MeshToonMaterial();
gradientTexture.minFilter = NearestFilter;
gradientTexture.magFilter = NearestFilter;
gradientTexture.generateMipmaps = false;
meshToonMaterial.gradientMap = gradientTexture;
meshToonMaterial.color = new Color('white');

const textMaterial = new MeshMatcapMaterial({
  matcap: matCapTexture,
});

export {
  meshBasicMaterial,
  meshNormalMaterial,
  meshMatcapMaterial,
  meshDepthMaterial,
  meshLambertMaterial,
  meshPhongMaterial,
  meshToonMaterial,
  meshStandardMaterial,
  textMaterial,
}