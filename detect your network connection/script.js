const toastEl = document.querySelector('.toast'),
wifiEl = document.querySelector('.icon'),
titleEl = document.querySelector('.details span'),
subtitle = document.querySelector('.details p'),
closeIcon = document.querySelector('.close-icon');

window.onload = ()=>{
    function ajax(){
        let xhr = new XMLHttpRequest();//creating a new xml object
        xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true)//sending get request to this url
        xhr.onload = (e) =>{
            // console.log(e)
            if(xhr.status == 200 && xhr.status < 300){
                toastEl.classList.remove('offline')
                titleEl.innerHTML = `You're online now`;
                subtitle.innerHTML = `Hurray! Internet is connected`;
                wifiEl.innerHTML = `<i class="uil uil-wifi"></i>`;

                closeIcon.onclick=()=>{
                    toastEl.parentElement.classList.add('hide')
                }

                setTimeout(() => {
                    toastEl.parentElement.classList.add('hide')
                }, 5000);
            }
            else{
                offline()
            }
        }
        xhr.onerror = ()=>{
            offline();
            toastEl.parentElement.classList.remove('hide')
        }
        xhr.send();
    }

    function offline(){
        toastEl.classList.add('offline')
        titleEl.innerHTML = `You're offline now`;
        subtitle.innerHTML = `Ooops  Internet is  disconnected`;
        wifiEl.innerHTML = `<i class="uil uil-wifi-slash"></i>`;
    }

    setInterval(ajax, 100);
}