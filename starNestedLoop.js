function starNestedLoop(n, m) {
    for (let i = 0; i < m; i++) { 
        for (let j = 0; j < n; j++)
        console.log("*")
        console.log("\n")
    }
}

console.log(starNestedLoop(1,2))

// //TEST CASE
// starNestedLoop(1,2)
// // *
// // *

// starNestedLoop(2,3)
// // **
// // **
// // **

// starNestedLoop(4,1)
// // ****