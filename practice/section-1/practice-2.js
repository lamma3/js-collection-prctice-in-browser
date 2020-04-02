'use strict';

function collectSameElements(collectionA, collectionB) {
  let result = [];
  collectionA.forEach(a => {
    collectionB.forEach(subCollection => {
      subCollection.forEach(subCollectionValue => {
        if (a === subCollectionValue) {
          result.push(a);
        }
      })
    });
  });
  return result;}
