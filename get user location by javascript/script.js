const locationDiv = document.querySelector('p'),
btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    if(navigator.geolocation){
        // navigator.geolocation give us latitude and longitude or error 
        navigator.geolocation.getCurrentPosition(showPostion,checkError)
    }else{
        locationDiv.innerHTML = 'Your Browser does not support geolocation'
    }
})

const checkError = (error) =>{
    switch(error.code){
        case error.PERMISSION_DENIED:
            locationDiv.innerHTML = 'Please allow to access location'
            break;
        case error.UNAVAILABLE:
            locationDiv.innerHTML = 'Location Information Unavailable';
            break;
        case error.TIMEOUT: 
        locationDiv.innerHTML = 'The request to get user location times out'
        break;
    }
}

const showPostion = async (position)=>{
    let response =await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)

    let data = await response.json();
    // console.log(data)
    locationDiv.innerHTML = `${data.address.city}, ${data.address.country}`
}