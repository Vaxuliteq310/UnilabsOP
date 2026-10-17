'use strict';

const generateKey = (length, characters) => {
  let key = '';
  for (let i=0; i < length; i++) {
      key += characters[Math.floor(Math.random() * characters.length)];
  }
  return key;
};

const characters = 'йцукенгшщзхїфівапролджєячсмитьбюґ0123456789';
console.log(generateKey(10,characters))