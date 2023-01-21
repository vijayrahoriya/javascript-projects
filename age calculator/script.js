const years = document.querySelector('.years span'),
months = document.querySelector('.months span'),
days = document.querySelector('.days span'),
inputEl = document.querySelector('input');

let monthsDays = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate(){
    let today = new Date();
    let inputDate = new Date(inputEl.value)
    let birthMonth,birthDate,birthYear;

    let birthDetails={
        date: inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if(birthDetails.year > currentYear || (birthDetails.month > currentMonth && birthDetails.year == currentYear) || (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear )){
        alert('Not born Yet!');
        return;
    }

    birthYear = currentYear - birthDetails.year
    if(currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month
    }else{
        birthYear--
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date
    }else{
        birthMonth--
        let days = monthsDays[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date
        if(birthDate < 0){
            birthMonth = 11;
            birthYear--
        }
    }
    years.innerHTML = birthYear
    months.innerHTML = birthMonth
    days.innerHTML = birthDate
}

function leapChecker(year){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }else{
        months[1] = 28
    }
}