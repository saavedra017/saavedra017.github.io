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

var iluminacion = new THREE.PointLight(0xFFFFFF);
iluminacion.position.y = 200;

var base = new THREE.Mesh( new THREE.BoxGeometry(20, 0.1, 20), 
			   new THREE. MeshLambertMaterial({color: 0xFFFFFF}) );
base.position.y=0;
base.rotateX( Math.PI/6 );


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

//var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.scale.set(0.1,0.1,0.1);
malla.rotateX( Math.PI/6 );
malla.rotateY( Math.PI/6 );

var escena = new THREE.Scene();
escena.add(malla);
escena.add(base);
escena.add(iluminacion);

var camara = new THREE.PerspectiveCamera();
camara.position.y = 10;
camara.position.z = 50;

var lienzo = document.getElementById("luzPuntual");
var renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
renderizador.setSize(600, 600);
renderizador.shadowMapEnabled = true;
malla.castShadow = true;
base. receiveShadow = true;
iluminacion.castShadow = true;

document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
