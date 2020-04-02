'use strict';

function collectSameElements(collectionA, objectB) {
  let result = [];
  collectionA.forEach(a => {
    objectB.value.forEach(b => {
      if (a.key === b) {
        result.push(a.key);
      }
    });
  });
  return result;
}
