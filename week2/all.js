const el = document.querySelector('h1');

console.log(el);
el.addEventListener("click",function(e){
    el.innerHTML = `<h1>Welcome to our cinema!</h1>`
})

// let data = [
//     {title:"訂票資訊"
// },{title:"場次查詢"
// },{title:"影廳介紹"
// },{title:"會員登入"
// }
// ];

// console.log(data);
// let str =`<li><a href="#"> <img class= "menu-icon" src="./menu-icon.svg" alt=""> </a></li>`;

// data.forEach(function(item,index){
//     let content =`<li>${item.title}</li>`;
    
//     str+=content;
    
    
// })

// const styles = 'width:200px;position:absolute;top:5px;right:0px;display: inline-box;margin: 0 auto;z-index: 5;flex-direction: column;background-color:#fff;align-items: center;height:100vh;flex-direction: column-reverse;transition: 0.4s ease;';


// button.addEventListener("click", function (e) {
  
//         myPage.innerHTML = str;
        
   
// });






let button = document.getElementById('open-button');
const myPage = document.getElementById('showup');


button.addEventListener("click", () => {
    myPage.classList.toggle('menu-close');
    myPage.classList.toggle('menu-open');

});




$(document).ready(function () {
    $('.more-btn').click(function (e) { 
        // e.preventDefault();
        $('.more-movie').slideToggle('.active');
        
    });
});

