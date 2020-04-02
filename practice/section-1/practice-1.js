'use strict';

function collectSameElements(collectionA, collectionB) {
  let result = [];
  collectionA.forEach(a => {
    collectionB.forEach(b => {
      if (a === b) {
        result.push(a);
      }
    });
  });
  return result;
}
