'use strict';

const ipToInt = (ip = '127.0.0.1') => {

  return ip.split('.')
    .map((val)=>{return parseInt(val)})
    .reduce((a,b)=>{
      return (a<<8) + b
    })

};

console.log(ipToInt('123.4.56.789'))