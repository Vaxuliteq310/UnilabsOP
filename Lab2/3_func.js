'use strict'


const average = (a, b) =>
    (a+b)/2

const square = (x) =>
    x*x

const cube = (x) =>
    x**3



const calculate = ()=>{
    const arr=[]
    for (let i=0; i<=9;i++){
        arr[i] = average( square(i), cube(i) )
    }

    return arr
}

console.log(calculate())
