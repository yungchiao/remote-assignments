const el = document.querySelector('h1');

console.log(el);
el.addEventListener("click",function(e){
    el.innerHTML = `<h1>Welcome to our cinema!</h1>`
})


$(document).ready(function () {
 $('.menu-icon').click(function (e) { 
   
     $('body').toggleClass('open1');
     
 });
});