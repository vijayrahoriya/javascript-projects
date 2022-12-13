let navbar = document.querySelector('.navbar');
document.querySelector("#menu-btn").onclick = ()=>{
    navbar.classList.toggle('active')
    serachForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let serachForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = ()=>{
    serachForm.classList.toggle('active')
    navbar.classList.remove('active');
    cartItem.classList.remove('active');

}

let cartItem = document.querySelector('.cart-item-container');
document.querySelector("#cart-btn").onclick = ()=>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    serachForm.classList.remove('active')
}

window.scroll = ()=>{
    navbar.classList.remove('active');
    serachForm.classList.remove('active');
    cartItem.classList.remove('active')
}