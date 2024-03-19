function quicksort(array){
    if (array.length < 2){
        return array
    }

    let pivot = array[array.length - 1];
    let leftArr = [];
    let rightArr = [];

    for (let i = 0; i < array.length - 1; i++){
        if (array[i] < pivot){
            leftArr.push(array[i]);
        } else{
            rightArr.push(array[i]);
        }
    }
    return [...quicksort(leftArr), pivot, ...quicksort(rightArr)];
}
