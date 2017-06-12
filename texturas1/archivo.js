function setup(){
//THREE.ImageUtils.crossOrigin='';
//var textura =THREE.ImageUtils.loadTexture('https://saavedra017.github.io/texturas1/MPN.jpg');
//var material = new THREE.MeshBasicMaterial({map:textura});
var b_textura = 0;
var loader = new THREE.TextureLoader();
do{
	loader.load(
	'https://saavedra017.github.io/texturas1/MN.jpg',  
	// función cuando la textura está cargada
	function( texture ) { b_textura = 1; var  material = new THREE.MeshBasicMaterial( { map: texture } ); },
	// función cuando la descarga de a textura está en progreso
	function ( xhr ){ b_textura = 0; console.log( (xhr.loaded/xhr.total * 100) + '% cargado' ); },
	// función cuando la descarga falla
	function ( xhr ) { b_textura = 0; console.log('fallo la descarga'); }
	); 
} 
	while(b_textura === 1 );

var forma = new THREE.BoxGeometry(1,1,1);
malla = new THREE.Mesh(forma, material);

escena = new THREE.Scene();
escena.add(malla);

camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);

malla.rotation.x += 0.01;
malla.rotation.y += 0.01;

renderer.render(escena, camara);
}

var camara, escena, renderer, malla;
setup();
loop();
