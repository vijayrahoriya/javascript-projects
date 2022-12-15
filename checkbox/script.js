const checkBoxes = document.querySelectorAll('.inputes input');

let lastChecked;
function handleCheck(e){
    // console.log(this)
    let inBetween = false;
    if(e.shiftKey || this.checked){
        // console.log('checked')
        checkBoxes.forEach((checkBox)=>{
            if(checkBox === this || checkBox === lastChecked){
                inBetween = !inBetween;
            }

            if(inBetween){
                checkBox.checked = true
            }
        })
    }
    
    lastChecked = this
    // console.log(lastChecked)
}

checkBoxes.forEach((checkBox)=>{
    checkBox.addEventListener('click',handleCheck)
})