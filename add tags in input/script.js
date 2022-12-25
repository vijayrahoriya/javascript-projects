const ul = document.querySelector('ul'),
input = ul.querySelector('input'),
countNumb = document.querySelector('.details span'),
removeBtn = document.querySelector('button');


let tags = []
let maxTags = 10;

countTag();
function countTag(){
    input.focus()
    countNumb.innerText = maxTags - tags.length
}

function createTag(){
    //removing all li tags before adding new li tag
    ul.querySelectorAll('li').forEach(li => li.remove())
    tags.slice().reverse().forEach(tag=>{
        let liTag = `<li>${tag} <i class="fa fa-times" onclick="remove(this, '${tag}')"></i></li>`;
        ul.insertAdjacentHTML('afterbegin',liTag)
    })
    countTag()
}

function remove(element, tag){
    let index = tags.indexOf(tag)//getting removing tag index
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)]
    element.parentElement.remove();
    countTag()

}

function addTag(e){
    if(e.key === 'Enter'){
        let tag = e.target.value.replace(/\s+/g, " ")//removing unwanted spaces
        if(tag.length > 1 && !tags.includes(tag)){
            if(tags.length < 10){
                tag.split(',').forEach(tag=>{
                    tags.push(tag)//adding each tag inside array
                    createTag();
                })
            }
        }
        e.target.value = ""
    }
}

input.addEventListener('keyup',addTag);

removeBtn.addEventListener('click',()=>{
    // window.location.reload();
    
     tags = []
     maxTags = 10;
     ul.querySelectorAll('li').forEach(li => li.remove())
    countTag();
})