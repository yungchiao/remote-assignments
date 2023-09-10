function calculate(data) {
    let result = [];
    let discountPrice = data.discount * data.products[0].price; 
    for (let i = 0; i < data.products.length; i++) {
        let product = data.products[i];
        let discountedPrice = product.price *  data.discount; 
        result.push({
            name: product.name,
            
            discountedPrice: discountedPrice
        });
    }
    data.result = result; 
    return data;
}

let discount = 0.1;
let products = [{
    name: "Product 1",
    price: 100
}];

let data = {
    discount,
    products
};
    

    const discountedPrice = calculate({
    discount: 0.1,
    products: [
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
    ]
    });
    console.log(discountedPrice) // show the total price of all products after applying a discount



