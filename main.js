import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.setZ(30);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg1'),
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.render(scene, camera);

function addstuff(target){
  if(target === 0){
    return 0;
  }else{
    const spheregeometry = new THREE.SphereGeometry(20, 10);
    const spherematerial = new THREE.MeshBasicMaterial({color: 0x0000ff, wireframe: true});
  
    const sphere = new THREE.Mesh(spheregeometry, spherematerial);
    sphere.position.set(Math.random() * window.innerWidth - window.innerHeight, Math.random() * window.innerWidth - window.innerHeight, Math.random() * 1800 - 900);

    scene.add(sphere);
    renderer.render(scene, camera);
    addstuff(target-1);
  }
}
addstuff(750);