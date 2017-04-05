(function () {
    'use strict';
    angular.module('app.oixxio').directive('compile', ['$compile', function ($compile) {
      return function(scope, element, attrs) {
        scope.$watch(
          function(scope) {
            return scope.$eval(attrs.compile);

          },
          function(value) {
            element.html(value);
            $compile(element.contents())(scope);
          }
       )};
      }])
  .controller('landingCtrl', function($scope, $timeout, $sce, $compile) {
    var self = this;
    $scope.indexAux = 3;
    $scope.modalContentObj = [
      {
        titulo: 'Nosotros',
        contenido: '<p>Somos una empresa de 10 años de experiencia en el desarrollo de plataforma tecnológica.Desarrollamos software a la medida, según los requerimientos de nuestros clientes. Damos solución integral utilizando y combinando múltiples tecnologías.</p><p>Nos enfocamos en el feedback del cliente para mantenernos efectivos y eficaces.Nuestra misión primordial es el desarrollo de una gama de tecnologías con una formación integral de calidad, que incorpore además de los conocimientos técnico-científicos innovadores, las competencias necesarias para el ejercicio profesional, así como los valores derivados de la experiencia cooperativa.</p><span class="creamos">Creamos</span><div class="nosotros-img"><img src="assets/img/nosotros/tech-cluster.png" class="derecha"><img src="assets/img/nosotros/exportadores.png" class="izquierda"></div>',
        hover: '<span class="creamos-hover">CREAMOS</span><span> INVESTIGAMOS NOS INVOLUCRAMOS</span>'
      },
      {
        titulo: 'Clientes',
        contenido: '<p><strong>Creamos</strong> soluciones Integrales a gran escala con las mas exigentes formas de calidad.</p><p>Forjamos una relacion estrecha con nuestros clientes para mantenernos efectivos y eficaces.</p>',
        imgClientes: [
          'assets/img/clients/01.png',
          'assets/img/clients/02.png',
          'assets/img/clients/03.png',
          'assets/img/clients/04.png',
          'assets/img/clients/05.png',
          'assets/img/clients/06.png',
          'assets/img/clients/07.png',
          'assets/img/clients/08.png',
          'assets/img/clients/09.png',
          'assets/img/clients/10.png',
          'assets/img/clients/11.png',
          'assets/img/clients/12.png',
        ],
        hover: '<span class="creamos-hover">CREAMOS</span><span> SOLUCIONES A GRAN ESCALA</span>'
      },
      {
        titulo: 'Desarrollo',
        contenido: '<p>Asesoramos en el uso de las tecnologías de la información, instalamos y administramos diferentes soluciones tecnológicas.</p><p> Mantenemos un fuerte vínculo entre la investigación y el desarrollo estableciendo una cooperación con empresas e instituciones educativas, con el fin de mantener la investigación de forma continua y lograr así productos superados.</p><p>Somos un grupo multidisciplinario de especialistas y consultores, preparados para que en conjunto con el cliente, logremos alcanzar los objetivos planificados. </p>',
        hover: '<span class="creamos-hover">CREAMOS</span><span> EXPERIENCIAS DIGITALES A LA MEDIDA</span>'
      },
      {
         titulo: 'Impulsores<span class="de-ideas"> de Ideas</span>',
        contenido: '<p>Sabemos que grandes e innovadoras ideas a veces se deshacen en el aire por falta de la determinación necesaria para materializarlas.</p><p>Las ideas por si solas no llegarán a buen puerto sin la sinergia y los recursos necesarios para llevarlas adelante.</p><p>Desde nuestro lugar, brindamos la asitencia necesaria para concretar los proyectos ideados, tanto en el registro y patente, como en la interacción con especialistas.</p><p class="importante">" Nuestro interés principal está en generar redes y conocimiento. "</p><p>Es por eso que buscamos personas que desafíen a su destino, que tengan ideas innovadoras y revolucionarias, que cambien el mundo.</p><p>Juntos <strong>crearemos</strong> un equipo para materializarlas.</p>',
        hover: '<span class="creamos-hover">CREAMOS</span><span> LO QUE IMAGINAS</span>'
      },
      {
        titulo: 'Saas',
        contenido: '<p><strong>Creamos</strong> un servicio de desarrollo de software. Con mas de 10 años de experiencia en el mercado, entendemos que una solución a la medida requiere de un conocimiento profundo de la actividad de nuestros clientes, es por ello que planteamos en nuestro servicio una relación estrecha hasta convertirnos en un aliado tecnológico de la empresa.</p><p class="importante">" El SAAS o software como servicio además brinda la ventaja del desembolso parcial del capital destinado a estas tecnologías, ya que se prorratea el valor total del desarrollo en el tiempo que dure el contrato de servicio. "</p><p> Además, una vez implementado el sistema nuestro clientes cuentan con desarrolladores dedicados para resolver cualquier cambio o inconveniente que se les presente en el día a día.</p>',
        hover: '<span class="creamos-hover">CREAMOS</span><span> UN SERVICIO DE DESARROLLO</span>'
      },
      {
        titulo: 'Productos',
        contenido: '<div class="productos row"><ul class="col-xs-12"><li class="col-xs-6" ng-click="openProduct(0)"><img src="assets/img/productos/product-0.jpg"><a class="overlay"><h2>TSM</h2></a></li><li class="col-xs-6" ng-click="openProduct(1)"><img src="assets/img/productos/product-1.jpg" ><a class="overlay"><h2>GPS Economias</h2></a></li><li class="col-xs-6" ng-click="openProduct(2)"><img src="assets/img/productos/product-2.jpg"><a class="overlay"><h2>Simuladores de Capacitación</h2></a></li><li class="col-xs-6" ng-click="openProduct(3)"><img src="assets/img/productos/product-3.jpg"><a class="overlay"><h2>SIAT</h2></a></li><li class="col-xs-6" ng-click="openProduct(4)"><img src="assets/img/productos/product-4.jpg"><a class="overlay"><h2>Software a Medida</h2></a></li><li class="col-xs-6" ng-click="openProduct(5)"><img src="assets/img/productos/product-5.jpg"><a class="overlay"><h2>Advergames</h2></a></li><li class="col-xs-6" ng-click="openProduct(6)"><img src="assets/img/productos/product-6.jpg"><a class="overlay"><h2>ERP</h2></a></li><li class="col-xs-6" ng-click="openProduct(7)"><img src="assets/img/productos/product-7.jpg"><a class="overlay"><h2>Realidad Virtual</h2></a></li></ul></div>',
        hover: '<span class="creamos-hover">CREAMOS</span><span> RECURSOS SOCIALES</span>'
      },
      {
        titulo: '',
        contenido: '<div class="row col-md-6 contacto"><div class="row col-md-12"><a href="http://maps.google.com/?q= Oixxio Technologies"><i class="fa fa-map-marker col-md-1 icono" aria-hidden="true"></i><p class="col-md-11 descripcion">Ricardo Rojas 6739 of. 1 <br> Cordoba-Argentina</p></a></div><div class="row col-md-12"><a href="mailto:info@oixxio.net"><i class="fa fa-envelope col-md-1 icono" aria-hidden="true"></i><p class="col-md-11 descripcion">info@oixxio.net</p></a></div><div class="row col-md-12"><a href="tel:+54-351-639-9189"><i class="fa fa-phone col-md-1 icono" aria-hidden="true"></i><p class="col-md-11 descripcion">0054 351 6399189</p></a></div><div class="row footerMenu"><div class="hashtag col-md-4"><span>#</span></div><div class="socialIcons col-md-8 row"><a href="https://twitter.com/OixxioTech"><i class="fa fa-twitter" aria-hidden="true"></i></a><a href="https://www.facebook.com/oixxiotech/"><i class="fa fa-facebook" aria-hidden="true"></i></a><a href="https://www.youtube.com/channel/UC4RS7eCpU54nOkia7i3Blcw"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></div></div></div>',
      }
    ];
    $scope.productos = [
      {
        titulo: 'TSM',
        parrafo: '"The Store Manager" es una plataforma de e-learning (LMS y LCMS) con el foco puesto en los sectores de retail, industria y gestión.Esta aplicación no solo permite la capacitación de sus usuarios, sino tambien el seguimiento y evolución de los mismos.En un entorno virtual, TSM permite la educación continua, el desarrollo profesional y la simulación de eventos específicos .La plataforma consta de tres fases adaptables a la necesidad especifica de nuestros clientes: inducción, evaluación y métricas de desempeño.',
        video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/TvJRFNKYLMM" frameborder="0" allowfullscreen></iframe>',
        contenido: '<h1>TSM</h1><img src="assets/img/productos/product-0.jpg" class="imagen" ng-click="openProductVideo(productos[0].video)"><p>"The Store Manager" es una plataforma de e-learning (LMS y LCMS) con el foco puesto en los sectores de retail, industria y gestión.Esta aplicación no solo permite la capacitación de sus usuarios, sino tambien el seguimiento y evolución de los mismos.En un entorno virtual, TSM permite la educación continua, el desarrollo profesional y la simulación de eventos específicos .La plataforma consta de tres fases adaptables a la necesidad especifica de nuestros clientes: inducción, evaluación y métricas de desempeño</p>'
      },
      {
        titulo: 'GIS - Gps de las economías regionales',
        parrafo: 'Sistema de información georefenciada que permite la organización, almacenamiento y análisis de grandes cantidades de datos,vinculados a una referencia espacial. Facilita la incorporación de aspectos sociales-culturales, económicos y ambientales que conducen a la toma de decisiones de una manera más eficaz.',
        imagen: 'assets/img/productos/product-1.jpg',
        contenido: '<h1>GIS - Gps de las economías regionales</h1><img src="assets/img/productos/product-1.jpg" class="imagen"><p>Sistema de información georefenciada que permite la organización, almacenamiento y análisis de grandes cantidades de datos,vinculados a una referencia espacial. Facilita la incorporación de aspectos sociales-culturales, económicos y ambientales que conducen a la toma de decisiones de una manera más eficaz.</p>',
      },
      {
        titulo: 'Simuladores de Capacitación',
        parrafo: 'Simulador inmerso en entorno virtual 3D para capacitación en seguridad e higiene.El cual consta de plataforma donde usuario se enfrenta a diferentes simulaciones de eventos, debiendo resolverlos de forma practica en el entorno virtual.',
        imagen: 'assets/img/productos/product-2.jpg',
        contenido: '<h1>Simuladores de Capacitación</h1><img src="assets/img/productos/product-2.jpg" class="imagen"><p>Simulador inmerso en entorno virtual 3D para capacitación en seguridad e higiene.El cual consta de plataforma donde usuario se enfrenta a diferentes simulaciones de eventos, debiendo resolverlos de forma practica en el entorno virtual.</p>'
      },
      {
        titulo: 'SIAT - Sistema Integral de Adherencia Terapéutica',
        parrafo: 'Siat es un ecosistema de tecnologías vinculadas con el objetivo de mejorar el grado de adherencia terapéutica de los pacientes con patologías crónicas.Mediante aplicaciones móviles, webs y call center se proporciona el acompañamiento a los pacientes en sus tratamientos y se facilita la documentación de reintegro y trazabilidad de los medicamentos.Ademas el sistema posibilita una mayor interacción medico - paciente en tiempo real, sin la necesidad de esperar a la próxima visita en el consultorio.',
        video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/NiPMMHzdEUg" frameborder="0" allowfullscreen></iframe>',
        contenido: '<h1>SIAT</h1><img src="assets/img/productos/product-3.jpg" class="imagen"><p>Siat es un ecosistema de tecnologías vinculadas con el objetivo de mejorar el grado de adherencia terapéutica de los pacientes con patologías crónicas.Mediante aplicaciones móviles, webs y call center se proporciona el acompañamiento a los pacientes en sus tratamientos y se facilita la documentación de reintegro y trazabilidad de los medicamentos.Ademas el sistema posibilita una mayor interacción medico - paciente en tiempo real, sin la necesidad de esperar a la próxima visita en el consultorio.</p>'
      },
      {
        titulo: 'Software a la medida',
        parrafo: '"The Store Manager" es una plataforma de e-learning (LMS y LCMS) con el foco puesto en los sectores de retail, industria y gestión.Esta aplicación no solo permite la capacitación de sus usuarios, sino tambien el seguimiento y evolución de los mismos.En un entorno virtual, TSM permite la educación continua, el desarrollo profesional y la simulación de eventos específicos .La plataforma consta de tres fases adaptables a la necesidad especifica de nuestros clientes: inducción, evaluación y métricas de desempeño.',
        contenido: '<h1>Software a la medida</h1><img src="assets/img/productos/product-4.jpg" class="imagen"><p>Desarrollamos diversas soluciones a la medida, centrando nuestro trabajo en las necesidades del cliente y, ademas, en el valor agregado que podemos suministrar a sus ideas.Utilizamos diversas tecnologías como: Apps móviles, Aplicaciones Web, realidad virtual, realidad aumentada, Video juegos.</p>'
      },
      {
        titulo: 'Advergames',
        parrafo: 'Sistema de información georefenciada que permite la organización, almacenamiento y análisis de grandes cantidades de datos,vinculados a una referencia espacial. Facilita la incorporación de aspectos sociales-culturales, económicos y ambientales que conducen a la toma de decisiones de una manera más eficaz.',
        imagen: 'assets/img/productos/product-1.jpg',
        contenido: '<h1>Advergames</h1><img src="assets/img/productos/product-5.jpg" class="imagen"><p>Creación de videojuegos publicitarios para reforzar una marca o producto buscando fidelizar clientes o ampliar sus experiencias.</p>'
      },
      {
        titulo: 'ERP y Sistemas de Gestión',
        parrafo: 'Simulador inmerso en entorno virtual 3D para capacitación en seguridad e higiene.El cual consta de plataforma donde usuario se enfrenta a diferentes simulaciones de eventos, debiendo resolverlos de forma practica en el entorno virtual.',
        imagen: 'assets/img/productos/product-2.jpg',
        contenido: '<h1>ERP y Sistemas de Gestión</h1><img src="assets/img/productos/product-6.jpg" class="imagen" ng-click=""><p>Sistemas de planificación de recursos empresariales para manejar la producción, logística, distribución, inventario, envíos, facturas y contabilidad de la empresa.Como asi tambien las ventas, entregas, stock, pagos y administración de recursos humanos</p>'
      },
      {
        titulo: 'Realidad Virtual',
        parrafo: 'Siat es un ecosistema de tecnologías vinculadas con el objetivo de mejorar el grado de adherencia terapéutica de los pacientes con patologías crónicas.Mediante aplicaciones móviles, webs y call center se proporciona el acompañamiento a los pacientes en sus tratamientos y se facilita la documentación de reintegro y trazabilidad de los medicamentos.Ademas el sistema posibilita una mayor interacción medico - paciente en tiempo real, sin la necesidad de esperar a la próxima visita en el consultorio.',
        contenido: '<h1>Realidad Virtual</h1><img src="assets/img/productos/product-7.jpg" class="imagen" ng-click=""><p>Utilizando la simulación de un entorno físico es posible recrear diferentes situaciones o procesos.Ademas, la realidad virtual permite eliminar barreras físicas de espacio y tiempo del mundo real pudiendo, por ejemplo, extender una feria fisica a todo el mundo.</p>'
      }
    ];
    $scope.frontFaceProduct = 0;
    $scope.izqFaceProduct = 270;
    $scope.derFaceProduct = 90;
    $scope.backFaceProduct = 180;
    $scope.vueltas = 0;

    $scope.swiperigth = 0;
    $scope.swipeleft = 0;
    $scope.currentFace = 'front';
    $scope.numero = 0;
    $scope.productIsOpen = false;
    $scope.pepe = 0;

    $scope.productSpinner = false;
    function initMap() {
      var image = 'assets/img/maps/marker-oixxio-09.svg';
      var map;
      var windowWidth = window.innerWidth;
      if(windowWidth > 750){
        map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -31.3445668, lng: -64.2585711},
        zoom: 16
      });
      } else {
        map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -31.3393994, lng: -64.2552902},
        zoom: 14
      });
      }
      
      var marker = new google.maps.Marker({
        position: {lat: -31.3419377, lng: -64.2545929},
        map: map,
        title: 'Oixxio Technologies',
        draggable: true,
        icon: image
      });
      
    }
    initMap();
    
    // -------------- Product Modal ------------------------------
      $scope.openProduct = function(index){
        var productModal = document.querySelector('#productosModal');
        var windowWidth = window.innerWidth;
        var closeModalRight = document.querySelector('.landing .closeModal-right');
        var closeProduct = document.querySelector('.landing .closeModal-product');
        var modalElement = document.querySelector('.modal-section-down');
        var menuButton = document.querySelector('.landing .menuButton');
        var menuHover = document.querySelector('.landing .menuHover');
        if(windowWidth > 750){
          productModal.style.right = "-23%";
          contenidoProducto(index);
          closeProduct.style.right = "4%";
          closeModalRight.style.right = "-100%";
          menuButton.style.left = "-20%";
          menuHover.style.left = "-30%";
        } else{
          productModal.style.bottom = "0%";
          contenidoProducto(index);
          closeModalRight.style.right = "-100%";
          menuButton.style.left = "-100%";
          closeProduct.style.right = "4%";
        }
        $scope.productIsOpen = true;
      }

      $scope.closeProduct = function () {
        var productModal = document.querySelector('#productosModal');
        var windowWidth = window.innerWidth;
        var closeModalRight = document.querySelector('.landing .closeModal-right');
        var closeProduct = document.querySelector('.landing .closeModal-product');
        var modalElement = document.querySelector('.modal-section-down');
        var menuButton = document.querySelector('.landing .menuButton');
        var menuHover = document.querySelector('.landing .menuHover');
        if(windowWidth > 750){
          productModal.style.right = "-100%";
          closeProduct.style.right = "-50%";
          closeModalRight.style.right = "5%";
          menuButton.style.left = "-1%";
          menuHover.style.left = "0%";
        } else{
          productModal.style.bottom = "-100%";
          closeModalRight.style.right = "5%";
          menuButton.style.left = "5%";
          closeProduct.style.right = "-10%";
        }
        $scope.productIsOpen = false;
      }
      function isProductVideo(){
        var playButton = document.querySelector('#abrirVideo');
        console.log('numero: ' + $scope.numero);
        console.log('pepe: ' + $scope.pepe);
        console.log($scope.videoNum);
        $scope.videoNum = $scope.numero - $scope.pepe;
        if($scope.pepe && $scope.videoNum == -1){
          console.log('adentro video');
          $scope.videoNum = 7;
        }
        if($scope.productos[$scope.videoNum].video){
          playButton.style.display = "block"
          $timeout(function () {playButton.style.opacity = "1"}, 200);
        } else {
          playButton.style.opacity = "0";
          $timeout(function () {playButton.style.display = "none"}, 400);
        }
        $scope.pepe = 0;
      }

      $scope.openProductVideo = function (){
        if($scope.productos[$scope.numero].video){
          var play = document.querySelector('.landing .abrir-video');
          var fullScreen = document.querySelector('#productFullScreen');
          var video = fullScreen.querySelector('.image-container');
          var closeProduct = document.querySelector('.closeModal-product');
          play.style.display = "block";
          productFullScreen.style.display = "block";
          $timeout(function(){video.style.width = "95%";}, 100);
          closeProduct.style.display = 'none';
          $timeout(function(){
            $scope.videoUrl = $scope.productos[$scope.videoNum].video;video.style.width = "95%";
          }, 300);
        }
      }
      $scope.closeProductVideo = function (){
          var play = document.querySelector('.landing .abrir-video');
          var fullScreen = document.querySelector('#productFullScreen');
          var video = fullScreen.querySelector('.image-container');
          var closeProduct = document.querySelector('.closeModal-product');
          productFullScreen.style.display = "none";
          video.style.width = "0%";
          closeProduct.style.display = 'block';
          $scope.videoUrl = "";
      }

      $scope.giro = "izquierda";

      $scope.animarProductCubeLeft = function() {
        
        $scope.frontFaceProduct = $scope.frontFaceProduct - 90;
        $scope.izqFaceProduct = $scope.izqFaceProduct - 90;
        $scope.derFaceProduct = $scope.derFaceProduct - 90;
        $scope.backFaceProduct = $scope.backFaceProduct -90;

        var faces = [
          {
            face: 'front',
            position:  $scope.frontFaceProduct
          },
          {
            face: 'izq',
            position:  $scope.izqFaceProduct
          },
          {
            face: 'der',
            position:  $scope.derFaceProduct
          },
          {
            face: 'back',
            position:  $scope.backFaceProduct
          }
        ];
        for(var i = 0; i < faces.length; i++){
          if((faces[i].position/180)%2 == 0){
            $scope.currentFace = faces[i].face;
            console.log('Current Face: ' + $scope.currentFace);
          }
        }
        
        if($scope.limitNext){
          $scope.numero = 0;
        } else {
          if($scope.giro == "izquierda"){
            $scope.numero++;
          } else {
            $scope.pepe = 0;
          }
          
        }
        contenidoProducto($scope.numero);
        $scope.giro = "izquierda";
      }
      $scope.pepe = 0;
      $scope.animarProductCubeRight = function() {

        var index = $scope.indexAux;
        $scope.frontFaceProduct = $scope.frontFaceProduct + 90;
        $scope.izqFaceProduct = $scope.izqFaceProduct + 90;
        $scope.derFaceProduct = $scope.derFaceProduct + 90;
        $scope.backFaceProduct = $scope.backFaceProduct + 90;

        var faces = [
          {
            face: 'front',
            position:  $scope.frontFaceProduct
          },
          {
            face: 'izq',
            position:  $scope.izqFaceProduct
          },
          {
            face: 'der',
            position:  $scope.derFaceProduct
          },
          {
            face: 'back',
            position:  $scope.backFaceProduct
          }
        ];
        if($scope.limitAtras){
          $scope.numero = 7;
        } else {
          if($scope.giro == "derecha"){
            $scope.numero--;
            $scope.pepe = 1;
          }else {
            $scope.pepe = 1;
          }
        }
        contenidoProducto($scope.numero);
        for(var i = 0; i < faces.length; i++){
          if((faces[i].position/180)%2 == 0){
            $scope.currentFace = faces[i].face;
          }

        }
        $scope.giro = "derecha";
      }

        
      function contenidoProducto(index){
        $scope.numero = index;
        $scope.limitNext = false;
        $scope.limitAtras = false;
        isProductVideo();
        var cuboProductos = document.querySelector('#productosModal');

        if($scope.currentFace == 'front'){
          var frontFace = cuboProductos.querySelector('#front');
          var previous = frontFace.previousElementSibling;
          var next = frontFace.nextElementSibling;


          frontFace.querySelector('.container').innerHTML = $scope.productos[$scope.numero].contenido;

          if($scope.numero == 7){
            next.querySelector('.container').innerHTML = $scope.productos[0].contenido;
            $scope.limitNext = true;
          } else {
            next.querySelector('.container').innerHTML = $scope.productos[$scope.numero + 1].contenido;
          }
          
          if($scope.numero == 0){
            previous.querySelector('.container').innerHTML = $scope.productos[$scope.productos.length - 1].contenido;
            $scope.limitAtras = true;
          } else {
            previous.querySelector('.container').innerHTML = $scope.productos[$scope.numero - 1].contenido;
          }     
        }

        if($scope.currentFace == 'der'){
          var derFace = cuboProductos.querySelector('#der');
          var previous = derFace.previousElementSibling;
          var next = derFace.nextElementSibling;
          derFace.querySelector('.container').innerHTML = $scope.productos[$scope.numero].contenido;
          if($scope.numero == 7){
            next.querySelector('.container').innerHTML = $scope.productos[0].contenido;
            $scope.limitNext = true;
          } else {
            next.querySelector('.container').innerHTML = $scope.productos[$scope.numero + 1].contenido;
          }
          
          if($scope.numero == 0){
            previous.querySelector('.container').innerHTML = $scope.productos[$scope.productos.length - 1].contenido;
            $scope.limitAtras = true;
          } else {
            previous.querySelector('.container').innerHTML = $scope.productos[$scope.numero - 1].contenido;

          }   
        }

        if($scope.currentFace == 'back'){
          var backFace = cuboProductos.querySelector('#back');
          var previous = backFace.previousElementSibling;
          var next = cuboProductos.querySelector('#izq');
          backFace.querySelector('.container').innerHTML = $scope.productos[$scope.numero].contenido
          if($scope.numero == 7){
            next.querySelector('.container').innerHTML = $scope.productos[0].contenido;
            $scope.limitNext = true;
          } else {
            next.querySelector('.container').innerHTML = $scope.productos[$scope.numero + 1].contenido;
          }   
          if($scope.numero == 0){
            previous.querySelector('.container').innerHTML = $scope.productos[$scope.productos.length - 1].contenido;
            $scope.limitAtras = true;
          } else {
            previous.querySelector('.container').innerHTML = $scope.productos[$scope.numero - 1].contenido;
          }    
        }

        if($scope.currentFace == 'izq'){
          var izqFace = cuboProductos.querySelector('#izq');
          var previous = cuboProductos.querySelector('#back');
          var next = izqFace.nextElementSibling;
          izqFace.querySelector('.container').innerHTML = $scope.productos[$scope.numero].contenido;
          if($scope.numero == 7){
            next.querySelector('.container').innerHTML = $scope.productos[0].contenido;
            $scope.limitNext = true;
          } else {
            next.querySelector('.container').innerHTML = $scope.productos[$scope.numero + 1].contenido;
          }    
          if($scope.numero == 0){
            previous.querySelector('.container').innerHTML = $scope.productos[$scope.productos.length - 1].contenido;
            $scope.limitAtras = true;
          } else {
            previous.querySelector('.container').innerHTML = $scope.productos[$scope.numero - 1].contenido;
          }
        }
    }
    
    //Si se hace click en client modal
      $scope.clientModal = false;

    //Variables relacion menu y modal
      $scope.menuIsOpen = false;
      $scope.modalIsOpen = false;
      $scope.modalIsOpenUp = false;
      
    $scope.onHover = false;
    $scope.hoverText = "TECHNOLOGIES";

    $scope.modalContentId = 0;  

    $scope.modalOpenedTimes = 0;
    $scope.showInstruction = false;

    $scope.contactModalIsOpen = false;
    $scope.modalContactIsOpenUp = false;

    // Hammer Events -----------------------------------------------------------------------------------------
        var hammertime = new Hammer(document.body);
        hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
          
      // Swipe Right -------------------------------------------------------------------------
          hammertime.on('swiperight', function(ev) {
            var windowWidth = window.innerWidth;
            var trigger = $('#hamburger');
            if(windowWidth < 750){
              if(!$scope.menuIsOpen && !$scope.modalIsOpen){
                // console.log('enter');
                $scope.openMenu();
                trigger.removeClass('is-closed');
                trigger.addClass('is-open');
                $scope.menuIsOpen = true; 
              }
              if($scope.showInstruction){
                var instructions = document.querySelector('.nav-landing-mobile .handswipe');
                instructions.style.display = 'none';
                $scope.showInstruction = false;
              }
              if($scope.productIsOpen){
                $scope.animarProductCubeRight();
              }
              if ($scope.modalIsOpen && !$scope.showInstruction){
                $scope.clientModal = false;
                animateCubeSwipeRight();
                  console.log('menu is open: ' + $scope.menuIsOpen);
                  $timeout(function (){
                  $scope.$apply(function(){
                      if($scope.modalContentId === 0){
                        $scope.modalContentId = 5;
                        contenidoModal($scope.modalContentId);
                      } else {
                        contenidoModal($scope.modalContentId - 1);
                      }
                    
                    });

                  }, 75);
              }
              

            }
            
            
          });
      // Swipe Left -------------------------------------------------------------------------
          hammertime.on('swipeleft', function(ev) {
            var windowWidth = window.innerWidth;
            var trigger = $('#hamburger');
            if (windowWidth < 750){
              if($scope.menuIsOpen){
                $scope.closeMenu();
                trigger.removeClass('is-open');
                trigger.addClass('is-closed');
                $scope.menuIsOpen = false;
              }     
              if($scope.showInstruction){
                var instructions = document.querySelector('.nav-landing-mobile .handswipe');
                instructions.style.display = 'none';
                $scope.showInstruction = false;
              }
              if($scope.productIsOpen){
                $scope.animarProductCubeLeft();
              }
              if ($scope.modalIsOpen && !$scope.showInstruction){
                $scope.clientModal = false;
                animateCubeDown();
                  $timeout(function (){
                  $scope.$apply(function(){
                      if($scope.modalContentId === 5){
                        $scope.modalContentId = 0;
                        contenidoModal($scope.modalContentId);
                      } else {
                        contenidoModal($scope.modalContentId + 1);
                      }
                    
                    });

                  }, 75);
              }
              

            }
                 
          });

      // Swipe Down -------------------------------------------------------------------------
        hammertime.on('swipedown', function(ev) {
          var windowWidth = window.innerWidth;
          if(windowWidth < 750){
            if(!$scope.contactModalIsOpen){
              if($scope.modalIsOpenUp && !$scope.productIsOpen){
                var closeModalRight = document.querySelector('.landing .closeModal-right');
                var modalElement = document.querySelector('.modal-section-down');
                var menuButton = document.querySelector('.landing .menuButton');
                if(!$scope.menuIsOpen){
                  modalElement.style.bottom = '-20%';
                  closeModalRight.style.right = '5%';
                  menuButton.style.left = '-1%';
                  $timeout(function () {$scope.modalIsOpenUp = false}, 1000);
                }
     
              } else{
                
                if($scope.productIsOpen){
                  $scope.closeProduct();
                  $scope.$apply(function (){
                    $scope.clientModal = false;
                    $scope.modalContentId = 5;
                    contenidoModal($scope.modalContentId);
                  });
                  
                  $timeout(function () {$scope.productIsOpen = false}, 1000);
                  
                } else {
                  var menuButton = document.querySelector('.landing .menuButton');
                  menuButton.style.left = '-1%';
                  closeModalMobile();
                  $scope.modalIsOpen = false;
                }
              }
            } else{
              if($scope.modalContactIsOpenUp){
                var contactModal = document.querySelector('.landing .contacto');
                var closeModalRight = document.querySelector('.landing .closeModal-right');
                var menuButton = document.querySelector('.landing .menuButton');
                if(!$scope.menuIsOpen){
                  contactModal.style.bottom = '-20%';
                  closeModalRight.style.right = '5%';
                  menuButton.style.left = '-1%';
                  $timeout(function () {$scope.modalContactIsOpenUp = false;}, 1000);
                }
              } else {
                var menuButton = document.querySelector('.landing .menuButton');
                menuButton.style.left = '5%';
                closeContactModalMobile();
                $scope.contactModalIsOpen = false;
                
              } 


            }            
          }
          

          
        });
      // Swipe Up -------------------------------------------------------------------------
        hammertime.on('swipeup', function(ev) {
          var windowWidth = window.innerWidth;
          if(windowWidth < 750){
            //Show Modal Swipping Up ---------------------------------------------------------
              if(!$scope.modalIsOpen && !$scope.contactModalIsOpen){
                $scope.openModalMobile($scope.modalContentId, $scope.modalMobileOpened );
                $timeout(function(){$scope.modalIsOpen = true;}, 800);               
                $scope.$apply(function(){
                  contenidoModal($scope.modalContentId);
                });
              }
            //Scroll Up Modal ----------------------------------------------------------------
              if($scope.modalIsOpen  && !$scope.contactModalIsOpen){
                var closeModalRight = document.querySelector('.landing .closeModal-right');
                var modalElement = document.querySelector('.modal-section-down');
                var menuButton = document.querySelector('.landing .menuButton');
                if(!$scope.menuIsOpen){
                  modalElement.style.bottom = '0%';
                  closeModalRight.style.right = '-105%';
                  menuButton.style.left = '-10%';
                  $scope.modalIsOpenUp = true;

                }
              }

            //Scroll Up Contact Modal --------------------------------------------------------  
              if ($scope.contactModalIsOpen){
                var contactModal = document.querySelector('.landing .contacto');
                var closeModalRight = document.querySelector('.landing .closeModal-right');
                var menuButton = document.querySelector('.landing .menuButton');
                if(!$scope.menuIsOpen){
                  contactModal.style.bottom = '0%';
                  closeModalRight.style.right = '-105%';
                  menuButton.style.left = '-10%';
                  $scope.modalIsOpenUp = true;
                  $scope.modalContactIsOpenUp = true;

                }
              }
          }
            
        });


    //-------------------Landing Functions---------------------------------------

      $scope.navHover = function (id, index){
        var activeZoneGroup = document.getElementById(id);
        var activeZone = activeZoneGroup.querySelector('rect');
        var text = activeZone.previousElementSibling;
        var button = activeZone.previousElementSibling.previousElementSibling;
        var landingBanner = document.querySelector('.banner h1');
        $scope.onHover = true;

        if(activeZoneGroup.className.animVal == "upper"){
          button.style.fill = '#104b77';
        } else{
          button.style.fill = '#2c8e7d';
          
        }
        $scope.onHover = true;
        landingBanner.style.paddingTop = "1.5em";
        $timeout(function() {
          if($scope.onHover){
            landingBanner.style.paddingTop = "0em";
            $scope.hoverText = $scope.modalContentObj[index].hover;
            
          }
          
        }, 300);
        text.style.fontSize = '2.5em';      
      }
      $scope.navNotHover = function (id){
        var activeZoneGroup = document.getElementById(id);
        var activeZone = activeZoneGroup.querySelector('rect');
        var text = activeZone.previousElementSibling;
        var button = activeZone.previousElementSibling.previousElementSibling;
        var landingBanner = document.querySelector('.banner h1');
        $scope.onHover = false;
        if(activeZoneGroup.className.animVal == "upper"){
          button.style.fill = '#509CD5';
        } else{
          button.style.fill = '#6CBFB1';
        
        }
        landingBanner.style.paddingTop = "2em";
        $timeout(function() {
          if(!$scope.onHover){
            var landingBanner = document.querySelector('.banner h1');
            $scope.hoverText = "TECHNOLOGIES";
            landingBanner.style.paddingTop = "0em";
          }
          
        }, 400);
        text.style.fontSize = '2em';
        
      }
      $scope.textNotOnHover = function (index) {
        var landingBanner = document.querySelector('.banner h1');
        landingBanner.style.paddingTop = "2em";
        var navText = document.querySelector('.nav-' + index);
        navText.style.transform = 'scale(1)';
        

        $timeout(function() {
          if(!$scope.onHover){
            var landingBanner = document.querySelector('.banner h1');
            $scope.hoverText = "TECHNOLOGIES";
            landingBanner.style.paddingTop = "0em";
          }
          
        }, 400);
      }

      $scope.openModal = function (id, index) {
        //Landing variables
          var landing = document.querySelector('.landing');
          var navContainer = document.querySelector('.landing .navContainer');
          var navs = document.querySelectorAll('.landing .logo svg text');
          var allButtons = document.querySelectorAll('.logo svg .overlay');
          var activeZone = document.querySelectorAll('.logo svg rect');
          var elem = document.getElementById(id);
          var bgModalRight = document.querySelector('.bg-modal-right');
          var bgModalDown = document.querySelector('.bg-modal-down');

        //Modal Variables
          var modalDown = document.querySelector('.landing .modal-section-down');
          var contactModal = document.querySelector('.landing .contacto');
          var closeModalRight = document.querySelector('.landing .closeModal-right');
          var modalFaces = document.querySelectorAll('.landing .modal-section-down .cube .face');
          var closeModalLeft = document.querySelector('.landing .closeModal-left');
          var modalRight = document.querySelector('.modal-section-right');
          $scope.clientModal = false;
          if(id == "contactButton"){
            //Mostrar Modal
              contactModal.style.bottom = '-40%';
              closeModalRight.style.right = '5%';
              navContainer.style.top = '42.5%';
              closeModalRight.style.color = '#fff'; 

            //Cambiar color fondo modal a verde
              for (var i = 0; i < modalFaces.length; i++){
                  modalFaces[i].style.background = 'url("assets/img/contacto/bg-contacto-01.jpg") center center no-repeat';
                  modalFaces[i].style.backgroundSize = 'cover';
                  modalFaces[i].style.borderTop = "solid 1em white";
              }

            //Opacidad 0 el resto de los botones
              $timeout(function () {
                  for (var i = 0; i < allButtons.length; i++){
                  allButtons[i].style.opacity = '0';
                }
              }, 300);
              //Opacidad 0 el resto de los botones
              for (var i = 0; i < activeZone.length; i++){
                activeZone[i].style.pointerEvents = "none";
              }
            //Trasladar todos los botones del navegador hacia la izquierda
              $timeout(function () {for (var i = 0; i < navs.length; i++){navs[i].style.opacity = "0"}}, 300);
              $scope.modalIsOpen = true;
              $scope.modalOpened = id;
            //Click en el CloseBotton
            closeModalRight.addEventListener('click', function(){
              //Ocultar el modalDown
              closeContactModal();
              $timeout(function () {
                 for (var i = 0; i < modalFaces.length; i++){
                  modalFaces[i].style.background = "white";
                  modalFaces[i].style.borderTop = "none";
                }
              }, 600)
            });


          } else {
            //Ver si el boton se encuetra arriba o abajo
              if (elem.className.animVal === "button upper"){

                //Mostrar Modal
                  modalDown.style.bottom = '-40%';
                  closeModalRight.style.right = '5%';
                  navContainer.style.top = '42.5%';
                  closeModalRight.style.color = '#fff';
                  bgModalDown.style.top = '0%';
                  bgModalDown.style.backgroundPosition = "0% 0%"; 
                //Opacidad 0 el resto de los botones
                  $timeout(function () {
                    for (var i = 0; i < allButtons.length; i++){
                      allButtons[i].style.opacity = '0';
                    }
                  }, 300);
                //Opacidad 0 el resto de los botones
                  for (var i = 0; i < activeZone.length; i++){
                    activeZone[i].style.pointerEvents = "none";
                  }
                //Trasladar todos los botones del navegador hacia la izquierda
                  $timeout(function () {for (var i = 0; i < navs.length; i++){navs[i].style.opacity = "0"}}, 300);
                  $scope.modalIsOpen = true;
                  $scope.modalOpened = id;

                //Click en el CloseBotton
                closeModalRight.addEventListener('click', function(){
                  //Ocultar el modalDown
                  closeModalDown();
                });

            } else {
              //Mostrar Modal
                modalRight.style.right = '-34%';
                closeModalRight.style.right = '5%';
                closeModalRight.style.color = '#4e4e4e';
                navContainer.style.left = '45%';
                bgModalRight.style.left = '00%';
                
              //Opacidad 0 el resto de los botones
                $timeout(function () {
                    for (var i = 0; i < allButtons.length; i++){
                      allButtons[i].style.opacity = '0';
                    }
                  }, 300);
              //Opacidad 0 el resto de los botones
                  for (var i = 0; i < activeZone.length; i++){
                    activeZone[i].style.pointerEvents = "none";
                  }
              //Trasladar todos los botones del navegador hacia la izquierda
                $timeout(function () {for (var i = 0; i < navs.length; i++){navs[i].style.opacity = "0"}}, 300);
              //Mover el fondo
                bgModalRight.style.backgroundPosition = '-100%';

              $scope.modalIsOpen = true;
              $scope.modalOpened = id;
              if($scope.modalOpened === "productosButton"){
                $scope.productSpinner = true;
                $timeout(function () {
                  $scope.productSpinner = false;
                }, 3000);
              } 
              // console.log($scope.modalOpened);

              //Click en el CloseBotton
                closeModalRight.addEventListener('click', function(){
                  //Ocultar el modalDown
                  //Ocultar el modalDown
                  navContainer.style.left = '50%';
                  modalRight.style.right = '-105%';
                  closeModalRight.style.right = '-90%';
                  bgModalRight.style.left = '-100%';
                  bgModalRight.style.backgroundPosition = '0%';

                  for (var i = 0; i < allButtons.length; i++){
                    allButtons[i].style.opacity = "1";
                  };
                  for (var i = 0; i < activeZone.length; i++){
                    activeZone[i].style.pointerEvents = "auto";
                  };
                  for (var i = 0; i < navs.length; i++){navs[i].style.opacity = "1";};

                  $scope.modalIsOpen = false;
                
                });
              } //End else
              //Cambiar contenido de Modal
              contenidoModal(index);
          }

      

      
      }// End openModal()   

    // --------------------Menu Hover--------------------------------------- 
      $scope.menuButton = function () {
        if(!$scope.menuIsOpen){
          $scope.openMenu();
        } else {
          $scope.closeMenu();
        }
      }

      $scope.openMenu = function (){
        var menuHover = document.querySelector('.menuHover');
        var menuButton = document.querySelector('.menuButton');
        var menu = document.querySelector('.sideBar');
        var sideBarBg = document.querySelector('.sideBarBg');
        var windowWidth = window.innerWidth;
        var hamburguer = document.querySelector('#hamburger');
        if($scope.menuIsOpen == false){
          console.log('menu abierto: ' + $scope.menuIsOpen);
          if(windowWidth >= 600){
            menuButton.style.left = '36%';
          }else{
            menuButton.style.left = '51%';
          }
          menu.style.left = '0%';
          sideBarBg.style.right = '0';
          $scope.menuIsOpen = true;
        }
        
        
        // hamburguer.addEventListener('click', function () {
        //   if($scope.menuIsOpen == true){
        //     $scope.closeMenu();
        //   }
        // });
      }

      $scope.mouseenterMenu = function () {
        var menuHover = document.querySelector('.menuHover');
        var menuButton = document.querySelector('.menuButton');

        if(!$scope.menuIsOpen){
          menuHover.style.opacity = '1';
          menuHover.style.cursor = 'pointer';
          menuButton.style.color = 'white';
          menuButton.style.left = '2%';
          menuButton.style.cursor = 'pointer';
        }
      }
      $scope.mouseleaveMenu = function () {
        var menuHover = document.querySelector('.menuHover');
        var menuButton = document.querySelector('.menuButton');

        menuHover.style.opacity = '0';
        if(!$scope.menuIsOpen){
          menuButton.style.color = 'rgba(255,255,255,.4)';
          menuButton.style.left = '-1%';
        }  
      }
      $scope.closeMenu = function () {
        var menuHover = document.querySelector('.menuHover');
        var menuButton = document.querySelector('.menuButton');
        var menu = document.querySelector('.sideBar');
        var sideBarBg = document.querySelector('.sideBarBg');
        var windowWidth = window.innerWidth;
        $scope.menuIsOpen = false;

          menu.style.left = '-80%';
          menuButton.style.left = '-1%';
          sideBarBg.style.right = '-101%';
          menuButton.style.color = 'rgba(255,255,255,.4)';
          

          if(windowWidth >= 600){
            menuButton.style.left = '-1%';
          }else{
            menuButton.style.left = '-3%';
          }
      }


    $scope.goTo = function (id, index, idMobile){

    
      var elemGoTo = document.getElementById(id);
      var elemOpened = document.getElementById($scope.modalOpened);
      var modalFaces = document.querySelectorAll('.landing .modal-section-down .cube .face');
      var windowWidth = window.innerWidth;
      var trigger = $('#hamburger');
      $scope.clientModal = false;

      if(windowWidth >= 750){
        if($scope.menuIsOpen && !$scope.modalIsOpen){
            $scope.closeMenu();
            $scope.openModal(id, index);
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
        } else {
          if(elemGoTo.className.animVal == elemOpened.className.animVal){
            if(elemOpened.className.animVal == "button upper"){
              animateCubeDown();
              $timeout(function (){contenidoModal(index)}, 150);
              trigger.removeClass('is-open');
              trigger.addClass('is-closed');
            } else {
              animateCubeRight();
              if(id === "productosButton"){
                $scope.productSpinner = true;
                $timeout(function () {
                  $scope.productSpinner = false;
                }, 3000);
              } 
              $timeout(function (){contenidoModal(index)}, 400);
              trigger.removeClass('is-open');
              trigger.addClass('is-closed');
            }
            $scope.closeMenu();
            
          } else{
              if(elemOpened.className.animVal == "button upper" || $scope.modalOpened == "contactButton"){
                if($scope.modalOpened == "contactButton"){
                  $timeout(function () {
                  for (var i = 0; i < modalFaces.length; i++){
                      modalFaces[i].style.background = "white";
                      modalFaces[i].style.borderTop = "none";
                    };
                  }, 600)
                  closeContactModal();
                }
                closeModalDown();
              } else {
                closeModalRight();
              }
              trigger.removeClass('is-open');
              trigger.addClass('is-closed');
              $scope.closeMenu();
              
              $timeout(function (){
                $scope.openModal(id, index)
              }, 1200);
          }
          
          
        }
      } else {
        if(id !== "contactButton"){
          //Si contact modal esta cerrado animar el cubo o abrir el modal
          if(!$scope.contactModalIsOpen){
            if($scope.modalIsOpen){
              animateCubeDown();
              $scope.closeMenu();
              $scope.openModalMobile(index, idMobile);
            } else {
              $scope.closeMenu();
              $scope.openModalMobile(index, idMobile);
            }
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
          } else {
            //Si el contact modal esta abierto cerrar el contact modal y abir el cubo
            var contactModal = document.querySelector('.landing .contacto');
            closeContactModalMobile();
            $scope.closeMenu();
            $timeout(function (){
              $scope.openModalMobile(index);
            }, 600);
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
          }
            
        } else{
          var contactModal = document.querySelector('.landing .contacto');
          if($scope.modalIsOpen){
            closeModalMobile();
            $scope.closeMenu();
            $timeout(function (){
              openContactModalMobile(id);
            }, 600)
          } else {
            $scope.closeMenu();
            openContactModalMobile(id);

          }
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          
        }
      }
    }

    // --------------------Modal Functions---------------------------------- 
      function contenidoModal(index){
        $scope.contenidoObj = $scope.modalContentObj[index];
        $scope.tituloModal = $scope.contenidoObj.titulo;
        $scope.contenidoModal = $scope.contenidoObj.contenido;
        $scope.modalContentId = index;
        if($scope.contenidoObj.imgClientes){
            $scope.clientModal = true;
        }
      }
      function contenidoHover(index){
        $scope.contenidoObj = $scope.modalContentObj[index];
        $scope.hoverText = $scope.contenidoObj.hover;
      }
      function closeModalDown(){
        var landing = document.querySelector('.landing');
        var navContainer = document.querySelector('.landing .navContainer');
        var navs = document.querySelectorAll('.landing .logo svg text');
        var allButtons = document.querySelectorAll('.logo svg .overlay');
        var modalDown = document.querySelector('.modal-section-down');
        var closeModalRight = document.querySelector('.landing .closeModal-right');
        var bgModalDown = document.querySelector('.bg-modal-down');
        var activeZone = document.querySelectorAll('.logo svg rect');
        //Ocultar el modalDown
            navContainer.style.top = '47.5%';
            modalDown.style.bottom = '-100%';
            closeModalRight.style.right = '-90%';
            bgModalDown.style.top = '-100%';
            bgModalDown.style.backgroundPosition = "0% 100%"; 

            $timeout(function () {
              for (var i = 0; i < activeZone.length; i++){
                activeZone[i].style.pointerEvents = "auto"; 
              };
            }, 300);
            for (var i = 0; i < allButtons.length; i++){
              allButtons[i].style.opacity = "1"; 
            };
            $timeout(function () {for (var i = 0; i < navs.length; i++){navs[i].style.opacity = "1"}}, 300);

            $scope.modalIsOpen = false;
      }
      function closeModalRight(){
        var landing = document.querySelector('.landing');
        var navContainer = document.querySelector('.landing .navContainer');
        var navs = document.querySelectorAll('.landing .logo svg text');
        var allButtons = document.querySelectorAll('.logo svg .overlay');
        var modalRight = document.querySelector('.modal-section-right');
        var closeModalRight = document.querySelector('.landing .closeModal-right');
        var bgModalRight = document.querySelector('.bg-modal-right');
        var activeZone = document.querySelectorAll('.logo svg rect');
        //Ocultar el modalDown
            navContainer.style.left = '50%';
            modalRight.style.right = '-105%';
            closeModalRight.style.right = '-90%';
            bgModalRight.style.left = '-100%';
            bgModalRight.style.backgroundPosition = '0%';

            $timeout(function () {
              for (var i = 0; i < activeZone.length; i++){
                activeZone[i].style.pointerEvents = "auto"; 
              };
            }, 300);
            for (var i = 0; i < allButtons.length; i++){
              allButtons[i].style.opacity = "1"; 
            };
            $timeout(function () {for (var i = 0; i < navs.length; i++){navs[i].style.opacity = "1"}}, 300);

            $scope.modalIsOpen = false;
      }
      function closeContactModal() {
        var landing = document.querySelector('.landing');
        var navContainer = document.querySelector('.landing .navContainer');
        var navs = document.querySelectorAll('.landing svg text');
        var allButtons = document.querySelectorAll('.logo svg .overlay');
        var contactModal = document.querySelector('.landing .contacto');
        var closeModalRight = document.querySelector('.landing .closeModal-right');
        var bgModalDown = document.querySelector('.bg-modal-down');
        var activeZone = document.querySelectorAll('.logo svg rect');
        //Ocultar el modalDown
            navContainer.style.top = '47.5%';
            contactModal.style.bottom = '-110%';
            closeModalRight.style.right = '-90%';

            for (var i = 0; i < allButtons.length; i++){
              allButtons[i].style.opacity = "1";
            };
            for (var i = 0; i < activeZone.length; i++){
              activeZone[i].style.pointerEvents = "auto"; 
            };
            for (var i = 0; i < navs.length; i++){navs[i].style.opacity = "1";};

            $scope.modalIsOpen = false;
      }

    // --------------------Cube Animation Functions----------------------------------  
      $scope.cubeDownInitFront = 0;
      $scope.cubeDownInitDer = 90;
      $scope.cubeDownInitIzq = -90;
      $scope.cubeDownInitBack = -180;
     
      function animateCubeDown(){
        var cubeFront = document.querySelector(".modal-section-down .cube .front");
        var cubeDer = document.querySelector(".modal-section-down .cube .der");
        var cubeIzq = document.querySelector(".modal-section-down .cube .izq");
        var cubeBack = document.querySelector(".modal-section-down .cube .back");
     
        $scope.cubeDownInitFront = $scope.cubeDownInitFront - 90;
        $scope.cubeDownInitDer = $scope.cubeDownInitDer - 90;
        $scope.cubeDownInitIzq = $scope.cubeDownInitIzq - 90;
        $scope.cubeDownInitBack = $scope.cubeDownInitBack - 90;
        cubeFront.style.transform = "rotateY(-90deg) translateX(-50%) rotateY("+ $scope.cubeDownInitFront+"deg) translateX(50%) rotateY(90deg)";
        cubeDer.style.transform = "rotateY(-90deg) translateX(-50%) rotateY("+ $scope.cubeDownInitDer + "deg) translateX(50%) rotateY(90deg)";
        cubeIzq.style.transform = "rotateY(-90deg) translateX(-50%) rotateY(" + $scope.cubeDownInitIzq+ "deg) translateX(50%) rotateY(90deg)";
        cubeBack.style.transform = "rotateY(-90deg) translateX(-50%) rotateY(" + $scope.cubeDownInitBack+ "deg) translateX(50%) rotateY(90deg)";
        // console.log('position front:' + $scope.cubeDownInitFront);
      }

      function animateCubeSwipeRight(){
        var cubeFront = document.querySelector(".modal-section-down .cube .front");
        var cubeDer = document.querySelector(".modal-section-down .cube .der");
        var cubeIzq = document.querySelector(".modal-section-down .cube .izq");
        var cubeBack = document.querySelector(".modal-section-down .cube .back");
     
        $scope.cubeDownInitFront = $scope.cubeDownInitFront  + 90;
        $scope.cubeDownInitDer = $scope.cubeDownInitDer  + 90;
        $scope.cubeDownInitIzq = $scope.cubeDownInitIzq  + 90;
        $scope.cubeDownInitBack = $scope.cubeDownInitBack  + 90;
        cubeFront.style.transform = "rotateY(-90deg) translateX(-50%) rotateY("+ $scope.cubeDownInitFront+"deg) translateX(50%) rotateY(90deg)";
        cubeDer.style.transform = "rotateY(-90deg) translateX(-50%) rotateY("+ $scope.cubeDownInitDer + "deg) translateX(50%) rotateY(90deg)";
        cubeIzq.style.transform = "rotateY(-90deg) translateX(-50%) rotateY(" + $scope.cubeDownInitIzq+ "deg) translateX(50%) rotateY(90deg)";
        cubeBack.style.transform = "rotateY(-90deg) translateX(-50%) rotateY(" + $scope.cubeDownInitBack+ "deg) translateX(50%) rotateY(90deg)";
        // console.log('position front:' + $scope.cubeDownInitFront);
      }

      $scope.cubeRightInitFront = 0;
      $scope.cubeRightInitDer = 90;
      $scope.cubeRightInitIzq = -90;
      $scope.cubeRightInitBack = -180;
     
      function animateCubeRight(){
        var cubeFront = document.querySelector(".modal-section-right .cube .front");
        var cubeDer = document.querySelector(".modal-section-right .cube .der");
        var cubeIzq = document.querySelector(".modal-section-right .cube .izq");
        var cubeBack = document.querySelector(".modal-section-right .cube .back");
     
        $scope.cubeRightInitFront = $scope.cubeRightInitFront - 90;
        $scope.cubeRightInitDer = $scope.cubeRightInitDer - 90;
        $scope.cubeRightInitIzq = $scope.cubeRightInitIzq - 90;
        $scope.cubeRightInitBack = $scope.cubeRightInitBack - 90;
        cubeFront.style.transform = "rotateY(-90deg) translateX(-50%) rotateY("+ $scope.cubeRightInitFront+"deg) translateX(50%) rotateY(90deg)";
        cubeDer.style.transform = "rotateY(-90deg) translateX(-50%) rotateY("+ $scope.cubeRightInitDer + "deg) translateX(50%) rotateY(90deg)";
        cubeIzq.style.transform = "rotateY(-90deg) translateX(-50%) rotateY(" + $scope.cubeRightInitIzq+ "deg) translateX(50%) rotateY(90deg)";
        cubeBack.style.transform = "rotateY(-90deg) translateX(-50%) rotateY(" + $scope.cubeRightInitBack+ "deg) translateX(50%) rotateY(90deg)";
      }

    function openContactModal(id, index){
      //Landing variables
        var landing = document.querySelector('.landing');
        var navContainer = document.querySelector('.landing .navContainer');
        var navs = document.querySelectorAll('.landing .nav');
        var allButtons = document.querySelectorAll('.logo .button');
        var bgModalRight = document.querySelector('.bg-modal-right');
        var bgModalDown = document.querySelector('.bg-modal-down');

      //Modal Variables
        var modalDown = document.querySelector('.modal-section-down');
        var closeModalRight = document.querySelector('.landing .closeModal-right');
        $scope.modalFaces = document.querySelectorAll('.modal-section-down .cube .face');
      
        var closeModalLeft = document.querySelector('.landing .closeModal-left');
        var modalRight = document.querySelector('.modal-section-right');
        $scope.clientModal = false;

          //Mostrar Modal
            modalDown.style.bottom = '-40%';
            closeModalRight.style.right = '5%';
            navContainer.style.top = '42.5%';
            closeModalRight.style.color = '#fff';
            bgModalDown.style.top = '0%';
            bgModalDown.style.backgroundPosition = "0% 0%"; 
          //Opacidad 0 el resto de los botones
            for (var i = 0; i < allButtons.length; i++){
              allButtons[i].style.opacity = "0";
              allButtons[i].style.pointerEvents = "none";
            }
          //Trasladar todos los botones del navegador hacia la izquierda
            for (var i = 0; i < navs.length; i++){navs[i].style.transform = "translateX(-120%)";navs[i].style.opacity = "0";};
            for (var i = 0; i < $scope.modalFaces.length; i++){$scope.modalFaces[i].style.background = "green"};
            $scope.modalIsOpen = true;
            $scope.modalOpened = id;
            console.log(document.getElementById($scope.modalOpened).className);

          //Click en el CloseBotton
          closeModalRight.addEventListener('click', function(){
            //Ocultar el modalDown
            closeModalDown();
            $timeout(function () {for (var i = 0; i < $scope.modalFaces.length; i++){$scope.modalFaces[i].style.background = "white"}}, 600);
          });
          contenidoModal(index);
    }
    // Mobile functions ------------------------------------------------------------------------------------
      $scope.openModalMobile = function (index, id) {
        var modalDown = document.querySelector('.modal-section-down');
        var bgModalDown = document.querySelector('.bg-modal-down');
        var logoMobile = document.querySelector('.nav-landing-mobile .logo-landing-mobile');
        var SVGlogoMobile = document.querySelector('.nav-landing-mobile .logo-landing-mobile .nav-logo-mobile');
        var SVGoixxio = document.querySelector('.landing .nav-landing-mobile .oixxio-landing-mobile');
        var closeModalRight = document.querySelector('.landing .closeModal-right');
        var windowWidth = window.innerWidth;
        var menuHover = document.querySelector('.menuHover');
        var instructions = document.querySelector('.nav-landing-mobile .handswipe');
        var touchButton = document.getElementById(id);
        var button = touchButton.lastElementChild;
        $scope.modalMobileOpened = id;
        console.log(touchButton);
        $scope.clientModal = false;
        $scope.modalOpenedTimes += 1;
        if($scope.modalOpenedTimes > 1){
          instructions.style.display = 'none';
        } else{
          instructions.style.display = 'block';
          $timeout(function() {
            
            instructions.style.opacity = '1';
            $scope.showInstruction = true;

          }, 1000);
          
        }
        if($scope.modalMobileOpened === "productosButtonMobile"){
          $scope.productSpinner = true;
          $timeout(function () {
            $scope.productSpinner = false;
          }, 3000);
        } 
        button.style.fill = "white";
        $timeout(function () {
          if(button.className.animVal == "buttonMobile blue"){
            button.style.fill = "#509CD5";
            console.log(button);
          }else{
            button.style.fill = "#6CBFB1";
          }
        }, 400);
        modalDown.style.bottom = '-20%';
        logoMobile.style.opacity = '0';
        SVGlogoMobile.style.transform = 'translate(25%, 5%)';
        bgModalDown.style.top = '0%';
        bgModalDown.style.backgroundPosition = "0% 0%"; 
        closeModalRight.style.right = '5%';
        menuHover.style.zIndex = '7';
        if(windowWidth >= 400){
          SVGoixxio.style.bottom = "62%";
        }else{
          SVGoixxio.style.bottom = "64%";
        }
        $timeout(function (){$scope.modalIsOpen = true;}, 800);
        contenidoModal(index);
        // console.log('modal abierto: ' + $scope.modalIsOpen);
        //Click en el CloseBotton
        closeModalRight.addEventListener('click', function(){
          //Ocultar el modalDown
          $scope.modalIsOpen = false;
          closeModalMobile();
          // console.log('modal abierto: ' + $scope.modalIsOpen);
        });
      }
      function closeModalMobile(){
        var modalDown = document.querySelector('.modal-section-down');
        var bgModalDown = document.querySelector('.bg-modal-down');
        var logoMobile = document.querySelector('.nav-landing-mobile .logo-landing-mobile');
        var SVGlogoMobile = document.querySelector('.nav-landing-mobile .logo-landing-mobile .nav-logo-mobile');
        var SVGoixxio = document.querySelector('.landing .nav-landing-mobile .oixxio-landing-mobile');
        var closeModalRight = document.querySelector('.landing .closeModal-right');
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var menuHover = document.querySelector('.menuHover');
        var touchButton = document.getElementById($scope.modalMobileOpened);
        var button = touchButton.lastElementChild;

        menuHover.style.zIndex = '15';
        modalDown.style.bottom = '-110%';
        logoMobile.style.opacity = '1';
        if(windowWidth >= 350){
          if(windowWidth >= 400){
            SVGlogoMobile.style.transform = 'translate(20%, 0%)';
          }else {
            if(windowHeight >= 639){
              SVGlogoMobile.style.transform = 'translate(19%, -4%)';
            } else {
              SVGlogoMobile.style.transform = 'translate(27%, -20%)';
            }
          }
        } else{
          if(windowHeight <= 480){
            SVGlogoMobile.style.transform = 'translate(22%, -20%)';
          }else{
            SVGlogoMobile.style.transform = 'translate(15%, -11%)';
          }
        }
        if(windowWidth >= 400 && windowHeight >= 639){
          SVGoixxio.style.bottom = "-7%";
        } else {
          SVGoixxio.style.bottom = "-4%";
        }
        bgModalDown.style.top = '0%';
        bgModalDown.style.backgroundPosition = "0% 0%"; 
        closeModalRight.style.right = '-105%';
        bgModalDown.style.top = '-100%';
        bgModalDown.style.backgroundPosition = "0% 100%";
      }


      function swipeRight(){
        var modal = new Hammer(document.querySelector('.modal-section-down'));
        modal.on('swiperight', function(ev) {
          if ($scope.modalIsOpen && !$scope.menuIsOpen){
            $scope.clientModal = false;
            animateCubeSwipeRight();
            if(!$scope.menuIsOpen){
              // console.log('menu is open: ' + $scope.menuIsOpen);
              $timeout(function (){
              $scope.$apply(function(){
                  if($scope.modalContentId === 0){
                    $scope.modalContentId = 5;
                    contenidoModal($scope.modalContentId);
                  } else {
                    contenidoModal($scope.modalContentId - 1);
                  }
                
                });

              }, 75);
            }
          }                     
        });
      } 

      function openContactModalMobile(id){
        var contactModal = document.querySelector('.landing .contacto');
        var logoMobile = document.querySelector('.nav-landing-mobile .logo-landing-mobile');
        var SVGlogoMobile = document.querySelector('.nav-landing-mobile .logo-landing-mobile .nav-logo-mobile');
        var SVGoixxio = document.querySelector('.landing .nav-landing-mobile .oixxio-landing-mobile');
        var closeModalRight = document.querySelector('.landing .closeModal-right');
        var windowWidth = window.innerWidth;
        var menuHover = document.querySelector('.menuHover');

        contactModal.style.bottom = '-20%';
        $scope.contactModalIsOpen = true;
        $scope.modalOpened = id;

        logoMobile.style.opacity = '0';
        SVGlogoMobile.style.transform = 'translate(25%, 5%)';
        closeModalRight.style.right = '5%';
        menuHover.style.zIndex = '7';
        if(windowWidth >= 400){
          SVGoixxio.style.bottom = "62%";
        }else{
          SVGoixxio.style.bottom = "64%";
        }
        //Click en el CloseBotton
        closeModalRight.addEventListener('click', function(){
          //Ocultar el modalDown
            $scope.contactModalIsOpen = false;
            closeContactModalMobile();
        });
      }
      function closeContactModalMobile(){
        var contactModal = document.querySelector('.landing .contacto');
        var logoMobile = document.querySelector('.nav-landing-mobile .logo-landing-mobile');
        var SVGlogoMobile = document.querySelector('.nav-landing-mobile .logo-landing-mobile .nav-logo-mobile');
        var SVGoixxio = document.querySelector('.landing .nav-landing-mobile .oixxio-landing-mobile');
        var closeModalRight = document.querySelector('.landing .closeModal-right');
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var menuHover = document.querySelector('.menuHover');
        menuHover.style.zIndex = '15';
        contactModal.style.bottom = '-110%';
        logoMobile.style.opacity = '1';
        $scope.contactModalIsOpen = false;
        if(windowWidth >= 350){
          if(windowWidth >= 400){
            SVGlogoMobile.style.transform = 'translate(25%, -7%)';
          }else {
            if(windowHeight >= 639){
              SVGlogoMobile.style.transform = 'translate(24%, -10%)';
            } else {
              SVGlogoMobile.style.transform = 'translate(29%, -17%)';
            }
          }
        } else{
          if(windowHeight <= 480){
            SVGlogoMobile.style.transform = 'translate(22%, -20%)';
          }else{
            SVGlogoMobile.style.transform = 'translate(25%, -16%)';
          }
        }
        if(windowWidth >= 400 && windowHeight >= 639){
          SVGoixxio.style.bottom = "-7%";
        } else {
          SVGoixxio.style.bottom = "-4%";
        }
        closeModalRight.style.right = '-105%';
        
      } 
      
    //burger
      $('document').ready(function () {
        var trigger = $('#hamburger');
        var navMenu = $('#navMenu');
        var bodyclick= $('#mainContent');
        var sideBarBg = document.querySelector('.sideBarBg');
        var menuHover = document.querySelector('.menuHover');

        trigger.click(function () {
          burgerTime();
        });

        sideBarBg.addEventListener('click', function () {
          if ($scope.menuIsOpen == false) {  
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
          } 
        });
        menuHover.addEventListener('click', function () {
          if ($scope.menuIsOpen == false) {  
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
          } else {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
          }
        });

        function burgerTime() {
          if ($scope.menuIsOpen == true) {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
          } else {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
          }
        }
      });

  });
    
})();