let mymap = new Map();  //mymap will become an empty object
const key1 = 'str', key2 = {}, key3 = function(){};
// // setting map values 
// mymap.set(key1,'This is a string');
// mymap.set(key2,'This is an empty object');
// mymap.set(key3, 'This is an empty function')
// console.log(mymap)

// getting values from Map
// console.log(mymap.get(key1))

// for(let key of mymap.keys()){
//     console.log(key)
// }
// for(let value of mymap.values()){
//     console.log(value)
// }

// you can loop through a map using for each loop 
// mymap.forEach((value,key)=>{
//     console.log('Key is ' , key)
//     console.log('Value is ' , value)
// })

// converting a map to an array 
// const myArrray = Array.from(mymap);
// console.log('Map to array is ', myArrray);

// // converting a map key to an array 
// const mykeyarray = Array.from(mymap.keys());
// console.log(mykeyarray)


// Set method ---> set stores unique values
const mySet = new Set(); //Initialize an empty set
// console.log(mySet)

mySet.add('this');
mySet.add('That')  //set store only unique values if there this repeats it will take it only one time
mySet.add(2527)

// we can add values like this 
// const mySet = new Set([1,'this',{a: 1,b: 2}])
// console.log(mySet)

// let arr = ['apple','mango','orange','apple'];
// const set = new Set(arr)
// console.log(set);

// console.log(mySet.size)
// console.log(mySet.has('this'))
// console.log(mySet.delete('this'));
// console.log(mySet)

// let myarray = Array.from(mySet);
// console.log(myarray)

