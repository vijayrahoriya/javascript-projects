const nav = document.querySelector('.nav'),
searchIcon = document.querySelector('#searchIcon')

searchIcon.addEventListener('click',()=>{
    nav.classList.toggle('showSearch')
    if(nav.classList.contains('showSearch')){
        return searchIcon.classList.replace('uil-search','uil-times')
    }
    searchIcon.classList.replace('uil-times','uil-search')
})