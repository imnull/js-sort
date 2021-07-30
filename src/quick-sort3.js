const get_pivot = (arr, start, end) => {
    if (start === end) {
        return arr[start]
    }
    let min = arr[start], max = min
    for (let i = start; i < end; i++) {
        if (arr[i] < min) {
            min = arr[i]
        } else if (arr[i] > max) {
            max = arr[i]
        }
    }
    return (min + max) / 2
}

/**
 * 
 * @param {number[]} arr 
 */
const partition = (arr, start, end) => {
    if (start === end) {
        return -1
    } else if (end - start === 1) {
        const a = arr[start], b = arr[end]
        if (a > b) {
            arr[end] = a
            arr[start] = b
        }
        return -1
    }
    const pivot = get_pivot(arr, start, end)
    // console.log('--> pivot', pivot)
    let left = start, right = end - 1, tmp = arr[left]
    while (left < right) {
        while (left < right && arr[right] >= pivot) {
            right--
        }
        if(left < right) {
            arr[left] = arr[right]
        }
        while (left < right && arr[left] < pivot) {
            left++
        }
        if(left < right) {
            arr[right] = arr[left]
        }
    }
    arr[left] = tmp
    if(tmp < pivot) {
        left += 1
    }
    // console.log('--> pivot', pivot, left, right)
    return left
}
/**
 * 
 * @param {number[]} arr 
 * @param {number} start 
 * @param {number} end 
 * @returns 
 */
const quick_sort = (arr, start = 0, end = arr.length) => {
    const middle = partition(arr, start, end)
    if (middle > start) {
        // console.log('=>', start, middle, end, arr, arr.slice(start, middle), get_pivot(arr, start, middle), arr.slice(middle, end), get_pivot(arr, middle, end))
        quick_sort(arr, start, middle)
        quick_sort(arr, middle, end)
    }
    return arr
}

module.exports = quick_sort

// console.log('-->', quick_sort([1]))
// console.log('-->', quick_sort([1,2]))
// console.log('-->', quick_sort([1,2,3]))
// console.log('-->', quick_sort([1,2,3,4]))
// console.log('-->', quick_sort([1,2,3,4,5,6,7,8,9,10]))
// console.log('-->', quick_sort([1,1]))
// console.log('-->', quick_sort([9,1,1,1,1,1,1,1,1,1,1,1,1,1]))
// console.log('-->', quick_sort([1,1,3,4]))
// console.log('-->', quick_sort([7,5,1,2,3,7]))
// console.log('-->', quick_sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))
// console.log('-->', quick_sort([ 6, 2, 3, 4, 5, 1 ]))
// console.log('-->', quick_sort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
// console.log('-->', quick_sort([10, 9,8,7]))
// console.log('-->', quick_sort([0, 4, 5, 0, 7, 4, 8]))
// console.log('-->', quick_sort([15, 5, 10, 20, 25, 10]))


