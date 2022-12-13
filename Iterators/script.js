// iterators

// function iterator(values){
//     let arrIndex = 0;
//     return {
//         next: function(){
//             if(arrIndex < values.length){
//                 return {
//                     value : values[arrIndex++],
//                     done: false
//                 }
//             }
//             else{
//                 return {
//                     done: true
//                 }
//             }
//         }
//     }
// }


// const myarray = ['mango','apple','banana','graps'];
// // console.log(fruits.next().value)
// const fruits = iterator(myarray);
// console.log(fruits.next().value)

//Genrators
// function* numbers(){
//     let i = 0;
//     yield 1;
//     yield 2;
// }
// const gen = numbers();
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
