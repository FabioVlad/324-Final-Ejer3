// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(-1,1,3);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xAAAAAA, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT
	
    
        var migeometria = new THREE.Geometry();
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.3, 0.0, 0.0 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.3, 0.3, 0.0 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.3 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.3, -0.3 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.3, 0.0 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.3, 0.0, -0.3 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.3, 0.3, -0.3 ) );	

	migeometria.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometria.faces.push( new THREE.Face3( 0, 5, 3 ) );
	migeometria.faces.push( new THREE.Face3( 2, 5, 0 ) );
	migeometria.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometria.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometria.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometria.faces.push( new THREE.Face3( 4, 7, 6 ) );
	migeometria.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometria.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometria.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometria.faces.push( new THREE.Face3( 5, 7, 4 ) );
	var material = new THREE.MeshBasicMaterial( { color: 0xFF0000 } ); // Material de color rojo
    var miobjeto = new THREE.Mesh (migeometria, material); // Crea el objeto

	//supuestamente la copia en grande
	var migeometria2 = new THREE.Geometry();
	migeometria2.vertices.push( new THREE.Vector3( 0, 0, 0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 3, 0, 0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 3, 3, 0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0, 0, -3 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0, 3, -3 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0, 3, 0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 3, 0, -3 ) );
	migeometria2.vertices.push( new THREE.Vector3( 3, 3, -3 ) )	;	

	migeometria2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria2.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometria2.faces.push( new THREE.Face3( 0, 5, 3 ) );
	migeometria2.faces.push( new THREE.Face3( 2, 5, 0 ) );
	migeometria2.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometria2.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometria2.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometria2.faces.push( new THREE.Face3( 4, 7, 6 ) );
	migeometria2.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometria2.faces.push( new THREE.Face3( 1, 7, 2 ) );
	var material2 = new THREE.MeshBasicMaterial( { color: 0xFF0540 } ); // Material de color rojo
    var miobjeto2 = new THREE.Mesh (migeometria2, material2); // Crea el objeto



	var mipared = new THREE.Geometry();
	mipared.vertices.push( new THREE.Vector3( -3, 0.0, 3 ) );
	mipared.vertices.push( new THREE.Vector3( 3, 0.0, 3 ) );
	mipared.vertices.push( new THREE.Vector3( 3, 3, 3 ) );
	mipared.vertices.push( new THREE.Vector3( -3, 3, 3 ) );
	mipared.vertices.push( new THREE.Vector3( -3, 0.0, -3 ) );
	mipared.vertices.push( new THREE.Vector3( 3, 0.0, -3 ) );
	mipared.vertices.push( new THREE.Vector3( 3, 3, -3 ) );
	mipared.vertices.push( new THREE.Vector3( -3, 3, -3 ) );

	mipared.faces.push( new THREE.Face3( 0, 1, 2 ) );
	mipared.faces.push( new THREE.Face3( 0, 2, 3 ) );
	mipared.faces.push( new THREE.Face3( 1, 5, 6 ) );
	mipared.faces.push( new THREE.Face3( 1, 6, 2 ) );
	mipared.faces.push( new THREE.Face3( 5, 6, 4 ) );
	mipared.faces.push( new THREE.Face3( 6, 7, 4 ) );
	mipared.faces.push( new THREE.Face3( 0, 4, 7 ) );
	mipared.faces.push( new THREE.Face3( 7, 3, 0 ) );

	var materialpared = new THREE.MeshBasicMaterial( { color: 0xFFffff } ); // Material de color rojo
    var miobjeto3 = new THREE.Mesh (mipared, materialpared); // Crea el objeto

    var mipiso = new THREE.Geometry();
	mipiso.vertices.push( new THREE.Vector3( -6, 0.0, 3 ) );
	mipiso.vertices.push( new THREE.Vector3( 6, 0.0, 3 ) );
	mipiso.vertices.push( new THREE.Vector3( 6, 0.0, -3 ) );
	mipiso.vertices.push( new THREE.Vector3( -6, 0.0, -3 ) );

	mipiso.faces.push( new THREE.Face3( 0, 1, 2 ) );
	mipiso.faces.push( new THREE.Face3( 0, 2, 3 ) );
    
    var materialpiso = new THREE.MeshBasicMaterial( { color: 0xffffff  } ); // Material de color rojo
    var miobjetopiso = new THREE.Mesh (mipiso, materialpiso); // Crea el objeto
	
	//para el tablon donde se suben los lics
 	var mitablon = new THREE.Geometry();
	mitablon.vertices.push( new THREE.Vector3( -6, 0, 3 ) );	//0
	mitablon.vertices.push( new THREE.Vector3( -5, 0, 3 ) );	//1
	mitablon.vertices.push( new THREE.Vector3( -5, 0.5, 3 ) );	//2
	mitablon.vertices.push( new THREE.Vector3( -6, 0.5, 3 ) );	//3

	mitablon.vertices.push( new THREE.Vector3( -6, 0, -3 ) );	//4
	mitablon.vertices.push( new THREE.Vector3( -5, 0, -3 ) );	//5
	mitablon.vertices.push( new THREE.Vector3( -5, 0.5, -3 ) );	//6
	mitablon.vertices.push( new THREE.Vector3( -6, 0.5, -3 ) );	//7

	mitablon.faces.push( new THREE.Face3( 1, 5, 6 ) );
	mitablon.faces.push( new THREE.Face3( 1, 6, 2 ) );

	mitablon.faces.push( new THREE.Face3( 3, 2, 6 ) );
	mitablon.faces.push( new THREE.Face3( 6, 7, 3 ) );
	

	var matablon = new THREE.MeshBasicMaterial( { color: 0xe67e22   } ); // Material de color rojo
    var obtablon = new THREE.Mesh (mitablon, matablon); // Crea el objeto



    //para el tablon donde se suben los lics
 	var mipizarra = new THREE.Geometry();
	mipizarra.vertices.push( new THREE.Vector3( -5.9, 1, 2 ) );
	mipizarra.vertices.push( new THREE.Vector3( -5.9, 1, -2 ) );
	mipizarra.vertices.push( new THREE.Vector3( -5.9, 2.5, 2 ) );
	mipizarra.vertices.push( new THREE.Vector3( -5.9, 2.5, -2 ) );

	mipizarra.faces.push( new THREE.Face3( 0, 1, 2 ) );
	mipizarra.faces.push( new THREE.Face3( 2, 1, 3 ) );


	var mapizarra = new THREE.MeshBasicMaterial( { color: 0xFFFFFF    } ); // Material de color rojo
    var obpizarra = new THREE.Mesh (mipizarra, mapizarra); // Crea el objeto



	var mipared2 = new THREE.Geometry();
	mipared2.vertices.push( new THREE.Vector3( -6, 0, 3 ) );
	mipared2.vertices.push( new THREE.Vector3( 3, 0, 3 ) );
	mipared2.vertices.push( new THREE.Vector3( 3, 3, 3 ) );
	mipared2.vertices.push( new THREE.Vector3( -6, 3, 3 ) );

	mipared2.vertices.push( new THREE.Vector3( -6, 0, -3 ) );
	mipared2.vertices.push( new THREE.Vector3( 6, 0, -3 ) );
	mipared2.vertices.push( new THREE.Vector3( 6, 3, -3 ) );
	mipared2.vertices.push( new THREE.Vector3( -6, 3, -3 ) );

	mipared2.vertices.push( new THREE.Vector3( 5, 0, 3 ) );
	mipared2.vertices.push( new THREE.Vector3( 6, 0, 3 ) );
	mipared2.vertices.push( new THREE.Vector3( 6, 3, 3 ) );
	mipared2.vertices.push( new THREE.Vector3( 5, 3, 3 ) );

	mipared2.vertices.push( new THREE.Vector3( 3, 2, 3 ) );
	mipared2.vertices.push( new THREE.Vector3( 5, 2, 3 ) );
	mipared2.vertices.push( new THREE.Vector3( 5, 3, 3 ) );
	mipared2.vertices.push( new THREE.Vector3( 3, 3, 3 ) );

	//pared de ventanas	16-		
	mipared2.vertices.push( new THREE.Vector3( -6, 0, -3) );
	mipared2.vertices.push( new THREE.Vector3( 6, 0, -3 ) );
	mipared2.vertices.push( new THREE.Vector3( 6, 1.2, -3 ) );
	mipared2.vertices.push( new THREE.Vector3( -6, 1.2, -3 ) );

	mipared2.vertices.push( new THREE.Vector3( -6, 2.5, -3) );
	mipared2.vertices.push( new THREE.Vector3( 6, 2.5, -3 ) );
	mipared2.vertices.push( new THREE.Vector3( 6, 3, -3 ) );
	mipared2.vertices.push( new THREE.Vector3( -6, 3, -3 ) );

	mipared2.vertices.push( new THREE.Vector3( -6, 1.2, -3) );
	mipared2.vertices.push( new THREE.Vector3( -4, 1.2, -3 ) );
	mipared2.vertices.push( new THREE.Vector3( -4, 2.5, -3 ) );
	mipared2.vertices.push( new THREE.Vector3( -6, 2.5, -3 ) );

	mipared2.vertices.push( new THREE.Vector3( -2, 1.2, -3) );
	mipared2.vertices.push( new THREE.Vector3( -1, 1.2, -3 ) );
	mipared2.vertices.push( new THREE.Vector3( -1, 2.5, -3 ) );
	mipared2.vertices.push( new THREE.Vector3( -2, 2.5, -3 ) );

	mipared2.vertices.push( new THREE.Vector3( 1, 1.2, -3) );
	mipared2.vertices.push( new THREE.Vector3( 2, 1.2, -3 ) );
	mipared2.vertices.push( new THREE.Vector3( 2, 2.5, -3 ) );
	mipared2.vertices.push( new THREE.Vector3( 1, 2.5, -3 ) );

	mipared2.vertices.push( new THREE.Vector3( 4, 1.2, -3) );
	mipared2.vertices.push( new THREE.Vector3( 6, 1.2, -3 ) );
	mipared2.vertices.push( new THREE.Vector3( 6, 2.5, -3 ) );
	mipared2.vertices.push( new THREE.Vector3( 4, 2.5, -3 ) );

	

	//caras pared ventanas 16-
	mipared2.faces.push( new THREE.Face3( 16, 17, 18 ) );
	mipared2.faces.push( new THREE.Face3( 18, 19, 16 ) );

	mipared2.faces.push( new THREE.Face3( 20, 21, 22 ) );
	mipared2.faces.push( new THREE.Face3( 22, 23, 20 ) );

	mipared2.faces.push( new THREE.Face3( 24, 25, 26 ) );
	mipared2.faces.push( new THREE.Face3( 26, 27, 24 ) );
	
	mipared2.faces.push( new THREE.Face3( 28, 29, 30 ) );
	mipared2.faces.push( new THREE.Face3( 30, 31, 28 ) );

	mipared2.faces.push( new THREE.Face3( 32, 33, 34 ) );
	mipared2.faces.push( new THREE.Face3( 34, 35, 32 ) );
	
	mipared2.faces.push( new THREE.Face3( 36, 37, 38 ) );
	mipared2.faces.push( new THREE.Face3( 38, 39, 36 ) );
	//
	mipared2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	mipared2.faces.push( new THREE.Face3( 0, 2, 3 ) );

	mipared2.faces.push( new THREE.Face3( 12, 13, 14 ) );
	mipared2.faces.push( new THREE.Face3( 14, 15, 12 ) );


	// mipared2.faces.push( new THREE.Face3( 1, 5, 6 ) );
	// mipared2.faces.push( new THREE.Face3( 1, 6, 2 ) );
	// mipared2.faces.push( new THREE.Face3( 5, 6, 4 ) );
	// mipared2.faces.push( new THREE.Face3( 6, 7, 4 ) );
	mipared2.faces.push( new THREE.Face3( 0, 4, 7 ) );
	mipared2.faces.push( new THREE.Face3( 7, 3, 0 ) );

	mipared2.faces.push( new THREE.Face3( 8, 9, 10 ) );
	mipared2.faces.push( new THREE.Face3( 10, 11, 8 ) );

	mipared2.faces.push( new THREE.Face3( 9, 5, 6 ) );
	mipared2.faces.push( new THREE.Face3( 6, 10, 9 ) );


	var mapared2 = new THREE.MeshBasicMaterial( { color: 0xf1c40f  } ); // Material de color rojo
    var obpared2 = new THREE.Mesh (mipared2, mapared2); // Crea el objeto

    var mipupitre = new THREE.Geometry();
    //vertices delantera pupitre1 0-15
	mipupitre.vertices.push( new THREE.Vector3( -4, 0, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -4, 0, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -4, 1, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -4, 1, 3 ) );

	mipupitre.vertices.push( new THREE.Vector3( -4, 0, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -4, 0, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -4, 1, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -4, 1, 1.4 ) );

	mipupitre.vertices.push( new THREE.Vector3( -4, 0, -0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -4, 0, -1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -4, 1, -1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -4, 1, -0.2 ) );

	mipupitre.vertices.push( new THREE.Vector3( -4, 0, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -4, 0, -3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -4, 1, -3) );
	mipupitre.vertices.push( new THREE.Vector3( -4, 1, -1.8 ) );
	//vertices mesa pupitre1 16-31
	mipupitre.vertices.push( new THREE.Vector3( -4, 1, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3.4, 1, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3.4, 1, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -4, 1, 1.8 ) );

	mipupitre.vertices.push( new THREE.Vector3( -4, 1, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3.4, 1, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3.4, 1, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -4, 1, 0.2 ) );

	mipupitre.vertices.push( new THREE.Vector3( -4, 1, -0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3.4, 1, -0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3.4, 1, -1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -4, 1, -1.4 ) );

	mipupitre.vertices.push( new THREE.Vector3( -4, 1, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3.4, 1, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3.4, 1, -3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -4, 1, -3 ) );

	 //vertices delantera pupitre2 32-47 
	mipupitre.vertices.push( new THREE.Vector3( -3, 0, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3, 0, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3, 1, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3, 1, 3 ) );

	mipupitre.vertices.push( new THREE.Vector3( -3, 0, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3, 0, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3, 1, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3, 1, 1.4 ) );

	mipupitre.vertices.push( new THREE.Vector3( -3, 0, -0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3, 0, -1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3, 1, -1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3, 1, -0.2 ) );

	mipupitre.vertices.push( new THREE.Vector3( -3, 0, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3, 0, -3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3, 1, -3) );
	mipupitre.vertices.push( new THREE.Vector3( -3, 1, -1.8 ) );
	//vertices mesa pupitre2 47-63
	mipupitre.vertices.push( new THREE.Vector3( -3, 1, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2.4, 1, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2.4, 1, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3, 1, 1.8 ) );

	mipupitre.vertices.push( new THREE.Vector3( -3, 1, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2.4, 1, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2.4, 1, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3, 1, 0.2 ) );

	mipupitre.vertices.push( new THREE.Vector3( -3, 1, -0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2.4, 1, -0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2.4, 1, -1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3, 1, -1.4 ) );

	mipupitre.vertices.push( new THREE.Vector3( -3, 1, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2.4, 1, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2.4, 1, -3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -3, 1, -3 ) );

	 //vertices delantera pupitre3 63-79
	mipupitre.vertices.push( new THREE.Vector3( -2, 0, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2, 0, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2, 1, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2, 1, 3 ) );

	mipupitre.vertices.push( new THREE.Vector3( -2, 0, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2, 0, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2, 1, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2, 1, 1.4 ) );

	mipupitre.vertices.push( new THREE.Vector3( -2, 0, -0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2, 0, -1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2, 1, -1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2, 1, -0.2 ) );

	mipupitre.vertices.push( new THREE.Vector3( -2, 0, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2, 0, -3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2, 1, -3) );
	mipupitre.vertices.push( new THREE.Vector3( -2, 1, -1.8 ) );
	//vertices mesa pupitre3 79-95
	mipupitre.vertices.push( new THREE.Vector3( -2, 1, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1.4, 1, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1.4, 1, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2, 1, 1.8 ) );

	mipupitre.vertices.push( new THREE.Vector3( -2, 1, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1.4, 1, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1.4, 1, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2, 1, 0.2 ) );

	mipupitre.vertices.push( new THREE.Vector3( -2, 1, -0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1.4, 1, -0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1.4, 1, -1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2, 1, -1.4 ) );

	mipupitre.vertices.push( new THREE.Vector3( -2, 1, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1.4, 1, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1.4, 1, -3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -2, 1, -3 ) );

	 //vertices delantera pupitre4 95-111
	mipupitre.vertices.push( new THREE.Vector3( -1, 0, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1, 0, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1, 1, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1, 1, 3 ) );

	mipupitre.vertices.push( new THREE.Vector3( -1, 0, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1, 0, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1, 1, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1, 1, 1.4 ) );

	mipupitre.vertices.push( new THREE.Vector3( -1, 0, -0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1, 0, -1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1, 1, -1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1, 1, -0.2 ) );

	mipupitre.vertices.push( new THREE.Vector3( -1, 0, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1, 0, -3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1, 1, -3) );
	mipupitre.vertices.push( new THREE.Vector3( -1, 1, -1.8 ) );
	//vertices mesa pupitre4 111-127
	mipupitre.vertices.push( new THREE.Vector3( -1, 1, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -0.4, 1, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -0.4, 1, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1, 1, 1.8 ) );

	mipupitre.vertices.push( new THREE.Vector3( -1, 1, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -0.4, 1, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -0.4, 1, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1, 1, 0.2 ) );

	mipupitre.vertices.push( new THREE.Vector3( -1, 1, -0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -0.4, 1, -0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( -0.4, 1, -1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1, 1, -1.4 ) );

	mipupitre.vertices.push( new THREE.Vector3( -1, 1, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -0.4, 1, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( -0.4, 1, -3 ) );
	mipupitre.vertices.push( new THREE.Vector3( -1, 1, -3 ) );

	 //vertices delantera pupitre5 127-143
	mipupitre.vertices.push( new THREE.Vector3( 0, 0, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0, 0, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0, 1, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0, 1, 3 ) );

	mipupitre.vertices.push( new THREE.Vector3( 0, 0, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0, 0, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0, 1, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0, 1, 1.4 ) );

	mipupitre.vertices.push( new THREE.Vector3( 0, 0, -1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0, 0, -0.2) );
	mipupitre.vertices.push( new THREE.Vector3( 0, 1, -0.2) );
	mipupitre.vertices.push( new THREE.Vector3( 0, 1, -1.4 ) );

	mipupitre.vertices.push( new THREE.Vector3( 0, 0, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0, 0, -3 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0, 1, -3) );
	mipupitre.vertices.push( new THREE.Vector3( 0, 1, -1.8 ) );
	//vertices mesa pupitre5 143-159
	mipupitre.vertices.push( new THREE.Vector3( 0, 1, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0.6, 1, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0.6, 1, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0, 1, 1.8 ) );

	mipupitre.vertices.push( new THREE.Vector3( 0, 1, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0.6, 1, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0.6, 1, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0, 1, 0.2 ) );

	mipupitre.vertices.push( new THREE.Vector3( 0, 1, -0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0.6, 1, -0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0.6, 1, -1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0, 1, -1.4 ) );

	mipupitre.vertices.push( new THREE.Vector3( 0, 1, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0.6, 1, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0.6, 1, -3 ) );
	mipupitre.vertices.push( new THREE.Vector3( 0, 1, -3 ) );
	 //vertices delantera pupitre6 159-175
	mipupitre.vertices.push( new THREE.Vector3( 1, 0, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1, 0, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1, 1, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1, 1, 3 ) );

	mipupitre.vertices.push( new THREE.Vector3( 1, 0, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1, 0, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1, 1, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1, 1, 1.4 ) );

	mipupitre.vertices.push( new THREE.Vector3( 1, 0, -0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1, 0, -1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1, 1, -1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1, 1, -0.2 ) );

	mipupitre.vertices.push( new THREE.Vector3( 1, 0, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1, 0, -3 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1, 1, -3) );
	mipupitre.vertices.push( new THREE.Vector3( 1, 1, -1.8 ) );
	//vertices mesa pupitre6 175-191
	mipupitre.vertices.push( new THREE.Vector3( 1, 1, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1.6, 1, 3 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1.6, 1, 1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1, 1, 1.8 ) );

	mipupitre.vertices.push( new THREE.Vector3( 1, 1, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1.6, 1, 1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1.6, 1, 0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1, 1, 0.2 ) );

	mipupitre.vertices.push( new THREE.Vector3( 1, 1, -0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1.6, 1, -0.2 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1.6, 1, -1.4 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1, 1, -1.4 ) );

	mipupitre.vertices.push( new THREE.Vector3( 1, 1, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1.6, 1, -1.8 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1.6, 1, -3 ) );
	mipupitre.vertices.push( new THREE.Vector3( 1, 1, -3 ) );

	//caras delantera pupitre1 1-15
	mipupitre.faces.push( new THREE.Face3( 0, 1, 2 ) );
	mipupitre.faces.push( new THREE.Face3( 2, 3, 0 ) );

	mipupitre.faces.push( new THREE.Face3( 4, 5, 6 ) );
	mipupitre.faces.push( new THREE.Face3( 6, 7, 4 ) );

	mipupitre.faces.push( new THREE.Face3( 8, 9, 10 ) );
	mipupitre.faces.push( new THREE.Face3( 10, 11, 8 ) );

	mipupitre.faces.push( new THREE.Face3( 12, 13, 14 ) );
	mipupitre.faces.push( new THREE.Face3( 14, 15, 12 ) );
	//caras mesa pupitre1 16-31
	mipupitre.faces.push( new THREE.Face3( 16, 17, 18 ) );
	mipupitre.faces.push( new THREE.Face3( 18, 19, 16 ) );

	mipupitre.faces.push( new THREE.Face3( 20, 21, 22 ) );
	mipupitre.faces.push( new THREE.Face3( 22, 23, 20 ) );

	mipupitre.faces.push( new THREE.Face3( 24, 25, 26 ) );
	mipupitre.faces.push( new THREE.Face3( 26, 27, 24 ) );

	mipupitre.faces.push( new THREE.Face3( 28, 29, 30 ) );
	mipupitre.faces.push( new THREE.Face3( 30, 31, 28 ) );

	//caras delantera pupitre2 31-47
	mipupitre.faces.push( new THREE.Face3( 32, 33, 34 ) );
	mipupitre.faces.push( new THREE.Face3( 34, 35, 32 ) );

	mipupitre.faces.push( new THREE.Face3( 36, 37, 38 ) );
	mipupitre.faces.push( new THREE.Face3( 38, 39, 36 ) );

	mipupitre.faces.push( new THREE.Face3( 40, 41, 42 ) );
	mipupitre.faces.push( new THREE.Face3( 42, 43, 40 ) );

	mipupitre.faces.push( new THREE.Face3( 44, 45, 46 ) );
	mipupitre.faces.push( new THREE.Face3( 46, 47, 44 ) );
	//caras mesa pupitre2 47-63
	mipupitre.faces.push( new THREE.Face3( 48, 49, 50 ) );
	mipupitre.faces.push( new THREE.Face3( 50, 51, 48 ) );

	mipupitre.faces.push( new THREE.Face3( 52, 53, 54 ) );
	mipupitre.faces.push( new THREE.Face3( 54, 55, 52 ) );

	mipupitre.faces.push( new THREE.Face3( 56, 57, 58 ) );
	mipupitre.faces.push( new THREE.Face3( 58, 59, 56 ) );

	mipupitre.faces.push( new THREE.Face3( 60, 61, 62 ) );
	mipupitre.faces.push( new THREE.Face3( 62, 63, 60 ) );

	//caras delantera pupitre3 63-79
	mipupitre.faces.push( new THREE.Face3( 64, 65, 66 ) );
	mipupitre.faces.push( new THREE.Face3( 66, 67, 64 ) );

	mipupitre.faces.push( new THREE.Face3( 68, 69, 70 ) );
	mipupitre.faces.push( new THREE.Face3( 70, 71, 68 ) );

	mipupitre.faces.push( new THREE.Face3( 72, 73, 74 ) );
	mipupitre.faces.push( new THREE.Face3( 74, 75, 72 ) );

	mipupitre.faces.push( new THREE.Face3( 76, 77, 78 ) );
	mipupitre.faces.push( new THREE.Face3( 78, 79, 76 ) );
	//caras mesa pupitre3 79-95
	mipupitre.faces.push( new THREE.Face3( 80, 81, 82 ) );
	mipupitre.faces.push( new THREE.Face3( 82, 83, 80 ) );

	mipupitre.faces.push( new THREE.Face3( 84, 85, 86 ) );
	mipupitre.faces.push( new THREE.Face3( 86, 87, 84 ) );

	mipupitre.faces.push( new THREE.Face3( 88, 89, 90 ) );
	mipupitre.faces.push( new THREE.Face3( 90, 91, 88 ) );

	mipupitre.faces.push( new THREE.Face3( 92, 93, 94 ) );
	mipupitre.faces.push( new THREE.Face3( 94, 95, 92 ) );

	//caras delantera pupitre4 95-111
	mipupitre.faces.push( new THREE.Face3( 96, 97, 98 ) );
	mipupitre.faces.push( new THREE.Face3( 98, 99, 96 ) );

	mipupitre.faces.push( new THREE.Face3( 100, 101, 102 ) );
	mipupitre.faces.push( new THREE.Face3( 102, 103, 100 ) );

	mipupitre.faces.push( new THREE.Face3( 104, 105, 106 ) );
	mipupitre.faces.push( new THREE.Face3( 106, 107, 104 ) );

	mipupitre.faces.push( new THREE.Face3( 108, 109, 110 ) );
	mipupitre.faces.push( new THREE.Face3( 110, 111, 108 ) );
	//caras mesa pupitre4 111-127
	mipupitre.faces.push( new THREE.Face3( 112, 113, 114 ) );
	mipupitre.faces.push( new THREE.Face3( 114, 115, 112 ) );

	mipupitre.faces.push( new THREE.Face3( 116, 117, 118 ) );
	mipupitre.faces.push( new THREE.Face3( 118, 119, 116 ) );

	mipupitre.faces.push( new THREE.Face3( 120, 121, 122 ) );
	mipupitre.faces.push( new THREE.Face3( 122, 123, 120 ) );

	mipupitre.faces.push( new THREE.Face3( 124, 125, 126 ) );
	mipupitre.faces.push( new THREE.Face3( 126, 127, 124 ) );
	//caras delantera pupitre5 127-143
	mipupitre.faces.push( new THREE.Face3( 128, 129, 130 ) );
	mipupitre.faces.push( new THREE.Face3( 130, 131, 128 ) );

	mipupitre.faces.push( new THREE.Face3( 132, 133, 134 ) );
	mipupitre.faces.push( new THREE.Face3( 134, 135, 132 ) );

	mipupitre.faces.push( new THREE.Face3( 136, 137, 138 ) );
	mipupitre.faces.push( new THREE.Face3( 138, 139, 136 ) );

	mipupitre.faces.push( new THREE.Face3( 140, 141, 142 ) );
	mipupitre.faces.push( new THREE.Face3( 142, 143, 140 ) );
	//caras mesa pupitre5 143-159
	mipupitre.faces.push( new THREE.Face3( 144, 145, 146 ) );
	mipupitre.faces.push( new THREE.Face3( 146, 147, 144 ) );

	mipupitre.faces.push( new THREE.Face3( 148, 149, 150 ) );
	mipupitre.faces.push( new THREE.Face3( 150, 151, 148 ) );

	mipupitre.faces.push( new THREE.Face3( 152, 153, 154 ) );
	mipupitre.faces.push( new THREE.Face3( 154, 155, 152 ) );

	mipupitre.faces.push( new THREE.Face3( 156, 157, 158 ) );
	mipupitre.faces.push( new THREE.Face3( 158, 159, 156 ) );
	//caras delantera pupitre6 160-175
	mipupitre.faces.push( new THREE.Face3( 160, 161, 162 ) );
	mipupitre.faces.push( new THREE.Face3( 162, 163, 160 ) );

	mipupitre.faces.push( new THREE.Face3( 164, 165, 166 ) );
	mipupitre.faces.push( new THREE.Face3( 166, 167, 164 ) );

	mipupitre.faces.push( new THREE.Face3( 168, 169, 170 ) );
	mipupitre.faces.push( new THREE.Face3( 170, 171, 168 ) );

	mipupitre.faces.push( new THREE.Face3( 172, 173, 174 ) );
	mipupitre.faces.push( new THREE.Face3( 174, 175, 172 ) );
	//caras mesa pupitre6 176-191
	mipupitre.faces.push( new THREE.Face3( 176, 177, 178 ) );
	mipupitre.faces.push( new THREE.Face3( 178, 179, 176 ) );

	mipupitre.faces.push( new THREE.Face3( 180, 181, 182 ) );
	mipupitre.faces.push( new THREE.Face3( 182, 183, 180 ) );

	mipupitre.faces.push( new THREE.Face3( 184, 185, 186 ) );
	mipupitre.faces.push( new THREE.Face3( 186, 187, 184 ) );

	mipupitre.faces.push( new THREE.Face3( 188, 189, 190 ) );
	mipupitre.faces.push( new THREE.Face3( 190, 191, 188 ) );


	

	var mapupitre = new THREE.MeshBasicMaterial( { color: 0x873600      } ); // Material de color rojo
    var obpupitre = new THREE.Mesh (mipupitre, mapupitre); // Crea el objeto

//silla 
     var misilla = new THREE.Geometry();
     //vertices espaldera 1
	misilla.vertices.push( new THREE.Vector3( -3.1, 0, 2.7 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0, 2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 1, 2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 1, 2.7 ) );

	misilla.vertices.push( new THREE.Vector3( -3.1, 0, 1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0, 0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 1, 0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 1, 1.1 ) );

	misilla.vertices.push( new THREE.Vector3( -3.1, 0, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 1, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 1, -0.5 ) );

	misilla.vertices.push( new THREE.Vector3( -3.1, 0, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0, -2.7 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 1, -2.7) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 1, -2.1 ) );

	//vertices bamca 1 
	misilla.vertices.push( new THREE.Vector3( -3.6, 0.5, 2.7 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0.5, 2.7 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0.5, 2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -3.6, 0.5, 2.1 ) );

	misilla.vertices.push( new THREE.Vector3( -3.6, 0.5, 1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0.5, 1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0.5, 0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -3.6, 0.5, 0.5 ) );

	misilla.vertices.push( new THREE.Vector3( -3.6, 0.5, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0.5, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0.5, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -3.6, 0.5, -1.1 ) );

	misilla.vertices.push( new THREE.Vector3( -3.6, 0.5, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0.5, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0.5, -2.7 ) );
	misilla.vertices.push( new THREE.Vector3( -3.6, 0.5, -2.7 ) );

	//vertices espaldera 2
	misilla.vertices.push( new THREE.Vector3( -2.1, 0, 2.7) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0, 2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 1, 2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 1, 2.7) );

	misilla.vertices.push( new THREE.Vector3( -2.1, 0, 1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0, 0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 1, 0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 1, 1.1 ) );

	misilla.vertices.push( new THREE.Vector3( -2.1, 0, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 1, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 1, -0.5 ) );

	misilla.vertices.push( new THREE.Vector3( -2.1, 0, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0, -2.7 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 1, -2.7 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 1, -2.1 ) );

	//vertices bamca 2
	misilla.vertices.push( new THREE.Vector3( -2.6, 0.5,2.7) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0.5,2.7) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0.5,2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -2.6, 0.5,2.1 ) );

	misilla.vertices.push( new THREE.Vector3( -2.6, 0.5,1.1) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0.5,1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0.5,0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -2.6, 0.5,0.5 ) );

	misilla.vertices.push( new THREE.Vector3( -2.6, 0.5, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0.5, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0.5, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -2.6, 0.5, -1.1 ) );

	misilla.vertices.push( new THREE.Vector3( -2.6, 0.5, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0.5, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0.5, -2.7) );
	misilla.vertices.push( new THREE.Vector3( -2.6, 0.5, -2.7) );
	//vertices espaldera 3
	misilla.vertices.push( new THREE.Vector3( -1.1, 0, 2.7) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0, 2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 1, 2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 1, 2.7) );

	misilla.vertices.push( new THREE.Vector3( -1.1, 0, 1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0, 0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 1, 0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 1, 1.1 ) );

	misilla.vertices.push( new THREE.Vector3( -1.1, 0, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 1, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 1, -0.5 ) );

	misilla.vertices.push( new THREE.Vector3( -1.1, 0, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0, -2.7) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 1, -2.7) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 1, -2.1 ) );

	//vertices bamca 3
	misilla.vertices.push( new THREE.Vector3( -1.6, 0.5, 2.7) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0.5, 2.7) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0.5, 2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -1.6, 0.5, 2.1 ) );

	misilla.vertices.push( new THREE.Vector3( -1.6, 0.5, 1.1) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0.5, 1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0.5, 0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -1.6, 0.5, 0.5 ) );

	misilla.vertices.push( new THREE.Vector3( -1.6, 0.5, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0.5, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0.5, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -1.6, 0.5, -1.1 ) );

	misilla.vertices.push( new THREE.Vector3( -1.6, 0.5, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0.5, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0.5, -2.7) );
	misilla.vertices.push( new THREE.Vector3( -1.6, 0.5, -2.7) );
	//vertices espaldera 4
	misilla.vertices.push( new THREE.Vector3( -0.1, 0, 2.7) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0, 2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 1, 2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 1, 2.7) );

	misilla.vertices.push( new THREE.Vector3( -0.1, 0, 1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0, 0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 1, 0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 1, 1.1 ) );

	misilla.vertices.push( new THREE.Vector3( -0.1, 0, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 1, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 1, -0.5 ) );

	misilla.vertices.push( new THREE.Vector3( -0.1, 0, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0, -2.7) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 1, -2.7) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 1, -2.1 ) );

	//vertices bamca 4
	misilla.vertices.push( new THREE.Vector3( -0.6, 0.5,2.7) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0.5,2.7) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0.5,2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -0.6, 0.5,2.1 ) );

	misilla.vertices.push( new THREE.Vector3( -0.6, 0.5,1.1) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0.5,1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0.5,0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -0.6, 0.5,0.5 ) );

	misilla.vertices.push( new THREE.Vector3( -0.6, 0.5, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0.5, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0.5, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( -0.6, 0.5, -1.1 ) );

	misilla.vertices.push( new THREE.Vector3( -0.6, 0.5, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0.5, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0.5, -2.7) );
	misilla.vertices.push( new THREE.Vector3( -0.6, 0.5, -2.7) );
	//vertices espaldera 5
	misilla.vertices.push( new THREE.Vector3( 0.9, 0, 2.7 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0, 2.1 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 1, 2.1 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 1, 2.7 ) );

	misilla.vertices.push( new THREE.Vector3( 0.9, 0, 1.1 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0, 0.5 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 1, 0.5 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 1, 1.1 ) );

	misilla.vertices.push( new THREE.Vector3( 0.9, 0, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 1, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 1, -0.5 ) );

	misilla.vertices.push( new THREE.Vector3( 0.9, 0, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0, -2.7 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 1, -2.7 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 1, -2.1 ) );

	//vertices bamca 5
	misilla.vertices.push( new THREE.Vector3( 0.4, 0.5, 2.7) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0.5, 2.7) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0.5, 2.1 ) );
	misilla.vertices.push( new THREE.Vector3( 0.4, 0.5, 2.1 ) );

	misilla.vertices.push( new THREE.Vector3( 0.4, 0.5, 1.1) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0.5, 1.1 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0.5, 0.5 ) );
	misilla.vertices.push( new THREE.Vector3( 0.4, 0.5, 0.5 ) );

	misilla.vertices.push( new THREE.Vector3( 0.4, 0.5, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0.5, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0.5, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( 0.4, 0.5, -1.1 ) );

	misilla.vertices.push( new THREE.Vector3( 0.4, 0.5, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0.5, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0.5, -2.7) );
	misilla.vertices.push( new THREE.Vector3( 0.4, 0.5, -2.7) );
	//vertices espaldera 6
	misilla.vertices.push( new THREE.Vector3( 1.9, 0, 2.7) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0, 2.1 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 1, 2.1 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 1, 2.7) );

	misilla.vertices.push( new THREE.Vector3( 1.9, 0, 1.1 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0, 0.5 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 1, 0.5 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 1, 1.1 ) );

	misilla.vertices.push( new THREE.Vector3( 1.9, 0, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 1, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 1, -0.5 ) );

	misilla.vertices.push( new THREE.Vector3( 1.9, 0, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0, -2.7) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 1, -2.7) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 1, -2.1 ) );

	//vertices bamca 6
	misilla.vertices.push( new THREE.Vector3( 1.4, 0.5,2.7   ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0.5,2.7   ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0.5,2.1   ) );
	misilla.vertices.push( new THREE.Vector3( 1.4, 0.5,2.1   ) );

	misilla.vertices.push( new THREE.Vector3( 1.4, 0.5,1.1   ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0.5,1.1   ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0.5,0.5   ) );
	misilla.vertices.push( new THREE.Vector3( 1.4, 0.5,0.5   ) );

	misilla.vertices.push( new THREE.Vector3( 1.4, 0.5, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0.5, -0.5 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0.5, -1.1 ) );
	misilla.vertices.push( new THREE.Vector3( 1.4, 0.5, -1.1 ) );

	misilla.vertices.push( new THREE.Vector3( 1.4, 0.5, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0.5, -2.1 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0.5, -2.7 ) );
	misilla.vertices.push( new THREE.Vector3( 1.4, 0.5, -2.7 ) );



	// caras espaldera 1
	misilla.faces.push( new THREE.Face3( 0, 1, 2 ) );
	misilla.faces.push( new THREE.Face3( 2, 3, 0 ) );

	misilla.faces.push( new THREE.Face3( 4, 5, 6 ) );
	misilla.faces.push( new THREE.Face3( 6, 7, 4 ) );

	misilla.faces.push( new THREE.Face3( 8, 9, 10 ) );
	misilla.faces.push( new THREE.Face3( 10, 11, 8 ) );

	misilla.faces.push( new THREE.Face3( 12, 13, 14 ) );
	misilla.faces.push( new THREE.Face3( 14, 15, 12 ) );
	//caras la banca 1
	misilla.faces.push( new THREE.Face3( 16, 17, 18 ) );
	misilla.faces.push( new THREE.Face3( 18, 19, 16 ) );
	
	misilla.faces.push( new THREE.Face3( 20, 21, 22 ) );
	misilla.faces.push( new THREE.Face3( 22, 23, 20 ) );

	misilla.faces.push( new THREE.Face3( 24, 25, 26 ) );
	misilla.faces.push( new THREE.Face3( 26, 27, 24 ) );

	misilla.faces.push( new THREE.Face3( 28, 29, 30 ) );
	misilla.faces.push( new THREE.Face3( 30, 31, 28 ) );

	//caras delantera pupitre2 31-47
	misilla.faces.push( new THREE.Face3( 32, 33, 34 ) );
	misilla.faces.push( new THREE.Face3( 34, 35, 32 ) );

	misilla.faces.push( new THREE.Face3( 36, 37, 38 ) );
	misilla.faces.push( new THREE.Face3( 38, 39, 36 ) );

	misilla.faces.push( new THREE.Face3( 40, 41, 42 ) );
	misilla.faces.push( new THREE.Face3( 42, 43, 40 ) );

	misilla.faces.push( new THREE.Face3( 44, 45, 46 ) );
	misilla.faces.push( new THREE.Face3( 46, 47, 44 ) );
	//caras mesa pupitre2 47-63
	misilla.faces.push( new THREE.Face3( 48, 49, 50 ) );
	misilla.faces.push( new THREE.Face3( 50, 51, 48 ) );

	misilla.faces.push( new THREE.Face3( 52, 53, 54 ) );
	misilla.faces.push( new THREE.Face3( 54, 55, 52 ) );

	misilla.faces.push( new THREE.Face3( 56, 57, 58 ) );
	misilla.faces.push( new THREE.Face3( 58, 59, 56 ) );

	misilla.faces.push( new THREE.Face3( 60, 61, 62 ) );
	misilla.faces.push( new THREE.Face3( 62, 63, 60 ) );

	//caras delantera pupitre3 63-79
	misilla.faces.push( new THREE.Face3( 64, 65, 66 ) );
	misilla.faces.push( new THREE.Face3( 66, 67, 64 ) );

	misilla.faces.push( new THREE.Face3( 68, 69, 70 ) );
	misilla.faces.push( new THREE.Face3( 70, 71, 68 ) );

	misilla.faces.push( new THREE.Face3( 72, 73, 74 ) );
	misilla.faces.push( new THREE.Face3( 74, 75, 72 ) );

	misilla.faces.push( new THREE.Face3( 76, 77, 78 ) );
	misilla.faces.push( new THREE.Face3( 78, 79, 76 ) );
	//caras mesa pupitre3 79-95
	misilla.faces.push( new THREE.Face3( 80, 81, 82 ) );
	misilla.faces.push( new THREE.Face3( 82, 83, 80 ) );

	misilla.faces.push( new THREE.Face3( 84, 85, 86 ) );
	misilla.faces.push( new THREE.Face3( 86, 87, 84 ) );

	misilla.faces.push( new THREE.Face3( 88, 89, 90 ) );
	misilla.faces.push( new THREE.Face3( 90, 91, 88 ) );

	misilla.faces.push( new THREE.Face3( 92, 93, 94 ) );
	misilla.faces.push( new THREE.Face3( 94, 95, 92 ) );

	//caras delantera pupitre4 95-111
	misilla.faces.push( new THREE.Face3( 96, 97, 98 ) );
	misilla.faces.push( new THREE.Face3( 98, 99, 96 ) );

	misilla.faces.push( new THREE.Face3( 100, 101, 102 ) );
	misilla.faces.push( new THREE.Face3( 102, 103, 100 ) );

	misilla.faces.push( new THREE.Face3( 104, 105, 106 ) );
	misilla.faces.push( new THREE.Face3( 106, 107, 104 ) );

	misilla.faces.push( new THREE.Face3( 108, 109, 110 ) );
	misilla.faces.push( new THREE.Face3( 110, 111, 108 ) );
	//caras mesa pupitre4 111-127
	misilla.faces.push( new THREE.Face3( 112, 113, 114 ) );
	misilla.faces.push( new THREE.Face3( 114, 115, 112 ) );

	misilla.faces.push( new THREE.Face3( 116, 117, 118 ) );
	misilla.faces.push( new THREE.Face3( 118, 119, 116 ) );

	misilla.faces.push( new THREE.Face3( 120, 121, 122 ) );
	misilla.faces.push( new THREE.Face3( 122, 123, 120 ) );

	misilla.faces.push( new THREE.Face3( 124, 125, 126 ) );
	misilla.faces.push( new THREE.Face3( 126, 127, 124 ) );
	//caras delantera pupitre5 127-143
	misilla.faces.push( new THREE.Face3( 128, 129, 130 ) );
	misilla.faces.push( new THREE.Face3( 130, 131, 128 ) );

	misilla.faces.push( new THREE.Face3( 132, 133, 134 ) );
	misilla.faces.push( new THREE.Face3( 134, 135, 132 ) );

	misilla.faces.push( new THREE.Face3( 136, 137, 138 ) );
	misilla.faces.push( new THREE.Face3( 138, 139, 136 ) );

	misilla.faces.push( new THREE.Face3( 140, 141, 142 ) );
	misilla.faces.push( new THREE.Face3( 142, 143, 140 ) );
	//caras mesa pupitre5 143-159
	misilla.faces.push( new THREE.Face3( 144, 145, 146 ) );
	misilla.faces.push( new THREE.Face3( 146, 147, 144 ) );

	misilla.faces.push( new THREE.Face3( 148, 149, 150 ) );
	misilla.faces.push( new THREE.Face3( 150, 151, 148 ) );

	misilla.faces.push( new THREE.Face3( 152, 153, 154 ) );
	misilla.faces.push( new THREE.Face3( 154, 155, 152 ) );

	misilla.faces.push( new THREE.Face3( 156, 157, 158 ) );
	misilla.faces.push( new THREE.Face3( 158, 159, 156 ) );
	//caras delantera pupitre6 160-175
	misilla.faces.push( new THREE.Face3( 160, 161, 162 ) );
	misilla.faces.push( new THREE.Face3( 162, 163, 160 ) );

	misilla.faces.push( new THREE.Face3( 164, 165, 166 ) );
	misilla.faces.push( new THREE.Face3( 166, 167, 164 ) );

	misilla.faces.push( new THREE.Face3( 168, 169, 170 ) );
	misilla.faces.push( new THREE.Face3( 170, 171, 168 ) );

	misilla.faces.push( new THREE.Face3( 172, 173, 174 ) );
	misilla.faces.push( new THREE.Face3( 174, 175, 172 ) );
	//caras mesa pupitre6 176-191
	misilla.faces.push( new THREE.Face3( 176, 177, 178 ) );
	misilla.faces.push( new THREE.Face3( 178, 179, 176 ) );

	misilla.faces.push( new THREE.Face3( 180, 181, 182 ) );
	misilla.faces.push( new THREE.Face3( 182, 183, 180 ) );

	misilla.faces.push( new THREE.Face3( 184, 185, 186 ) );
	misilla.faces.push( new THREE.Face3( 186, 187, 184 ) );

	misilla.faces.push( new THREE.Face3( 188, 189, 190 ) );
	misilla.faces.push( new THREE.Face3( 190, 191, 188 ) );

	


	var masilla = new THREE.MeshBasicMaterial( { color: 0x000000       } ); // Material de color rojo
    var obsilla = new THREE.Mesh (misilla, masilla); // Crea el objet  641e16

    //PUERTA PRINCIPAL

      var mipuerta = new THREE.Geometry();
     //vertices Puerta 1 cerrada
	mipuerta.vertices.push( new THREE.Vector3( 4, 0, 3 ));
	mipuerta.vertices.push( new THREE.Vector3( 5, 0, 3 ));
	mipuerta.vertices.push( new THREE.Vector3( 5, 2, 3 ));
	mipuerta.vertices.push( new THREE.Vector3( 4, 2, 3 ));
	//VERTICES PUERTA ABIERTA

	mipuerta.vertices.push( new THREE.Vector3( 3, 0, 3 ));
	mipuerta.vertices.push( new THREE.Vector3( 3, 0, 2 ));
	mipuerta.vertices.push( new THREE.Vector3( 3, 2, 2 ));
	mipuerta.vertices.push( new THREE.Vector3( 3, 2, 3 ));
	//CARAS DE LA PUERTA CERRADA
	mipuerta.faces.push( new THREE.Face3( 0, 1, 2 ) );
	mipuerta.faces.push( new THREE.Face3( 2, 3, 0 ) );
	//CARAS PUERTA ABIERTA
	mipuerta.faces.push( new THREE.Face3( 4, 5, 6 ) );
	mipuerta.faces.push( new THREE.Face3( 6, 7, 4 ) );

	//var material2 = new THREE.MeshLambertMaterial({color: 0x0000ff, transparent: true, opacity: 0.5});
	var mapuerta = new THREE.MeshBasicMaterial( { color:  0x6e2c00       } ); // Material de color rojo
    var obpuerta = new THREE.Mesh (mipuerta, mapuerta); // Crea el objeto

	
    //PUERTA PRINCIPAL

      var ventana = new THREE.Geometry();
     //vertices Puerta 1 cerrada
	ventana.vertices.push( new THREE.Vector3( -4, 1.2, -3 ));
	ventana.vertices.push( new THREE.Vector3( -2, 1.2, -3 ));
	ventana.vertices.push( new THREE.Vector3( -2, 2.5, -3 ));
	ventana.vertices.push( new THREE.Vector3( -4, 2.5, -3 ));
	//VERTICES PUERTA ABIERTA
	ventana.vertices.push( new THREE.Vector3( -1, 1.2, -3 ));
	ventana.vertices.push( new THREE.Vector3( 1, 1.2, -3 ));
	ventana.vertices.push( new THREE.Vector3( 1, 2.5, -3 ));
	ventana.vertices.push( new THREE.Vector3( -1, 2.5, -3 ));

	ventana.vertices.push( new THREE.Vector3( 2, 1.2, -3 ));
	ventana.vertices.push( new THREE.Vector3( 4, 1.2, -3 ));
	ventana.vertices.push( new THREE.Vector3( 4, 2.5, -3 ));
	ventana.vertices.push( new THREE.Vector3( 2, 2.5, -3 ));


	//CARAS DE LA PUERTA CERRADA
	ventana.faces.push( new THREE.Face3( 0, 1, 2 ) );
	ventana.faces.push( new THREE.Face3( 2, 3, 0 ) );
	//CARAS PUERTA ABIERTA
	ventana.faces.push( new THREE.Face3( 4, 5, 6 ) );
	ventana.faces.push( new THREE.Face3( 6, 7, 4 ) );

	ventana.faces.push( new THREE.Face3( 8, 9, 10 ) );
	ventana.faces.push( new THREE.Face3( 10, 11, 8 ) );
	//var material2 = new THREE.MeshLambertMaterial({color: 0x0000ff, transparent: true, opacity: 0.5});
	var maventana = new THREE.MeshBasicMaterial( { color:  0xaed6f1        } ); // Material de color rojo
    var obventana = new THREE.Mesh (ventana, maventana); // Crea el objeto

    //ATRIO
	
    //PEDESTAL

      var pedestal = new THREE.Geometry();
     //vertices PEDESTAL
	pedestal.vertices.push( new THREE.Vector3( -5.5, 0.5, -2.5 ));	//0
	pedestal.vertices.push( new THREE.Vector3( -5, 0.5, -2.5 ));	//1
	pedestal.vertices.push( new THREE.Vector3( -5, 1.5, -2.5 ));	//2
	pedestal.vertices.push( new THREE.Vector3( -5.5, 1.5, -2.5 ));	//3

	pedestal.vertices.push( new THREE.Vector3( -5.5, 0.5, -2 ));	//4
	pedestal.vertices.push( new THREE.Vector3( -5, 0.5, -2 ));		//5
	pedestal.vertices.push( new THREE.Vector3( -5, 1.5, -2 ));		//6
	pedestal.vertices.push( new THREE.Vector3( -5.5, 1.5, -2 ));	//7

	//Mesa pedestal
	pedestal.vertices.push( new THREE.Vector3( -5.7, 1.5, -1.8 ));
	pedestal.vertices.push( new THREE.Vector3( -4.8, 1.5, -1.8 ));	
	pedestal.vertices.push( new THREE.Vector3( -4.8, 1.5, -2.7 ));
	pedestal.vertices.push( new THREE.Vector3( -5.7, 1.5, -2.7 ));


	//VERTICES PEDESTAL
	
	//CARAS DE LA PEDESTAL
	pedestal.faces.push( new THREE.Face3( 0, 1, 2 ) );
	pedestal.faces.push( new THREE.Face3( 2, 3, 0 ) );

	pedestal.faces.push( new THREE.Face3( 4, 5, 6 ) );
	pedestal.faces.push( new THREE.Face3( 6, 7, 4 ) );

	pedestal.faces.push( new THREE.Face3( 5, 1, 2 ) );
	pedestal.faces.push( new THREE.Face3( 6, 5, 2 ) );

	pedestal.faces.push( new THREE.Face3( 0, 4, 7 ) );
	pedestal.faces.push( new THREE.Face3( 7, 3, 0 ) );
