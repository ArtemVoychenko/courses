const dowbleElem = array => array.flatMap(el => [el,el]);

console.log(dowbleElem([1, 2, 3]));