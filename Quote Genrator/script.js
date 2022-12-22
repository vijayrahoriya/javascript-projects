const api = "https://type.fit/api/quotes";
// fetch(api).then(response=> response.json()).then(data=> console.log(data[0].author))
const btnEl = document.querySelector('.btn'),
quote = document.querySelector('.mid'),
authorEl = document.querySelector('.author'),
twitterEl = document.querySelector('.fa-twitter');

btnEl.addEventListener('click',async()=>{
    try{
        let response = await fetch(api).then(response=> response.json()).then(info => info);
        console.log(response.length)
        var random = response[Math.floor(Math.random() * response.length)]
        var text = random.text;
        var aAuthor = random.author
        quote.innerHTML = text;
        authorEl.innerHTML = aAuthor
    }
    catch(err){
        console.log(err);
    }
})

twitterEl.addEventListener('click',()=>{
    let tweetPost = `https://twitter.com/intent/tweet?text=${quote.innerHTML}`;
    window.open(tweetPost);
    // this.style.transform = "rotate(360deg)"
})
