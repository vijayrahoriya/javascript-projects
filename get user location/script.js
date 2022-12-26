const btnEl = document.querySelector('.btn');
let apikey = 'fc0c2ed5eed0378ebcd7687d4f0802ae'

btnEl.addEventListener('click',e=>{
    e.preventDefault();
    if(navigator.geolocation){
        btnEl.innerHTML = 'Detecting your location...'
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        btnEl.innerHTML = 'User Denied for location'
    }
})

function onSuccess(position){
    const {latitude, longitude} = position.coords
    // console.log(latitude, longitude)
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`
    fetch(url).then(response=> response.json()).then(data=> {
        // console.log(data)
        btnEl.innerHTML = `${data.name}, ${data.sys.country}`
    })
}

function onError(err){
    btnEl.innerHTML = 'You denied for location'
}