'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionC = [...collectionA];
  collectionC.forEach(itemC => {
    objectB.value.forEach(itemB => {
      if (itemC.key === itemB) {
        itemC.count--;
      }
    });
  });
  return collectionC;
}
