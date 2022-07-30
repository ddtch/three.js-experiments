import '../style.scss'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import mGui from '../gui'
import { AmbientLight, Clock, DirectionalLight, Mesh, MeshStandardMaterial, PerspectiveCamera, PlaneGeometry, Scene, SphereGeometry, TextureLoader, WebGLRenderer } from 'three';

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

export default class BaseScene {
  public gui = mGui.gui;
  public canvas: HTMLCanvasElement = document.querySelector('canvas.webgl')
  public textureLoader = new TextureLoader();
  public scene = new Scene();
  public clock = new Clock();
  
  /**
   * Objects
   */
  public sphere = new Mesh(
    new SphereGeometry(1, 32, 32),
    new MeshStandardMaterial({ roughness: 0.7 })
    );
  public floor = new Mesh(
    new PlaneGeometry(20, 20),
    new MeshStandardMaterial({ color: '#a9c388' })
  );
    
  /**
   * Lights
   */
  public ambientLight = new AmbientLight('#ffffff', 0.5)
  public moonLight = new DirectionalLight('#ffffff', 0.5)
  
  /**
   * Camera
   */
  public camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
  
  /**
   * Renderer
   */
  public renderer = new WebGLRenderer({
    canvas: this.canvas
  })

  public controls = new OrbitControls(this.camera, this.canvas);
      
  constructor() {
    console.log('constructor initialized');
    this.controls.enableDamping = true;
    this.sphere.position.y = 1

    this.floor.rotation.x = - Math.PI * 0.5
    this.floor.position.y = 0
    
    this.gui.add(this.ambientLight, 'intensity').min(0).max(1).step(0.001)
    
    this.moonLight.position.set(4, 5, - 2)
    this.gui.add(this.moonLight, 'intensity').min(0).max(1).step(0.001)
    this.gui.add(this.moonLight.position, 'x').min(- 5).max(5).step(0.001)
    this.gui.add(this.moonLight.position, 'y').min(- 5).max(5).step(0.001)
    this.gui.add(this.moonLight.position, 'z').min(- 5).max(5).step(0.001)
    
    this.camera.position.x = 4
    this.camera.position.y = 2
    this.camera.position.z = 5
    const camFolder = this.gui.addFolder('camera');
    camFolder.add(this.camera.position, 'x', 1, 10);
    camFolder.add(this.camera.position, 'y', 1, 10);
    camFolder.add(this.camera.position, 'z', 1, 10);
    
    this.renderer.setSize(sizes.width, sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    this.scene.add(
      this.ambientLight,
      this.moonLight,
      this.camera,
      this.sphere,
      this.floor,
    )
    
    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      // Update camera
      this.camera.aspect = sizes.width / sizes.height
      this.camera.updateProjectionMatrix()

      // Update renderer
      this.renderer.setSize(sizes.width, sizes.height)
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    });

    // this.tick()
  }

  public tick() {
    const elapsedTime = this.clock.getElapsedTime();

    // Update controls
    this.controls.update()

    // Render
    this.renderer.render(this.scene, this.camera);
    this.additionalAnimation();

    // Call tick again on the next frame
    window.requestAnimationFrame(() => this.tick())
  }

  public additionalAnimation () {

  }
}