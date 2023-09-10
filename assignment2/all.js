
let data ={
    n1:2,
    n2:3,
    op:'+'
}


function calculate(data) {
    const { n1, n2, op } = data;
    let result='';
  
    switch (op) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '/':
        if (n2 !== 0) {
          result = n1 / n2;
        } else {
          result = "分母不得為0";
        }
        break;
      default:
        result = "未知的運算符號";
    }
  
    return result
  }
  


  console.log(calculate({n1:2,n2:3,op:'+'}));
 

// function minus(n3,n4){
//     return n1-n2;
    
// }
// const total2 = minus(5,2)
// console.log(total);