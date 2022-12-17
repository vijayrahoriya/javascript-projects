const inputEl = document.querySelector('input');
const tr = document.querySelectorAll('tr');

const searchFun = ()=>{
    let filter = inputEl.value.toUpperCase();
    
    for(let i = 0;i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[0];
        
        if(td){
            let textValue = td.textContent || td.innerHTML;
            if(textValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = 'none'
            }
        }
    }
}

inputEl.addEventListener('keyup',searchFun);
