'use strict';

const iface={
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}
const methods = (iface) => {
  const array=[]
  for (const key in iface){
    if (typeof iface[key]=='function'){
      array.push([iface[key].name, iface[key].length])
    }
  }
  
  return array
};



console.log(methods(iface))

