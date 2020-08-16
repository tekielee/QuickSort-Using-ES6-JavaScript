function quickSort(array, p, r) {
	if(p < r) {
		let q = partition(array, p, r);
		quickSort(array, p, q);
		quickSort(array, q + 1, r);
	}
	return array;
}

function partition(array, p, r) {
	let pivot = array[p];
	let i = p - 1;
	let j = r + 1;
	while(true) {
		do {
			i++;
		} while(array[i] > pivot && array[j] != pivot);
		do {
			j--;
		} while(array[j] > pivot && array[j] != pivot);
		if(i < j) {
			let tmp = array[i];
			array[i] = array[j];
			array[j] = tmp;
		} else {
			return j;
		}
	}
}

let array = [20, 45, 93, 67, 10, 97, 52, 88, 33, 92];
let sortedArray = quickSort(array, 0, array.length - 1);
console.log(sortedArray);