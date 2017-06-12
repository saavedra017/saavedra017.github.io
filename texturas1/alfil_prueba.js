function setup(){
THREE.ImageUtils.crossOrigin='';
var textura =THREE.ImageUtils.loadTexture('https://saavedra017.github.io/texturas1/MPB.jpg');
var material = new THREE.MeshBasicMaterial({map:textura});

var iluminacion = new THREE.PointLight(0xFFFFFF);
iluminacion.position.y = 50;
iluminacion.position.z = 25;

var base = new THREE.Mesh( new THREE.BoxGeometry(20, 0.1, 20), 
			   new THREE. MeshBasicMaterial({color: 0xFFFFFF}) );
base.position.y=-5;
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

malla = new THREE.Mesh( forma, material );
malla.scale.set(0.1,0.1,0.1);
malla.rotateX( Math.PI/6 );
malla.rotateY( Math.PI/6 );

escena = new THREE.Scene();
escena.add(malla);
escena.add(base);
escena.add(iluminacion);

camara = new THREE.PerspectiveCamera();
camara.position.y = 10;
camara.position.z = 60;

var lienzo = document.getElementById("luzPuntual");
renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
renderizador.setSize(600, 600);
renderizador.shadowMapEnabled = true;
malla.castShadow = true;
base. receiveShadow = true;
iluminacion.castShadow = true;

document.body.appendChild( renderizador.domElement );
}

function loop(){
requestAnimationFrame(loop);

renderizador.render( escena, camara );
}

var camara, escena, renderizador, malla;

setup();
loop();
