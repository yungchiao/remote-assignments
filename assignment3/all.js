function calculate(data) {
    let result = [];
    
    
    for (let i = 0; i < data.products.length; i++) {
        let product = data.products[i];
        let discountedPrice = product.price *  (1-data.discount); 
        result.push({
        
            
            finalPrice: discountedPrice
        });
    }
    data.result = result; 
    return data;
}


let discount = 0.1;
let products = [
    {
        name: "Product 1",
        price: 100
    },
    {
        name: "Product 2",
        price: 700
    },
    {
        name: "Product 3",
        price: 250
    }
];


let data = {
    discount,
    products
};

    

    const calPrice = calculate({
    discount: 0.1,
    products: products
    }

    );
   
    
    let length=calPrice.result.length;
    let totalPrice = 0;
    function add() {
        for (let i = 0; i < length; i++) {
            totalPrice += calPrice.result[i].finalPrice;
        }
    }
    add();
    console.log(totalPrice);
    


    // console.log(discountedPrice) 



