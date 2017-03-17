(function () {
    'use strict';
    angular.module('app.oixxio')
  .controller('landingCtrl', function($scope, $timeout) {
    var self = this;

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
        contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nunc mauris, eleifend at ullamcorper eu, malesuada nec turpis. Integer interdum rhoncus turpis, nec commodo ante ornare pulvinar. Nunc scelerisque hendrerit metus, at dapibus felis egestas in. Donec volutpat ut sapien eu vestibulum. Sed in ipsum ullamcorper, molestie odio ut, molestie lorem. Suspendisse dignissim magna nulla, et iaculis mi venenatis vitae. Cras vitae nulla at tortor accumsan tincidunt. Pellentesque metus urna, iaculis ultrices maximus ac, commodo at augue. Vestibulum turpis tellus, ultricies quis molestie nec, commodo sit amet risus. Nulla augue justo, facilisis vitae mauris sit amet, facilisis lacinia nibh. Nam volutpat mi non maximus volutpat. Duis tristique convallis vestibulum.',
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
        contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nunc mauris, eleifend at ullamcorper eu, malesuada nec turpis. Integer interdum rhoncus turpis, nec commodo ante ornare pulvinar. Nunc scelerisque hendrerit metus, at dapibus felis egestas in. Donec volutpat ut sapien eu vestibulum. Sed in ipsum ullamcorper, molestie odio ut, molestie lorem. Suspendisse dignissim magna nulla, et iaculis mi venenatis vitae. Cras vitae nulla at tortor accumsan tincidunt. Pellentesque metus urna, iaculis ultrices maximus ac, commodo at augue. Vestibulum turpis tellus, ultricies quis molestie nec, commodo sit amet risus. Nulla augue justo, facilisis vitae mauris sit amet, facilisis lacinia nibh. Nam volutpat mi non maximus volutpat. Duis tristique convallis vestibulum.',
        hover: '<span class="creamos-hover">CREAMOS</span><span> RECURSOS SOCIALES</span>'
      },
      {
        titulo: '',
        contenido: '<div class="row col-md-6 contacto"><div class="row col-md-12"><a href="http://maps.google.com/?q= Oixxio Technologies"><i class="fa fa-map-marker col-md-1 icono" aria-hidden="true"></i><p class="col-md-11 descripcion">Ricardo Rojas 6739 of. 1 <br> Cordoba-Argentina</p></a></div><div class="row col-md-12"><a href="mailto:info@oixxio.net"><i class="fa fa-envelope col-md-1 icono" aria-hidden="true"></i><p class="col-md-11 descripcion">info@oixxio.net</p></a></div><div class="row col-md-12"><a href="tel:+54-351-639-9189"><i class="fa fa-phone col-md-1 icono" aria-hidden="true"></i><p class="col-md-11 descripcion">0054 351 6399189</p></a></div><div class="row footerMenu"><div class="hashtag col-md-4"><span>#</span></div><div class="socialIcons col-md-8 row"><a href="https://twitter.com/OixxioTech"><i class="fa fa-twitter" aria-hidden="true"></i></a><a href="https://www.facebook.com/oixxiotech/"><i class="fa fa-facebook" aria-hidden="true"></i></a><a href="https://www.youtube.com/channel/UC4RS7eCpU54nOkia7i3Blcw"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></div></div></div>',
      }
    ];


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

    $scope.$watch("modalIsOpen", function() {
        var hammertime = new Hammer(document.body);
        hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

        // console.log('watch-modalIsOpen: ' + $scope.modalIsOpen + ', ' + 'watch-menuIsOpen: ' + $scope.menuIsOpen);
        
          
          hammertime.on('swiperight', function(ev) {
            if(!$scope.menuIsOpen && !$scope.modalIsOpen){
              // console.log('enter');
              $scope.openMenu();
              $scope.menuIsOpen = true; 
            }
            
          });
          hammertime.on('swipeleft', function(ev) {
            if($scope.menuIsOpen){
              $scope.closeMenu();
              $scope.menuIsOpen = false;
            }     
            if($scope.showInstruction){
              var instructions = document.querySelector('.nav-landing-mobile .handswipe');
              instructions.style.display = 'none';
            }     
          });

        hammertime.on('swipedown', function(ev) {
          if($scope.modalIsOpenUp){
            console.log($scope.modalIsOpenUp);
            console.log('adentro');
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
            console.log($scope.modalIsOpenUp);
            console.log('afuera');
            var menuButton = document.querySelector('.landing .menuButton');
            menuButton.style.left = '5%';
              closeModalMobile();
              $scope.modalIsOpen = false;
          }

          
        });
        
        if ($scope.modalIsOpen) {
            swipeLeft();
            swipeRight();
            scrollUp();
         }
     
        if(!$scope.modalIsOpen){
          hammertime.on('swipeup', function(ev) {
            $scope.openModalMobile($scope.modalContentId);
            $scope.modalIsOpen = true; 
            $scope.$apply(function(){
              contenidoModal($scope.modalContentId);
              console.log($scope.modalContentId);
            });
          });
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
          var modalDown = document.querySelector('.modal-section-down');
          var closeModalRight = document.querySelector('.landing .closeModal-right');
          var modalFaces = document.querySelectorAll('.landing .modal-section-down .cube .face');
          var closeModalLeft = document.querySelector('.landing .closeModal-left');
          var modalRight = document.querySelector('.modal-section-right');
          $scope.clientModal = false;
          if(id == "contactButton"){
            //Mostrar Modal
              modalDown.style.bottom = '-40%';
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
              contenidoModal(index);
            //Click en el CloseBotton
            closeModalRight.addEventListener('click', function(){
              //Ocultar el modalDown
              closeModalDown();
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
        
        if($scope.modalIsOpen){
          animateCubeDown();
          $scope.closeMenu();
          $scope.openModalMobile(index);
        } else {
          $scope.closeMenu();
          $scope.openModalMobile(index);
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
        console.log($scope.contenidoObj);
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
      $scope.modalIsOpen = true;
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
      
      // console.log(windowWidth);
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

    // --------------------HammerJs---------------------------------- 

      // var body = document.querySelector('body');
      // var hammertime = new Hammer(document.body);
      // hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
      // //Toggle menu Touch
        // if(!$scope.menuIsOpen){
        // Hammer(body).on('swiperight', function(ev) {
        //   $scope.openMenu();
        //   $scope.menuIsOpen = true;
        //   //Cerrar menu
        //     if($scope.menuIsOpen){
        //       Hammer(body).on('swipeleft', function(ev) {
        //         $scope.closeMenu();
        //         $scope.menuIsOpen = false;
        //       });
        //     }
        // });
        // }
      
      


      
      function swipeLeft(){
        var modal = new Hammer(document.querySelector('.modal-section-down'));
        modal.on('swipeleft', function(ev) {
          $scope.clientModal = false;
          animateCubeDown();
          if(!$scope.menuIsOpen){
            // console.log('menu is open: ' + $scope.menuIsOpen);
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
                            
        });
      }
      function swipeRight(){
        var modal = new Hammer(document.querySelector('.modal-section-down'));
        modal.on('swiperight', function(ev) {
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
                            
        });
      }

      function scrollUp(){
        var modal = new Hammer(document.querySelector('.modal-section-down'));
        modal.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
        modal.on('swipeup', function(ev) {
          var closeModalRight = document.querySelector('.landing .closeModal-right');
          var modalElement = document.querySelector('.modal-section-down');
          var menuButton = document.querySelector('.landing .menuButton');
          if(!$scope.menuIsOpen){
            modalElement.style.bottom = '0%';
            closeModalRight.style.right = '-105%';
            menuButton.style.left = '-10%';
            $scope.modalIsOpenUp = true;

          }
                            
        });
      }  
      
  });
    
})();