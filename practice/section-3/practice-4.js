'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let countMap = collectionA.reduce((accumulate, value) => {
    let splitted = value.split('-');
    if (!accumulate.hasOwnProperty(splitted[0])) {
      accumulate[splitted[0]] = 0;
    }
    if (typeof splitted[1] != 'undefined') {
      accumulate[splitted[0]] += splitted[1];
    } else {
      accumulate[splitted[0]]++;
    }
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
