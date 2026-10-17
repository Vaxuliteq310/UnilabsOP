'use strict'

const range = (start, end) =>{
    const array=[]
    
    for (let i=start; i<=end ; i++)
        array[i-start]=i
    
    return array;
}

console.log(range(15, 30))

////////////

const rangeOdd = (start, end) =>{
    const array=[]

    for (let i = (start%2)**2==1 ? start : start+1 ; i<=end ; i+=2)
        array.push(i)

    return array
}

console.log(rangeOdd(15,30))
