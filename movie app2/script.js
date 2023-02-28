const searchInput = document.querySelector('input'),
searchBtn = document.querySelector('button'),
imageEl = document.querySelector('img'),
contentEl = document.querySelector('.content');

const getMovie = () =>{
    let url = ` http://www.omdbapi.com/?t=${searchInput.value}&apikey=f642ec11`
    if(searchInput.value.length <= 0){
        contentEl.innerHTML = `<h3>Please Enter A movie name</h3>`
    }
    else{
        try{
            fetch(url).then(resp=> resp.json()).then(data=>{
                contentEl.innerHTML = `<div class="info">
                                        <div class="image">
                                            <img src="${data.Poster}" alt="">
                                        </div>
                                        <div class="rate">
                                            <h5>${data.Title}</h5>
                                            <p><i class="fa-solid fa-star"></i> ${data.imdbRating}</p>
                                            <div class="spans">
                                                <span>${data.Rated}</span>
                                                <span>${data.Year}</span>
                                                <span>${data.Runtime}</span>
                                            </div>
                                            <div class="but">
                                                <div>${data.Genre.split(',').join(",")}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <label for="">Plot: </label>
                                    <p>${data.Plot}</p>
                                    <label for="">Cast: </label>
                                    <p>${data.Actors}</p>`
            })
        }
        catch(err){
            console.log("some error")
        }
    }
}

searchBtn.addEventListener('click',getMovie)