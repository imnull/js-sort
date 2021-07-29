const { gen_rnd, gen_desc, gen_asc, get_mid, check } = require('./tools')
const bubble_sort = require('./bubble-sort')
const quick_sort = require('./quick-sort')


const native_sort = (arr) => {
    return arr.sort((a, b) => a - b)
}

const profile = (name, sorter, gen, size = 1000) => {
    const arr = gen(size)
    console.time(`${name}_${size}`)
    const sorted = sorter(arr)
    console.timeEnd(`${name}_${size}`)
    if (!check(sorted)) {
        throw `${name}_${size}: 排序结果不通过`
    }
}



const main = () => {
    // console.log('='.repeat(48))
    console.log('-'.repeat(48))

        ; ([
            1000,
            2000,
            5000,
            10000,
            20000,
            100000,
            1000000,
        ]).forEach(count => {
            // profile('【冒泡】排序1轮-随机数组', bubble_sort, gen_rnd, count)
            // profile('【冒泡】排序2轮-随机数组', bubble_sort, gen_rnd, count)
            // console.log('-'.repeat(48))
            // profile('【冒泡】排序1轮-倒序数组', bubble_sort, gen_desc, count)
            // profile('【冒泡】排序2轮-倒序数组', bubble_sort, gen_desc, count)
            // console.log('-'.repeat(48))
            // profile('【冒泡】排序1轮-正序数组', bubble_sort, gen_asc, count)
            // profile('【冒泡】排序2轮-正序数组', bubble_sort, gen_asc, count)
            // console.log('-'.repeat(48))

            // profile('【快速】排序1轮-随机数组', quick_sort, gen_rnd, count)
            // profile('【快速】排序2轮-随机数组', quick_sort, gen_rnd, count)
            // console.log('-'.repeat(48))
            // profile('【快速】排序1轮-倒序数组', quick_sort, gen_desc, count)
            // profile('【快速】排序2轮-倒序数组', quick_sort, gen_desc, count)
            // console.log('-'.repeat(48))
            profile('【快速】排序1轮-正序数组', quick_sort, gen_asc, count)
            profile('【快速】排序2轮-正序数组', quick_sort, gen_asc, count)
            console.log('-'.repeat(48))

            // profile('【分治】排序1轮-随机数组', map_sort, gen_rnd, count)
            // profile('【分治】排序2轮-随机数组', map_sort, gen_rnd, count)
            // console.log('-'.repeat(48))
            // profile('【分治】排序1轮-倒序数组', map_sort, gen_desc, count)
            // profile('【分治】排序2轮-倒序数组', map_sort, gen_desc, count)
            // console.log('-'.repeat(48))
            // profile('【分治】排序1轮-正序数组', map_sort, gen_asc, count)
            // profile('【分治】排序2轮-正序数组', map_sort, gen_asc, count)
            // console.log('-'.repeat(48))

            // profile('【原生】排序1轮-随机数组', native_sort, gen_rnd, count)
            // profile('【原生】排序2轮-随机数组', native_sort, gen_rnd, count)
            // console.log('-'.repeat(48))
            // profile('【原生】排序1轮-倒序数组', native_sort, gen_desc, count)
            // profile('【原生】排序2轮-倒序数组', native_sort, gen_desc, count)
            // console.log('-'.repeat(48))
            // profile('【原生】排序1轮-正序数组', native_sort, gen_asc, count)
            // profile('【原生】排序2轮-正序数组', native_sort, gen_asc, count)
            // console.log('-'.repeat(48))

            // console.log('='.repeat(48))
        })
}





main()


// console.log(quick_sort([1,1]))
// console.log(quick_sort([4,6,7,1,2,3,8,5]))
// console.log(quick_sort([1,13,1,111,2,4]))
// console.log(quick_sort([9,3,1,2,4]))
// console.log(quick_sort([3,2]))
// console.log(quick_sort([3,5,2,4]))
// console.log(quick_sort([2, 2, 2, 5, 2, 1, 3, 4]))
// console.log(quick_sort([
//     2, 2, 5, 2,
//     2, 3, 4
// ]))
// console.log(quick_sort([ 2, 2 ]))
// console.log(quick_sort([2,1]))
// console.log(quick_sort([1,2]))
// console.log(quick_sort([2, 1, 3]))
// console.log(quick_sort([1,2,3]))
// console.log(quick_sort([3,1,2]))
// console.log(quick_sort([3, 2, 1]))
// console.log(quick_sort([1, 2, 1, 3]))
// console.log(quick_sort([1, 1, 2, 1, 1, 1, 1, 1, 3, 5, 2, 7, 1, 1, 1]))
// console.log(map_sort([
//     1, 1, 1, 3, 5,
//     2, 7, 2, 1, 1
// ]))
// console.log(quick_sort(gen(1000)))

const sum = (n) => {
    if(n > 1) {
        return n + sum(n - 1)
    } else {
        return n
    }
}

// console.log(sum(10469))