//MESA PEDESTAL
	pedestal.faces.push( new THREE.Face3( 8, 9, 10 ) );
	pedestal.faces.push( new THREE.Face3( 10, 11, 8 ) );


	//CARAS PUERTA ABIERTA
	
	//var material2 = new THREE.MeshLambertMaterial({color: 0x0000ff, transparent: true, opacity: 0.5});
	var mapedestal = new THREE.MeshBasicMaterial( { color:  0x17202a        } ); // Material de color rojo
    var obpedestal = new THREE.Mesh (pedestal, mapedestal); // Crea el objeto 6e2c00
    //TECHO
    var techo = new THREE.Geometry();
     //vertices TECHO
	techo.vertices.push( new THREE.Vector3( -6, 3, 3 ));	//0
	techo.vertices.push( new THREE.Vector3( 6, 3, 3 ));	//0
	techo.vertices.push( new THREE.Vector3( 6, 3, -3 ));	//0
	techo.vertices.push( new THREE.Vector3( -6, 3, -3 ));	//0




	//CARAS TECHO
	techo.faces.push( new THREE.Face3( 0, 3, 2 ) );
	techo.faces.push( new THREE.Face3( 2, 1, 0 ) );
	var matecho = new THREE.MeshBasicMaterial( { color:  0xffffff         } ); // Material de color rojo
    var obtecho = new THREE.Mesh (techo, matecho); // Crea el objeto

     //TECHO
    var monitor = new THREE.Geometry();
     //vertices monitor1
	monitor.vertices.push( new THREE.Vector3( -4  , 1  , 2.7 ));	//0
	monitor.vertices.push( new THREE.Vector3( -3.5, 1  , 2.7 ));	//1
	monitor.vertices.push( new THREE.Vector3( -3.5, 1.5, 2.7 ));	//2
	monitor.vertices.push( new THREE.Vector3( -4  , 1.5, 2.7 ));	//3

	monitor.vertices.push( new THREE.Vector3( -4  , 1  , 2.1 ));	//4
	monitor.vertices.push( new THREE.Vector3( -3.5, 1  , 2.1 ));	//5
	monitor.vertices.push( new THREE.Vector3( -3.5, 1.5, 2.1 ));	//6
	monitor.vertices.push( new THREE.Vector3( -4  , 1.5, 2.1 ));	//7


	//CARAS monitor1
	monitor.faces.push( new THREE.Face3( 0, 1, 2 ) );
	monitor.faces.push( new THREE.Face3( 2, 3, 0 ) );

	monitor.faces.push( new THREE.Face3( 4, 5, 6 ) );
	monitor.faces.push( new THREE.Face3( 6, 7, 4 ) );

	monitor.faces.push( new THREE.Face3( 1, 5, 6 ) );
	monitor.faces.push( new THREE.Face3( 6, 2, 1 ) );

	monitor.faces.push( new THREE.Face3( 0, 4, 7 ) );
	monitor.faces.push( new THREE.Face3( 7, 3, 0 ) );

	monitor.faces.push( new THREE.Face3( 3, 2, 6 ) );
	monitor.faces.push( new THREE.Face3( 6, 7, 3 ) );

	  //vertices monitor 2
	monitor.vertices.push( new THREE.Vector3( -4  , 1  , 1.1 ));	//8
	monitor.vertices.push( new THREE.Vector3( -3.5, 1  , 1.1 ));	//9
	monitor.vertices.push( new THREE.Vector3( -3.5, 1.5, 1.1 ));	//10
	monitor.vertices.push( new THREE.Vector3( -4  , 1.5, 1.1 ));	//11

	monitor.vertices.push( new THREE.Vector3( -4  , 1  , 0.5 ));	//12
	monitor.vertices.push( new THREE.Vector3( -3.5, 1  , 0.5 ));	//13
	monitor.vertices.push( new THREE.Vector3( -3.5, 1.5, 0.5 ));	//14
	monitor.vertices.push( new THREE.Vector3( -4  , 1.5, 0.5 ));	//15


	//CARAS monitor 2
	monitor.faces.push( new THREE.Face3( 8, 9, 10 ) );
	monitor.faces.push( new THREE.Face3( 10, 11, 8 ) );

	monitor.faces.push( new THREE.Face3( 12, 13, 14 ) );
	monitor.faces.push( new THREE.Face3( 14, 15, 12 ) );

	monitor.faces.push( new THREE.Face3( 9, 13, 14 ) );
	monitor.faces.push( new THREE.Face3( 14, 10, 9 ) );

	monitor.faces.push( new THREE.Face3( 8, 12, 15 ) );
	monitor.faces.push( new THREE.Face3( 15, 11, 8 ) );

	monitor.faces.push( new THREE.Face3( 11, 10, 14 ) );
	monitor.faces.push( new THREE.Face3( 14, 15, 11 ) );


	  //vertices monitor 3
	monitor.vertices.push( new THREE.Vector3( -4  , 1  , -0.5 ));	//16
	monitor.vertices.push( new THREE.Vector3( -3.5, 1  , -0.5 ));	//17
	monitor.vertices.push( new THREE.Vector3( -3.5, 1.5, -0.5 ));	//18
	monitor.vertices.push( new THREE.Vector3( -4  , 1.5, -0.5 ));	//19

	monitor.vertices.push( new THREE.Vector3( -4  , 1  , -1.1 ));	//20
	monitor.vertices.push( new THREE.Vector3( -3.5, 1  , -1.1 ));	//21
	monitor.vertices.push( new THREE.Vector3( -3.5, 1.5, -1.1 ));	//22
	monitor.vertices.push( new THREE.Vector3( -4  , 1.5, -1.1 ));	//23


	//CARAS monitor 3
	monitor.faces.push( new THREE.Face3( 16, 17, 18  ) );
	monitor.faces.push( new THREE.Face3( 18, 19, 16 ) );

	monitor.faces.push( new THREE.Face3( 20, 21, 22 ) );
	monitor.faces.push( new THREE.Face3( 22, 23, 20 ) );

	monitor.faces.push( new THREE.Face3( 17, 21, 22 ) );
	monitor.faces.push( new THREE.Face3( 22, 18, 17 ) );

	monitor.faces.push( new THREE.Face3( 22, 20, 23 ) );
	monitor.faces.push( new THREE.Face3( 23, 19, 22 ) );

	monitor.faces.push( new THREE.Face3( 19, 18, 22 ) );
	monitor.faces.push( new THREE.Face3( 22, 23, 19 ) );


  //vertices monitor 4
	monitor.vertices.push( new THREE.Vector3( -4  , 1  , -2.3 ));	//0-24
	monitor.vertices.push( new THREE.Vector3( -3.5, 1  , -2.3 ));	//1-25
	monitor.vertices.push( new THREE.Vector3( -3.5, 1.5, -2.3 ));	//2-26
	monitor.vertices.push( new THREE.Vector3( -4  , 1.5, -2.3 ));	//3-27

	monitor.vertices.push( new THREE.Vector3( -4  , 1  , -2.7 ));	//4-28
	monitor.vertices.push( new THREE.Vector3( -3.5, 1  , -2.7 ));	//5-29
	monitor.vertices.push( new THREE.Vector3( -3.5, 1.5, -2.7 ));	//6-30
	monitor.vertices.push( new THREE.Vector3( -4  , 1.5, -2.7 ));	//7-31


	//CARAS monitor 4
	monitor.faces.push( new THREE.Face3( 24, 25, 26 ) );
	monitor.faces.push( new THREE.Face3( 26, 27, 24 ) );

	monitor.faces.push( new THREE.Face3( 28, 29, 30 ) );
	monitor.faces.push( new THREE.Face3( 30, 31, 28 ) );

	monitor.faces.push( new THREE.Face3( 25, 29, 30 ) );
	monitor.faces.push( new THREE.Face3( 30, 26, 25 ) );

	monitor.faces.push( new THREE.Face3( 24, 28, 31 ) );
	monitor.faces.push( new THREE.Face3( 31, 27, 24 ) );

	monitor.faces.push( new THREE.Face3( 27, 26, 30 ) );
	monitor.faces.push( new THREE.Face3( 30, 31, 27 ) );

	 //vertices monitor1 f2
	monitor.vertices.push( new THREE.Vector3( -3  , 1  , 2.7 ));	//0-32
	monitor.vertices.push( new THREE.Vector3( -2.5, 1  , 2.7 ));	//1-33
	monitor.vertices.push( new THREE.Vector3( -2.5, 1.5, 2.7 ));	//2-34
	monitor.vertices.push( new THREE.Vector3( -3  , 1.5, 2.7 ));	//3-35

	monitor.vertices.push( new THREE.Vector3( -3  , 1  , 2.1 ));	//4-35
	monitor.vertices.push( new THREE.Vector3( -2.5, 1  , 2.1 ));	//5-37
	monitor.vertices.push( new THREE.Vector3( -2.5, 1.5, 2.1 ));	//6-38
	monitor.vertices.push( new THREE.Vector3( -3  , 1.5, 2.1 ));	//7-39


	//CARAS monitor1 f2
	monitor.faces.push( new THREE.Face3( 32, 33, 34 ) );
	monitor.faces.push( new THREE.Face3( 34, 35, 32 ) );

	monitor.faces.push( new THREE.Face3( 36, 37, 38 ) );
	monitor.faces.push( new THREE.Face3( 38, 39, 36 ) );

	monitor.faces.push( new THREE.Face3( 33, 37, 38 ) );
	monitor.faces.push( new THREE.Face3( 38, 34, 33 ) );

	monitor.faces.push( new THREE.Face3( 32, 36, 39 ) );
	monitor.faces.push( new THREE.Face3( 39, 35, 32 ) );

	monitor.faces.push( new THREE.Face3( 35, 34, 38 ) );
	monitor.faces.push( new THREE.Face3( 38, 39, 35 ) );

	  //vertices monitor 2 f2
	monitor.vertices.push( new THREE.Vector3( -3  , 1  , 1.1 ));	//8-40
	monitor.vertices.push( new THREE.Vector3( -2.5, 1  , 1.1 ));	//9-41
	monitor.vertices.push( new THREE.Vector3( -2.5, 1.5, 1.1 ));	//10-42
	monitor.vertices.push( new THREE.Vector3( -3  , 1.5, 1.1 ));	//11-43

	monitor.vertices.push( new THREE.Vector3( -3  , 1  , 0.5 ));	//12-44
	monitor.vertices.push( new THREE.Vector3( -2.5, 1  , 0.5 ));	//13-45
	monitor.vertices.push( new THREE.Vector3( -2.5, 1.5, 0.5 ));	//14-46
	monitor.vertices.push( new THREE.Vector3( -3  , 1.5, 0.5 ));	//15-47


	//CARAS monitor 2 f2
	monitor.faces.push( new THREE.Face3( 40, 41, 42 ) );
	monitor.faces.push( new THREE.Face3( 42, 43, 40 ) );

	monitor.faces.push( new THREE.Face3( 44, 45, 46 ) );
	monitor.faces.push( new THREE.Face3( 46, 47, 44 ) );

	monitor.faces.push( new THREE.Face3( 41, 45, 46 ) );
	monitor.faces.push( new THREE.Face3( 46, 42, 41 ) );

	monitor.faces.push( new THREE.Face3( 40, 44, 47 ) );
	monitor.faces.push( new THREE.Face3( 47, 43, 40 ) );

	monitor.faces.push( new THREE.Face3( 43, 42, 46 ) );
	monitor.faces.push( new THREE.Face3( 46, 47, 43 ) );


	  //vertices monitor 3 f2
	monitor.vertices.push( new THREE.Vector3( -3  , 1  , -0.5 ));	//16-48
	monitor.vertices.push( new THREE.Vector3( -2.5, 1  , -0.5 ));	//17-49
	monitor.vertices.push( new THREE.Vector3( -2.5, 1.5, -0.5 ));	//18-50
	monitor.vertices.push( new THREE.Vector3( -3  , 1.5, -0.5 ));	//19-51

	monitor.vertices.push( new THREE.Vector3( -3  , 1  , -1.1 ));	//20-52
	monitor.vertices.push( new THREE.Vector3( -2.5, 1  , -1.1 ));	//21-53
	monitor.vertices.push( new THREE.Vector3( -2.5, 1.5, -1.1 ));	//22-54
	monitor.vertices.push( new THREE.Vector3( -3  , 1.5, -1.1 ));	//23-55


	//CARAS monitor 3 f2
	monitor.faces.push( new THREE.Face3( 48, 49, 50  ) );
	monitor.faces.push( new THREE.Face3( 50, 51, 48 ) );

	monitor.faces.push( new THREE.Face3( 52, 53, 54 ) );
	monitor.faces.push( new THREE.Face3( 54, 55, 52 ) );

	monitor.faces.push( new THREE.Face3( 49, 53, 54 ) );
	monitor.faces.push( new THREE.Face3( 54, 50, 49 ) );

	monitor.faces.push( new THREE.Face3( 54, 52, 55 ) );
	monitor.faces.push( new THREE.Face3( 55, 51, 54 ) );

	monitor.faces.push( new THREE.Face3( 51, 50, 54 ) );
	monitor.faces.push( new THREE.Face3( 54, 55, 51 ) );


  //vertices monitor 4 f2
	monitor.vertices.push( new THREE.Vector3( -3  , 1  , -2.3 ));	//0-56
	monitor.vertices.push( new THREE.Vector3( -2.5, 1  , -2.3 ));	//1-57
	monitor.vertices.push( new THREE.Vector3( -2.5, 1.5, -2.3 ));	//2-58
	monitor.vertices.push( new THREE.Vector3( -3  , 1.5, -2.3 ));	//3-59

	monitor.vertices.push( new THREE.Vector3( -3  , 1  , -2.7 ));	//4-60
	monitor.vertices.push( new THREE.Vector3( -2.5, 1  , -2.7 ));	//5-61
	monitor.vertices.push( new THREE.Vector3( -2.5, 1.5, -2.7 ));	//6-62
	monitor.vertices.push( new THREE.Vector3( -3  , 1.5, -2.7 ));	//7-63


	//CARAS monitor 4 f2
	monitor.faces.push( new THREE.Face3( 56, 57, 58 ) );
	monitor.faces.push( new THREE.Face3( 58, 59, 56 ) );

	monitor.faces.push( new THREE.Face3( 60, 61, 62 ) );
	monitor.faces.push( new THREE.Face3( 62, 63, 60 ) );

	monitor.faces.push( new THREE.Face3( 57, 61, 62 ) );
	monitor.faces.push( new THREE.Face3( 62, 58, 57 ) );

	monitor.faces.push( new THREE.Face3( 56, 60, 63 ) );
	monitor.faces.push( new THREE.Face3( 63, 59, 56 ) );

	monitor.faces.push( new THREE.Face3( 59, 58, 62 ) );
	monitor.faces.push( new THREE.Face3( 62, 63, 59 ) );
	 //vertices monitor1 f3
	monitor.vertices.push( new THREE.Vector3( -2  , 1  , 2.7 ));	//0-64
	monitor.vertices.push( new THREE.Vector3( -1.5, 1  , 2.7 ));	//1-65
	monitor.vertices.push( new THREE.Vector3( -1.5, 1.5, 2.7 ));	//2-66
	monitor.vertices.push( new THREE.Vector3( -2  , 1.5, 2.7 ));	//3-67

	monitor.vertices.push( new THREE.Vector3( -2  , 1  , 2.1 ));	//4-68
	monitor.vertices.push( new THREE.Vector3( -1.5, 1  , 2.1 ));	//5-69
	monitor.vertices.push( new THREE.Vector3( -1.5, 1.5, 2.1 ));	//6-70
	monitor.vertices.push( new THREE.Vector3( -2  , 1.5, 2.1 ));	//7-71


	//CARAS monitor1 f3
	monitor.faces.push( new THREE.Face3( 64, 65, 66 ) );
	monitor.faces.push( new THREE.Face3( 66, 67, 64 ) );

	monitor.faces.push( new THREE.Face3( 68, 69, 70 ) );
	monitor.faces.push( new THREE.Face3( 70, 71, 68 ) );

	monitor.faces.push( new THREE.Face3( 65, 69, 70 ) );
	monitor.faces.push( new THREE.Face3( 70, 66, 65 ) );

	monitor.faces.push( new THREE.Face3( 64, 68, 71 ) );
	monitor.faces.push( new THREE.Face3( 71, 67, 64 ) );

	monitor.faces.push( new THREE.Face3( 67, 66, 70 ) );
	monitor.faces.push( new THREE.Face3( 70, 71, 67 ) );

	  //vertices monitor 2 f3
	monitor.vertices.push( new THREE.Vector3( -2  , 1  , 1.1 ));	//8-72
	monitor.vertices.push( new THREE.Vector3( -1.5, 1  , 1.1 ));	//9-73
	monitor.vertices.push( new THREE.Vector3( -1.5, 1.5, 1.1 ));	//10-74
	monitor.vertices.push( new THREE.Vector3( -2  , 1.5, 1.1 ));	//11-75

	monitor.vertices.push( new THREE.Vector3( -2  , 1  , 0.5 ));	//12-76
	monitor.vertices.push( new THREE.Vector3( -1.5, 1  , 0.5 ));	//13-77
	monitor.vertices.push( new THREE.Vector3( -1.5, 1.5, 0.5 ));	//14-78
	monitor.vertices.push( new THREE.Vector3( -2  , 1.5, 0.5 ));	//15-79


	//CARAS monitor 2 f3
	monitor.faces.push( new THREE.Face3( 72, 73, 74 ) );
	monitor.faces.push( new THREE.Face3( 74, 75, 72 ) );

	monitor.faces.push( new THREE.Face3( 76, 77, 78 ) );
	monitor.faces.push( new THREE.Face3( 78, 79, 76 ) );

	monitor.faces.push( new THREE.Face3( 73, 77, 78 ) );
	monitor.faces.push( new THREE.Face3( 78, 74, 73 ) );

	monitor.faces.push( new THREE.Face3( 72, 76, 79 ) );
	monitor.faces.push( new THREE.Face3( 79, 75, 72 ) );

	monitor.faces.push( new THREE.Face3( 75, 74, 78 ) );
	monitor.faces.push( new THREE.Face3( 78, 79, 75 ) );


	  //vertices monitor 3 f3
	monitor.vertices.push( new THREE.Vector3( -2  , 1  , -0.5 ));	//16-80
	monitor.vertices.push( new THREE.Vector3( -1.5, 1  , -0.5 ));	//17-81
	monitor.vertices.push( new THREE.Vector3( -1.5, 1.5, -0.5 ));	//18-82
	monitor.vertices.push( new THREE.Vector3( -2  , 1.5, -0.5 ));	//19-83

	monitor.vertices.push( new THREE.Vector3( -2  , 1  , -1.1 ));	//20-84
	monitor.vertices.push( new THREE.Vector3( -1.5, 1  , -1.1 ));	//21-85
	monitor.vertices.push( new THREE.Vector3( -1.5, 1.5, -1.1 ));	//22-86
	monitor.vertices.push( new THREE.Vector3( -2  , 1.5, -1.1 ));	//23-87


	//CARAS monitor 3 f3
	monitor.faces.push( new THREE.Face3( 80, 81, 82  ) );
	monitor.faces.push( new THREE.Face3( 82, 83, 80 ) );

	monitor.faces.push( new THREE.Face3( 84, 85, 86 ) );
	monitor.faces.push( new THREE.Face3( 86, 87, 84 ) );

	monitor.faces.push( new THREE.Face3( 81, 85, 86 ) );
	monitor.faces.push( new THREE.Face3( 86, 82, 81 ) );

	monitor.faces.push( new THREE.Face3( 86, 84, 87 ) );
	monitor.faces.push( new THREE.Face3( 87, 83, 86 ) );

	monitor.faces.push( new THREE.Face3( 83, 82, 86 ) );
	monitor.faces.push( new THREE.Face3( 86, 87, 83 ) );


  //vertices monitor 4 f3
	monitor.vertices.push( new THREE.Vector3( -2  , 1  , -2.3 ));	//0-24-88
	monitor.vertices.push( new THREE.Vector3( -1.5, 1  , -2.3 ));	//1-25-89
	monitor.vertices.push( new THREE.Vector3( -1.5, 1.5, -2.3 ));	//2-26-90
	monitor.vertices.push( new THREE.Vector3( -2  , 1.5, -2.3 ));	//3-27-91

	monitor.vertices.push( new THREE.Vector3( -2  , 1  , -2.7 ));	//4-28-92
	monitor.vertices.push( new THREE.Vector3( -1.5, 1  , -2.7 ));	//5-29-93
	monitor.vertices.push( new THREE.Vector3( -1.5, 1.5, -2.7 ));	//6-30-94
	monitor.vertices.push( new THREE.Vector3( -2  , 1.5, -2.7 ));	//7-31-95


	//CARAS monitor 4 f3
	monitor.faces.push( new THREE.Face3( 88, 89, 90 ) );
	monitor.faces.push( new THREE.Face3( 90, 91, 88 ) );

	monitor.faces.push( new THREE.Face3( 92, 93, 94 ) );
	monitor.faces.push( new THREE.Face3( 94, 95, 92 ) );

	monitor.faces.push( new THREE.Face3( 89, 93, 94 ) );
	monitor.faces.push( new THREE.Face3( 94, 90, 89 ) );

	monitor.faces.push( new THREE.Face3( 88, 92, 95 ) );
	monitor.faces.push( new THREE.Face3( 95, 91, 88 ) );

	monitor.faces.push( new THREE.Face3( 91, 90, 94 ) );
	monitor.faces.push( new THREE.Face3( 94, 95, 91 ) );
	 //vertices monitor1 f4
	monitor.vertices.push( new THREE.Vector3( -1  , 1  , 2.7 ));	//0-96
	monitor.vertices.push( new THREE.Vector3( -0.5, 1  , 2.7 ));	//1-97
	monitor.vertices.push( new THREE.Vector3( -0.5, 1.5, 2.7 ));	//2-98
	monitor.vertices.push( new THREE.Vector3( -1  , 1.5, 2.7 ));	//3-99

	monitor.vertices.push( new THREE.Vector3( -1  , 1  , 2.1 ));	//4-100
	monitor.vertices.push( new THREE.Vector3( -0.5, 1  , 2.1 ));	//5-101
	monitor.vertices.push( new THREE.Vector3( -0.5, 1.5, 2.1 ));	//6-102
	monitor.vertices.push( new THREE.Vector3( -1  , 1.5, 2.1 ));	//7-103


	//CARAS monitor1 f4
	monitor.faces.push( new THREE.Face3( 96, 97, 98 ) );
	monitor.faces.push( new THREE.Face3( 98, 99, 96 ) );

	monitor.faces.push( new THREE.Face3( 100, 101, 102 ) );
	monitor.faces.push( new THREE.Face3( 102, 103, 100 ) );

	monitor.faces.push( new THREE.Face3( 97, 101, 102 ) );
	monitor.faces.push( new THREE.Face3( 102, 98, 97 ) );

	monitor.faces.push( new THREE.Face3( 96, 100, 103 ) );
	monitor.faces.push( new THREE.Face3( 103, 99, 96 ) );

	monitor.faces.push( new THREE.Face3( 99, 98, 102 ) );
	monitor.faces.push( new THREE.Face3( 102, 103, 99 ) );

	  //vertices monitor 2 f4
	monitor.vertices.push( new THREE.Vector3( -1  , 1  , 1.1 ));	//8-104
	monitor.vertices.push( new THREE.Vector3( -0.5, 1  , 1.1 ));	//9-105
	monitor.vertices.push( new THREE.Vector3( -0.5, 1.5, 1.1 ));	//10-106
	monitor.vertices.push( new THREE.Vector3( -1  , 1.5, 1.1 ));	//11-107

	monitor.vertices.push( new THREE.Vector3( -1  , 1  , 0.5 ));	//12-108
	monitor.vertices.push( new THREE.Vector3( -0.5, 1  , 0.5 ));	//13-109
	monitor.vertices.push( new THREE.Vector3( -0.5, 1.5, 0.5 ));	//14-110
	monitor.vertices.push( new THREE.Vector3( -1  , 1.5, 0.5 ));	//15-111


	//CARAS monitor 2 f4
	monitor.faces.push( new THREE.Face3( 104, 105, 106 ) );
	monitor.faces.push( new THREE.Face3( 106, 107, 104 ) );

	monitor.faces.push( new THREE.Face3( 108, 109, 110 ) );
	monitor.faces.push( new THREE.Face3( 110, 111, 108 ) );

	monitor.faces.push( new THREE.Face3( 105, 109, 110 ) );
	monitor.faces.push( new THREE.Face3( 110, 106, 105 ) );

	monitor.faces.push( new THREE.Face3( 104, 108, 111 ) );
	monitor.faces.push( new THREE.Face3( 111, 107, 104 ) );

	monitor.faces.push( new THREE.Face3( 107, 106, 110 ) );
	monitor.faces.push( new THREE.Face3( 110, 111, 107 ) );


	  //vertices monitor 3 f4
	monitor.vertices.push( new THREE.Vector3( -1  , 1  , -0.5 ));	//16-112
	monitor.vertices.push( new THREE.Vector3( -0.5, 1  , -0.5 ));	//17-113
	monitor.vertices.push( new THREE.Vector3( -0.5, 1.5, -0.5 ));	//18-114
	monitor.vertices.push( new THREE.Vector3( -1  , 1.5, -0.5 ));	//19-115

	monitor.vertices.push( new THREE.Vector3( -1  , 1  , -1.1 ));	//20-116
	monitor.vertices.push( new THREE.Vector3( -0.5, 1  , -1.1 ));	//21-117
	monitor.vertices.push( new THREE.Vector3( -0.5, 1.5, -1.1 ));	//22-118
	monitor.vertices.push( new THREE.Vector3( -1  , 1.5, -1.1 ));	//23-119


	//CARAS monitor 3 f4
	monitor.faces.push( new THREE.Face3( 112, 113, 114  ) );
	monitor.faces.push( new THREE.Face3( 114, 115, 112 ) );

	monitor.faces.push( new THREE.Face3( 116, 117, 118 ) );
	monitor.faces.push( new THREE.Face3( 118, 119, 116 ) );

	monitor.faces.push( new THREE.Face3( 113, 117, 118 ) );
	monitor.faces.push( new THREE.Face3( 118, 114, 113 ) );

	monitor.faces.push( new THREE.Face3( 118, 116, 119 ) );
	monitor.faces.push( new THREE.Face3( 119, 115, 118 ) );

	monitor.faces.push( new THREE.Face3( 115, 114, 118 ) );
	monitor.faces.push( new THREE.Face3( 118, 119, 115 ) );


  //vertices monitor 4 f4
	monitor.vertices.push( new THREE.Vector3( -1  , 1  , -2.3 ));	//0-24-120
	monitor.vertices.push( new THREE.Vector3( -0.5, 1  , -2.3 ));	//1-25-121
	monitor.vertices.push( new THREE.Vector3( -0.5, 1.5, -2.3 ));	//2-26-122
	monitor.vertices.push( new THREE.Vector3( -1  , 1.5, -2.3 ));	//3-27-123

	monitor.vertices.push( new THREE.Vector3( -1  , 1  , -2.7 ));	//4-28-124
	monitor.vertices.push( new THREE.Vector3( -0.5, 1  , -2.7 ));	//5-29-125
	monitor.vertices.push( new THREE.Vector3( -0.5, 1.5, -2.7 ));	//6-30-126
	monitor.vertices.push( new THREE.Vector3( -1  , 1.5, -2.7 ));	//7-31-127


	//CARAS monitor 4 f4
	monitor.faces.push( new THREE.Face3( 120, 121, 122 ) );
	monitor.faces.push( new THREE.Face3( 122, 123, 120 ) );

	monitor.faces.push( new THREE.Face3( 124, 125, 126 ) );
	monitor.faces.push( new THREE.Face3( 126, 127, 124 ) );

	monitor.faces.push( new THREE.Face3( 121, 125, 126 ) );
	monitor.faces.push( new THREE.Face3( 126, 122, 121 ) );

	monitor.faces.push( new THREE.Face3( 120, 124, 127 ) );
	monitor.faces.push( new THREE.Face3( 127, 123, 120 ) );

	monitor.faces.push( new THREE.Face3( 123, 122, 126 ) );
	monitor.faces.push( new THREE.Face3( 126, 127, 123 ) );
	 //vertices monitor1 f5
	monitor.vertices.push( new THREE.Vector3( 0  , 1  , 2.7 ));	//0-128
	monitor.vertices.push( new THREE.Vector3( 0.5, 1  , 2.7 ));	//1-129
	monitor.vertices.push( new THREE.Vector3( 0.5, 1.5, 2.7 ));	//2-130
	monitor.vertices.push( new THREE.Vector3( 0  , 1.5, 2.7 ));	//3-131

	monitor.vertices.push( new THREE.Vector3( 0  , 1  , 2.1 ));	//4-132
	monitor.vertices.push( new THREE.Vector3( 0.5, 1  , 2.1 ));	//5-133
	monitor.vertices.push( new THREE.Vector3( 0.5, 1.5, 2.1 ));	//6-134
	monitor.vertices.push( new THREE.Vector3( 0  , 1.5, 2.1 ));	//7-135


	//CARAS monitor1 f5
	monitor.faces.push( new THREE.Face3( 128, 129, 130 ) );
	monitor.faces.push( new THREE.Face3( 130, 131, 128 ) );

	monitor.faces.push( new THREE.Face3( 132, 133, 134 ) );
	monitor.faces.push( new THREE.Face3( 134, 135, 132 ) );

	monitor.faces.push( new THREE.Face3( 129, 133, 134 ) );
	monitor.faces.push( new THREE.Face3( 134, 130, 129 ) );

	monitor.faces.push( new THREE.Face3( 128, 132, 135 ) );
	monitor.faces.push( new THREE.Face3( 135, 131, 128 ) );

	monitor.faces.push( new THREE.Face3( 131, 130, 134 ) );
	monitor.faces.push( new THREE.Face3( 134, 135, 131 ) );

	  //vertices monitor 2 f5
	monitor.vertices.push( new THREE.Vector3( 0  , 1  , 1.1 ));	//8-136
	monitor.vertices.push( new THREE.Vector3( 0.5, 1  , 1.1 ));	//9-137
	monitor.vertices.push( new THREE.Vector3( 0.5, 1.5, 1.1 ));	//10-138
	monitor.vertices.push( new THREE.Vector3( 0  , 1.5, 1.1 ));	//11-139

	monitor.vertices.push( new THREE.Vector3( 0  , 1  , 0.5 ));	//12-140
	monitor.vertices.push( new THREE.Vector3( 0.5, 1  , 0.5 ));	//13-141
	monitor.vertices.push( new THREE.Vector3( 0.5, 1.5, 0.5 ));	//14-142
	monitor.vertices.push( new THREE.Vector3( 0  , 1.5, 0.5 ));	//15-143


	//CARAS monitor 2 f5
	monitor.faces.push( new THREE.Face3( 136, 137, 138 ) );
	monitor.faces.push( new THREE.Face3( 138, 139, 136 ) );

	monitor.faces.push( new THREE.Face3( 140, 141, 142 ) );
	monitor.faces.push( new THREE.Face3( 142, 143, 140 ) );

	monitor.faces.push( new THREE.Face3( 137, 141, 142 ) );
	monitor.faces.push( new THREE.Face3( 142, 138, 137 ) );

	monitor.faces.push( new THREE.Face3( 136, 140, 143 ) );
	monitor.faces.push( new THREE.Face3( 143, 139, 136 ) );

	monitor.faces.push( new THREE.Face3( 139, 138, 142 ) );
	monitor.faces.push( new THREE.Face3( 142, 143, 139 ) );


	  //vertices monitor 3 f5
	monitor.vertices.push( new THREE.Vector3( 0  , 1  , -0.5 ));	//16-144
	monitor.vertices.push( new THREE.Vector3( 0.5, 1  , -0.5 ));	//17-145
	monitor.vertices.push( new THREE.Vector3( 0.5, 1.5, -0.5 ));	//18-146
	monitor.vertices.push( new THREE.Vector3( 0  , 1.5, -0.5 ));	//19-147

	monitor.vertices.push( new THREE.Vector3( 0  , 1  , -1.1 ));	//20-148
	monitor.vertices.push( new THREE.Vector3( 0.5, 1  , -1.1 ));	//21-149
	monitor.vertices.push( new THREE.Vector3( 0.5, 1.5, -1.1 ));	//22-150
	monitor.vertices.push( new THREE.Vector3( 0  , 1.5, -1.1 ));	//23-151


	//CARAS monitor 3 f5
	monitor.faces.push( new THREE.Face3( 144, 145, 146  ) );
	monitor.faces.push( new THREE.Face3( 146, 147, 144 ) );

	monitor.faces.push( new THREE.Face3( 148, 149, 150 ) );
	monitor.faces.push( new THREE.Face3( 150, 151, 148 ) );

	monitor.faces.push( new THREE.Face3( 145, 149, 150 ) );
	monitor.faces.push( new THREE.Face3( 150, 146, 145 ) );

	monitor.faces.push( new THREE.Face3( 150, 148, 151 ) );
	monitor.faces.push( new THREE.Face3( 151, 147, 150 ) );

	monitor.faces.push( new THREE.Face3( 147, 146, 150 ) );
	monitor.faces.push( new THREE.Face3( 150, 151, 147 ) );


  //vertices monitor 4 f5
	monitor.vertices.push( new THREE.Vector3( 0  , 1  , -2.3 ));	//0-24-152
	monitor.vertices.push( new THREE.Vector3( 0.5, 1  , -2.3 ));	//1-25-153
	monitor.vertices.push( new THREE.Vector3( 0.5, 1.5, -2.3 ));	//2-26-154
	monitor.vertices.push( new THREE.Vector3( 0  , 1.5, -2.3 ));	//3-27-155

	monitor.vertices.push( new THREE.Vector3( 0  , 1  , -2.7 ));	//4-28-156
	monitor.vertices.push( new THREE.Vector3( 0.5, 1  , -2.7 ));	//5-29-157
	monitor.vertices.push( new THREE.Vector3( 0.5, 1.5, -2.7 ));	//6-30-158
	monitor.vertices.push( new THREE.Vector3( 0  , 1.5, -2.7 ));	//7-31-159


	//CARAS monitor 4 f5
	monitor.faces.push( new THREE.Face3( 152, 153, 154 ) );
	monitor.faces.push( new THREE.Face3( 154, 155, 152 ) );

	monitor.faces.push( new THREE.Face3( 156, 157, 158 ) );
	monitor.faces.push( new THREE.Face3( 158, 159, 156 ) );

	monitor.faces.push( new THREE.Face3( 153, 157, 158 ) );
	monitor.faces.push( new THREE.Face3( 158, 154, 153 ) );

	monitor.faces.push( new THREE.Face3( 152, 156, 159 ) );
	monitor.faces.push( new THREE.Face3( 159, 155, 152 ) );

	monitor.faces.push( new THREE.Face3( 155, 154, 158 ) );
	monitor.faces.push( new THREE.Face3( 158, 159, 155 ) );
	 //vertices monitor1 f6
	monitor.vertices.push( new THREE.Vector3( 1  , 1  , 2.7 ));	//0-160
	monitor.vertices.push( new THREE.Vector3( 1.5, 1  , 2.7 ));	//1-161
	monitor.vertices.push( new THREE.Vector3( 1.5, 1.5, 2.7 ));	//2-162
	monitor.vertices.push( new THREE.Vector3( 1  , 1.5, 2.7 ));	//3-163

	monitor.vertices.push( new THREE.Vector3( 1  , 1  , 2.1 ));	//4-164
	monitor.vertices.push( new THREE.Vector3( 1.5, 1  , 2.1 ));	//5-165
	monitor.vertices.push( new THREE.Vector3( 1.5, 1.5, 2.1 ));	//6-166
	monitor.vertices.push( new THREE.Vector3( 1  , 1.5, 2.1 ));	//7-167


	//CARAS monitor1 f6
	monitor.faces.push( new THREE.Face3( 160, 161, 162 ) );
	monitor.faces.push( new THREE.Face3( 162, 163, 160 ) );

	monitor.faces.push( new THREE.Face3( 164, 165, 166 ) );
	monitor.faces.push( new THREE.Face3( 166, 167, 164 ) );

	monitor.faces.push( new THREE.Face3( 161, 165, 166 ) );
	monitor.faces.push( new THREE.Face3( 166, 162, 161 ) );

	monitor.faces.push( new THREE.Face3( 160, 164, 167 ) );
	monitor.faces.push( new THREE.Face3( 167, 163, 160 ) );

	monitor.faces.push( new THREE.Face3( 163, 162, 166 ) );
	monitor.faces.push( new THREE.Face3( 166, 167, 163 ) );

	  //vertices monitor 2 f6
	monitor.vertices.push( new THREE.Vector3( 1  , 1  , 1.1 ));	//8-168
	monitor.vertices.push( new THREE.Vector3( 1.5, 1  , 1.1 ));	//9-169
	monitor.vertices.push( new THREE.Vector3( 1.5, 1.5, 1.1 ));	//10-170
	monitor.vertices.push( new THREE.Vector3( 1  , 1.5, 1.1 ));	//11-171

	monitor.vertices.push( new THREE.Vector3( 1  , 1  , 0.5 ));	//12-172
	monitor.vertices.push( new THREE.Vector3( 1.5, 1  , 0.5 ));	//13-173
	monitor.vertices.push( new THREE.Vector3( 1.5, 1.5, 0.5 ));	//14-174
	monitor.vertices.push( new THREE.Vector3( 1  , 1.5, 0.5 ));	//15-175


	//CARAS monitor 2 f6
	monitor.faces.push( new THREE.Face3( 168, 169, 170 ) );
	monitor.faces.push( new THREE.Face3( 170, 171, 168 ) );

	monitor.faces.push( new THREE.Face3( 172, 173, 174 ) );
	monitor.faces.push( new THREE.Face3( 174, 175, 172 ) );

	monitor.faces.push( new THREE.Face3( 169, 173, 174 ) );
	monitor.faces.push( new THREE.Face3( 174, 170, 169 ) );

	monitor.faces.push( new THREE.Face3( 168, 172, 175 ) );
	monitor.faces.push( new THREE.Face3( 175, 171, 168 ) );

	monitor.faces.push( new THREE.Face3( 171, 170, 174 ) );
	monitor.faces.push( new THREE.Face3( 174, 175, 171 ) );


	  //vertices monitor 3 f6
	monitor.vertices.push( new THREE.Vector3( 1  , 1  , -0.5 ));	//16-176
	monitor.vertices.push( new THREE.Vector3( 1.5, 1  , -0.5 ));	//17-177
	monitor.vertices.push( new THREE.Vector3( 1.5, 1.5, -0.5 ));	//18-178
	monitor.vertices.push( new THREE.Vector3( 1  , 1.5, -0.5 ));	//19-179

	monitor.vertices.push( new THREE.Vector3( 1  , 1  , -1.1 ));	//20-180
	monitor.vertices.push( new THREE.Vector3( 1.5, 1  , -1.1 ));	//21-181
	monitor.vertices.push( new THREE.Vector3( 1.5, 1.5, -1.1 ));	//22-182
	monitor.vertices.push( new THREE.Vector3( 1  , 1.5, -1.1 ));	//23-183


	//CARAS monitor 3 f6
	monitor.faces.push( new THREE.Face3( 176, 177, 178  ) );
	monitor.faces.push( new THREE.Face3( 178, 179, 176 ) );

	monitor.faces.push( new THREE.Face3( 180, 181, 182 ) );
	monitor.faces.push( new THREE.Face3( 182, 183, 180 ) );

	monitor.faces.push( new THREE.Face3( 177, 181, 182 ) );
	monitor.faces.push( new THREE.Face3( 182, 178, 177 ) );

	monitor.faces.push( new THREE.Face3( 182, 180, 183 ) );
	monitor.faces.push( new THREE.Face3( 183, 179, 182 ) );

	monitor.faces.push( new THREE.Face3( 179, 178, 182 ) );
	monitor.faces.push( new THREE.Face3( 182, 183, 179 ) );


  //vertices monitor 4 f6
	monitor.vertices.push( new THREE.Vector3( 1  , 1  , -2.3 ));	//0-24-184
	monitor.vertices.push( new THREE.Vector3( 1.5, 1  , -2.3 ));	//1-25-185
	monitor.vertices.push( new THREE.Vector3( 1.5, 1.5, -2.3 ));	//2-26-186
	monitor.vertices.push( new THREE.Vector3( 1  , 1.5, -2.3 ));	//3-27-187

	monitor.vertices.push( new THREE.Vector3( 1  , 1  , -2.7 ));	//4-28-188
	monitor.vertices.push( new THREE.Vector3( 1.5, 1  , -2.7 ));	//5-29-189
	monitor.vertices.push( new THREE.Vector3( 1.5, 1.5, -2.7 ));	//6-30-190
	monitor.vertices.push( new THREE.Vector3( 1  , 1.5, -2.7 ));	//7-31-191


	//CARAS monitor 4 f6
	monitor.faces.push( new THREE.Face3( 184, 185, 186 ) );
	monitor.faces.push( new THREE.Face3( 186, 187, 184 ) );

	monitor.faces.push( new THREE.Face3( 188, 189, 190 ) );
	monitor.faces.push( new THREE.Face3( 190, 191, 188 ) );

	monitor.faces.push( new THREE.Face3( 185, 189, 190 ) );
	monitor.faces.push( new THREE.Face3( 190, 186, 185 ) );

	monitor.faces.push( new THREE.Face3( 184, 188, 191 ) );
	monitor.faces.push( new THREE.Face3( 191, 187, 184 ) );

	monitor.faces.push( new THREE.Face3( 187, 186, 190 ) );
	monitor.faces.push( new THREE.Face3( 190, 191, 187 ) );
	var mamonitor = new THREE.MeshBasicMaterial( { color:  0x000000         } ); // Material de color rojo
    var obmonitor = new THREE.Mesh (monitor, mamonitor); // Crea el objeto

     //PANTALLA
    var pantalla = new THREE.Geometry();
     //vertices pantalla1
	pantalla.vertices.push( new THREE.Vector3( -4  , 1.1  , 2.7 ));	//0
	pantalla.vertices.push( new THREE.Vector3( -3.5, 1.1  , 2.7 ));	//1
	pantalla.vertices.push( new THREE.Vector3( -3.5, 1.5, 2.7 ));	//2
	pantalla.vertices.push( new THREE.Vector3( -4  , 1.5, 2.7 ));	//3

	pantalla.vertices.push( new THREE.Vector3( -4  , 1.1  , 2.1 ));	//4
	pantalla.vertices.push( new THREE.Vector3( -3.5, 1.1  , 2.1 ));	//5
	pantalla.vertices.push( new THREE.Vector3( -3.5, 1.5, 2.1 ));	//6
	pantalla.vertices.push( new THREE.Vector3( -4  , 1.5, 2.1 ));	//7


	//CARAS pantalla1
	// pantalla.faces.push( new THREE.Face3( 0, 1, 2 ) );
	// pantalla.faces.push( new THREE.Face3( 2, 3, 0 ) );

	// pantalla.faces.push( new THREE.Face3( 4, 5, 6 ) );
	// pantalla.faces.push( new THREE.Face3( 6, 7, 4 ) );

	pantalla.faces.push( new THREE.Face3( 1, 5, 6 ) );
	pantalla.faces.push( new THREE.Face3( 6, 2, 1 ) );

	// pantalla.faces.push( new THREE.Face3( 0, 4, 7 ) );
	// pantalla.faces.push( new THREE.Face3( 7, 3, 0 ) );

	// pantalla.faces.push( new THREE.Face3( 3, 2, 6 ) );
	// pantalla.faces.push( new THREE.Face3( 6, 7, 3 ) );

	  //vertices pantalla 2
	pantalla.vertices.push( new THREE.Vector3( -4  , 1.1  , 1.1 ));	//8
	pantalla.vertices.push( new THREE.Vector3( -3.5, 1.1  , 1.1 ));	//9
	pantalla.vertices.push( new THREE.Vector3( -3.5, 1.5, 1.1 ));	//10
	pantalla.vertices.push( new THREE.Vector3( -4  , 1.5, 1.1 ));	//11

	pantalla.vertices.push( new THREE.Vector3( -4  , 1.1  , 0.5 ));	//12
	pantalla.vertices.push( new THREE.Vector3( -3.5, 1.1  , 0.5 ));	//13
	pantalla.vertices.push( new THREE.Vector3( -3.5, 1.5, 0.5 ));	//14
	pantalla.vertices.push( new THREE.Vector3( -4  , 1.5, 0.5 ));	//15


	//CARAS pantalla 2
	// pantalla.faces.push( new THREE.Face3( 8, 9, 10 ) );
	// pantalla.faces.push( new THREE.Face3( 10, 11, 8 ) );

	// pantalla.faces.push( new THREE.Face3( 12, 13, 14 ) );
	// pantalla.faces.push( new THREE.Face3( 14, 15, 12 ) );

	pantalla.faces.push( new THREE.Face3( 9, 13, 14 ) );
	pantalla.faces.push( new THREE.Face3( 14, 10, 9 ) );

	// pantalla.faces.push( new THREE.Face3( 8, 12, 15 ) );
	// pantalla.faces.push( new THREE.Face3( 15, 11, 8 ) );

	// pantalla.faces.push( new THREE.Face3( 11, 10, 14 ) );
	// pantalla.faces.push( new THREE.Face3( 14, 15, 11 ) );


	  //vertices pantalla 3
	pantalla.vertices.push( new THREE.Vector3( -4  , 1.1  , -0.5 ));	//16
	pantalla.vertices.push( new THREE.Vector3( -3.5, 1.1  , -0.5 ));	//17
	pantalla.vertices.push( new THREE.Vector3( -3.5, 1.5, -0.5 ));	//18
	pantalla.vertices.push( new THREE.Vector3( -4  , 1.5, -0.5 ));	//19

	pantalla.vertices.push( new THREE.Vector3( -4  , 1.1  , -1.1 ));	//20
	pantalla.vertices.push( new THREE.Vector3( -3.5, 1.1  , -1.1 ));	//21
	pantalla.vertices.push( new THREE.Vector3( -3.5, 1.5, -1.1 ));	//22
	pantalla.vertices.push( new THREE.Vector3( -4  , 1.5, -1.1 ));	//23


	//CARAS pantalla 3
	// pantalla.faces.push( new THREE.Face3( 16, 17, 18  ) );
	// pantalla.faces.push( new THREE.Face3( 18, 19, 16 ) );

	// pantalla.faces.push( new THREE.Face3( 20, 21, 22 ) );
	// pantalla.faces.push( new THREE.Face3( 22, 23, 20 ) );

	pantalla.faces.push( new THREE.Face3( 17, 21, 22 ) );
	pantalla.faces.push( new THREE.Face3( 22, 18, 17 ) );

	// pantalla.faces.push( new THREE.Face3( 22, 20, 23 ) );
	// pantalla.faces.push( new THREE.Face3( 23, 19, 22 ) );

	// pantalla.faces.push( new THREE.Face3( 19, 18, 22 ) );
	// pantalla.faces.push( new THREE.Face3( 22, 23, 19 ) );


  //vertices pantalla 4
	pantalla.vertices.push( new THREE.Vector3( -4  , 1.1  , -2.3 ));	//0-24
	pantalla.vertices.push( new THREE.Vector3( -3.5, 1.1  , -2.3 ));	//1-25
	pantalla.vertices.push( new THREE.Vector3( -3.5, 1.5, -2.3 ));	//2-26
	pantalla.vertices.push( new THREE.Vector3( -4  , 1.5, -2.3 ));	//3-27

	pantalla.vertices.push( new THREE.Vector3( -4  , 1.1  , -2.7 ));	//4-28
	pantalla.vertices.push( new THREE.Vector3( -3.5, 1.1  , -2.7 ));	//5-29
	pantalla.vertices.push( new THREE.Vector3( -3.5, 1.5, -2.7 ));	//6-30
	pantalla.vertices.push( new THREE.Vector3( -4  , 1.5, -2.7 ));	//7-31


	//CARAS pantalla 4
		// pantalla.faces.push( new THREE.Face3( 24, 25, 26 ) );
		// pantalla.faces.push( new THREE.Face3( 26, 27, 24 ) );

		// pantalla.faces.push( new THREE.Face3( 28, 29, 30 ) );
		// pantalla.faces.push( new THREE.Face3( 30, 31, 28 ) );

	pantalla.faces.push( new THREE.Face3( 25, 29, 30 ) );
	pantalla.faces.push( new THREE.Face3( 30, 26, 25 ) );

	// pantalla.faces.push( new THREE.Face3( 24, 28, 31 ) );
	// pantalla.faces.push( new THREE.Face3( 31, 27, 24 ) );

	// pantalla.faces.push( new THREE.Face3( 27, 26, 30 ) );
	// pantalla.faces.push( new THREE.Face3( 30, 31, 27 ) );

	 //vertices pantalla1 f2
	pantalla.vertices.push( new THREE.Vector3( -3  , 1.1  , 2.7 ));	//0-32
	pantalla.vertices.push( new THREE.Vector3( -2.5, 1.1  , 2.7 ));	//1-33
	pantalla.vertices.push( new THREE.Vector3( -2.5, 1.5, 2.7 ));	//2-34
	pantalla.vertices.push( new THREE.Vector3( -3  , 1.5, 2.7 ));	//3-35

	pantalla.vertices.push( new THREE.Vector3( -3  , 1.1  , 2.1 ));	//4-35
	pantalla.vertices.push( new THREE.Vector3( -2.5, 1.1  , 2.1 ));	//5-37
	pantalla.vertices.push( new THREE.Vector3( -2.5, 1.5, 2.1 ));	//6-38
	pantalla.vertices.push( new THREE.Vector3( -3  , 1.5, 2.1 ));	//7-39


	//CARAS pantalla1 f2
	// pantalla.faces.push( new THREE.Face3( 32, 33, 34 ) );
	// pantalla.faces.push( new THREE.Face3( 34, 35, 32 ) );

	// pantalla.faces.push( new THREE.Face3( 36, 37, 38 ) );
	// pantalla.faces.push( new THREE.Face3( 38, 39, 36 ) );

	pantalla.faces.push( new THREE.Face3( 33, 37, 38 ) );
	pantalla.faces.push( new THREE.Face3( 38, 34, 33 ) );

	// pantalla.faces.push( new THREE.Face3( 32, 36, 7 ) );
	// pantalla.faces.push( new THREE.Face3( 39, 35, 32 ) );

	// pantalla.faces.push( new THREE.Face3( 35, 34, 38 ) );
	// pantalla.faces.push( new THREE.Face3( 38, 39, 35 ) );

	  //vertices pantalla 2 f2
	pantalla.vertices.push( new THREE.Vector3( -3  , 1.1  , 1.1 ));	//8-40
	pantalla.vertices.push( new THREE.Vector3( -2.5, 1.1  , 1.1 ));	//9-41
	pantalla.vertices.push( new THREE.Vector3( -2.5, 1.5, 1.1 ));	//10-42
	pantalla.vertices.push( new THREE.Vector3( -3  , 1.5, 1.1 ));	//11-43

	pantalla.vertices.push( new THREE.Vector3( -3  , 1.1  , 0.5 ));	//12-44
	pantalla.vertices.push( new THREE.Vector3( -2.5, 1.1  , 0.5 ));	//13-45
	pantalla.vertices.push( new THREE.Vector3( -2.5, 1.5, 0.5 ));	//14-46
	pantalla.vertices.push( new THREE.Vector3( -3  , 1.5, 0.5 ));	//15-47


	//CARAS pantalla 2 f2
	// pantalla.faces.push( new THREE.Face3( 40, 41, 42 ) );
	// pantalla.faces.push( new THREE.Face3( 42, 43, 40 ) );

	// pantalla.faces.push( new THREE.Face3( 44, 45, 46 ) );
	// pantalla.faces.push( new THREE.Face3( 46, 47, 44 ) );

	pantalla.faces.push( new THREE.Face3( 41, 45, 46 ) );
	pantalla.faces.push( new THREE.Face3( 46, 42, 41 ) );

	// pantalla.faces.push( new THREE.Face3( 40, 44, 47 ) );
	// pantalla.faces.push( new THREE.Face3( 47, 43, 40 ) );

	// pantalla.faces.push( new THREE.Face3( 43, 42, 46 ) );
	// pantalla.faces.push( new THREE.Face3( 46, 47, 43 ) );


	  //vertices pantalla 3 f2
	pantalla.vertices.push( new THREE.Vector3( -3  , 1.1  , -0.5 ));	//16-48
	pantalla.vertices.push( new THREE.Vector3( -2.5, 1.1  , -0.5 ));	//17-49
	pantalla.vertices.push( new THREE.Vector3( -2.5, 1.5, -0.5 ));	//18-50
	pantalla.vertices.push( new THREE.Vector3( -3  , 1.5, -0.5 ));	//19-51

	pantalla.vertices.push( new THREE.Vector3( -3  , 1.1  , -1.1 ));	//20-52
	pantalla.vertices.push( new THREE.Vector3( -2.5, 1.1  , -1.1 ));	//21-53
	pantalla.vertices.push( new THREE.Vector3( -2.5, 1.5, -1.1 ));	//22-54
	pantalla.vertices.push( new THREE.Vector3( -3  , 1.5, -1.1 ));	//23-55


	//CARAS pantalla 3 f2
	// pantalla.faces.push( new THREE.Face3( 48, 49, 50  ) );
	// pantalla.faces.push( new THREE.Face3( 50, 51, 48 ) );

	// pantalla.faces.push( new THREE.Face3( 52, 53, 54 ) );
	// pantalla.faces.push( new THREE.Face3( 54, 55, 52 ) );

	pantalla.faces.push( new THREE.Face3( 49, 53, 54 ) );
	pantalla.faces.push( new THREE.Face3( 54, 50, 49 ) );

	// pantalla.faces.push( new THREE.Face3( 54, 52, 55 ) );
	// pantalla.faces.push( new THREE.Face3( 55, 51, 54 ) );

	// pantalla.faces.push( new THREE.Face3( 51, 50, 54 ) );
	// pantalla.faces.push( new THREE.Face3( 54, 55, 51 ) );


  //vertices pantalla 4 f2
	pantalla.vertices.push( new THREE.Vector3( -3  , 1.1  , -2.3 ));	//0-56
	pantalla.vertices.push( new THREE.Vector3( -2.5, 1.1  , -2.3 ));	//1-57
	pantalla.vertices.push( new THREE.Vector3( -2.5, 1.5, -2.3 ));	//2-58
	pantalla.vertices.push( new THREE.Vector3( -3  , 1.5, -2.3 ));	//3-59

	pantalla.vertices.push( new THREE.Vector3( -3  , 1.1  , -2.7 ));	//4-60
	pantalla.vertices.push( new THREE.Vector3( -2.5, 1.1  , -2.7 ));	//5-61
	pantalla.vertices.push( new THREE.Vector3( -2.5, 1.5, -2.7 ));	//6-62
	pantalla.vertices.push( new THREE.Vector3( -3  , 1.5, -2.7 ));	//7-63


	//CARAS pantalla 4 f2
	// pantalla.faces.push( new THREE.Face3( 56, 57, 58 ) );
	// pantalla.faces.push( new THREE.Face3( 58, 59, 56 ) );

	// pantalla.faces.push( new THREE.Face3( 60, 61, 62 ) );
	// pantalla.faces.push( new THREE.Face3( 62, 63, 60 ) );

	pantalla.faces.push( new THREE.Face3( 57, 61, 62 ) );
	pantalla.faces.push( new THREE.Face3( 62, 58, 57 ) );

	// pantalla.faces.push( new THREE.Face3( 56, 60, 63 ) );
	// pantalla.faces.push( new THREE.Face3( 63, 59, 56 ) );

	// pantalla.faces.push( new THREE.Face3( 59, 58, 62 ) );
	// pantalla.faces.push( new THREE.Face3( 62, 63, 59 ) );
	 //vertices pantalla1 f3
	pantalla.vertices.push( new THREE.Vector3( -2  , 1.1  , 2.7 ));	//0-64
	pantalla.vertices.push( new THREE.Vector3( -1.5, 1.1  , 2.7 ));	//1-65
	pantalla.vertices.push( new THREE.Vector3( -1.5, 1.5, 2.7 ));	//2-66
	pantalla.vertices.push( new THREE.Vector3( -2  , 1.5, 2.7 ));	//3-67

	pantalla.vertices.push( new THREE.Vector3( -2  , 1.1  , 2.1 ));	//4-68
	pantalla.vertices.push( new THREE.Vector3( -1.5, 1.1  , 2.1 ));	//5-69
	pantalla.vertices.push( new THREE.Vector3( -1.5, 1.5, 2.1 ));	//6-70
	pantalla.vertices.push( new THREE.Vector3( -2  , 1.5, 2.1 ));	//7-71


	//CARAS pantalla1 f3
	// pantalla.faces.push( new THREE.Face3( 64, 65, 66 ) );
	// pantalla.faces.push( new THREE.Face3( 66, 67, 64 ) );

	// pantalla.faces.push( new THREE.Face3( 68, 69, 70 ) );
	// pantalla.faces.push( new THREE.Face3( 70, 71, 68 ) );

	pantalla.faces.push( new THREE.Face3( 65, 69, 70 ) );
	pantalla.faces.push( new THREE.Face3( 70, 66, 65 ) );

	// pantalla.faces.push( new THREE.Face3( 64, 68, 71 ) );
	// pantalla.faces.push( new THREE.Face3( 71, 67, 64 ) );

	// pantalla.faces.push( new THREE.Face3( 67, 66, 70 ) );
	// pantalla.faces.push( new THREE.Face3( 70, 71, 67 ) );

	  //vertices pantalla 2 f3
	pantalla.vertices.push( new THREE.Vector3( -2  , 1.1  , 1.1 ));	//8-72
	pantalla.vertices.push( new THREE.Vector3( -1.5, 1.1  , 1.1 ));	//9-73
	pantalla.vertices.push( new THREE.Vector3( -1.5, 1.5, 1.1 ));	//10-74
	pantalla.vertices.push( new THREE.Vector3( -2  , 1.5, 1.1 ));	//11-75

	pantalla.vertices.push( new THREE.Vector3( -2  , 1.1  , 0.5 ));	//12-76
	pantalla.vertices.push( new THREE.Vector3( -1.5, 1.1  , 0.5 ));	//13-77
	pantalla.vertices.push( new THREE.Vector3( -1.5, 1.5, 0.5 ));	//14-78
	pantalla.vertices.push( new THREE.Vector3( -2  , 1.5, 0.5 ));	//15-79


	//CARAS pantalla 2 f3
	// pantalla.faces.push( new THREE.Face3( 72, 73, 74 ) );
	// pantalla.faces.push( new THREE.Face3( 74, 75, 72 ) );

	// pantalla.faces.push( new THREE.Face3( 76, 77, 78 ) );
	// pantalla.faces.push( new THREE.Face3( 78, 79, 76 ) );

	pantalla.faces.push( new THREE.Face3( 73, 77, 78 ) );
	pantalla.faces.push( new THREE.Face3( 78, 74, 73 ) );

	// pantalla.faces.push( new THREE.Face3( 72, 76, 79 ) );
	// pantalla.faces.push( new THREE.Face3( 79, 75, 72 ) );

	// pantalla.faces.push( new THREE.Face3( 75, 74, 78 ) );
	// pantalla.faces.push( new THREE.Face3( 78, 79, 75 ) );


	  //vertices pantalla 3 f3
	pantalla.vertices.push( new THREE.Vector3( -2  , 1.1  , -0.5 ));	//16-80
	pantalla.vertices.push( new THREE.Vector3( -1.5, 1.1  , -0.5 ));	//17-81
	pantalla.vertices.push( new THREE.Vector3( -1.5, 1.5, -0.5 ));	//18-82
	pantalla.vertices.push( new THREE.Vector3( -2  , 1.5, -0.5 ));	//19-83

	pantalla.vertices.push( new THREE.Vector3( -2  , 1.1  , -1.1 ));	//20-84
	pantalla.vertices.push( new THREE.Vector3( -1.5, 1.1  , -1.1 ));	//21-85
	pantalla.vertices.push( new THREE.Vector3( -1.5, 1.5, -1.1 ));	//22-86
	pantalla.vertices.push( new THREE.Vector3( -2  , 1.5, -1.1 ));	//23-87


	//CARAS pantalla 3 f3
	// pantalla.faces.push( new THREE.Face3( 80, 81, 82  ) );
	// pantalla.faces.push( new THREE.Face3( 82, 83, 80 ) );

	// pantalla.faces.push( new THREE.Face3( 84, 85, 86 ) );
	// pantalla.faces.push( new THREE.Face3( 86, 87, 84 ) );

	pantalla.faces.push( new THREE.Face3( 81, 85, 86 ) );
	pantalla.faces.push( new THREE.Face3( 86, 82, 81 ) );

	// pantalla.faces.push( new THREE.Face3( 86, 84, 87 ) );
	// pantalla.faces.push( new THREE.Face3( 87, 83, 86 ) );

	// pantalla.faces.push( new THREE.Face3( 83, 82, 86 ) );
	// pantalla.faces.push( new THREE.Face3( 86, 87, 83 ) );


  //vertices pantalla 4 f3
	pantalla.vertices.push( new THREE.Vector3( -2  , 1.1  , -2.3 ));	//0-24-88
	pantalla.vertices.push( new THREE.Vector3( -1.5, 1.1  , -2.3 ));	//1-25-89
	pantalla.vertices.push( new THREE.Vector3( -1.5, 1.5, -2.3 ));	//2-26-90
	pantalla.vertices.push( new THREE.Vector3( -2  , 1.5, -2.3 ));	//3-27-91

	pantalla.vertices.push( new THREE.Vector3( -2  , 1.1  , -2.7 ));	//4-28-92
	pantalla.vertices.push( new THREE.Vector3( -1.5, 1.1  , -2.7 ));	//5-29-93
	pantalla.vertices.push( new THREE.Vector3( -1.5, 1.5, -2.7 ));	//6-30-94
	pantalla.vertices.push( new THREE.Vector3( -2  , 1.5, -2.7 ));	//7-31-95


	//CARAS pantalla 4 f3
	// pantalla.faces.push( new THREE.Face3( 88, 89, 90 ) );
	// pantalla.faces.push( new THREE.Face3( 90, 91, 88 ) );

	// pantalla.faces.push( new THREE.Face3( 92, 93, 94 ) );
	// pantalla.faces.push( new THREE.Face3( 94, 95, 92 ) );

	pantalla.faces.push( new THREE.Face3( 89, 93, 94 ) );
	pantalla.faces.push( new THREE.Face3( 94, 90, 89 ) );

	// pantalla.faces.push( new THREE.Face3( 88, 92, 95 ) );
	// pantalla.faces.push( new THREE.Face3( 95, 91, 88 ) );

	// pantalla.faces.push( new THREE.Face3( 91, 90, 94 ) );
	// pantalla.faces.push( new THREE.Face3( 94, 95, 91 ) );
	 //vertices pantalla1 f4
	pantalla.vertices.push( new THREE.Vector3( -1  , 1.1  , 2.7 ));	//0-96
	pantalla.vertices.push( new THREE.Vector3( -0.5, 1.1  , 2.7 ));	//1-97
	pantalla.vertices.push( new THREE.Vector3( -0.5, 1.5, 2.7 ));	//2-98
	pantalla.vertices.push( new THREE.Vector3( -1  , 1.5, 2.7 ));	//3-99

	pantalla.vertices.push( new THREE.Vector3( -1  , 1.1  , 2.1 ));	//4-100
	pantalla.vertices.push( new THREE.Vector3( -0.5, 1.1  , 2.1 ));	//5-101
	pantalla.vertices.push( new THREE.Vector3( -0.5, 1.5, 2.1 ));	//6-102
	pantalla.vertices.push( new THREE.Vector3( -1  , 1.5, 2.1 ));	//7-103


	//CARAS pantalla1 f4
	// pantalla.faces.push( new THREE.Face3( 96, 97, 98 ) );
	// pantalla.faces.push( new THREE.Face3( 98, 99, 96 ) );

	// pantalla.faces.push( new THREE.Face3( 100, 101, 102 ) );
	// pantalla.faces.push( new THREE.Face3( 102, 103, 100 ) );

	pantalla.faces.push( new THREE.Face3( 97, 101, 102 ) );
	pantalla.faces.push( new THREE.Face3( 102, 98, 97 ) );

	// pantalla.faces.push( new THREE.Face3( 96, 100, 103 ) );
	// pantalla.faces.push( new THREE.Face3( 103, 99, 96 ) );

	// pantalla.faces.push( new THREE.Face3( 99, 98, 102 ) );
	// pantalla.faces.push( new THREE.Face3( 102, 103, 99 ) );

	  //vertices pantalla 2 f4
	pantalla.vertices.push( new THREE.Vector3( -1  , 1.1  , 1.1 ));	//8-104
	pantalla.vertices.push( new THREE.Vector3( -0.5, 1.1 , 1.1 ));	//9-105
	pantalla.vertices.push( new THREE.Vector3( -0.5, 1.5, 1.1 ));	//10-106
	pantalla.vertices.push( new THREE.Vector3( -1  , 1.5, 1.1 ));	//11-107

	pantalla.vertices.push( new THREE.Vector3( -1  , 1.1  , 0.5 ));	//12-108
	pantalla.vertices.push( new THREE.Vector3( -0.5, 1.1  , 0.5 ));	//13-109
	pantalla.vertices.push( new THREE.Vector3( -0.5, 1.5, 0.5 ));	//14-110
	pantalla.vertices.push( new THREE.Vector3( -1  , 1.5, 0.5 ));	//15-111


	//CARAS pantalla 2 f4
	// pantalla.faces.push( new THREE.Face3( 104, 105, 106 ) );
	// pantalla.faces.push( new THREE.Face3( 106, 107, 104 ) );

	// pantalla.faces.push( new THREE.Face3( 108, 109, 110 ) );
	// pantalla.faces.push( new THREE.Face3( 110, 111, 108 ) );

	pantalla.faces.push( new THREE.Face3( 105, 109, 110 ) );
	pantalla.faces.push( new THREE.Face3( 110, 106, 105 ) );

	// pantalla.faces.push( new THREE.Face3( 104, 108, 111 ) );
	// pantalla.faces.push( new THREE.Face3( 111, 107, 104 ) );

	// pantalla.faces.push( new THREE.Face3( 107, 106, 110 ) );
	// pantalla.faces.push( new THREE.Face3( 110, 111, 107 ) );


	  //vertices pantalla 3 f4
	pantalla.vertices.push( new THREE.Vector3( -1  , 1.1  , -0.5 ));	//16-112
	pantalla.vertices.push( new THREE.Vector3( -0.5, 1.1  , -0.5 ));	//17-113
	pantalla.vertices.push( new THREE.Vector3( -0.5, 1.5, -0.5 ));	//18-114
	pantalla.vertices.push( new THREE.Vector3( -1  , 1.5, -0.5 ));	//19-115

	pantalla.vertices.push( new THREE.Vector3( -1  , 1.1  , -1.1 ));	//20-116
	pantalla.vertices.push( new THREE.Vector3( -0.5, 1.1  , -1.1 ));	//21-117
	pantalla.vertices.push( new THREE.Vector3( -0.5, 1.5, -1.1 ));	//22-118
	pantalla.vertices.push( new THREE.Vector3( -1  , 1.5, -1.1 ));	//23-119


	//CARAS pantalla 3 f4
	// pantalla.faces.push( new THREE.Face3( 112, 113, 114  ) );
	// pantalla.faces.push( new THREE.Face3( 114, 115, 112 ) );

	// pantalla.faces.push( new THREE.Face3( 116, 117, 118 ) );
	// pantalla.faces.push( new THREE.Face3( 118, 119, 116 ) );

	pantalla.faces.push( new THREE.Face3( 113, 117, 118 ) );
	pantalla.faces.push( new THREE.Face3( 118, 114, 113 ) );

	// pantalla.faces.push( new THREE.Face3( 118, 116, 119 ) );
	// pantalla.faces.push( new THREE.Face3( 119, 115, 118 ) );

	// pantalla.faces.push( new THREE.Face3( 115, 114, 118 ) );
	// pantalla.faces.push( new THREE.Face3( 118, 119, 115 ) );


  //vertices pantalla 4 f4
	pantalla.vertices.push( new THREE.Vector3( -1  , 1.1  , -2.3 ));	//0-24-120
	pantalla.vertices.push( new THREE.Vector3( -0.5, 1.1  , -2.3 ));	//1-25-121
	pantalla.vertices.push( new THREE.Vector3( -0.5, 1.5, -2.3 ));	//2-26-122
	pantalla.vertices.push( new THREE.Vector3( -1  , 1.5, -2.3 ));	//3-27-123

	pantalla.vertices.push( new THREE.Vector3( -1  , 1.1  , -2.7 ));	//4-28-124
	pantalla.vertices.push( new THREE.Vector3( -0.5, 1.1  , -2.7 ));	//5-29-125
	pantalla.vertices.push( new THREE.Vector3( -0.5, 1.5, -2.7 ));	//6-30-126
	pantalla.vertices.push( new THREE.Vector3( -1  , 1.5, -2.7 ));	//7-31-127


	//CARAS pantalla 4 f4
	// pantalla.faces.push( new THREE.Face3( 120, 121, 122 ) );
	// pantalla.faces.push( new THREE.Face3( 122, 123, 120 ) );

	// pantalla.faces.push( new THREE.Face3( 124, 125, 126 ) );
	// pantalla.faces.push( new THREE.Face3( 126, 127, 124 ) );

	pantalla.faces.push( new THREE.Face3( 121, 125, 126 ) );
	pantalla.faces.push( new THREE.Face3( 126, 122, 121 ) );

	// pantalla.faces.push( new THREE.Face3( 120, 124, 127 ) );
	// pantalla.faces.push( new THREE.Face3( 127, 123, 120 ) );

	// pantalla.faces.push( new THREE.Face3( 123, 122, 126 ) );
	// pantalla.faces.push( new THREE.Face3( 126, 127, 123 ) );
	 //vertices pantalla1 f5
	pantalla.vertices.push( new THREE.Vector3( 0  , 1.1  , 2.7 ));	//0-128
	pantalla.vertices.push( new THREE.Vector3( 0.5, 1.1  , 2.7 ));	//1-129
	pantalla.vertices.push( new THREE.Vector3( 0.5, 1.5, 2.7 ));	//2-130
	pantalla.vertices.push( new THREE.Vector3( 0  , 1.5, 2.7 ));	//3-131

	pantalla.vertices.push( new THREE.Vector3( 0  , 1.1  , 2.1 ));	//4-132
	pantalla.vertices.push( new THREE.Vector3( 0.5, 1.1  , 2.1 ));	//5-133
	pantalla.vertices.push( new THREE.Vector3( 0.5, 1.5, 2.1 ));	//6-134
	pantalla.vertices.push( new THREE.Vector3( 0  , 1.5, 2.1 ));	//7-135


	//CARAS pantalla1 f5
	// pantalla.faces.push( new THREE.Face3( 128, 129, 130 ) );
	// pantalla.faces.push( new THREE.Face3( 130, 131, 128 ) );

	// pantalla.faces.push( new THREE.Face3( 132, 133, 134 ) );
	// pantalla.faces.push( new THREE.Face3( 134, 135, 132 ) );

	pantalla.faces.push( new THREE.Face3( 129, 133, 134 ) );
	pantalla.faces.push( new THREE.Face3( 134, 130, 129 ) );

	// pantalla.faces.push( new THREE.Face3( 128, 132, 135 ) );
	// pantalla.faces.push( new THREE.Face3( 135, 131, 128 ) );

	// pantalla.faces.push( new THREE.Face3( 131, 130, 134 ) );
	// pantalla.faces.push( new THREE.Face3( 134, 135, 131 ) );

	  //vertices pantalla 2 f5
	pantalla.vertices.push( new THREE.Vector3( 0  , 1.1  , 1.1 ));	//8-136
	pantalla.vertices.push( new THREE.Vector3( 0.5, 1.1  , 1.1 ));	//9-137
	pantalla.vertices.push( new THREE.Vector3( 0.5, 1.5, 1.1 ));	//10-138
	pantalla.vertices.push( new THREE.Vector3( 0  , 1.5, 1.1 ));	//11-139

	pantalla.vertices.push( new THREE.Vector3( 0  , 1.1  , 0.5 ));	//12-140
	pantalla.vertices.push( new THREE.Vector3( 0.5, 1.1  , 0.5 ));	//13-141
	pantalla.vertices.push( new THREE.Vector3( 0.5, 1.5, 0.5 ));	//14-142
	pantalla.vertices.push( new THREE.Vector3( 0  , 1.5, 0.5 ));	//15-143


	//CARAS pantalla 2 f5
	// pantalla.faces.push( new THREE.Face3( 136, 137, 138 ) );
	// pantalla.faces.push( new THREE.Face3( 138, 139, 136 ) );

	// pantalla.faces.push( new THREE.Face3( 140, 141, 142 ) );
	// pantalla.faces.push( new THREE.Face3( 142, 143, 140 ) );

	pantalla.faces.push( new THREE.Face3( 137, 141, 142 ) );
	pantalla.faces.push( new THREE.Face3( 142, 138, 137 ) );

	// pantalla.faces.push( new THREE.Face3( 136, 140, 143 ) );
	// pantalla.faces.push( new THREE.Face3( 143, 139, 136 ) );

	// pantalla.faces.push( new THREE.Face3( 139, 138, 142 ) );
	// pantalla.faces.push( new THREE.Face3( 142, 143, 139 ) );


	  //vertices pantalla 3 f5
	pantalla.vertices.push( new THREE.Vector3( 0  , 1.1  , -0.5 ));	//16-144
	pantalla.vertices.push( new THREE.Vector3( 0.5, 1.1  , -0.5 ));	//17-145
	pantalla.vertices.push( new THREE.Vector3( 0.5, 1.5, -0.5 ));	//18-146
	pantalla.vertices.push( new THREE.Vector3( 0  , 1.5, -0.5 ));	//19-147

	pantalla.vertices.push( new THREE.Vector3( 0  , 1.1  , -1.1 ));	//20-148
	pantalla.vertices.push( new THREE.Vector3( 0.5, 1.1  , -1.1 ));	//21-149
	pantalla.vertices.push( new THREE.Vector3( 0.5, 1.5, -1.1 ));	//22-150
	pantalla.vertices.push( new THREE.Vector3( 0  , 1.5, -1.1 ));	//23-151


	//CARAS pantalla 3 f5
	// pantalla.faces.push( new THREE.Face3( 144, 145, 146  ) );
	// pantalla.faces.push( new THREE.Face3( 146, 147, 144 ) );

	// pantalla.faces.push( new THREE.Face3( 148, 149, 150 ) );
	// pantalla.faces.push( new THREE.Face3( 150, 151, 148 ) );

	pantalla.faces.push( new THREE.Face3( 145, 149, 150 ) );
	pantalla.faces.push( new THREE.Face3( 150, 146, 145 ) );

	// pantalla.faces.push( new THREE.Face3( 150, 148, 151 ) );
	// pantalla.faces.push( new THREE.Face3( 151, 147, 150 ) );

	// pantalla.faces.push( new THREE.Face3( 147, 146, 150 ) );
	// pantalla.faces.push( new THREE.Face3( 150, 151, 147 ) );


  //vertices pantalla 4 f5
	pantalla.vertices.push( new THREE.Vector3( 0  , 1.1  , -2.3 ));	//0-24-152
	pantalla.vertices.push( new THREE.Vector3( 0.5, 1.1  , -2.3 ));	//1-25-153
	pantalla.vertices.push( new THREE.Vector3( 0.5, 1.5, -2.3 ));	//2-26-154
	pantalla.vertices.push( new THREE.Vector3( 0  , 1.5, -2.3 ));	//3-27-155

	pantalla.vertices.push( new THREE.Vector3( 0  , 1.1  , -2.7 ));	//4-28-156
	pantalla.vertices.push( new THREE.Vector3( 0.5, 1.1  , -2.7 ));	//5-29-157
	pantalla.vertices.push( new THREE.Vector3( 0.5, 1.5, -2.7 ));	//6-30-158
	pantalla.vertices.push( new THREE.Vector3( 0  , 1.5, -2.7 ));	//7-31-159


	//CARAS pantalla 4 f5
	// pantalla.faces.push( new THREE.Face3( 152, 153, 154 ) );
	// pantalla.faces.push( new THREE.Face3( 154, 155, 152 ) );

	// pantalla.faces.push( new THREE.Face3( 156, 157, 158 ) );
	// pantalla.faces.push( new THREE.Face3( 158, 159, 156 ) );

	pantalla.faces.push( new THREE.Face3( 153, 157, 158 ) );
	pantalla.faces.push( new THREE.Face3( 158, 154, 153 ) );

	// pantalla.faces.push( new THREE.Face3( 152, 156, 159 ) );
	// pantalla.faces.push( new THREE.Face3( 159, 155, 152 ) );

	// pantalla.faces.push( new THREE.Face3( 155, 154, 158 ) );
	// pantalla.faces.push( new THREE.Face3( 158, 159, 155 ) );
	 //vertices pantalla1 f6
	pantalla.vertices.push( new THREE.Vector3( 1  , 1.1  , 2.7 ));	//0-160
	pantalla.vertices.push( new THREE.Vector3( 1.5, 1.1  , 2.7 ));	//1-161
	pantalla.vertices.push( new THREE.Vector3( 1.5, 1.5, 2.7 ));	//2-162
	pantalla.vertices.push( new THREE.Vector3( 1  , 1.5, 2.7 ));	//3-163

	pantalla.vertices.push( new THREE.Vector3( 1  , 1.1  , 2.1 ));	//4-164
	pantalla.vertices.push( new THREE.Vector3( 1.5, 1.1  , 2.1 ));	//5-165
	pantalla.vertices.push( new THREE.Vector3( 1.5, 1.5, 2.1 ));	//6-166
	pantalla.vertices.push( new THREE.Vector3( 1  , 1.5, 2.1 ));	//7-167


	//CARAS pantalla1 f6
	// pantalla.faces.push( new THREE.Face3( 160, 161, 162 ) );
	// pantalla.faces.push( new THREE.Face3( 162, 163, 160 ) );

	// pantalla.faces.push( new THREE.Face3( 164, 165, 166 ) );
	// pantalla.faces.push( new THREE.Face3( 166, 167, 164 ) );

	pantalla.faces.push( new THREE.Face3( 161, 165, 166 ) );
	pantalla.faces.push( new THREE.Face3( 166, 162, 161 ) );

	// pantalla.faces.push( new THREE.Face3( 160, 164, 167 ) );
	// pantalla.faces.push( new THREE.Face3( 167, 163, 160 ) );

	// pantalla.faces.push( new THREE.Face3( 163, 162, 166 ) );
	// pantalla.faces.push( new THREE.Face3( 166, 167, 163 ) );

	  //vertices pantalla 2 f6
	pantalla.vertices.push( new THREE.Vector3( 1  , 1.1  , 1.1 ));	//8-168
	pantalla.vertices.push( new THREE.Vector3( 1.5, 1.1  , 1.1 ));	//9-169
	pantalla.vertices.push( new THREE.Vector3( 1.5, 1.5, 1.1 ));	//10-170
	pantalla.vertices.push( new THREE.Vector3( 1  , 1.5, 1.1 ));	//11-171

	pantalla.vertices.push( new THREE.Vector3( 1  , 1.1  , 0.5 ));	//12-172
	pantalla.vertices.push( new THREE.Vector3( 1.5, 1.1  , 0.5 ));	//13-173
	pantalla.vertices.push( new THREE.Vector3( 1.5, 1.5, 0.5 ));	//14-174
	pantalla.vertices.push( new THREE.Vector3( 1  , 1.5, 0.5 ));	//15-175


	//CARAS pantalla 2 f6
	// pantalla.faces.push( new THREE.Face3( 168, 169, 170 ) );
	// pantalla.faces.push( new THREE.Face3( 170, 171, 168 ) );

	// pantalla.faces.push( new THREE.Face3( 172, 173, 174 ) );
	// pantalla.faces.push( new THREE.Face3( 174, 175, 172 ) );

	pantalla.faces.push( new THREE.Face3( 169, 173, 174 ) );
	pantalla.faces.push( new THREE.Face3( 174, 170, 169 ) );

	// pantalla.faces.push( new THREE.Face3( 168, 172, 175 ) );
	// pantalla.faces.push( new THREE.Face3( 175, 171, 168 ) );

	// pantalla.faces.push( new THREE.Face3( 171, 170, 174 ) );
	// pantalla.faces.push( new THREE.Face3( 174, 175, 171 ) );


	  //vertices pantalla 3 f6
	pantalla.vertices.push( new THREE.Vector3( 1  , 1.1  , -0.5 ));	//16-176
	pantalla.vertices.push( new THREE.Vector3( 1.5, 1.1  , -0.5 ));	//17-177
	pantalla.vertices.push( new THREE.Vector3( 1.5, 1.5, -0.5 ));	//18-178
	pantalla.vertices.push( new THREE.Vector3( 1  , 1.5, -0.5 ));	//19-179

	pantalla.vertices.push( new THREE.Vector3( 1  , 1.1  , -1.1 ));	//20-180
	pantalla.vertices.push( new THREE.Vector3( 1.5, 1.1  , -1.1 ));	//21-181
	pantalla.vertices.push( new THREE.Vector3( 1.5, 1.5, -1.1 ));	//22-182
	pantalla.vertices.push( new THREE.Vector3( 1  , 1.5, -1.1 ));	//23-183


	//CARAS pantalla 3 f6
	// pantalla.faces.push( new THREE.Face3( 176, 177, 178  ) );
	// pantalla.faces.push( new THREE.Face3( 178, 179, 176 ) );

	// pantalla.faces.push( new THREE.Face3( 180, 181, 182 ) );
	// pantalla.faces.push( new THREE.Face3( 182, 183, 180 ) );

	pantalla.faces.push( new THREE.Face3( 177, 181, 182 ) );
	pantalla.faces.push( new THREE.Face3( 182, 178, 177 ) );

	// pantalla.faces.push( new THREE.Face3( 182, 180, 183 ) );
	// pantalla.faces.push( new THREE.Face3( 183, 179, 182 ) );

	// pantalla.faces.push( new THREE.Face3( 179, 178, 182 ) );
	// pantalla.faces.push( new THREE.Face3( 182, 183, 179 ) );


  //vertices pantalla 4 f6
	pantalla.vertices.push( new THREE.Vector3( 1  , 1.1  , -2.3 ));	//0-24-184
	pantalla.vertices.push( new THREE.Vector3( 1.5, 1.1  , -2.3 ));	//1-25-185
	pantalla.vertices.push( new THREE.Vector3( 1.5, 1.5, -2.3 ));	//2-26-186
	pantalla.vertices.push( new THREE.Vector3( 1  , 1.5, -2.3 ));	//3-27-187

	pantalla.vertices.push( new THREE.Vector3( 1  , 1.1  , -2.7 ));	//4-28-188
	pantalla.vertices.push( new THREE.Vector3( 1.5, 1.1  , -2.7 ));	//5-29-189
	pantalla.vertices.push( new THREE.Vector3( 1.5, 1.5, -2.7 ));	//6-30-190
	pantalla.vertices.push( new THREE.Vector3( 1  , 1.5, -2.7 ));	//7-31-191


	//CARAS pantalla 4 f6
	// pantalla.faces.push( new THREE.Face3( 184, 185, 186 ) );
	// pantalla.faces.push( new THREE.Face3( 186, 187, 184 ) );

	// pantalla.faces.push( new THREE.Face3( 188, 189, 190 ) );
	// pantalla.faces.push( new THREE.Face3( 190, 191, 188 ) );

	pantalla.faces.push( new THREE.Face3( 185, 189, 190 ) );
	pantalla.faces.push( new THREE.Face3( 190, 186, 185 ) );

	// pantalla.faces.push( new THREE.Face3( 184, 188, 191 ) );
	// pantalla.faces.push( new THREE.Face3( 191, 187, 184 ) );

	// pantalla.faces.push( new THREE.Face3( 187, 186, 190 ) );
	// pantalla.faces.push( new THREE.Face3( 190, 191, 187 ) );
	var mapantalla = new THREE.MeshBasicMaterial( { color:  0x85c1e9        } ); // Material de color rojo
    var obpantalla = new THREE.Mesh (pantalla, mapantalla); // Crea el objeto

	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );

	//scene.add( miobjeto );
	//scene.add(miobjeto2);
	//scene.add(miobjeto3);
	scene.add(miobjetopiso);
	scene.add(obpared2);
	scene.add(obtablon);
	scene.add(obpizarra);
	scene.add(obpupitre);
	scene.add(obsilla);
	scene.add(obpuerta);
	scene.add(obventana);
	scene.add(obpedestal);
	scene.add(obtecho);
	scene.add(obmonitor);
	scene.add(obpantalla);
}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
