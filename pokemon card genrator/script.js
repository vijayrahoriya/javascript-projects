const url = "https://pokeapi.co/api/v2/pokemon/"
const card = document.querySelector("#card"),
btn = document.querySelector('.btn');

const typeColor = {
    bug:"#26dw81",
    dragon:"#ffeaa7",
    electric:"#fed330",
    fairy:"#FF0069",
    fighting:"#30336b",
    fire:"#f0932b",
    flying:"#81ecec",
    grass:"#00b894",
    ground:"#EFB549",
    ghost:"#a55eea",
    ice:"#74b9ff",
    normal:"#95afc0",
    poison:"#6c5ce7",
    psychic:"#a29bfe",
    rock:"#2d3436",
    water:"#0190FF"
}

const getPokeData = () =>{
    //genrate random number between 1 to 150;
    let id = Math.floor(Math.random() * 150) + 1;
    const finalUrl = url + id
    fetch(finalUrl).then((resp)=> resp.json()).then((data)=>{
            genrateCard(data)
        })
}

const genrateCard = (data) =>{
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default    ;
    const pokeName = data.name;
    const statAttack = data.stats[1].base_stat
    const statDefence = data.stats[2].base_stat
    const statSpeed = data.stats[5].base_stat

    const themeColor = typeColor[data.types[0].type.name]

    card.innerHTML = `<p class="hp">
                        <span>HP</span>
                        ${hp}
                    </p>
                    <img src=${imgSrc} alt="">
                    <h2 class="poke-name">${pokeName}</h2>
                    <div class="types">
                        
                    </div>
                    <div class="stats">
                        <div>
                            <h3>${statAttack}</h3>
                            <p>Attack</p>
                        </div>
                        <div>
                            <h3>${statDefence}</h3>
                            <p>Defence</p>
                        </div>
                        <div>
                            <h3>${statSpeed}</h3>
                            <p>Speed</p>
                        </div>
                    </div>`
    appendTypes(data.types);
    styleColor(themeColor)
}

const appendTypes = (types) =>{
    types.forEach(item=>{
        let span = document.createElement('SPAN');
        span.textContent = item.type.name
        document.querySelector('.types').appendChild(span)
    })
}

const styleColor = (color) =>{
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 60%, #fff 36%)`
    card.querySelectorAll('.types span').forEach(typeColor=>{
        typeColor.style.backgroundColor = color
    })
}

btn.addEventListener('click',getPokeData)
window.addEventListener('load',getPokeData)