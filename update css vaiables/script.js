const inputs = document.querySelectorAll('input');

function hanleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach((input)=>{
    input.addEventListener('change',hanleUpdate);
    input.addEventListener('mousemove', hanleUpdate)
})

