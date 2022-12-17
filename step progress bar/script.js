const nextEl = document.querySelector('#next');
const prevEl = document.querySelector('#prev');
const progressEl = document.querySelector('.progress-bar-front');

const stepEl = document.querySelectorAll('.step')

let currentChecked = 1;
nextEl.addEventListener('click',()=>{
    currentChecked++
    currentChecked > stepEl.length ? stepEl.length : 1;
    updateSeteProgress();
})

prevEl.addEventListener('click',()=>{
    currentChecked--
    currentChecked < 1 ? currentChecked = 1 : 1;
    updateSeteProgress();
})


function updateSeteProgress(){
    stepEl.forEach((step,index)=>{
        if(index < currentChecked){
            step.classList.add('checked');
            step.innerHTML = `<i class="fas fa-check"></i>
            <small>${index === 0? "Start" : index === stepEl.length-1 ? "Final" : "Step " + index}</small>`;
            
        }
        else{
            step.classList.remove('checked');
            step.innerHTML = `<i class="fas fa-times"></i>
            `;
        }
    })
    
    const checkedNumber = document.querySelectorAll('.checked');
    progressEl.style.width = ((checkedNumber.length -1) / (stepEl.length -1)) * 100 + "%";

    if(currentChecked == 1){
        prevEl.disabled  =true;
    }else if(currentChecked == stepEl.length){
        nextEl.disabled = true;
    }else{
        prevEl.disabled = false;
        nextEl.disabled = false
    }
}