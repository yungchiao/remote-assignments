function calculate(data) {
    const { discount, products } = data;
    
    
    let totalPrice = 0;
    let length = data.products.length;
    
    for (let i=0;i<length;i++) {
      const product = data.products[i]
      const discountedPrice = data.products[i].price * (1 - discount);
      
     
      totalPrice += discountedPrice;
    }
    
    return totalPrice;
  }
  
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
  
  console.log(discountedPrice);
    


    // console.log(discountedPrice) 



