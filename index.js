//let arr = [10, 20, 30, -100, 1000]

/* let result = arr.forEach((el) => document.write(`<p>${el}</p>`))
console.log(result) */

/* const renderList = (list) => {
    document.write(`<ul></ul>`)
}

renderList(arr) */

/* let filterArr = arr.filter((item, index, arr) => {
    return item > 10
})

console.log(arr)
console.log(filterArr) */
/* 
let mapResult = arr.map((item, index, arr) => { return item * 2 })
console.log(mapResult) */

/* let modifiedArr = arr.map((item, index) => {
    return index % 2 !== 0 ? item * 2 : item
})

console.log(modifiedArr) */

//let arr = ['hallo', -100, -10, 20, true, 100, false, ]

//chain

/* let filterArr = arr.filter((el) =>
    typeof el === 'number' && el > 0)

console.log(filterArr)

let mapArr = filterArr.map((el) =>
    el ** 2)

console.log(mapArr) */


/* arr
    .filter((el) =>
        typeof el === 'number' && el > 0)
    .map((el) =>
        el ** 2)
    .forEach((el) => document.write(`<p>${el}</p>`))

//console.log(newArr)

console.log(arr) */

/*let findEl = arr.find((item, index, arr) => {
    return typeof item === `string` // return first el from arr
})

console.log(findEl)*/
/*===========================*/
//reduce( ()=> {}, returnValue)

/* let arr = [10, 20, 30]

let sum = arr.reduce(
    function(returnValue, item, index, arr) {
        return returnValue *= item
    }
)

console.log(sum) */

let animals = [
        ['cat', 'dog', 'lion'],
        ['tiger', 'frog', 'mause'],
        [10, 20, 30]
    ]
    /* let flatArr = []

    for (let i = 0; i < animals.length; i++) {
        let currentArr = animals[i];
        flatArr = [...flatArr, ...currentArr];
    }

    console.log(flatArr) */

/* let flatArr = animals
    .reduce(
        (reduceValue, item) => {
            return [...item, ...reduceValue]
        }, [])


console.log(flatArr) */

let arr = ['cat', 'dog', 'lion'];
//let reduceStr = arr.join(` && `) + `!!!`;
let reduceStr = arr
    .reduce((returnValue, item, index) => {
        return returnValue += index === (arr.length - 1) ? item + `!!!` : item + ` && `
    }, ``)



console.log(reduceStr)