// let user;
// let user = 'vijay'
// console.log(user??"anonymous")

// let firstname = null;
// let lastname = null;
// let nickname = 'supercoder'
// console.log(firstname??lastname??nickname??'anonymous')


// let user;
// let user = {
//     name: 'vijay'
// }
// console.log(user?.name)

// let map = new Map();
// map.set('name','vijay');
// map.set(1,'arun');
// map.set(2,'aman');
// // console.log(map)
// // console.log(map.get(1))
// // console.log(map.has(2))
// // console.log(map.delete(1))

// // console.log(map.size)
// map.clear();
// console.log(map)

// sorting this array without articales 
// let arr = ['The plot in you','The devil wears parda','Pierce the veil','Norma Jeans','The Bold','Say Anything','The Midway State','We came as Romas','Counterparts','Sleeper','A boy was playing']
// const strip = (bandName) =>{
//     return bandName.replace(/^(a|the|an)/i,"").trim();
// }

// let sorting = arr.sort((a,b)=> strip(a) > strip(b) ? 1 : -1)
// console.log(sorting)

//Destructuring  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const obj = {a:1, b:2};
// let numbers = [];
// ({a: numbers[0],b:numbers[1]} = obj)
// console.log(numbers)

// let arr = [1,2,3];
// [arr[1],arr[2]] = [arr[2],arr[1]]
// console.log(arr);

// function f(){
//     return [1,2]
// }

// const [a,b] = f();
// console.log(a,b)

// const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];
// console.log(a,b,c,d,e,f)

// const o = { p: 42, q: true };
// const { p: foo, q: bar } = o;

// console.log(foo); 
// console.log(bar); 
