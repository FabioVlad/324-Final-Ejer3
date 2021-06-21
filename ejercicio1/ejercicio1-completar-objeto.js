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
    
    var materialpiso = new THREE.MeshBasicMaterial( { color: 0x592E0B  } ); // Material de color rojo
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


	var mapizarra = new THREE.MeshBasicMaterial( { color: 0x1e8449    } ); // Material de color rojo
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
	misilla.vertices.push( new THREE.Vector3( -3.1, 0, 3 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 1, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 1, 3 ) );

	misilla.vertices.push( new THREE.Vector3( -3.1, 0, 1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 1, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 1, 1.4 ) );

	misilla.vertices.push( new THREE.Vector3( -3.1, 0, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 1, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 1, -0.2 ) );

	misilla.vertices.push( new THREE.Vector3( -3.1, 0, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0, -3 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 1, -3) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 1, -1.8 ) );

	//vertices bamca 1 
	misilla.vertices.push( new THREE.Vector3( -3.6, 0.5, 3 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0.5, 3 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0.5, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -3.6, 0.5, 1.8 ) );

	misilla.vertices.push( new THREE.Vector3( -3.6, 0.5, 1.4) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0.5, 1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0.5, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -3.6, 0.5, 0.2 ) );

	misilla.vertices.push( new THREE.Vector3( -3.6, 0.5, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0.5, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0.5, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -3.6, 0.5, -1.4 ) );

	misilla.vertices.push( new THREE.Vector3( -3.6, 0.5, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0.5, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -3.1, 0.5, -3 ) );
	misilla.vertices.push( new THREE.Vector3( -3.6, 0.5, -3 ) );

	//vertices espaldera 2
	misilla.vertices.push( new THREE.Vector3( -2.1, 0, 3 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 1, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 1, 3 ) );

	misilla.vertices.push( new THREE.Vector3( -2.1, 0, 1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 1, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 1, 1.4 ) );

	misilla.vertices.push( new THREE.Vector3( -2.1, 0, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 1, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 1, -0.2 ) );

	misilla.vertices.push( new THREE.Vector3( -2.1, 0, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0, -3 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 1, -3) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 1, -1.8 ) );

	//vertices bamca 2
	misilla.vertices.push( new THREE.Vector3( -2.6, 0.5, 3 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0.5, 3 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0.5, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -2.6, 0.5, 1.8 ) );

	misilla.vertices.push( new THREE.Vector3( -2.6, 0.5, 1.4) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0.5, 1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0.5, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -2.6, 0.5, 0.2 ) );

	misilla.vertices.push( new THREE.Vector3( -2.6, 0.5, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0.5, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0.5, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -2.6, 0.5, -1.4 ) );

	misilla.vertices.push( new THREE.Vector3( -2.6, 0.5, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0.5, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -2.1, 0.5, -3 ) );
	misilla.vertices.push( new THREE.Vector3( -2.6, 0.5, -3 ) );
	//vertices espaldera 3
	misilla.vertices.push( new THREE.Vector3( -1.1, 0, 3 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 1, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 1, 3 ) );

	misilla.vertices.push( new THREE.Vector3( -1.1, 0, 1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 1, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 1, 1.4 ) );

	misilla.vertices.push( new THREE.Vector3( -1.1, 0, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 1, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 1, -0.2 ) );

	misilla.vertices.push( new THREE.Vector3( -1.1, 0, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0, -3 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 1, -3) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 1, -1.8 ) );

	//vertices bamca 3
	misilla.vertices.push( new THREE.Vector3( -1.6, 0.5, 3 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0.5, 3 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0.5, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -1.6, 0.5, 1.8 ) );

	misilla.vertices.push( new THREE.Vector3( -1.6, 0.5, 1.4) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0.5, 1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0.5, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -1.6, 0.5, 0.2 ) );

	misilla.vertices.push( new THREE.Vector3( -1.6, 0.5, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0.5, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0.5, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -1.6, 0.5, -1.4 ) );

	misilla.vertices.push( new THREE.Vector3( -1.6, 0.5, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0.5, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -1.1, 0.5, -3 ) );
	misilla.vertices.push( new THREE.Vector3( -1.6, 0.5, -3 ) );
	//vertices espaldera 4
	misilla.vertices.push( new THREE.Vector3( -0.1, 0, 3 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 1, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 1, 3 ) );

	misilla.vertices.push( new THREE.Vector3( -0.1, 0, 1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 1, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 1, 1.4 ) );

	misilla.vertices.push( new THREE.Vector3( -0.1, 0, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 1, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 1, -0.2 ) );

	misilla.vertices.push( new THREE.Vector3( -0.1, 0, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0, -3 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 1, -3) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 1, -1.8 ) );

	//vertices bamca 4
	misilla.vertices.push( new THREE.Vector3( -0.6, 0.5, 3 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0.5, 3 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0.5, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -0.6, 0.5, 1.8 ) );

	misilla.vertices.push( new THREE.Vector3( -0.6, 0.5, 1.4) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0.5, 1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0.5, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -0.6, 0.5, 0.2 ) );

	misilla.vertices.push( new THREE.Vector3( -0.6, 0.5, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0.5, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0.5, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( -0.6, 0.5, -1.4 ) );

	misilla.vertices.push( new THREE.Vector3( -0.6, 0.5, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0.5, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( -0.1, 0.5, -3 ) );
	misilla.vertices.push( new THREE.Vector3( -0.6, 0.5, -3 ) );
	//vertices espaldera 5
	misilla.vertices.push( new THREE.Vector3( 0.9, 0, 3 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 1, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 1, 3 ) );

	misilla.vertices.push( new THREE.Vector3( 0.9, 0, 1.4 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 1, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 1, 1.4 ) );

	misilla.vertices.push( new THREE.Vector3( 0.9, 0, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 1, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 1, -0.2 ) );

	misilla.vertices.push( new THREE.Vector3( 0.9, 0, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0, -3 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 1, -3) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 1, -1.8 ) );

	//vertices bamca 5
	misilla.vertices.push( new THREE.Vector3( 0.4, 0.5, 3 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0.5, 3 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0.5, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( 0.4, 0.5, 1.8 ) );

	misilla.vertices.push( new THREE.Vector3( 0.4, 0.5, 1.4) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0.5, 1.4 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0.5, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( 0.4, 0.5, 0.2 ) );

	misilla.vertices.push( new THREE.Vector3( 0.4, 0.5, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0.5, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0.5, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( 0.4, 0.5, -1.4 ) );

	misilla.vertices.push( new THREE.Vector3( 0.4, 0.5, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0.5, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( 0.9, 0.5, -3 ) );
	misilla.vertices.push( new THREE.Vector3( 0.4, 0.5, -3 ) );
	//vertices espaldera 6
	misilla.vertices.push( new THREE.Vector3( 1.9, 0, 3 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 1, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 1, 3 ) );

	misilla.vertices.push( new THREE.Vector3( 1.9, 0, 1.4 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 1, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 1, 1.4 ) );

	misilla.vertices.push( new THREE.Vector3( 1.9, 0, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 1, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 1, -0.2 ) );

	misilla.vertices.push( new THREE.Vector3( 1.9, 0, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0, -3 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 1, -3) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 1, -1.8 ) );

	//vertices bamca 6
	misilla.vertices.push( new THREE.Vector3( 1.4, 0.5, 3 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0.5, 3 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0.5, 1.8 ) );
	misilla.vertices.push( new THREE.Vector3( 1.4, 0.5, 1.8 ) );

	misilla.vertices.push( new THREE.Vector3( 1.4, 0.5, 1.4) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0.5, 1.4 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0.5, 0.2 ) );
	misilla.vertices.push( new THREE.Vector3( 1.4, 0.5, 0.2 ) );

	misilla.vertices.push( new THREE.Vector3( 1.4, 0.5, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0.5, -0.2 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0.5, -1.4 ) );
	misilla.vertices.push( new THREE.Vector3( 1.4, 0.5, -1.4 ) );

	misilla.vertices.push( new THREE.Vector3( 1.4, 0.5, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0.5, -1.8 ) );
	misilla.vertices.push( new THREE.Vector3( 1.9, 0.5, -3 ) );
	misilla.vertices.push( new THREE.Vector3( 1.4, 0.5, -3 ) );



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

	


	var masilla = new THREE.MeshBasicMaterial( { color: 0x6e2c00      } ); // Material de color rojo
    var obsilla = new THREE.Mesh (misilla, masilla); // Crea el objeto

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
	var mapedestal = new THREE.MeshBasicMaterial( { color:  0x6e2c00         } ); // Material de color rojo
    var obpedestal = new THREE.Mesh (pedestal, mapedestal); // Crea el objeto
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
