const tabsBox = document.querySelector('.tabs-box'),
allTabs = document.querySelectorAll('.tab');
arrowIcon = document.querySelectorAll('.icon i');

const handleIcons = () =>{
    let scrollVal = Math.round(tabsBox.scrollLeft);
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth
    arrowIcon[0].parentElement.style.display = scrollVal > 0? 'flex' : 'none'
    arrowIcon[1].parentElement.style.display = maxScrollableWidth > scrollVal? 'flex' : 'none'
}

arrowIcon.forEach(icon=>{
    icon.addEventListener('click',()=>{
        // if clicked icons is left reduce 350 from tabsBox scrollLeft else add 
        tabsBox.scrollLeft += icon.id === 'left' ? -350 : 350;
        setTimeout(()=>handleIcons() ,50);
    })
})

allTabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        // removing active class from the previous tab and adding to current clicked tab 
        tabsBox.querySelector('.active').classList.remove('active');
        tab.classList.add('active');
    })
})

let isDragging = false;

const dragging = (e) =>{
    // console.log('draggin');
    if(!isDragging) return;
    tabsBox.classList.add('dragging');
    tabsBox.scrollLeft -= e.movementX;
    handleIcons()
}

const dragStop = () =>{
    isDragging = false;
    tabsBox.classList.remove('dragging')
}

tabsBox.addEventListener('mousedown', () =>{
    isDragging = true;
});
tabsBox.addEventListener('mousemove',dragging);
document.addEventListener('mouseup',dragStop);