/**
 * 
 * @param {number[]} arr 
 */
const partition = (arr) => {
    let left = 0, right = arr.length - 1
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
const quick_sort = (arr) => {
    if(arr.length < 2) {
        return arr
    }
    const middle = partition(arr)
    const left = quick_sort(arr.slice(0, middle))
    const right = quick_sort(arr.slice(middle + 1))
    return [ ...left, arr[middle], ...right ]
}

module.exports = quick_sort

// console.log(quick_sort([3,1,2,5,6,4]))