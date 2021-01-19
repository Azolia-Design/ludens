var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
camera.position.set(0,1.5,5);
camera.rotation.x = -.2;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#01244E");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
})

var geometry = new THREE.PlaneGeometry(4,4,1,1);
var material = new THREE.MeshPhysicalMaterial({color: 0xF2970F});
var plane = new THREE.Mesh(geometry, material);
plane.position.set(0,-2,0);
plane.rotation.x = 1.57;

scene.add(plane);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshPhysicalMaterial({color: 0xF2970F, metalness: 1, roughness: .6});
var box = new THREE.Mesh(geometry, material);

scene.add(box);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshPhysicalMaterial({color: 0x44FAEF, metalness: 0, roughness: 0.6});
var box = new THREE.Mesh(geometry, material);
box.position.set(1,1,0);

scene.add(box);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshPhysicalMaterial({color: 0x44FAEF, metalness: 0, roughness: 0.6});
var box = new THREE.Mesh(geometry, material);
box.position.set(-1,-1,0);

scene.add(box);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshPhysicalMaterial({color: 0x44FAEF, metalness: 0, roughness: 0.6});
var box = new THREE.Mesh(geometry, material);
box.position.set(-1,1,0);

scene.add(box);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshPhysicalMaterial({color: 0x44FAEF, metalness: 0, roughness: 0.6});
var box = new THREE.Mesh(geometry, material);
box.position.set(1,-1,0);

scene.add(box);

var light = new THREE.PointLight(0xFFFFFF, .5, 500)
light.position.set(0,0,10);
scene.add(light);

var light = new THREE.PointLight(0xFFFFFF, 5, 500)
light.position.set(0,0,-5);
scene.add(light); 

var render = function() {
  requestAnimationFrame(render);

  renderer.render(scene, camera);
}

render();
