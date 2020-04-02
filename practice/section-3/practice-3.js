'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let countMap = collectionA.reduce((accumulate, value) => {
    if (!accumulate.hasOwnProperty(value)) {
      accumulate[value] = 0;
    }
    accumulate[value]++;
    return accumulate;
  }, {});

  let collectionC = Object.keys(countMap).map(key => {
    return {key: key, count: countMap[key]};
  });

  collectionC.forEach(c => {
    objectB.value.forEach(b => {
      if (c.key === b) {
        c.count = c.count - Math.floor(c.count/3);
      }
    });
  });
  return collectionC;
}
