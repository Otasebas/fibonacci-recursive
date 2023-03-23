function fibonacci(n) {
  
  if (n < 2){
    return n
  }

  const fibonacci = [0,1]

  
  for(let i = 0; i < n-1; i++){
    fibonacci.push(fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2])
  }

  return fibonacci[n]
   
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
