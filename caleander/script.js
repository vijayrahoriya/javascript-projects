const currentDate = document.querySelector('.current_date'),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll('.icons span');

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth()

const months = ["January","Febraray","March","April","May","June","July","August","September","October","November","December"];

const renderCalendar = ()=>{
    let firstdayofMonth = new Date(currYear,currMonth,1).getDay(); //getting first day of month
    let lastDateofMonth = new Date(currYear,currMonth + 1,0).getDate();//getting last date of month
    let lastDayofMonth = new Date(currYear,currMonth,lastDateofMonth).getDay();//getting last day of month
    let lastDateofLastMonth = new Date(currYear,currMonth,0).getDate();//getting last date of last month
    // console.log(firstdayofMonth,lastDateofMonth,lastDayofMonth,lastDateofLastMonth)
    let liTag = "";

    for(let i = firstdayofMonth ; i>0 ; i--){ //crating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`
    }

    for(let i = 1; i<=lastDateofMonth; i++){ //creating li of all days of current days
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear()? "active" : "";
        // console.log(i)
        liTag += `<li class="${isToday}">${i}</li>`
    }

    for(let i = lastDayofMonth; i<6; i++){ //creating li of next month first days
        liTag += `<li class="inactive">${i-lastDayofMonth+ 1}</li>`
    }

    // console.log(liTag)
    currentDate.innerHTML = `${months[currMonth]} ${currYear}`
    daysTag.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach(icon=>{
    icon.addEventListener('click',()=>{
        // if clicked on previous icon then decreament current month by 1 else increament it by 1
        currMonth = icon.id === 'prev'? currMonth - 1 : currMonth + 1;
        
        if(currMonth < 0 || currMonth > 11){
            //creating a new date of current year & month add pass it as date value
            date = new Date(currYear,currMonth);
            currYear = date.getFullYear(); //updating current year with new date year
            currMonth = date.getMonth(); //updating current month with new date month
        }
        else{
            date = new Date(); //else pass new date as date value
        }
        renderCalendar();
        
    })
})