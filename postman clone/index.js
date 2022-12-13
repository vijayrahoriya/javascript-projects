const parametersBox = document.getElementById('parametersBox');
const jsonBox = document.getElementById('requsetjsonBox');
const jsonRadio = document.getElementById('jsonRadio');
const paramasRadio = document.getElementById('paramsRadio');
const addparams = document.getElementById('addparam');
let paramsBox = document.getElementById('params');
const removeBtn = document.getElementsByClassName('remove');
const submitbtn = document.getElementById('submit');
const responsetxt = document.getElementById("responseText");
// initially no. of parameters 
let addedParamsCount = 0;


// Utility Functions
// 1. 
function getElementfromString(string){
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild
}

// hide the parameters box initially 
parametersBox.style.display = 'none';

// if the user click on json box hide parameter box 
paramasRadio.addEventListener('click',()=>{
    jsonBox.style.display = 'none';
    parametersBox.style.display = 'block'
})

// if the user click on parameters box hide json box 
jsonRadio.addEventListener('click',()=>{
    jsonBox.style.display = 'block';
    parametersBox.style.display = 'none'
})

addparams.addEventListener('click',()=>{
    let string = ` <div class="row my-3">
                        <legend class="col-form-label col-sm-2 pt-0">Prameter ${addedParamsCount + 2}</legend>
                        <div class="col col-md-4">
                            <input type="text" id="parameterKey${addedParamsCount + 2}" class="form-control" placeholder="Enter Key ${addedParamsCount + 2}"
                                aria-label="First name">
                        </div>
                        <div class="col col-md-4">
                            <input type="text" id="parameterValue${addedParamsCount + 2}" class="form-control" placeholder="Enter value ${addedParamsCount + 2} "
                                aria-label="Last name">
                        </div>
                        <div class="col-md-2">
                            <button id="addparam" class="btn btn-primary remove"> - </button>
                        </div>
                    </div>`

    // convet the element string to DOM node 
    let paramEl = getElementfromString(string);
    paramsBox.appendChild(paramEl)
    for(item of removeBtn){
        item.addEventListener('click',(e)=>{
            e.target.parentElement.parentElement.remove();
        })
    }
    
    addedParamsCount++;
})

// for submit button 
submitbtn.addEventListener('click',()=>{
    responsetxt.value = 'Please wait...fetching data...'

    // fetch all the values user has entered
    let url = document.getElementById('urlbox').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contenttype']:checked").value;
    // console.log(contentType)
    // for debugging the variables
    // console.log(url, requestType, contentType)

    // If user has used params option instead of json, collect all the parameters in an Object
    if(contentType == 'params'){
        data = {};
        for(let i= 0; i < addedParamsCount + 1 ; i++){
            if(document.getElementById('parameterKey' + (i+1)) != undefined){
                let key = document.getElementById('parameterKey' + (i+1)).value;
                console.log(key)
                let value = document.getElementById('parameterValue' + (i+1)).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data)
    }
    else{
        data = document.getElementById('requsetjsonText').value;
    }
    console.log(url, requestType, contentType,data)


    // if the requestType is get , invoke fetch api to create a get requset 
    if(requestType == 'GET'){
        fetch(url).then(response=> response.text()).then((data)=>{
            document.getElementById('responseText').value = data
        })
    }
    else{
        fetch(url,{
            method : 'POST',
            body : data,
            headers : {
                'Content-Type' : 'application/json; charset=UTF-8'
            }
        }).then(response=> response.text()).then((text)=>{
            document.getElementById('responseText').value = text;
        })
    }

})

