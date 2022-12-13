const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2774573da9msh30d39f7c6ecbd9ep1fb7ddjsn9864c0165a53',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getweather = (city)=>{

    cityName.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then(response => response.json())
    .then((response) => {
        // console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        cloudpct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        windd.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed

    })
    .catch(err => console.error(err));


}

const submit = document.getElementById('submit')
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    getweather(city.value)
    other();
    other2();
    other3();
})

const other = ()=>{
    let cities = ['jaipur','boston','Kolkata','Bangalore','mumbai','surat','goa','chennai','bhopal','jodhpur','patna','lucknow','puri']
    let city = cities[Math.floor(Math.random()*cities.length)]
    // console.log(city)
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then((response)=>{
        return response.json()
    }).then((response)=>{
        // console.log(response)
        cityN.innerHTML = city
        cloud.innerHTML = response.cloud_pct
        feels.innerHTML = response.feels_like
        hum.innerHTML = response.humidity
        maxt.innerHTML = response.max_temp
        mint.innerHTML = response.min_temp
        sunri.innerHTML = response.sunrise
        sunst.innerHTML = response.sunset
        tem.innerHTML = response.temp
        wind.innerHTML = response.wind_degrees
        winds.innerHTML = response.wind_speed
    })
}
other();

const other2 = ()=>{
    let cities = ['jaipur','boston','Kolkata','Bangalore','mumbai','surat','goa','chennai','bhopal','jodhpur','patna','lucknow','puri']
    let city = cities[Math.floor(Math.random()*cities.length)]
    // console.log(city)
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then((response)=>{
        return response.json()
    }).then((response)=>{
        // console.log(response)
        city2N.innerHTML = city
        cloud2.innerHTML = response.cloud_pct
        feels2.innerHTML = response.feels_like
        hum2.innerHTML = response.humidity
        maxt2.innerHTML = response.max_temp
        mint2.innerHTML = response.min_temp
        sunri2.innerHTML = response.sunrise
        sunst2.innerHTML = response.sunset
        tem2.innerHTML = response.temp
        wind2.innerHTML = response.wind_degrees
        winds2.innerHTML = response.wind_speed
    })
}
other2();

const other3 = ()=>{
    let cities = ['jaipur','boston','Kolkata','Bangalore','mumbai','surat','goa','chennai','bhopal','jodhpur','patna','lucknow','puri']
    let city = cities[Math.floor(Math.random()*cities.length)]
    // console.log(city)
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then((response)=>{
        return response.json()
    }).then((response)=>{
        // console.log(response)
        city3N.innerHTML = city
        cloud3.innerHTML = response.cloud_pct
        feels3.innerHTML = response.feels_like
        hum3.innerHTML = response.humidity
        maxt3.innerHTML = response.max_temp
        mint3.innerHTML = response.min_temp
        sunri3.innerHTML = response.sunrise
        sunst3.innerHTML = response.sunset
        tem3.innerHTML = response.temp
        wind3.innerHTML = response.wind_degrees
        winds3.innerHTML = response.wind_speed
    })
}
other3();
getweather('Delhi');