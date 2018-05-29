function bubbleSort (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      const temp = array[i + 1];
      array[i + 1] = array[i];
      array[i] = temp;
    }
  }
  while (array !== array.sort((a,b) => a - b)) {
    bubbleSort(array);
  }
return array;
}