import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

class ModelsLoader {
  public loader = new GLTFLoader();

  getModelAsync(path: string, progress?: any): Promise<GLTF> {
    return this.loader.loadAsync(path, progress);
  }

  getModel(path: string, callback: (data: GLTF) => void) {
    this.loader.load(path, (gltf) => {
      callback(gltf);
    }, (state) => {
      console.log('in progress');
    }, (err) => {
      console.error(err);
      throw new Error(err.message);
    })
  }
}

const modelsLoader = new ModelsLoader();

export default modelsLoader;