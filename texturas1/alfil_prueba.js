/*var loader = new THREE.TextureLoader();

loader.load(
	'https://saavedra017.github.io/texturas1/MN.jpg',  

	// función cuando la textura está cargada
	function( texture ) { var  material = new THREE.MeshBasicMaterial( { map: texture } ); },

	// función cuando la descarga de a textura está en progreso
	function ( xhr ){ console.log( (xhr.loaded/xhr.total * 100) + '% cargado' ); },

	// función cuando la descarga falla
	function ( xhr ) { var material = new THREE.MeshNormalMaterial(); console.log('fallo la descarga'); }
	);   */
THREE.ImageUtils.crossOrigin='';
var textura =THREE.ImageUtils.loadTexture('https://saavedra017.github.io/texturas1/MN.jpg');
var material = new THREE.MeshBasicMaterial({map:textura});

var puntos = [];

for ( var i = 0; i < 17; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.cos( i * 0.2 ) * 30 + 50, ( i - 5 ) * 2 ) ); 
}
for ( var i = 18; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.cos( i * 0.2 ) * 20 + 40, ( i - 5 ) * 2 ) ); 
}
for ( var i = 50; i < 80; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.cos( i*0.2 ) * 10 + 30, ( i - 5 ) * 2 ) ); 
}
for ( var i = 0; i < 32; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.sin(i*0.1)*20, ( i + 70 ) * 2 ) ); 
}


var forma = new THREE.LatheGeometry(puntos);

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );
malla.rotateY( Math.PI/6 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.y = 50;
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
