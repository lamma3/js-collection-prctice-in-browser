'use strict';

function createUpdatedCollection(collectionA, objectB) {
  collectionA.forEach(a => {
    objectB.value.forEach(b => {
      if (a.key === b) {
        a.count--;
      }
    });
  });
  return collectionA;
}
