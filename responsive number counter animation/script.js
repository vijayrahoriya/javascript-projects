const numberEl = document.querySelectorAll('h3');
let interval = 5000;

numberEl.forEach((num)=>{
    let startValue = 0;
    let endValue = parseInt(num.dataset.val)
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function(){
        startValue += 1;
        num.innerHTML = startValue
        if(startValue == endValue){
            clearInterval(counter)
        }
    })
    console.log(typeof endValue)
})