const searchBtn = document.querySelector('button'),
content = document.querySelector('.content'),
inputEl = document.querySelector('input')

let sound;


let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

searchBtn.addEventListener('click',()=>{
    let value = inputEl.value
    let finalUrl = url + value
    fetch(finalUrl).then((resp)=> resp.json()).then((data)=>{
        console.log(data)
        content.innerHTML = `<div class="field">
                                <div class="word">
                                    <h3>${value}</h3>
                                    <span>${data[0].meanings[0].partOfSpeech}</span>
                                    <span>${data[0].phonetic
                                    }</span>
                                    
                                </div>
                                <i onclick="playSound()" class="fa fa-volume-high"></i>
                            </div>
                            <div class="syno">${data[0].meanings[0].definitions[0].definition}</div>
                            <div class="example">${data[0].meanings[0].definitions[0].example || ""}</div>`
        
                            sound = content.querySelector('i')                    
        sound.setAttribute('src',`https:${data[0].phonetics[0].audio}`)
        }).
    catch(()=>{
        content.innerHTML = `<h1>Couldn't find the word</h1>`
    })
    content.classList.add('active')
})

function playSound(){
    sound.play();
}
