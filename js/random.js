const inputE1 = document.getElementsByTagName('input')[0]
const iconE1 = document.getElementsByTagName('i')[0]
const buttonE1 = document.getElementsByTagName('button')[0]

buttonE1.addEventListener('click',()=>{
    let randomcolor = "";
    let char = "0123456789abcdef"

    for(let i = 0 ; i<6; i++){
        randomcolor += char[Math.floor(Math.random() * 16)]
    }
    inputE1.value = "#"+randomcolor
    inputE1.style.color = inputE1.value
    iconE1.style.background = inputE1.value
    inputE1.style.border = `1px solid ${inputE1.value}`
    iconE1.style.border = `2px solid ${inputE1.value}`
    document.body.style.background = inputE1.value
})

iconE1.onclick = ()=>{
    let inputvalue = inputE1.select();
    document.execCommand('copy')
}