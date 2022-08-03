const p1 = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve(1)
            // reject(new Error('Fake Error'))
        }, 2000)
    } catch (err) {
        reject(new Error(err))
    }
})

const p2 = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve(2)
        }, 1000)
    } catch (err) {
        reject(new Error(err))
    }
})

Promise.allSettled([p1, p2])
    .then(result => console.log(result))

// Promise.all([p1, p2])
//     .then(result => console.log(result))