/**
 * 
 * @param {number[]} arr 
 */
const partition = (arr, left, right) => {
    const pivot = arr[left]
    while (left < right) {
        while (left < right && arr[right] >= pivot) {
            right--
        }
        arr[left] = arr[right];
        while (left < right && arr[left] <= pivot) {
            left++
        }
        arr[right] = arr[left];
    }
    arr[left] = pivot;
    return left;
}
/**
 * 
 * @param {number[]} arr 
 * @param {number} left 
 * @param {number} right 
 * @returns 
 */
const quick_sort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        const middle = partition(arr, left, right);
        quick_sort(arr, left, middle - 1);
        quick_sort(arr, middle + 1, right);
    }
    return arr
}

module.exports = quick_sort

// console.log(quick_sort([3,1,2,5,6,4]))