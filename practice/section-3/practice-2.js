'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionC = [...collectionA];
  collectionC.forEach(a => {
    objectB.value.forEach(b => {
      if (a.key === b) {
        a.count = a.count - Math.floor(a.count/3);
      }
    });
  });
  return collectionC;
}
