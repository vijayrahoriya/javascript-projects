const wrapper = document.querySelector('.wrapper'),
inputPart =wrapper.querySelector('.input-part'),
infoText = inputPart.querySelector('.info-txt'),
locationBtn = document.querySelector('button'),
backIcon = document.querySelector('header i'),
inputField = inputPart.querySelector('input');
let api;
inputField.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter' && inputField.value != ""){
        requestApi(inputField.value)
    }
})

function fetchData(){
    infoText.innerText = 'Getting weather details'
    infoText.classList.add('pending')
    fetch(api).then(response=> response.json()).then(data=> wheather(data))

}

function requestApi(city){
    let apikey = "fc0c2ed5eed0378ebcd7687d4f0802ae"
     api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
    fetchData()
    
}

locationBtn.addEventListener('click',()=>{
    if(navigator.geolocation){//if browser support geolocation api
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }else{
        alert('Your browser not support geolocation API')
    }
})

function onSuccess(position){
    let apikey = "fc0c2ed5eed0378ebcd7687d4f0802ae"
    // console.log(position)
    const {latitude, longitude} = position;
    api = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&units=metric&appid=${apikey}`
    fetchData();
}

function onError(error){
    // console.log(error)
    infoText.innerText = error.message;
    infoText.classList.add('error');
}

function wheather(info){
    if(info.cod === '404'){
        infoText.classList.replace('pending','error');
        infoText.innerText = `${inputField.value} isn't valid please check city name`
    }else{
        const city = info.name
        console.log(info)
        const country = info.sys.country
        const {description, id} = info.weather[0]
        const {feels_like, humidity, temp} = info.main

        wrapper.querySelector('.temp .numb').innerText = Math.floor(temp);
        wrapper.querySelector('.weather').innerText = description;
        wrapper.querySelector('.location span').innerText = `${city}, ${country}`;
        wrapper.querySelector('.temp .numb-2').innerText = Math.floor(feels_like);
        wrapper.querySelector('.humidity span').innerText = `${humidity}%`;
        infoText.classList.remove('pending','error')
        wrapper.classList.add('active')
    }
}

backIcon.addEventListener('click',()=>{
    wrapper.classList.remove('active')
    inputField.value = ""
})