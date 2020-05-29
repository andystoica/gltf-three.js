/**
 * Simple demonstration for rendering a GLTF 3D Object using the Three.js library.
 * https://threejs.org
 *
 * 3D model courtesy of jeff1234678
 * https://sketchfab.com/3d-models/coronavirus-6d90f835a3bb45b0b46e44ceafd07524
 *
 * This demonstration initialises a 3D scene as a canvas element attached to the body element.
 * The 3D model is imported using the GLTFLoader module and is rendered using 3 lights and
 * a perspective camera. The model is then pun on an animation loop, gently rotating it
 * around the X and Y axis. Camera controls are achieved with mouse interactions
 * the OrbitControls module.
 */

 
 
// INITIALISATION and LOADING
// Initialise the 3D scene
var scene = new THREE.Scene();
var modelPath = 'models/coronavirus/scene.gltf'

// Initialise the Rendered, bind to the body element and set the size to match viewport
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Adjust the canvas size and camera aspect ration when the window is resized
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

// Load the GLTF object and save a reference for it
var loader = new THREE.GLTFLoader();
var object = undefined;

loader.load(
  modelPath,
  function (gltf) {
    object = gltf.scene;
    scene.add(object);
    renderer.render(scene, camera);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);



// SCENE SETTINGS
// Set a warm white colour for the scene background
scene.background = new THREE.Color(0xddccbb);

// Create a perspective camera with the window aspect ratio
var camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create one hemi light and two spot lights
var hemiLight = new THREE.HemisphereLight(0xffffff, 0x333333);
hemiLight.position.set(0, 20, -20);
var light1 = new THREE.PointLight(0xff0000, 1, 200, 2);
light1.position.set(20, 20, 5);
var light2 = new THREE.PointLight(0x00ff00, 1, 200, 2);
light2.position.set(-20, -20, 5);
scene.add(hemiLight, light1, light2);

// Load the control module for mouse interraction
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 2;
controls.maxDistance = 10;
controls.target.set(0, 0, -0.2);
controls.update();



// RENDERING and ANIMATION
// Rendering helper function
function render() {
  renderer.render(scene, camera);
}

// Animation loop function genlty rotating the object arount its axis
function animate() {
  requestAnimationFrame(animate);
  if (object) {
    object.rotation.x += 0.002;
    object.rotation.y += 0.002;
  }
  render();
}

// Initiate the renderign and animation
animate();