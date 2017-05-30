var figura = new THREE.Shape();

figura.moveTo(0, 0);
figura.lineTo(25, 0);
figura.lineTo(25, 5);
figura.lineTo(20, 5);
figura.lineTo(20, 5);
figura.lineTo(20, 15);

figura.lineTo(25, 20);
figura.lineTo(20, 25);
figura.lineTo(20, 30);
figura.lineTo(15, 30);
figura.lineTo(10, 30);

figura.lineTo(5, 25);
figura.lineTo(2.5, 22.5);
figura.lineTo(2.5, 17.5);
figura.lineTo(5, 5);
figura.lineTo(0, 5);

figura.lineTo(0, 0);

var forma = new THREE.ExtrudeGeometry( figura, {amount: 10} );

var textura =THREE.ImageUtils.loadTexture('https://saavedra017.github.io/Texturas/Pzasblancas.jpg');
var material = new THREE.MeshBasicMaterial({map:textura});
//MPzasnegras.jpg
//Pzasblancas.jpg


var malla = new THREE.Mesh( forma, material );
// 2-90  2.25-80  2.57-70  3-60  3.6-50  4-45  4.5-40  6-30  9-20  18-10 //
malla.rotateX(Math.PI/6);
malla.rotateY(Math.PI/-18);

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 200;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );