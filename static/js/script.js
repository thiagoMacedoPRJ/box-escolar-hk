



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

var clk = document.getElementById('contat');

var like1 = document.getElementById('like');
var like2 = document.getElementById('like2');
var like3 = document.getElementById('like3');


var letras = document.getElementById('amei'); // ou:
var letras2 = document.getElementById('amei2'); // ou:
var letras3 = document.getElementById('amei3'); // ou:



var clicado = false;
var clicado2 = false;
var clicado3 = false;


var vk = document.getElementById('vk');
var vkk = document.getElementById('vkk');




/*
 * Click contato final PAGE.

*/

clk.addEventListener('click', function() 
{
  $(document).scrollTop($(document).height());
});



/*
 * Click like PAGE.

*/




like1.addEventListener('click', function() 
{
  
  if (clicado == false)
  {
    letras.style.color = '#0cb2ea';
    var calc = letras.textContent.replace(/[^0-9]/g,'');
    calc = parseInt(calc)+1
    letras.textContent = calc+" VOCÊ CURTIU!!"
  }
  else{
    console.log("Você já deixou sua curtida!")
    var calc = letras.textContent.replace(/[^0-9]/g,'');
    letras.textContent = calc+" VOCÊ JÁ DEIXOU SUA CURTIDA!!"
  }

});



like2.addEventListener('click', function() 
{
  
  if (clicado2 == false)
  {
    letras2.style.color = '#0cb2ea';
    var calc = letras2.textContent.replace(/[^0-9]/g,'');
    calc = parseInt(calc)+1
    letras2.textContent = calc+" VOCÊ CURTIU!!"
  }
  else{
    console.log("Você já deixou sua curtida!")
    var calc = letras2.textContent.replace(/[^0-9]/g,'');
    letras2.textContent = calc+" VOCÊ JÁ DEIXOU SUA CURTIDA!!"
  }

});




like3.addEventListener('click', function() 
{
  
  if (clicado3 == false)
  {
    letras3.style.color = '#0cb2ea';
    var calc = letras3.textContent.replace(/[^0-9]/g,'');
    calc = parseInt(calc)+1
    letras3.textContent = calc+" VOCÊ CURTIU!!"
  }
  else{
    console.log("Você já deixou sua curtida!")
    var calc = letras3.textContent.replace(/[^0-9]/g,'');
    letras3.textContent = calc+" VOCÊ JÁ DEIXOU SUA CURTIDA!!"
  }

});







/*
 * Click vakinha PAGE.

*/




vk.addEventListener('click', function() 
{
  window.location.href = "donates";
});



vkk.addEventListener('click', function() 
{
  window.location.href = "qrcode";
});


for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});




/*
  * Não atualizar pagina após click 
  * Atualizar gostei ;)
 */


function func(){

  event.preventDefault();
  var newValue = $('#input-field-id').val();
 
  if (clicado == false)
  {
    $.ajax({
        type: 'POST',
        url: '/',
        data: "1",
        datatype: 'JSON',
    });

    console.log("Enviado mané kk");
    clicado = true;
  }

  else{}
  
}



function func2(){

  event.preventDefault();
  var newValue = $('#input-field-id').val();
 
  if (clicado2 == false)
  {
    $.ajax({
        type: 'POST',
        url: '/',
        data: "2",
        datatype: 'JSON',
    });

    console.log("Enviado mané kk");
    clicado2 = true;
  }

  else{}
  
}



function func3(){

  event.preventDefault();
  var newValue = $('#input-field-id').val();
 
  if (clicado3 == false)
  {
    $.ajax({
        type: 'POST',
        url: '/',
        data: "3",
        datatype: 'JSON',
    });

    console.log("Enviado mané kk");
    clicado3 = true;
  }

  else{}
  
}