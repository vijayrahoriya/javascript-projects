const testimonials = [
    {
        name:'Quincey Y',
        img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text:"You won't regret it. Apple is exactly what our business has been lacking. I couldn't have asked for more than this"
    },
    {
        name:'Tabatha E',
        img:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text:"Apple has completely surpassed our expectations. Apple is the most valuable business resource we have EVER purchased."
    },
    {
        name:'Elliott Q',
        img:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text:"Since I invested in apple I made over 100,000 dollars profits. We can't understand how we've been living without apple. I love your system. Apple impressed me on multiple levels"
    },
]
const container = document.querySelector('.testimonial-container')

let index = 0;

const updateTesti = ()=>{
    container.innerHTML = '';
    let data;
    data = `<img src="${testimonials[index].img}" alt="User image">
    <p class="text">${testimonials[index].text}</p>
    <h3 class="user-name">
        ${testimonials[index].name}
    </h3>`
    container.insertAdjacentHTML("beforeend" ,data)
}

updateTesti();
let timer = setInterval(()=>{
    if(index >= testimonials.length){
        index = 0;
    }
    updateTesti();
    index++
},5000)
