const containerEl = document.querySelector('.container');

let carrers = ['YouTuber','Web Developer','Freelancer','Instructor'];

let carrerIndex = 0;
let charcterIndex = 0;

updateText();

function updateText(){
    charcterIndex++
    containerEl.innerHTML = `<h1>I am ${carrers[carrerIndex].slice(0,1) === 'I'? 'an' : 'a'} ${carrers[carrerIndex].slice(0,charcterIndex)}`;

    if(charcterIndex === carrers[carrerIndex].length){
        carrerIndex++;
        charcterIndex = 0;
    }

    if(carrerIndex === carrers.length){
        carrerIndex = 0;
    }

    setTimeout(() => {
        // charcterIndex++
        updateText();
    }, 300);
}
