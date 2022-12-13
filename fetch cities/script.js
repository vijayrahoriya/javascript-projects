const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const serach = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions')

let cities = [];
fetch(endpoint).then(Response => Response.json()).then((data)=>{
    cities.push(...data)
})


function findMatches(wordToMatch, cities){
    return cities.filter((place)=>{
        // here we need to figure out if the city or state macthces what was searched
        let regx = new RegExp(wordToMatch, 'gi')
        return place.city.match(regx) || place.state.match(regx);
    })
}

function displayMatches(){
    // console.log(this.value);
    let matchArray = findMatches(this.value,cities)
    // console.log(matchArray)
    let html = matchArray.map((place)=>{
        let regx = new RegExp(this.value,'gi');
        const cityName = place.city.replace(regx , `<span class='hl'>${this.value}</span>`)
        const stateName = place.state.replace(regx , `<span class='hl'>${this.value}</span>`)
        return `
            <li>
                <span class="name">${cityName}, ${stateName},</span>
                <span class="population">${place.population}</span>
            </li>
            `
    }).join('')
    suggestions.innerHTML = html;
    if(serach.value == ''){
        suggestions.innerHTML = ''
    }
}

serach.addEventListener('change', displayMatches)
serach.addEventListener('keyup',displayMatches)

findMatches('Bos',cities)
