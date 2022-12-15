const searchEl = document.querySelector('.search');
const icon = document.getElementById('searchIcon');
icon.addEventListener('click',()=>{
    searchEl.classList.toggle('active')
})

const boxEl = document.querySelectorAll('.box')
// console.log(boxEl)
const hideBoxEl = document.getElementsByClassName('hidebox');

boxEl.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.nextElementSibling.classList.toggle('active')
    })
})

const checkboxes = document.querySelectorAll(".input input[type='checkbox']");

let lastChecked;
function handleCheck (e){
    let inBetween = false;
    // console.log(this)
    // check if they had shiftkey down and check that they are checking it;
    if(e.shiftKey && this.checked){
        checkboxes.forEach((checkbox)=>{
            // console.log(checkbox)
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }

            if(inBetween){
                checkbox.checked = true;
            }
        })
    }

    lastChecked = this;
}

checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener('click',handleCheck);
})