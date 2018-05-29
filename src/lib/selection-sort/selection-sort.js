function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min_idx]) {
        min_idx = j;
      }
      const temp = array[i];
      array[i] = array[min_idx];
      array[min_idx] = temp;
    }
  }
  while (array !== array.sort((a, b) => a - b)) {
    selectionSort(array);
  }
  return array;
}