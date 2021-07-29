'use strict'

const gen = (count = 10) => {
    const arr = Array(count)
    for(let i = 0; i < count; i++) {
        // arr[i] = Math.random() * count >> 0
        arr[i] = count - i
    }
    return arr
}

const check = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true
}

/**
 * 
 * @param {number[]} arr 
 */
const bubble_sort = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - 1; j++) {
            const a = arr[j], b = arr[j + 1]
            if(a > b) {
                arr[j] = b
                arr[j + 1] = a
            }
        }
    }
    return arr
}

/**
 * 
 * @param {number[]} arr 
 */
const quick_sort = (arr) => {
    if(arr.length < 2) {
        return arr.slice(0)
    } else if(arr.length === 2) {
        const [a, b] = arr
        return a > b ? [b, a] : [a, b]
    }
    let left = 0, right = arr.length - 1
    const pivot = arr[left]
    // 当右指针指向值>=切分值时，右指针持续左移
    while(right > left && arr[right] >= pivot) {
        right -= 1
    }
    // 当左右指针未重合时
    if(left < right) {
        // 交换左右指针（此时left==0）
        arr[left] = arr[right]
        arr[right] = pivot
        // 左指针右移一位
        left += 1
        while(left < right) {
            if(arr[left] > pivot) {
                right -= 1
                const tmp = arr[left]
                arr[left] = arr[right]
                arr[right] = tmp
            } else {
                left += 1
            }
        }
    } else {
        // 右侧所有数组不小于切分值（此时left==0）
        left = 1
    }
    const L = arr.slice(0, left)
    const R = arr.slice(left)
    return [...quick_sort(L), ...quick_sort(R)]
}

const profile = (name, sorter, size = 1000) => {
    const arr = gen(size)
    console.time(`${name}_${size}`)
    const sorted = sorter(arr)
    console.timeEnd(`${name}_${size}`)
    if(!check(sorted)) {
        throw `${name}_${size}: 排序结果不通过`
    }
}

let COUNT = 1000

console.log('-'.repeat(32))

COUNT = 1000
profile('冒泡排序', bubble_sort, COUNT)
profile('冒泡排序', bubble_sort, COUNT)
profile('冒泡排序', bubble_sort, COUNT)
profile('快速排序', quick_sort, COUNT)
profile('快速排序', quick_sort, COUNT)
profile('快速排序', quick_sort, COUNT)

console.log('-'.repeat(32))

COUNT = 2000
profile('冒泡排序', bubble_sort, COUNT)
profile('冒泡排序', bubble_sort, COUNT)
profile('冒泡排序', bubble_sort, COUNT)
profile('快速排序', quick_sort, COUNT)
profile('快速排序', quick_sort, COUNT)
profile('快速排序', quick_sort, COUNT)

console.log('-'.repeat(32))

COUNT = 5000
profile('冒泡排序', bubble_sort, COUNT)
profile('冒泡排序', bubble_sort, COUNT)
profile('冒泡排序', bubble_sort, COUNT)
profile('快速排序', quick_sort, COUNT)
profile('快速排序', quick_sort, COUNT)
profile('快速排序', quick_sort, COUNT)

console.log('-'.repeat(32))

// COUNT = 10000
// profile('冒泡排序', bubble_sort, COUNT)
// profile('冒泡排序', bubble_sort, COUNT)
// profile('冒泡排序', bubble_sort, COUNT)
// profile('快速排序', quick_sort, COUNT)
// profile('快速排序', quick_sort, COUNT)
// profile('快速排序', quick_sort, COUNT)

// console.log('-'.repeat(32))

// COUNT = 20000
// profile('冒泡排序', bubble_sort, COUNT)
// profile('冒泡排序', bubble_sort, COUNT)
// profile('冒泡排序', bubble_sort, COUNT)
// profile('快速排序', quick_sort, COUNT)
// profile('快速排序', quick_sort, COUNT)
// profile('快速排序', quick_sort, COUNT)

// console.log('-'.repeat(32))



// console.log(quick_sort([4,6,7,1,2,3,8,5]))
// console.log(quick_sort([1,1,1,13,1,1,1,111,2,4]))
// console.log(quick_sort([9,3,1,2,4]))
// console.log(quick_sort([3,5,2,4]))
// console.log(quick_sort([2,5,3,4]))
// console.log(quick_sort(gen(10000)))