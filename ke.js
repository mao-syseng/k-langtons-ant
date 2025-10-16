// over applies a function to each element of an array and combines to a single value
over(add)([1,2,3,4,5]) // 15

// til generates an array of integers from 0 to n-1
til(5) // [0,1,2,3,4]

// where returns the indices of non-zero elements in an array
where([0,1,0,1,0,1]) // [1,3,5]
where([0,2,0,1,0,3]) // [1,1,3,5,5,5]


// Making a matrix
// cut just takes 2 lists, 1. is the target, the second is where to cut it.
// For matrix of 10x10, you give it a list of total cells, and we want to cut at every 10th,
// so give it list [10,20,30,...]
cut(til(100),mul(til(10),10)) // 10x10 matrix
// you can apply functions to the whole matrix with rec
rec(x=>x*2)(matrix)
// to use add with your matrix you need to use curry to make a unary function
rec(curry(add,[undefined,1]))(matrix)  




// Langtons ant, x y direction
const nextGeneration = (x,y,d) => {
    const matrix = cut(til(100),mul(til(10),10)) // make a 10x10 grid
    const zeroMatrix = rec(x=>0)(matrix) // turn matrix into zero's
    

}