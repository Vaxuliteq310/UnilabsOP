'use strict'

const collection = []
collection.push({ name: 'Marcus Aurelius', phone: '+380445554433' })
collection.push({ name: 'Yaroslav Mudriy', phone: '+380133706796' })
collection.push({ name: 'Albert and Einstein', phone: '+11002299338844' })
collection.push({ name: 'kriper004', phone: '-79167691211' })
collection.push({ name: 'Viches', phone: '380123456789' })

const findPhoneByName=(name)=>{
    for (const obj of collection){
        if (obj.name===name)
            return obj.phone
    }
}
console.log(findPhoneByName('Yaroslav Mudriy'))


//////////////////////

const dovidnyk={
    'Marcus Aurelius': '+380445554433',
    'Yaroslav Mudriy': '+380133706796',
    'Albert and Einstein': '+11002299338844',
    'kriper004': '-79167691211',
    'Viches': '380123456789',
}

const findPhoneByName_=(name)=>{
    return dovidnyk[name]
}
console.log(findPhoneByName_('Marcus Aurelius'))
