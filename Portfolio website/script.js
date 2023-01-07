const textRun = document.querySelector('.text-run'),
ulEl = document.querySelector('ul'),
barsEl = document.querySelector('.icon'),
infoEl = document.querySelectorAll('.top h6'),
dataEl = document.querySelector('.data');
closeBtn = document.querySelector('.fa-times');

barsEl.onclick = ()=>{
    ulEl.classList.add('active')
}

closeBtn.onclick = ()=>{
    ulEl.classList.remove('active')
}

let i =0;
let skills = ['Web Designing','Bootstrap','JavaScript','Reactjs','jQuery']

let carrerIndex = 0;
let charcterIndex = 0;

updateText();
function updateText(){
    charcterIndex++
    textRun.innerHTML = `<h2>good at  <span>${skills[carrerIndex].slice(0, charcterIndex)}</span></h2>`

    if(charcterIndex === skills[carrerIndex].length){
        charcterIndex = 0;
        carrerIndex++
    }

    if(carrerIndex === skills.length){
        carrerIndex = 0;
    }

    setTimeout(()=>{
        updateText();
    },400)
}

infoEl.forEach((element,index) =>{
    element.addEventListener('click',()=>{
        document.querySelector('.top h6.active').classList.remove('active')
        element.classList.add('active')
        if(index == 0){
            dataEl.innerHTML = `<span>Web Designer</span>
                                <p>HTML, CSS, BootStrap,</p>
                                <p> JavaScript, jQuery, Reactjs</p>`
        }
        else if(index == 1){
            dataEl.innerHTML = `<span>Fresher</span>
                                <p>I am fresher in</p>
                                <p>web development</p>`
        }else{
            dataEl.innerHTML = `<span>Bsc in Science</span>
                                <p>I have done my Bsc from</p>
                                <p>Rajasthsn University</p>
                                <p>I am graduate in Bsc field</p>
                                <p>then I learn web development</p>`
        }
    })
})

