'use strict'

const array=[true, 'hello', 5, 0.1+0.2, -200, false?true:false, 1/0, 1/0*0, Object+Number, Object=Number, {}, {}[[]]]

const Hash={ number: 0, string: 0, boolean: 0 }

for (const obj of array){
    typeof Hash[typeof obj] == 'number' ? Hash[typeof obj]++ : Hash[typeof obj]=1;
}

console.log(Hash)

