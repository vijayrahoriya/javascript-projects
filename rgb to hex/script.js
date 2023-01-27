const hexInput = document.querySelectorAll('input')[1],
rgbInput = document.querySelectorAll('input')[0]

function valid(element){
    element.style.color = 'red'
}

function invalid(element,otherElement){
    element.style.color = '#f04624'
    otherElement.value = 0;
}

function toRgb(){
    let hexCode = hexInput.value;
    let rgbArr = [];
    if(/^#?[a-fA-F0-9]{6}$/.test(hexCode)){
        valid(hexInput)
    }else{
        invalid(hexInput,rgbInput)
    }
}