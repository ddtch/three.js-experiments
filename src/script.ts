import { Group } from "three";
import hauntedScene from "./scenes/haunted-house-scene";

const {scene, sphere} = hauntedScene;

// scene.remove(sphere);

hauntedScene.tick();