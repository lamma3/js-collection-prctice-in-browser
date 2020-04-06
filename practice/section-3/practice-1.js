'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionC = [...collectionA];
  collectionC.forEach(a => {
    objectB.value.forEach(b => {
      if (a.key === b) {
        a.count--;
      }
    });
  });
  return collectionC;
}
