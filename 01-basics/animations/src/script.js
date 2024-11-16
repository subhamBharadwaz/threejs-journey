import './style.css';

import * as THREE from 'three';
import gsap from 'gsap';

const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

const sizes = {
  width: 800,
  height: 600,
};

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Clock
// const clock = new THREE.Clock();
gsap.to(mesh.position, { x: 2, duration: 1, delay: 1 });
gsap.to(mesh.position, { x: 0, duration: 1, delay: 2 });

// Animations
const tick = () => {
  // Clock
  // const elapsedTime = clock.getElapsedTime();

  // Update objects
  // mesh.position.x -= 0.01;
  // mesh.position.y += 0.01;
  // mesh.rotation.y = elapsedTime;
  // mesh.position.y = Math.sin(elapsedTime);
  // camera.lookAt(mesh.position);
  // mesh.position.x = Math.cos(elapsedTime);

  // Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
