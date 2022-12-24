const speechBtn = document.querySelector('button'),
voiceList = document.querySelector('select'),
textarea = document.querySelector('textarea');

let synth = speechSynthesis,
isSpeaking = true;

function voices(){
    for(let voice of synth.getVoices()){
        // console.log(voice)
        //selecting google US English for default voice
        let selected = voice.name === 'Google US English' ? 'selected' : '';
        let options = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`
        voiceList.insertAdjacentHTML('beforeend',options)
    }
}

synth.addEventListener('voiceschanged',voices)

const texttoSpeech= (text)=>{
    let utterance = new SpeechSynthesisUtterance(text)
    for(let voice of synth.getVoices()){
        if(voice.name === voiceList.value){
            utterance.voice = voice;
        }

    }
    synth.speak(utterance)
}

speechBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(textarea.value !== ""){
        if(!synth.speaking){

            texttoSpeech(textarea.value)
        }
        if(textarea.value.length > 80){
            if(isSpeaking){
                synth.resume();
                isSpeaking = false;
                speechBtn.innerHTML = 'Pause Speech'
            }
            else{
                synth.pause();
                isSpeaking = true;
                speechBtn.innerHTML = 'Resume Speech'
            }

            setInterval(()=>{
                if(!synth.speaking && !isSpeaking){
                    isSpeaking = true;
                    speechBtn.innerHTML = 'Convert To Speech'
                }
            })
        }
        else{
            
            speechBtn.innerHTML = 'Convert To Speech'
        }
    }
})