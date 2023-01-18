const perEl = document.querySelector('.per');
const loadingEl = document.querySelector('.up');
let index = 0;
const updateBar = ()=>{
    perEl.innerHTML = index + "%";
    loadingEl.style.width = index + "%"
    index++;
    if(index < 101){
        setTimeout(updateBar,30)
    }
}
updateBar();