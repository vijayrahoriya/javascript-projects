// let reg = /harry/
// let reg = /harry/g
// // let reg = /Harry/i //case insensitive
// let s = 'this is great code with harry and also harry bhai';

// //functions to match expressions
// // 1.reg.exec(); it will return an arrray for match or null for no match
// let result = reg.exec(s)
// console.log(result)
// console.log(reg.source)
// console.log(result.index)
// console.log(result.input)

// // 2. test(); it will return true or false
// let result = reg.test(s);
// console.log(result)

// // 3. match(); it will return an array of result or null
// let result = s.match(reg);
// console.log(result)

// // 4. search(); it will return index of match else -1 
// let result = s.search(reg);
// console.log(result)

// // 5. replace(); return new replaced string with all the replacements without flag it will replace only first match but with flag g it will replace all matches
// let result = s.replace(reg,'Vijay')
// console.log(result)

                                                                // metacharcter Symbols

// let regx = /harry/
// let regx = /^harry/  // string starts with harry
// let regx = /harry$/  // string ends with harry  
// let regx = /h.rry/  // one charcater can be placed at the place of .
// let regx = /h*rry/  // 0 or more charcaters can be placed at the place of .
// let regx = /ha?rry?t/ //? represents that here a and y is optional
// let str = 'harryt is harry';
// let result = regx.exec(str)
// console.log(result)

// if(regx.test(str)){
//     console.log(`the string ${str} matches the expression ${regx}`)
// }
// else{
//     console.log(`the string ${str} does not match the expression ${regx}`)

// }

                                                                    // charcater sets 
                        
// let regx = /h[a-z]rry/; // [a-z] means any characater from a t0 z
// regx  = /h[abc]rry/; //any character from abc
// regx = /h[^abc]rry/; //none of from abc
// regx = /h[Abc]rry/; //does not match
// regx = /h[a-zA-Z]rr[yu0-9]/; //charcater from a-z and A-Z and 0-9

// let str = 'harry is harry';

// let result = regx.exec(str)
// console.log(result)

// if(regx.test(str)){
//     console.log(`the string ${str} matches the expression ${regx}`)
// }
// else{
//     console.log(`the string ${str} does not match the expression ${regx}`)

// }


//Quantifirs

// let regx = /har{2}y/;   // r must be 2 times in the string
// regx = /har{0,2}y/;  // r must be 0 0r 1 or 2 times in the string

// //grouping 
// regx = /(har){2}/;  //har must be 2 times in the string
// regx = /(har){2}([0-9]r){2}/; 

// let str = 'harharry';
// // str = 'harhary';
// str = 'harhar0r0r'
// // str = 'harrry';

// let result = regx.exec(str)
// console.log(result)
 
// if(regx.test(str)){
//     console.log("matched")
// }
// else{
//     console.log('does not match')
// }

// character classes 
// let regx = /\war/;  //one word charcter(_ , alphabet,numbers)
// regx = /\w+ar/;     // more than one word character
// regx = /\Wka/;      //one not word character
// regx = /\W+ka/;     //more than one word character
// regx = /\d999/;     //one digit and 3times 9
// regx = /\d+999/;    //more than one digit and 3 times 9
// regx = /\D999/;     //one non digit and 3 times 9
// regx = /\D+999/;    //more than one digit and 3 times 9
// regx = /\snumber/;  //one whitespace and number
// regx = /\s+number/; //more than one whitespcae and number
// regx = /\S99/;      //non whitespace 
// regx = /ry\b/;      //word boundary

// //asertions
// regx = /h(?=a)/;    //h ke baad a hi ho
// regx = /h(?!a)/;    //h ke baad a na ho

// let str = 'harrary *%ka   number 8999vijay999';
// let result = regx.exec(str);
// console.log(result)
