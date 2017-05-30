var figura0 = [];
figura0.push(new THREE.Vector2(0, 0));
figura0.push(new THREE.Vector2(12, 0));
figura0.push(new THREE.Vector2(9, 7));
figura0.push(new THREE.Vector2(6, 5));
figura0.push(new THREE.Vector2(0, 5));
figura0.push(new THREE.Vector2(7, 19));

figura0.push(new THREE.Vector2(10, 19));
figura0.push(new THREE.Vector2(10, 21));
figura0.push(new THREE.Vector2(7, 21));
figura0.push(new THREE.Vector2(7, 24));
figura0.push(new THREE.Vector2(10, 27));

figura0.push(new THREE.Vector2(10, 29));
figura0.push(new THREE.Vector2(0, 29));
figura0.push(new THREE.Vector2(3, 31));
figura0.push(new THREE.Vector2(0, 33));
figura0.push(new THREE.Vector2(3, 35));

figura0.push(new THREE.Vector2(0, 40));
figura0.push(new THREE.Vector2(0, 0));

var forma = new THREE.LatheGeometry(figura0);

var textura =THREE.ImageUtils.loadTexture('https://saavedra017.github.io/Texturas/Pzasblancas.jpg');
var material = new THREE.MeshBasicMaterial({map:textura});
//MPzasnegras.jpg
//Pzasblancas.jpg

var malla = new THREE.Mesh( forma, material );
// 2-90  2.25-80  2.57-70  3-60  3.6-50  4-45  4.5-40  6-30  9-20  18-10 //
malla.rotateX( Math.PI/4.5);
malla.rotateY( Math.PI/1 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.y = 15;
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*1, window.innerHeight*1 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );