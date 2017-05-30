var figura0 = new THREE.Shape();
figura0.moveTo(0, 0);
figura0.lineTo(25, 0);
figura0.lineTo(25, 5);
figura0.lineTo(0, 5);
figura0.lineTo(0, 0);
var forma0 = new THREE.ExtrudeGeometry( figura0, {amount: 20} );

var textura =THREE.ImageUtils.loadTexture('https://saavedra017.github.io/Texturas/Pzasblancas.jpg');
var material = new THREE.MeshBasicMaterial({map:textura});
//MPzasnegras.jpg
//Pzasblancas.jpg

var malla0 = new THREE.Mesh( forma0, material );

var figura1 = new THREE.Shape();
figura1.moveTo(0, 0);
figura1.lineTo(15, 0);
figura1.lineTo(15, 20);
figura1.lineTo(0, 20);
figura1.lineTo(0, 0);
var forma1 = new THREE.ExtrudeGeometry( figura1, {amount: 10} );
forma1.translate(5,5,5);
var malla1 = new THREE.Mesh( forma1, material );

var figura3 = new THREE.Shape();
figura3.moveTo(0, 0);
figura3.lineTo(25, 0);
figura3.lineTo(25, 0.1);
figura3.lineTo(0, 0.1);
figura3.lineTo(0, 0);
var forma3 = new THREE.ExtrudeGeometry( figura3, {amount: 20} );
forma3.translate(0,30,0);
var malla3 = new THREE.Mesh( forma3, material );

var figura2 = new THREE.Shape();
figura2.moveTo(0, 0);
figura2.lineTo(5, 0);
figura2.lineTo(5, 5);
figura2.lineTo(0, 5);
figura2.lineTo(0, 0);
var forma2 = new THREE.ExtrudeGeometry( figura2, {amount: 1} );
forma2.translate(0,32,0);
var malla2 = new THREE.Mesh( forma2, material );

// union de mallas
var TorreForma = new THREE.Geometry();
TorreForma.merge(malla0.geometry, malla0.matrix);
TorreForma.merge(malla1.geometry, malla1.matrix);
TorreForma.merge(malla3.geometry, malla3.matrix);
TorreForma.merge(malla2.geometry, malla2.matrix); // esquinas superiores
forma2.translate(0,0,20);
TorreForma.merge(malla2.geometry, malla2.matrix); // esquinas superiores
forma2.translate(20,0,0);
TorreForma.merge(malla2.geometry, malla2.matrix); // esquinas superiores
forma2.translate(0,0,-20);
TorreForma.merge(malla2.geometry, malla2.matrix); // esquinas superiores

var TorreMalla = new THREE.Mesh(TorreForma, material);
// 2-90  2.25-80  2.57-70  3-60  3.6-50  4-45  4.5-40  6-30  9-20  18-10 //
TorreMalla.rotateX(Math.PI/6);
TorreMalla.rotateY(Math.PI/-3);
var escena = new THREE.Scene();
escena.add(TorreMalla);
//fin union de mallas
var camara = new THREE.PerspectiveCamera();
camara.position.z = 200;



var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );