import {Font, FontLoader} from 'three/examples/jsm/loaders/FontLoader';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry';

(async() => {
  const fontLoader = new FontLoader();
  const mainFont = await (fontLoader.loadAsync('../fonts/helvetiker_regular.typeface.json'));
  
  // class FontService {
  //   public getMainFont() {
  //     return mainFont;
  //   }
  // }
  
  // const fontService = new FontService();
  // export default fontService;
})()