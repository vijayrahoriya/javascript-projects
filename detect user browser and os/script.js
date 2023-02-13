const browseDetails = document.querySelector('.browseDetails span'),
osDetails = document.querySelector('.osDetails span');

const browserList = [
    {name:'Firefox',value:'Firefox'},
    {name:'Opera',value:'OPR'},
    {name:'Edge',value:'Edg'},
    {name:'Chrome',value:'Chrome'},
    {name:'Safari',value:'Safari'},
]

const osList = [
    {name: 'Android',value:'Android'},
    {name: 'iPhone',value:'iPhone'},
    {name: 'iPad',value:'Mac'},
    {name: 'Macintosh',value:'Mac'},
    {name: 'Linux',value:'Linux'},
    {name: 'Windows',value:'Win'},
]

window.onload = () =>{
    browseChecker();
}

const browseChecker = () =>{
    let userDetails = navigator.userAgent;
    for(let i in browserList){
       if( userDetails.includes(browserList[i].value)){
        browseDetails.innerHTML = browserList[i].name || "Unknown Browser"
        break;
       }
    }
    for(let i in osList){
        if(userDetails.includes(osList[i].value)){
            osDetails.innerHTML = osList[i].name
            break;
        }
    }
}