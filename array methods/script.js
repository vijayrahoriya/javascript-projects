const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1878, passed: 1955},
    {first: 'Issac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galelio', last: 'Galio', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1631},
    {first: 'Max', last: 'Plank', year: 1858, passed: 1947},
    {first: 'Nicolus', last: 'Kopernicus', year: 1473, passed: 1543},
]

// q1 -> filter the list of inventors for those who were born in 1500's?
// let data = inventors.filter((inventor)=>{
//     return inventor.year >=1500 && inventor.year <= 1599
// })
// console.log(data)

// Q2 ==> Give us an array of the inventory first and last name?
// let data = inventors.map((item)=>{
//     return item.first + " " + item.last
// })
// let data = inventors.map(item => item.first + " " + item.last)
// console.log(data)

// Q3 ===> sort the inventors by birthdate oldest to youngest?
// let data = inventors.sort((a,b)=>{
//     return a.year > b.year ? 1 : -1
// })
// let data = inventors.sort((a,b)=> a.year > b.year? 1 : -1)
// console.table(data)

// Q4 ==> how many years did all the inventors live?
// let data = inventors.reduce((total, inventor)=>{
//     return  total + (inventor.passed - inventor.year)
// },0)
// console.log(data)

// Q5 ==> sort the inventors by years lived?
// let data = inventors.sort((a,b)=>{
//     // console.log((a.passed - a.year))
//     return (a.passed - a.year) > (b.passed - b.year) ? 1 : -1
// })
// console.table(data)

