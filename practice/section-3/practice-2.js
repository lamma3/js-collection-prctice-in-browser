'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionC = [...collectionA];
  collectionC.forEach(itemC => {
    objectB.value.forEach(itemB => {
      if (itemC.key === itemB) {
        itemC.count = itemC.count - Math.floor(itemC.count/3);
      }
    });
  });
  return collectionC;
}
