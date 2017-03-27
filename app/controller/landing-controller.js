(function () {
    'use strict';
    angular.module('app.oixxio')
  .controller('landingCtrl', function($scope, $timeout, $sce) {
    var self = this;
$scope.indexAux = 3;
    $scope.modalContentObj = [
      {
        titulo: 'Nosotros',
        contenido: '<p>No somos otra agencia digital. Somos apasionados de las tecnologias y de <b>crear</b> posibilidades ilimitadas con elas. </p><p class="importante">" Resolver problemas y optimizar integrando hardware y software es nuestra hablidad más importante. "</p><p> Conformamos un equipo de trabajo multidisciplinario y participamos de alianzas productivas con los principales centros de estudios para logar asi una respuesta de alta calidad. </p><p> Nos gusta soñar y llevarlos a cabo.</p><span class="creamos">Creamos</span><div class="nosotros-img"><img src="assets/img/nosotros/tech-cluster.png" class="derecha"><img src="assets/img/nosotros/exportadores.png" class="izquierda"></div>',
        hover: '<span class="creamos-hover">CREAMOS</span> <span> INVESTIGAMOS NOS INVOLUCRAMOS</span>'
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
        hover: '<span class="creamos-hover">CREAMOS</span> <span>SOLUCIONES A GRAN ESCALA</span>'
      },
      {
        titulo: 'Desarrollo',
        contenido: '<p>Asesoramos en el uso de las tecnologías de la información, implantamos, instalamos y administramos diferentes soluciones tecnológicas.Asistimos a las empresas sobre cómo optimizar las plataformas tecnológicas y el uso que se hace de ellas, alineándolas con los objetivos estratégicos de negocio de las organizaciones. Sugerimos una visión de consultoría tecnológica y de modelo de negocio más efectivo, colaborando y apoyando a nuestros clientes en la búsqueda de la mejor solución en materia tecnológica a sus objetivos de negocio. Somos un grupo multidisciplinario de especialista y consultores, hacemos foco en una calidad de servicio orientados a conseguir los objetivos que nos propongamos mediante TIC en conjunto con el cliente.</p>',
        hover: '<span class="creamos-hover">CREAMOS</span> <span>EXPERIENCIAS DIGITALES A LA MEDIDA</span>'
      },
      {
        titulo: 'Impulsores<span class="de-ideas"> de Ideas</span>',
        contenido: '<p>Sabemos que grandes e innovadoras ideas a veces se deshacen en el aire por falta de la determinación necesaria para materializarlas.</p><p>Las ideas por si solas no llegarán a buen puerto sin la sinergía y los recursos necesarios para llevarlas adelante.</p><p>Desde nuestro lugar, brindamos la asitencia necesaria para concretar los proyectos ideados, tanto en el registro y patente, como en la interacción con especialistas.</p><p class="importante">" Nuestro interés principal está en generar redes y conocimiento. "</p><p>Es por eso que buscamos personas que desafíen a su destino, que tengas ideas innovadoras y revolucionarias, que cambien el mundo.</p><p>Juntos <strong>crearemos</strong> un equipo para materializarlas.</p>',
        hover: '<span class="creamos-hover">CREAMOS</span> <span>LO QUE IMAGINAS</span>'
      },
      {
        titulo: 'Saas',
        contenido: '<p><strong>Creamos</strong> un servicio de desarrollo de software. Con mas de 10 años de experiencia en el mercado, entendemos que una solución a la medida requiere de un conocimiento profundo de la actividad de nuestros clientes, es por ello que planteamos en nuestro servicio una relación estrecha hasta convertimos en un aliado tecnológico de la empresa.</p><p class="importante">" El SAAS o software como servicio ademas brinda la ventaja del desembolso parcial del capital destinado a estas tecnologías, ya que se prorratea el valor total del desarrollo en el tiempo que dure el contrato de servicio. "</p><p> Ademas, una vez implementado el sistema nuestro clientes cuentan con desarrolladores dedicados para resolver cualquier cambio o inconveniente que se les presente en el día a día.</p>',
        hover: '<span class="creamos-hover">CREAMOS</span> <span>UN SERVICIO DE DESARROLLO</span>'
      },
      {
        titulo: 'Productos',
        contenido: '<div class="productos row"><ul class="col-xs-12"><li class="col-xs-6"><img src="assets/img/productos/product-0.jpg"><a class="overlay"><h2>TSM</h2></a></li><li class="col-xs-6"><img src="assets/img/productos/product-1.jpg"><a class="overlay"><h2>GPS Economias</h2></a></li><li class="col-xs-6"><img src="assets/img/productos/product-2.jpg"><a class="overlay"><h2>Simuladores de Capacitación</h2></a></li><li class="col-xs-6"><img src="assets/img/productos/product-3.jpg"><a class="overlay"><h2>SIAT</h2></a></li><li class="col-xs-6"><img src="assets/img/productos/product-0.jpg"><a class="overlay"><h2>Titulo</h2></a></li><li class="col-xs-6"><img src="assets/img/productos/product-5.jpg"><a class="overlay"><h2>Advergames</h2></a></li><li class="col-xs-6"><img src="assets/img/productos/product-0.jpg"><a class="overlay"><h2>Titulo</h2></a></li><li class="col-xs-6"><img src="assets/img/productos/product-0.jpg"><a class="overlay"><h2>Titulo</h2></a></li></ul></div>',
        hover: '<span class="creamos-hover">CREAMOS</span> <span> RECURSOS SOCIALES</span>'
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
        contenido: '<h1>TSM</h1><div style="width:100%"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/TvJRFNKYLMM" frameborder="0" allowfullscreen></iframe></div><p>"The Store Manager" es una plataforma de e-learning (LMS y LCMS) con el foco puesto en los sectores de retail, industria y gestión.Esta aplicación no solo permite la capacitación de sus usuarios, sino tambien el seguimiento y evolución de los mismos.En un entorno virtual, TSM permite la educación continua, el desarrollo profesional y la simulación de eventos específicos .La plataforma consta de tres fases adaptables a la necesidad especifica de nuestros clientes: inducción, evaluación y métricas de desempeño</p>'
      },
      {
        titulo: 'GIS - Gps de las economías regionales',
        parrafo: 'Sistema de información georefenciada que permite la organización, almacenamiento y análisis de grandes cantidades de datos,vinculados a una referencia espacial. Facilita la incorporación de aspectos sociales-culturales, económicos y ambientales que conducen a la toma de decisiones de una manera más eficaz.',
        imagen: 'assets/img/productos/product-1.jpg',
        contenido: '<h1>TSM1</h1><p>"The Store Manager" es una plataforma de e-learning (LMS y LCMS) con el foco puesto en los sectores de retail, industria y gestión.Esta aplicación no solo permite la capacitación de sus usuarios, sino tambien el seguimiento y evolución de los mismos.En un entorno virtual, TSM permite la educación continua, el desarrollo profesional y la simulación de eventos específicos .La plataforma consta de tres fases adaptables a la necesidad especifica de nuestros clientes: inducción, evaluación y métricas de desempeño</p>',
      },
      {
        titulo: 'Simuladores de Capacitación',
        parrafo: 'Simulador inmerso en entorno virtual 3D para capacitación en seguridad e higiene.El cual consta de plataforma donde usuario se enfrenta a diferentes simulaciones de eventos, debiendo resolverlos de forma practica en el entorno virtual.',
        imagen: 'assets/img/productos/product-2.jpg',
        contenido: '<h1>TSM2</h1><p>"The Store Manager" es una plataforma de e-learning (LMS y LCMS) con el foco puesto en los sectores de retail, industria y gestión.Esta aplicación no solo permite la capacitación de sus usuarios, sino tambien el seguimiento y evolución de los mismos.En un entorno virtual, TSM permite la educación continua, el desarrollo profesional y la simulación de eventos específicos .La plataforma consta de tres fases adaptables a la necesidad especifica de nuestros clientes: inducción, evaluación y métricas de desempeño</p>'
      },
      {
        titulo: 'SIAT - Sistema Integral de Adherencia Terapéutica',
        parrafo: 'Siat es un ecosistema de tecnologías vinculadas con el objetivo de mejorar el grado de adherencia terapéutica de los pacientes con patologías crónicas.Mediante aplicaciones móviles, webs y call center se proporciona el acompañamiento a los pacientes en sus tratamientos y se facilita la documentación de reintegro y trazabilidad de los medicamentos.Ademas el sistema posibilita una mayor interacción medico - paciente en tiempo real, sin la necesidad de esperar a la próxima visita en el consultorio.',
        video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/NiPMMHzdEUg" frameborder="0" allowfullscreen></iframe>',
        contenido: '<h1>TSM3</h1><p>"The Store Manager" es una plataforma de e-learning (LMS y LCMS) con el foco puesto en los sectores de retail, industria y gestión.Esta aplicación no solo permite la capacitación de sus usuarios, sino tambien el seguimiento y evolución de los mismos.En un entorno virtual, TSM permite la educación continua, el desarrollo profesional y la simulación de eventos específicos .La plataforma consta de tres fases adaptables a la necesidad especifica de nuestros clientes: inducción, evaluación y métricas de desempeño</p>'
      },
      {
        titulo: 'TSM1',
        parrafo: '"The Store Manager" es una plataforma de e-learning (LMS y LCMS) con el foco puesto en los sectores de retail, industria y gestión.Esta aplicación no solo permite la capacitación de sus usuarios, sino tambien el seguimiento y evolución de los mismos.En un entorno virtual, TSM permite la educación continua, el desarrollo profesional y la simulación de eventos específicos .La plataforma consta de tres fases adaptables a la necesidad especifica de nuestros clientes: inducción, evaluación y métricas de desempeño.',
        video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/TvJRFNKYLMM" frameborder="0" allowfullscreen></iframe>',
        contenido: '<h1>TSM4</h1><p>"The Store Manager" es una plataforma de e-learning (LMS y LCMS) con el foco puesto en los sectores de retail, industria y gestión.Esta aplicación no solo permite la capacitación de sus usuarios, sino tambien el seguimiento y evolución de los mismos.En un entorno virtual, TSM permite la educación continua, el desarrollo profesional y la simulación de eventos específicos .La plataforma consta de tres fases adaptables a la necesidad especifica de nuestros clientes: inducción, evaluación y métricas de desempeño</p>'
      },
      {
        titulo: 'GIS - Gps de las economías regionales2',
        parrafo: 'Sistema de información georefenciada que permite la organización, almacenamiento y análisis de grandes cantidades de datos,vinculados a una referencia espacial. Facilita la incorporación de aspectos sociales-culturales, económicos y ambientales que conducen a la toma de decisiones de una manera más eficaz.',
        imagen: 'assets/img/productos/product-1.jpg',
        contenido: '<h1>TSM5</h1><p>"The Store Manager" es una plataforma de e-learning (LMS y LCMS) con el foco puesto en los sectores de retail, industria y gestión.Esta aplicación no solo permite la capacitación de sus usuarios, sino tambien el seguimiento y evolución de los mismos.En un entorno virtual, TSM permite la educación continua, el desarrollo profesional y la simulación de eventos específicos .La plataforma consta de tres fases adaptables a la necesidad especifica de nuestros clientes: inducción, evaluación y métricas de desempeño</p>'
      },
      {
        titulo: 'Simuladores de Capacitación3',
        parrafo: 'Simulador inmerso en entorno virtual 3D para capacitación en seguridad e higiene.El cual consta de plataforma donde usuario se enfrenta a diferentes simulaciones de eventos, debiendo resolverlos de forma practica en el entorno virtual.',
        imagen: 'assets/img/productos/product-2.jpg',
        contenido: '<h1>TSM6</h1><p>"The Store Manager" es una plataforma de e-learning (LMS y LCMS) con el foco puesto en los sectores de retail, industria y gestión.Esta aplicación no solo permite la capacitación de sus usuarios, sino tambien el seguimiento y evolución de los mismos.En un entorno virtual, TSM permite la educación continua, el desarrollo profesional y la simulación de eventos específicos .La plataforma consta de tres fases adaptables a la necesidad especifica de nuestros clientes: inducción, evaluación y métricas de desempeño</p>'
      },
      {
        titulo: 'SIAT - Sistema Integral de Adherencia Terapéutica4',
        parrafo: 'Siat es un ecosistema de tecnologías vinculadas con el objetivo de mejorar el grado de adherencia terapéutica de los pacientes con patologías crónicas.Mediante aplicaciones móviles, webs y call center se proporciona el acompañamiento a los pacientes en sus tratamientos y se facilita la documentación de reintegro y trazabilidad de los medicamentos.Ademas el sistema posibilita una mayor interacción medico - paciente en tiempo real, sin la necesidad de esperar a la próxima visita en el consultorio.',
        video: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/NiPMMHzdEUg" frameborder="0" allowfullscreen></iframe>',
        contenido: '<h1>TSM7</h1><p>"The Store Manager" es una plataforma de e-learning (LMS y LCMS) con el foco puesto en los sectores de retail, industria y gestión.Esta aplicación no solo permite la capacitación de sus usuarios, sino tambien el seguimiento y evolución de los mismos.En un entorno virtual, TSM permite la educación continua, el desarrollo profesional y la simulación de eventos específicos .La plataforma consta de tres fases adaptables a la necesidad especifica de nuestros clientes: inducción, evaluación y métricas de desempeño</p>'
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

    $scope.animarProductCubeLeft = function () {
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
      
      if($scope.limit){
        console.log('adentrolimiteAdelante');
        $scope.numero = 0;
        $scope.limit = false;
      } else {
        $scope.numero++;
      }
      console.log($scope.numero);
      $scope.contenidoProducto();

    }

    $scope.animarProductCubeRight = function () {
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
      if($scope.limit){
        console.log('adentrolimiteAtras');
        $scope.numero = 7;
        $scope.limit = false;
      } else {
        $scope.numero--;
      }
      console.log($scope.numero);
      $scope.contenidoProducto();
      for(var i = 0; i < faces.length; i++){
        if((faces[i].position/180)%2 == 0){
          $scope.currentFace = faces[i].face;
           console.log('Current Face: ' + $scope.currentFace);
        }

      }
 
    }

    
     $scope.contenidoProducto =  function(index){
        $scope.productIndex = index;
        var cuboProductos = document.querySelector('#productosModal');
         if($scope.currentFace == 'front'){
            var frontFace = cuboProductos.querySelector('#front');
            var previous = frontFace.previousElementSibling;
            var next = frontFace.nextElementSibling;
            frontFace.querySelector('.container').innerHTML = $scope.productos[$scope.numero].contenido;
            if($scope.numero == 7){
              next.querySelector('.container').innerHTML = $scope.productos[0].contenido;
              $scope.limit = true;
            } else {
              next.querySelector('.container').innerHTML = $scope.productos[$scope.numero + 1].contenido;
            }
            

            if($scope.numero == 0){
              previous.querySelector('.container').innerHTML = $scope.productos[$scope.productos.length - 1].contenido;
              $scope.limit = true;
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
              $scope.limit = true;
            } else {
              next.querySelector('.container').innerHTML = $scope.productos[$scope.numero + 1].contenido;
            }
            
            previous.querySelector('.container').innerHTML = $scope.productos[$scope.numero - 1].contenido;   
            if($scope.numero == 0){
              previous.querySelector('.container').innerHTML = $scope.productos[$scope.productos.length - 1].contenido;
              $scope.limit = true;
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
              $scope.limit = true;
            } else {
              next.querySelector('.container').innerHTML = $scope.productos[$scope.numero + 1].contenido;
            }   
            if($scope.numero == 0){
              previous.querySelector('.container').innerHTML = $scope.productos[$scope.productos.length - 1].contenido;
              $scope.limit = true;
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
              $scope.limit = true;
            } else {
              next.querySelector('.container').innerHTML = $scope.productos[$scope.numero + 1].contenido;
            }    
            if($scope.numero == 0){
              previous.querySelector('.container').innerHTML = $scope.productos[$scope.productos.length - 1].contenido;
              $scope.limit = true;
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

            if(windowWidth < 650){
              if(!$scope.menuIsOpen && !$scope.modalIsOpen){
                // console.log('enter');
                $scope.openMenu();
                $scope.menuIsOpen = true; 
              }
              if($scope.showInstruction){
                var instructions = document.querySelector('.nav-landing-mobile .handswipe');
                instructions.style.display = 'none';
                $scope.showInstruction = false;
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
            if (windowWidth < 650){
              if($scope.menuIsOpen){
                $scope.closeMenu();
                $scope.menuIsOpen = false;
              }     
              if($scope.showInstruction){
                var instructions = document.querySelector('.nav-landing-mobile .handswipe');
                instructions.style.display = 'none';
                $scope.showInstruction = false;
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
          if(windowWidth < 650){
            if(!$scope.contactModalIsOpen){
              if($scope.modalIsOpenUp){
                var closeModalRight = document.querySelector('.landing .closeModal-right');
                var modalElement = document.querySelector('.modal-section-down');
                var menuButton = document.querySelector('.landing .menuButton');
                if(!$scope.menuIsOpen){
                  modalElement.style.bottom = '-20%';
                  closeModalRight.style.right = '5%';
                  menuButton.style.left = '5%';
                  $timeout(function () {$scope.modalIsOpenUp = false}, 1000);
                }
     
              } else{
                var menuButton = document.querySelector('.landing .menuButton');
                menuButton.style.left = '5%';
                closeModalMobile();
                $scope.modalIsOpen = false;
              }
            } else{
                if($scope.modalContactIsOpenUp){
                  var contactModal = document.querySelector('.landing .contacto');
                  var closeModalRight = document.querySelector('.landing .closeModal-right');
                  var menuButton = document.querySelector('.landing .menuButton');
                  if(!$scope.menuIsOpen){
                    contactModal.style.bottom = '-20%';
                    closeModalRight.style.right = '5%';
                    menuButton.style.left = '5%';
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
          if(windowWidth < 650){
            //Show Modal Swipping Up ---------------------------------------------------------
              if(!$scope.modalIsOpen && !$scope.contactModalIsOpen){
                $scope.openModalMobile($scope.modalContentId);
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

      $scope.textOnHover = function (index) {
        var landingBanner = document.querySelector('.banner h1');
        landingBanner.style.paddingTop = "2em";

        var navText = document.querySelector('.nav-' + index);
        navText.style.transform = 'scale(1.2)';
        // console.log(navText);
        $scope.onHover = true;

        $timeout(function() {
          if($scope.onHover){
            var landingBanner = document.querySelector('.banner h1');
            contenidoHover(index);
            landingBanner.style.paddingTop = "0em";;
          } 
        }, 200);
      };

      $scope.textNotOnHover = function (index) {
        var landingBanner = document.querySelector('.banner h1');
        landingBanner.style.paddingTop = "2em";
        var navText = document.querySelector('.nav-' + index);
        navText.style.transform = 'scale(1)';
        $scope.onHover = false;

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
          var navs = document.querySelectorAll('.landing .nav');
          var allButtons = document.querySelectorAll('.logo .button');
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
              navContainer.style.top = '37.5%';
              closeModalRight.style.color = '#fff'; 

            //Cambiar color fondo modal a verde
              for (var i = 0; i < modalFaces.length; i++){
                  modalFaces[i].style.background = 'url("assets/img/contacto/bg-contacto-01.jpg") center center no-repeat';
                  modalFaces[i].style.backgroundSize = 'cover';
                  modalFaces[i].style.borderTop = "solid 1em white";
              }

            //Opacidad 0 el resto de los botones
              for (var i = 0; i < allButtons.length; i++){
                allButtons[i].style.opacity = "0";
                allButtons[i].style.pointerEvents = "none";
              }
            //Trasladar todos los botones del navegador hacia la izquierda
              for (var i = 0; i < navs.length; i++){navs[i].style.transform = "translateY(400%)";navs[i].style.opacity = "0";};
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
                  navContainer.style.top = '37.5%';
                  closeModalRight.style.color = '#fff';
                  bgModalDown.style.top = '0%';
                  bgModalDown.style.backgroundPosition = "0% 0%"; 
                //Opacidad 0 el resto de los botones
                  for (var i = 0; i < allButtons.length; i++){
                    allButtons[i].style.opacity = "0";
                    allButtons[i].style.pointerEvents = "none";
                  }
                //Trasladar todos los botones del navegador hacia la izquierda
                  for (var i = 0; i < navs.length; i++){navs[i].style.transform = "translateY(400%)";navs[i].style.opacity = "0";};
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
                for (var i = 0; i < allButtons.length; i++){
                  allButtons[i].style.opacity = "0";
                  allButtons[i].style.pointerEvents = "none";
                }
              //Trasladar todos los botones del navegador hacia la izquierda
                for (var i = 0; i < navs.length; i++){navs[i].style.transform = "translateX(10%)";navs[i].style.opacity = "0";};
              //Mover el fondo
                bgModalRight.style.backgroundPosition = '-100%';

              $scope.modalIsOpen = true;
              $scope.modalOpened = id;
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
                    allButtons[i].style.pointerEvents = "auto";  
                  };

                  for (var i = 0; i < navs.length; i++){navs[i].style.transform = "translateX(0%)";navs[i].style.opacity = "1";};

                  $scope.modalIsOpen = false;
                
                });
              } //End else
              //Cambiar contenido de Modal
                contenidoModal(index);
          }

      

      
      }// End openModal()   

    // --------------------Menu Hover--------------------------------------- 
      $scope.openMenu = function (){
        var menuHover = document.querySelector('.menuHover');
        var menuButton = document.querySelector('.menuButton');
        var menu = document.querySelector('.sideBar');
        var sideBarBg = document.querySelector('.sideBarBg');
        var windowWidth = window.innerWidth;
        // console.log('modal abierto: ' + $scope.modalIsOpen);
        if(windowWidth >= 600){
          menuButton.style.left = '36%';
        }else{
          menuButton.style.left = '58%';
        }
        menu.style.left = '0%';
        sideBarBg.style.right = '0';
        $scope.menuIsOpen = true;
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

        if ($scope.menuIsOpen){
          menu.style.left = '-80%';
          menuButton.style.left = '-1%';
          sideBarBg.style.right = '-101%';
          menuButton.style.color = 'rgba(255,255,255,.4)';
          $scope.menuIsOpen = false;

          if(windowWidth >= 600){
            menuButton.style.left = '-1%';
          }else{
            menuButton.style.left = '-3%';
          }
        }
      }


    $scope.goTo = function (id, index){

    
      var elemGoTo = document.getElementById(id);
      var elemOpened = document.getElementById($scope.modalOpened);
      var modalFaces = document.querySelectorAll('.landing .modal-section-down .cube .face');
      var windowWidth = window.innerWidth;
      $scope.clientModal = false;

      if(windowWidth >= 600){
        if($scope.menuIsOpen && !$scope.modalIsOpen){
            $scope.closeMenu();
            $scope.openModal(id, index);
        } else {
          if(elemGoTo.className.animVal == elemOpened.className.animVal){
            if(elemOpened.className.animVal == "button upper"){
              animateCubeDown();
              $timeout(function (){contenidoModal(index)}, 150);
            } else {
              animateCubeRight();
              $timeout(function (){contenidoModal(index)}, 400);
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
              $scope.openModalMobile(index);
            } else {
              $scope.closeMenu();
              $scope.openModalMobile(index);
            }
          } else {
            //Si el contact modal esta abierto cerrar el contact modal y abir el cubo
            var contactModal = document.querySelector('.landing .contacto');
            closeContactModalMobile();
            $scope.closeMenu();
            $timeout(function (){
              $scope.openModalMobile(index);
            }, 600);
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
        var navs = document.querySelectorAll('.landing .nav');
        var allButtons = document.querySelectorAll('.logo .button');
        var modalDown = document.querySelector('.modal-section-down');
        var closeModalRight = document.querySelector('.landing .closeModal-right');
        var bgModalDown = document.querySelector('.bg-modal-down');
        //Ocultar el modalDown
            navContainer.style.top = '47.5%';
            modalDown.style.bottom = '-100%';
            closeModalRight.style.right = '-90%';
            bgModalDown.style.top = '-100%';
            bgModalDown.style.backgroundPosition = "0% 100%"; 

            for (var i = 0; i < allButtons.length; i++){
              allButtons[i].style.opacity = "1";
              allButtons[i].style.pointerEvents = "auto"; 
            };

            for (var i = 0; i < navs.length; i++){navs[i].style.transform = "translateY(0%)";navs[i].style.opacity = "1";};

            $scope.modalIsOpen = false;
      }
      function closeModalRight(){
        var landing = document.querySelector('.landing');
        var navContainer = document.querySelector('.landing .navContainer');
        var navs = document.querySelectorAll('.landing .nav');
        var allButtons = document.querySelectorAll('.logo .button');
        var modalRight = document.querySelector('.modal-section-right');
        var closeModalRight = document.querySelector('.landing .closeModal-right');
        var bgModalRight = document.querySelector('.bg-modal-right');
        //Ocultar el modalDown
            navContainer.style.left = '50%';
            modalRight.style.right = '-105%';
            closeModalRight.style.right = '-90%';
            bgModalRight.style.left = '-100%';
            bgModalRight.style.backgroundPosition = '0%';

            for (var i = 0; i < allButtons.length; i++){
              allButtons[i].style.opacity = "1";
              allButtons[i].style.pointerEvents = "auto";  
            };

            for (var i = 0; i < navs.length; i++){navs[i].style.transform = "translateX(0%)";navs[i].style.opacity = "1";};

            $scope.modalIsOpen = false;
      }
      function closeContactModal() {
        var landing = document.querySelector('.landing');
        var navContainer = document.querySelector('.landing .navContainer');
        var navs = document.querySelectorAll('.landing .nav');
        var allButtons = document.querySelectorAll('.logo .button');
        var contactModal = document.querySelector('.landing .contacto');
        var closeModalRight = document.querySelector('.landing .closeModal-right');
        var bgModalDown = document.querySelector('.bg-modal-down');
        //Ocultar el modalDown
            navContainer.style.top = '47.5%';
            contactModal.style.bottom = '-110%';
            closeModalRight.style.right = '-90%';

            for (var i = 0; i < allButtons.length; i++){
              allButtons[i].style.opacity = "1";
              allButtons[i].style.pointerEvents = "auto"; 
            };

            for (var i = 0; i < navs.length; i++){navs[i].style.transform = "translateY(0%)";navs[i].style.opacity = "1";};

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
            navContainer.style.top = '37.5%';
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
      $scope.openModalMobile = function (index) {
        var modalDown = document.querySelector('.modal-section-down');
        var bgModalDown = document.querySelector('.bg-modal-down');
        var logoMobile = document.querySelector('.nav-landing-mobile .logo-landing-mobile');
        var SVGlogoMobile = document.querySelector('.nav-landing-mobile .logo-landing-mobile .nav-logo-mobile');
        var SVGoixxio = document.querySelector('.landing .nav-landing-mobile .oixxio-landing-mobile');
        var closeModalRight = document.querySelector('.landing .closeModal-right');
        var windowWidth = window.innerWidth;
        var menuHover = document.querySelector('.menuHover');
        var instructions = document.querySelector('.nav-landing-mobile .handswipe');
        // console.log(instructions);
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
        
        menuHover.style.zIndex = '15';
        modalDown.style.bottom = '-110%';
        logoMobile.style.opacity = '1';
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
            SVGlogoMobile.style.transform = 'translate(28%, -20%)';
          }else{
            SVGlogoMobile.style.transform = 'translate(25%, -16%)';
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
            SVGlogoMobile.style.transform = 'translate(28%, -20%)';
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
      
  });
    
})();