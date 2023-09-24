const productsList = document.getElementById('container');
const button = document.getElementById('click');

function ajax(url) {
   return fetch(url)
    .then(response=>response.json())
    .catch(error=>productsList.innerHTML=`<h2>Something is wrong here!</h2>`)
      
}
    

    function render(data) {
        
   
        const html = data.map(item => `
        <h1>產品名稱：${item.name}</h1>
        <h2>售價：${item.price}</h2>
        <p>產品內容：${item.description}</p>
        `).join('');
        productsList.innerHTML= html;
        
       }



    button.addEventListener('click', function () {
        const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
        ajax(url).then((data) => {
            render(data);
        });
    });
 
    


  