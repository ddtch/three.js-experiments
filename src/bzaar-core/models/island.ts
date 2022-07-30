import { Mesh, MeshBasicMaterial, TextureLoader } from "three";
import modelsLoader from "./loader.service";

const textureLoader = new TextureLoader();
//@ts-ignore
export const islandObject = await modelsLoader.getModelAsync('/models/robin-hoods-stride/source/robin-hoods-stride.glb', () => {
  console.log('wip');
});
console.log(islandObject)
const islandTexture = textureLoader.load('/models/robin-hoods-stride/textures/gltf_embedded_0.jpeg'); 
const islandMaterial = new MeshBasicMaterial({
  map: islandTexture,
})

// export const islandObject = new Mesh(islandModel.asset, islandMaterial);

// modelsLoader.getModel('/models/robin-hood-stride/source/robin-hood-stride.glb', (model) => {
//   console.log(model)
//   islandObject = model;
// });
