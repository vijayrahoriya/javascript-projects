const getLeap = document.querySelector('button'),
leapYears = document.querySelector('.leap-years');

getLeap.addEventListener('click',()=>{
    leapYears.classList.add('active')
    let startYear = document.querySelector('#start').value
    let endYear = document.querySelector('#end').value;

    if(startYear< 1582 || startYear> 2999){
        leapYears.innerHTML = '<strong>The startyear is greater than 1581 and less than 3000</strong>'

    }else if(endYear> 2999 || endYear< 1582){
        leapYears.innerHTML = '<strong>The endyear is greater than 1581 and less than 3000</strong>'

    }else if(startYear > endYear){
        leapYears.innerHTML = `<strong>endyear should be greater than startyear</strong>`
    }
    else{
        let leapYearsArray = [];
        for(let i=startYear; i<= endYear; i++){
            if((i % 4==0 && i % 100 != 0) || (i % 400 == 0)){
                leapYearsArray.push(i);
            }
        }
        leapYears.innerHTML = `
        <strong>There are ${leapYearsArray.length} leep years between ${startYear} & ${endYear}</strong>
        <span>${leapYearsArray.toString().split(",").join(', ')}</span>`
    }


})