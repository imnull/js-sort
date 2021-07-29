const quick_sort = require('./quick-sort2')

const map_sort = (arr) => {
    const map = new Map()
    arr.forEach(num => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    })


    const sortedKeys = quick_sort([...map.keys()])
    const result = []
    sortedKeys.forEach(k => {
        const c = map.get(k)
        result.push(...Array(c).fill(k))
    })
    return result
}

module.exports = map_sort