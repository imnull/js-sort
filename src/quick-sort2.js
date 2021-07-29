const get_mid = (arr) => {
    return arr.reduce((r, v) => r + v, 0) / arr.length
}

/**
 * 
 * @param {number[]} arr 
 */
const quick_sort = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    let left = 0, right = arr.length - 1
    const pivot = get_mid(arr)
    while (left < right && arr[left] < pivot) {
        left += 1
    }
    while (left < right) {
        if (arr[right] < pivot) {
            const tmp = arr[right]
            arr[right] = arr[left]
            arr[left] = tmp
            while (left < right && arr[left] < pivot) {
                left += 1
            }
        }
        right -= 1
    }
    // pivot为最小值
    if (left < 1) {
        // 全部为pivot
        if(right < 1) {
            return arr
        }
        left = 1
    }

    const L = arr.slice(0, left)
    const R = arr.slice(left)
    return [...quick_sort(L), ...quick_sort(R)]
}

module.exports = quick_sort
