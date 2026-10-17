'use strict'

const inc=(number) => {
    return ++number.n;
}
const a= {n: 3}
inc(a)
console.log(a)