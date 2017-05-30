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
figura0.push(new THREE.Vector2(7, 27));
figura0.push(new THREE.Vector2(10, 30));
figura0.push(new THREE.Vector2(10, 33));
figura0.push(new THREE.Vector2(0, 33));
figura0.push(new THREE.Vector2(0, 0));
var forma = new THREE.LatheGeometry(figura0);
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );

var figura1 = new THREE.Shape();
figura1.moveTo(-1, 0);
figura1.lineTo(1, 0);
figura1.lineTo(1, 2);
figura1.lineTo(0.5, 2);
figura1.lineTo(0.5, 4);
figura1.lineTo(-0.5, 4);
figura1.lineTo(-0.5, 2);
figura1.lineTo(-1, 2);
figura1.lineTo(-1, 0);
//figura1.lineTo(-1.5, 2.5);
//figura1.lineTo(-1.5, 2);
//figura1.lineTo(-1, 2);
figura1.lineTo(-1, 0);
var forma1 = new THREE.ExtrudeGeometry( figura1, {amount: 0.01} );
forma1.translate(0,33,0);

var textura =THREE.ImageUtils.loadTexture('https://saavedra017.github.io/Texturas/Pzasblancas.jpg');
var material = new THREE.MeshBasicMaterial({map:textura});
//MPzasnegras.jpg
//Pzasblancas.jpg

var malla0 = new THREE.Mesh( forma1, material );

var ReyForma = new THREE.Geometry();
ReyForma.merge(malla.geometry, malla.matrix);
ReyForma.merge(malla0.geometry, malla0.matrix);

var ReyMalla = new THREE.Mesh(ReyForma, material);
// 2-90  2.25-80  2.57-70  3-60  3.6-50  4-45  4.5-40  6-30  9-20  18-10 //
ReyMalla.rotateX( Math.PI/6);
ReyMalla.rotateY( Math.PI/-1 );

var escena = new THREE.Scene();
escena.add(ReyMalla);
//fin union de mallas
var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;
camara.position.y = 10;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );