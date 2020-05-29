# Rendering a GLTF 3D Object using the [Three.js](https://threejs.org/) library
 
This demonstration initialises a 3D scene as a canvas element attached to the body element.

The 3D model is imported using the GLTFLoader module and is rendered using 3 lights and a perspective camera. 

The model is then pun on an animation loop, gently rotating it around the X and Y axis.

Camera controls are achieved with mouse interactions the OrbitControls module.
 
3D model courtesy of [jeff1234678](https://sketchfab.com/3d-models/coronavirus-6d90f835a3bb45b0b46e44ceafd07524).

## Testing locally
Due to same origin policy restrictions when referencing the GLTF resource files, this demo can not be run by simply loading the HTML inside the browser. Instead it needs to be run on a testing server such as the [Live Server](https://github.com/ritwickdey/vscode-live-server) extension for VSCode. See Three.js docs for more guidance: [How to run things locally](https://threejs.org/docs/#manual/en/introduction/How-to-run-things-locally)