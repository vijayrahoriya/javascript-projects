const loginBoxEl = document.getElementById('loginBox');
const signBoxEl = document.getElementById('signbox');
const signEl1 = document.getElementById('sign1')
const loginEl = document.getElementById('login1');
const firstbtn = document.getElementsByClassName('btn')[0]
const secondbtn = document.getElementsByClassName('btn')[1]
const user = document.getElementById('user');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const createEl = document.querySelector('.create');
const bigboxEl = document.querySelector('.bigbox');


function init() {
    loginBoxEl.style.display = 'none'
}

loginEl.addEventListener('click', () => {
    loginBoxEl.style.display = 'block'
    signBoxEl.style.display = 'none'
    secondbtn.classList.add('active')
    firstbtn.classList.remove('active')

})

signEl1.addEventListener('click', () => {
    loginBoxEl.style.display = 'none'
    signBoxEl.style.display = 'block'
    secondbtn.classList.remove('active')
    firstbtn.classList.add('active')
})


user.addEventListener('blur', () => {
    // console.log('blured')
    let regx = /^[a-zA-Z]([a-zA-Z0-9]){2,15}$/
    let str = user.value;
    if (regx.test(str)) {
        user.parentElement.style.border = 'none'
    }
    else {
        user.parentElement.style.border = '1px solid red'
    }

})

email.addEventListener('blur', () => {
    let regx = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (regx.test(str)) {
        email.parentElement.style.border = 'none'
    }
    else {
        email.parentElement.style.border = '1px solid red'
    }
})

let data = []
createEl.addEventListener('click', (e) => {
    e.preventDefault();
    // let emailValue = email.value
    // console.log(userValue)
    // console.log(data)
    var sdata = JSON.parse(localStorage.getItem('info'));
    // console.log(!sdata)
    // console.log(typeof sdata)
    if (!sdata) {
        let userValue = user.value

        data = [...data, userValue]
        localStorage.setItem('info', JSON.stringify(data));
    }
    else {
        let userValue = user.value;
        
        sdata.forEach((item) => {
                if (item === userValue) {
                    user.parentElement.style.border = '1px solid red';
                }
                else {
                    user.parentElement.style.border = 'none'
                    let userValue = user.value
            
                    data = [...data, userValue]
                    localStorage.setItem('info', JSON.stringify(data));
                }
            })

    }

    // console.log(data)
})

