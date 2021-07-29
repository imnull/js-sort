/**
 * 冒泡排序
 * @param {number[]} arr 
 */
 const bubble_sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            const a = arr[j], b = arr[j + 1]
            if (a > b) {
                arr[j] = b
                arr[j + 1] = a
            }
        }
    }
    return arr
}

module.exports = bubble_sort