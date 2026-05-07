1 - tajriba 
function solve(arr) {
                  //  (n) => buni ol va amalni bajar
  const juft = arr.filter((n) => n % 2 === 0).map((n) => n * n);
  return juft;
}

const result = solve([1, 2, 3, 4, 5, 6]);
console.log("result:", result);
