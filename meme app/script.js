let url = " https://meme-api.herokuapp.com/gimme/";
//Array of subreddits of your choice
let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

let getMeme = () =>{
    let randomSub = subreddits[Math.floor(Math.random() * subreddits.length)]

   fetch(url+randomSub).then((res)=> res.json()).then(data=>{
    console.log(data)
   })

}

getMeme()
