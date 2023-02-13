const dateFirst = document.querySelectorAll('input')[0],
dateSecond = document.querySelectorAll('input')[1],
submitBtn = document.querySelector('button'),
resultBox = document.querySelector('.result');

submitBtn.addEventListener('click',()=>{
    let date1 = new Date(dateFirst.value)
    let date2 = new Date(dateSecond.value)
    // console.log(date1.getTime(),date2)

    if(date1.getTime() && date2.getTime()){
        let timeDifference = date2.getTime() - date1.getTime();
        // this is value is in milliseconds so convert it 
        let dayDifference = Math.abs(timeDifference / (1000 * 3600 * 24))
        resultBox.innerHTML = `Difference between the two dates in <span> ${dayDifference} </span> days`
    }else{
        resultBox.innerHTML = 'Please select a valid value'
    }
})