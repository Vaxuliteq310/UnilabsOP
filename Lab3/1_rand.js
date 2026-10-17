'use strict';

const random = (min, max) => {
  if (max===undefined){
    max=min
    min=0
  }
  return min+ Math.random() * (max-min)
  console.log(min, max)
  
};

console.log(random(10,11))
console.log(random(10))

