// var allButtons = document.querySelectorAll('.landing .navContainer .logo .button');
// var aboutButton = document.querySelector('.landing .navContainer .logo .button');
// var modal = document.querySelector('.modal-section');
// var navs = document.querySelectorAll('.landing .nav');
// var closeModal = document.querySelector('.landing .closeModal');
// var modalOn = false;
// var landing = document.querySelector('.landing');

// //++++++++++++++++++++++++++++Transicion Modal+++++++++++++++++++++
// aboutButton.addEventListener('click', function (){
// 	if(modalOn){
// 		//Esconder Modal
// 		modal.style.left = '150%';
// 		closeModal.style.right = '-90%';
// 		modalOn = false;
// 		landing.style.backgroundPosition = "0%";
// 		for (var i = 0; i < allButtons.length; i++){
// 					allButtons[i].style.opacity = "1";	
// 		};
// 		for (var i = 0; i < navs.length; i++){navs[i].style.transform = "translateX(0%)";};

// 	} else {
// 		//Mostrar Modal
// 		modal.style.left = '50%';
// 		modalOn = true;
// 		closeModal.style.right = '5%';
// 		for (var i = 0; i < allButtons.length; i++){
// 			if(allButtons[i] == allButtons[0]){
// 				allButtons[i].style.opacity = "0";
// 			} else{
// 				allButtons[i].style.opacity = "0";
// 			}
// 		};
// 		for (var i = 0; i < navs.length; i++){navs[i].style.transform = "translateX(-120%)";};
// 		landing.style.backgroundPosition = "100%";

// 		//Click en el CloseBotton
// 		closeModal.addEventListener('click', function(){
// 			modal.style.left = '150%';
// 			this.style.right = '-90%';
// 			modalOn = false;
// 			for (var i = 0; i < allButtons.length; i++){
// 						allButtons[i].style.opacity = "1";	
// 			};

// 			for (var i = 0; i < navs.length; i++){navs[i].style.transform = "translateX(0%)";};
// 			landing.style.backgroundPosition = "0%";
// 		});
// 	}
// });

// //++++++++++++++++++++++++++++++ProductTransition++++++++++++++++++++++++++++++++++++++++++
// var productView = document.querySelector('.product-section');
// for (var i = 0; i < allButtons.length; i++){
// 	console.log(i);
// 	if(i == 5){
// 		allButtons[i].addEventListener('click', function(){
// 			console.log('click');
// 			productView.style.left = '2%';
// 			closeModal.style.right = '-90%';

// 		});
// 	}
// }

