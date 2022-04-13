export const arraySort = (array, arrayItemOrderParam) => {
  array = array.slice();
  array.sort((a, b) => a[arrayItemOrderParam] - b[arrayItemOrderParam]);

  return array;
};

export const arrayRemove = (array, index) => {
  array = array.slice();
  array.splice(index, 1);

  return array;
};

export const simpleArrayMove = (array, oldIndex, newIndex) => {
  array = array.slice();
  array.splice(
    newIndex < 0 ? array.length + newIndex : newIndex,
    0,
    array.splice(oldIndex, 1)[0],
  );

  return array;
};

export const arrayMove = ({
  array,
  arrayItemOrderParam,
  oldIndex,
  newIndex,
}) => {
  let targetItemOrder = newIndex;

  if (newIndex === 0) {
    const firstItemOrder = array[0][arrayItemOrderParam];
    targetItemOrder = firstItemOrder / 1.2;
  }

  if (newIndex === array.length - 1) {
    const lastItemOrder = array[array.length - 1][arrayItemOrderParam];
    targetItemOrder = lastItemOrder * 1.2;
  }

  if (newIndex > 0 && newIndex < array.length - 1) {
    const itemBefore = array[newIndex - 1];
    const itemAfter = array[newIndex];

    const itemBeforeOrder = itemBefore[arrayItemOrderParam];
    const itemAfterOrder = itemAfter[arrayItemOrderParam];

    targetItemOrder = (itemBeforeOrder + itemAfterOrder) / 2;
  }

  const newItems = simpleArrayMove(array, oldIndex, newIndex);

  newItems[newIndex][arrayItemOrderParam] = Number(targetItemOrder.toFixed(18));

  return newItems;
};
