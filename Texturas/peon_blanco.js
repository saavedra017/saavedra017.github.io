var forma = new THREE.Geometry();

//Vertices abajo
forma.vertices.push( new THREE.Vector3( -1,0,1 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 1,0,1 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3( 1,0,-1 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3( -1,0,-1 ) ); // Vértice 3

//Vertices arriba
forma.vertices.push( new THREE.Vector3( -1,1,1 ) ); // Vértice 4
forma.vertices.push( new THREE.Vector3( 1,1,1 ) ); // Vértice 5
forma.vertices.push( new THREE.Vector3( 1,1,-1 ) ); // Vértice 6
forma.vertices.push( new THREE.Vector3( -1,1,-1 ) ); // Vértice 7

// Punta
forma.vertices.push( new THREE.Vector3( 0,2,0 ) ); // Vértice 8


forma.faces.push( new THREE.Face3( 0, 1, 4 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 1, 5, 4 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 4, 5, 8 ) ); // Cara 9

forma.faces.push( new THREE.Face3( 1, 2, 5 ) ); // Cara 9
forma.faces.push( new THREE.Face3( 2, 6, 5 ) ); // Cara 9
forma.faces.push( new THREE.Face3( 5, 6, 8 ) ); // Cara 9

forma.faces.push( new THREE.Face3( 2, 3, 6 ) ); // Cara 9
forma.faces.push( new THREE.Face3( 7, 6, 3 ) ); // Cara 9
forma.faces.push( new THREE.Face3( 6, 7, 8 ) ); // Cara 9

forma.faces.push( new THREE.Face3( 3, 0, 4 ) ); // Cara 9
forma.faces.push( new THREE.Face3( 3, 4, 7 ) ); // Cara 9
forma.faces.push( new THREE.Face3( 7, 4, 8 ) ); // Cara 9

forma.faces.push( new THREE.Face3( 2, 1, 0 ) ); // Cara 9
forma.faces.push( new THREE.Face3( 0, 3, 2 ) ); // Cara 9


forma.computeBoundingSphere();
forma.computeFaceNormals();

var textura =THREE.ImageUtils.loadTexture('https://saavedra017.github.io/Texturas/Pzasblancas.jpg');
var material = new THREE.MeshBasicMaterial({map:textura});
//MPzasnegras.jpg
//Pzasblancas.jpg

var malla = new THREE.Mesh( forma, material );
// 2-90  2.25-80  2.57-70  3-60  3.6-50  4-45  4.5-40  6-30  9-20  18-10 //
malla.rotateX(Math.PI/9);
malla.rotateY(Math.PI/4);

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.x = 0;
camara.position.y = 1;
camara.position.z =5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );