const liEl = document.querySelectorAll('li'),
progressEl = document.querySelector('.progress')

for(let i = 0; i<liEl.length; i++){
    liEl[i].addEventListener('click',()=>{
        for(let k=0; k<liEl.length; k++){
            if(liEl[k].classList.contains('selected')){
                liEl[k].classList.remove('selected');
            }
        }
        liEl[i].classList.add('selected')
        for(let j = 0; j< liEl.length; j++){
            liEl[j].classList.add('selectAll')
        }
    })
}