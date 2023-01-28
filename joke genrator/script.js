let url = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,explicit&type=twopart'

const btn = document.querySelector('button'),
    jokeArea1 = document.querySelector('.joke1'),
    jokeArea2 = document.querySelector('.joke2'),
    category = document.querySelector('.category')
inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
    input.addEventListener('click', () => {
        if (input.id == 'single') {
            url = `https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,explicit&type=single`
        } else {
            url = `https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,explicit&type=twopart`
        }
        btn.classList.add('active')
    })
})

btn.addEventListener('click', async () => {
    jokeArea1.classList.remove('active')
    jokeArea2.classList.remove('active')
    category.innerHTML = ""

    jokeArea1.classList.add('active');
    jokeArea1.innerHTML = 'fetching joke...'
    let response = await fetch(url).then((resp) => resp.json()).then((data) => data)

    category.innerHTML = response.category

    if (inputs[0].checked) {
        jokeArea1.classList.add('active')
        jokeArea1.innerHTML = response.joke
    } else {
        jokeArea1.classList.add('active')
        jokeArea2.classList.add('active')
        jokeArea1.innerHTML = response.setup
        jokeArea2.innerHTML = response.delivery
    }
})