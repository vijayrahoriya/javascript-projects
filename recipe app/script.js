const searchBtn = document.querySelector('.search'),
    viewBtn = document.querySelector('.view'),
    inputEl = document.querySelector('input'),
    contentEl = document.querySelector('.content'),
    countryName = document.querySelector('.country'),
    foodName = document.querySelector('.image p'),
    foodImage = document.querySelector('img'),
    wrapper = document.querySelector('.wrapper'),
    prevPageBtn = document.querySelector('.prevPage'),
    recipeArea = document.querySelector('.recipe'),
    recipeInfo = document.querySelector('.recipeArea'),
    errorMsg = document.querySelector('.error');

let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

inputEl.addEventListener('input',()=>{
    if(inputEl.value == ""){
        contentEl.classList.remove('active')
    }
})

searchBtn.addEventListener('click', () => {
    let dishName = inputEl.value
    if (!dishName) return;
    
    
    fetch(url + dishName).then((resp) => resp.json()).then(data => {
        try {
            contentEl.classList.add('active')
            errorMsg.classList.remove('active')
            let result = data.meals[0]
            console.log(result)
            countryName.innerHTML = result.strArea
            foodName.innerHTML = result.strMeal
            foodImage.src = result.strMealThumb
            
            let count = 1;
            let ingredients = [];
            for (let i in result) {
                let ingredient = "";
                let measure = "";
                let litags = ""
                if (i.startsWith('strIngredient') && result[i]) {
                    ingredient = result[i]
                    measure = result['strMeasure' + count]
                    count += 1;
                    let li = document.createElement('li')
                    li.innerHTML = ingredient + " " + measure
                    document.querySelector('ul').appendChild(li)
                }
                
            }
            
            viewBtn.addEventListener('click', () => {
                wrapper.classList.add('hide')
                recipeInfo.innerHTML = ""
                recipeArea.classList.add('active')
                recipeInfo.innerHTML = result.strInstructions
                prevPageBtn.classList.add('active')
                prevPageBtn.addEventListener('click', () => {
                    wrapper.classList.remove('hide')
                    recipeArea.classList.remove('active')
                })
            })
        } catch (error) {
            contentEl.classList.remove('active')
            errorMsg.classList.add('active')
        }
    })

})