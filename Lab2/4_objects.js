'use strict'

const fn = ()=>{
    const objectconst={name: 'name'}
    let objectvar={name: '123'}

    objectconst.name='not name'
    objectvar.name='abc'

    console.log(objectconst)
    console.log(objectvar)

    //objectconst=objectvar
    //console.log(objectconst)

    objectvar=objectconst
    console.log(objectvar)
}

fn()

////////////////

const createUser=(name, city)=>{
    return {name: name, city: city}
}

console.log(createUser('Marcus Aurelius', 'Roma'))
