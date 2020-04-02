'use strict';

function collectSameElements(collectionA, objectB) {
  let result = [];
  collectionA.forEach(a => {
    objectB.value.forEach(b => {
      if (a === b) {
        result.push(a);
      }
    });
  });
  return result;
}
