const counterEl = document.querySelectorAll('.counter');

counterEl.forEach((counter)=>{
    counter.innerText = '0';
    increamentcounter()
    function increamentcounter(){
        let currntnum = +counter.innerText;
        const dataceil = counter.getAttribute('data-ceil');
        const increament = dataceil / 15;
        if(currntnum < dataceil){
            currntnum = Math.ceil(currntnum + increament);
            counter.innerText = currntnum;
            setTimeout(increamentcounter,50)
        }
        else{
            counter.innerText = dataceil
        }
    }
})