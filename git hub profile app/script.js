const Api = 'https://api.github.com/users/'
const wrapper = document.querySelector('.main');

const getUser = async(username)=>{
    let response = await fetch(Api + username)
    let data = await response.json();
    // console.log(data)
    let card = `<div class="user-data">
                    <div class="user-image">
                        <img src="${data.avatar_url}" alt="">
                    </div>
                    <div class="content">
                        <h3>${data.name}</h3>
                        <p>${data.bio}</p>
                        <div class="data">
                            <span>${data.followers} <strong>Followers</strong></span>
                            <span>${data.following} <strong>Following</strong></span>
                            <span>${data.public_repos} <strong>Repos</strong></span>
                        </div>
                        <ul class="lists">
                            
                        </ul>
                    </div>
                </div>`
    wrapper.innerHTML = card
    getRepos(username)
}
getUser('i-am-bhaggi')

const getRepos = async(username) =>{
    const repos = document.querySelector('.lists')
    let response = await fetch(Api + username + '/repos');
    let data = await response.json();
    data.forEach(
        (item)=>{
            const elem = document.createElement('a');
            elem.href = item.html_url
            elem.innerText = item.name
            elem.target = '_blank'
            repos.appendChild(elem)
        }
    )
}

const formSubmit = (e) =>{
    e.preventDefault();
    const searchBox = document.querySelector('input');
    if(searchBox.value !== ""){
        getUser(searchBox.value);
        searchBox.value = "";
    }
    return false;
}