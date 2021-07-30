const gen_rnd = (count = 10) => {
    const arr = Array(count)
    for (let i = 0; i < count; i++) {
        arr[i] = Math.random() * count >> 0
    }
    return arr
}

const gen_desc = (count = 10) => {
    const arr = Array(count)
    for (let i = 0; i < count; i++) {
        arr[i] = count - i
    }
    return arr
}

const gen_asc = (count = 10) => {
    const arr = Array(count)
    for (let i = 0; i < count; i++) {
        arr[i] = i + 1
    }
    return arr
}

const check = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true
}

module.exports = {
    gen_rnd,
    gen_desc,
    gen_asc,
    check,
}