window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition();
recognition.interimResults = true;
const words = document.querySelector('.words');
const p = document.querySelector('p')

recognition.addEventListener('result',e=>{
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    p.textContent = transcript;
    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p)
    }
    if(transcript.includes('vijay')){
        console.log("❤️❤️❤️❤️❤️❤️❤️")
    }
})

recognition.addEventListener('end', recognition.start)
recognition.start();