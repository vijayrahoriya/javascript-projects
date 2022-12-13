const starsEl = document.querySelectorAll('.fa-star');
const emojiEl = document.querySelectorAll('.far');
const colorsarray = ['red','orange','lightblue','lightgreen','green']


starsEl.forEach((starEl,index)=>{
    starEl.addEventListener('click',()=>{
        upadaterating(index)
    })
})

const upadaterating=(index)=>{
    starsEl.forEach((starEl,idx)=>{
        if(idx < index + 1){
            starEl.classList.add('active')
        }
        else{
            starEl.classList.remove('active')
        }
    })
    emojiEl.forEach((emoji)=>{
        emoji.style.transform = `translateX(-${index * 50}px)`
        emoji.style.color = colorsarray[index]
    })
}
upadaterating(0)
