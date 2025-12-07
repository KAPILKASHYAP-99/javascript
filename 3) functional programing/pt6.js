// topic - Working with map and set collection
// 1
// const studentIds = new Set();

// studentIds.add(1);
// studentIds.add(2);
// studentIds.add(1);

// console.log({studentIds})


// 2 
// const studentIds = [1,2,3,4,4,4];
// const uniqueStudentIds = new Set(studentIds);

// const newStudentIds = [...uniqueStudentIds]

// console.log({newStudentIds})


// 3 
const newList = new Set();

newList.add(1);
newList.add(2);
newList.add(3)
// newList.delete(1);


// console.log({newList})
// console.log(newList.values())
// console.log(newList.entries())

// console.log(newList.has(1))

// newList.forEach((value) => {
//     console.log({value})
// })

// 4
const newMap = new Map();
newMap.set(10, 'value will be here')
newMap.set(11, 'awesome')
// console.log(newMap)
// console.log(newMap.get(10))
// newMap.delete(10)
// console.log(newMap)

// newMap.forEach((value) => {
//     console.log(value)
// })

console.log(newMap.has(45))
