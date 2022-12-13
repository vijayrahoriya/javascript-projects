const mainimage = document.getElementById('mainimage')
const smallimage= document.getElementsByClassName('small-img')

smallimage[0].onclick = ()=>{
    mainimage.src = smallimage[0].src
}
smallimage[1].onclick = ()=>{
    mainimage.src = smallimage[1].src
}
smallimage[2].onclick = ()=>{
    mainimage.src = smallimage[2].src
}
smallimage[3].onclick = ()=>{
    mainimage.src = smallimage[3].src
}