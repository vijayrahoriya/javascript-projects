// const user = document.getElementById('user');
// const email = document.getElementById('email');
// const phone = document.getElementById('phone');

// user.addEventListener('blur',()=>{
//     let regx = /^[a-zA-Z]([a-zA-Z0-9]){2,14}$/;
//     let str = user.value;
//     if(regx.test(str)){
//         user.classList.remove('is-invalid');
//     }
//     else{
//         user.classList.add('is-invalid')
//     }
// })

// email.addEventListener('blur',()=>{
//     let regx = /^([a-zA-Z0-9\.\-\*]+)@([a-zA-Z0-9\.\-\*]+).([a-zA-Z]){2,7}$/
//     let str = email.value;
//     if(regx.test(str)){
//         email.classList.remove('is-invalid');

//     }
//     else{
//         email.classList.add('is-invalid')
//     }
// })

// phone.addEventListener('blur',()=>{
//     let regx = /^([0-9]){10}$/
//     let str = phone.value;
//     if(regx.test(str)){
//         phone.classList.remove('is-invalid')
//     }
//     else{
//         phone.classList.add('is-invalid')
//     }
// })