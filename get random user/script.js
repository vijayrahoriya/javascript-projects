const userName = document.querySelector('h5'),
role = document.querySelector('p'),
address = document.querySelector('span'),
genrateBtn = document.querySelector('button'),
image = document.querySelector('.image'),
rootEl = document.querySelector(':root')

let url = "https://random-data-api.com/api/v2/users?response_type=json"

const fetchUser = async() =>{
    await fetch(url).then(resp=> resp.json()).then(data=> {
        userName.innerHTML = data.first_name + " " + data.last_name
        role.innerHTML = data.employment.title
        address.innerHTML = `<i class="fa fa-map-marker"></i> ${data.address.city}`;
        image.innerHTML = `<img src="${data.avatar}" />`
    })

    let random = "";
    let chars = "1234567890abcdefgABCDEFG"
    for(let i = 0; i<6; i++){
        random += chars[Math.floor(Math.random() * chars.length)]
    }
    let colorVal = "#" + random
    rootEl.style.setProperty('--bg',colorVal)
}

window.addEventListener('load',fetchUser)
genrateBtn.addEventListener('click',fetchUser)