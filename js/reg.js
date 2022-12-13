console.log('welcome to our form')

const user = document.getElementById('user');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validemail = false;
let validphone = false;
let validname = false;

user.addEventListener('blur',()=>{
    // console.log('blured')
    let regx = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = user.value;
    if(regx.test(str)){
        // console.log('matched')
        user.classList.remove('is-invalid')
        validname = true;
    }
    else{
        // console.log('no match')
        user.classList.add('is-invalid')
        validname = false;
    }
})
email.addEventListener('blur',()=>{
    // console.log('blured')
    let regx = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if(regx.test(str)){
        // console.log('matched')
        email.classList.remove('is-invalid')
        validemail = true;
    }
    else{
        // console.log('no match')
        email.classList.add('is-invalid')
        validemail = false;
    }
})

phone.addEventListener('blur',()=>{
    // console.log('blured')
    let regx = /^[0-9]{10}$/;
    let str = phone.value;
    if(regx.test(str)){
        // console.log('matched')
        phone.classList.remove('is-invalid')
        validphone = true;
    }
    else{
        // console.log('no match')
        phone.classList.add('is-invalid')
        validphone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    if(validemail && validname && validphone){
        let div = document.createElement('div');
        div.innerHTML = `<div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> Your travel request has been successfuly submitted!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      document.querySelector('.container').prepend(div)
      setTimeout(() => {
        document.querySelector('.container').firstElementChild.remove()
      }, 3000);
      let input = document.getElementsByTagName('input')
      Array.from(input).forEach((elem)=>{
        elem.value = "";
      })
    }
    else{
        let div = document.createElement('div');
        div.innerHTML = `<div id="success" class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error!</strong> Your travel request has not been successfuly submitted!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
      document.querySelector('.container').prepend(div)
      setTimeout(() => {
        document.querySelector('.container').firstElementChild.remove()
      }, 3000);
    }
})