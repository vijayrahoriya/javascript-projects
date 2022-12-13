const loginBoxEl = document.getElementById('loginBox');
const signBoxEl = document.getElementById('signbox');
const signEl1 = document.getElementById('sign1')
const loginEl = document.getElementById('login1');
const firstbtn = document.getElementsByClassName('btn')[0]
const secondbtn = document.getElementsByClassName('btn')[1]
const user = document.getElementById('user');
const email = document.getElementById('email');
const pass = document.getElementById('pass');


function init(){
    loginBoxEl.style.display = 'none'
}

loginEl.addEventListener('click',()=>{
    loginBoxEl.style.display = 'block'
    signBoxEl.style.display = 'none'
    secondbtn.classList.add('active')
    firstbtn.classList.remove('active')

})

signEl1.addEventListener('click',()=>{
    loginBoxEl.style.display = 'none'
    signBoxEl.style.display = 'block'
    secondbtn.classList.remove('active')
    firstbtn.classList.add('active')
})


user.addEventListener('blur',()=>{
    // console.log('blured')
    let regx = /^[a-zA-Z]([a-zA-Z0-9]){2,15}$/
    let str = user.value;
    if(regx.test(str)){
        user.parentElement.style.border = 'none'
    }
    else{
        user.parentElement.style.border = '1px solid red'
    }
    
})

email.addEventListener('blur',()=>{
    let regx = /^([a-zA-Z\.\-]+)@([a-zA-Z0-9]+).[a-z]{2-5}$/
    let str = user.value;
    if(regx.test(str)){
        email.parentElement.style.border = 'none'
    }
    else{
        email.parentElement.style.border = '1px solid red'
    }
})

