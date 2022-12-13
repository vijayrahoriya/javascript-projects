const first = "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/30/59066e41-faef-40e8-99b9-97327645d5941669798102371-PB-DK-Day-2-.jpg";
const second = "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg";
const third = "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg";
const fourth = "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg";
const fifth = "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/12/5/907c599f-95c1-42ac-a226-3239c243dc871670253016625-boohoo-desktop-banner.gif";

let images = [first,second,third,fourth,fifth];
const banner = document.getElementById('banner').firstElementChild;
let index = 0;
setInterval(()=>{
    if(index === images.length){
        index = 0;
    }
    banner.src = images[index]
    imgfunc();
},3000)

const imgfunc = ()=>{
    index++;
}

const bar = document.querySelector('.fa-bars');
const nav = document.querySelector('ul');
const times = document.querySelector('.fa-times');

bar.addEventListener('click',()=>{
    nav.style.top = '0px';
    times.style.display = 'block';
    bar.style.display = 'none';
})

times.addEventListener('click',()=>{
    nav.style.top = '-2000px';
    times.style.display = 'none';
    bar.style.display = 'block'
})


