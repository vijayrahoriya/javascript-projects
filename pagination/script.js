const ulTag = document.querySelector('ul');
let totalpages = 20;

function element(totalpages, page){
    let liTag ="";
    let activeLi;
    let beforPages = page - 1;
    let afterPages = page + 1;
    if(page > 1){
        liTag += ` <li class="btn prev" onclick="element(totalpages, ${page-1})"><span> <i class="fas fa-angle-left"></i> Prev</span></li>`
    }
    if(page > 2){
        liTag += `<li class="numb" onclick="element(totalpages, 1)"><span>1</span></li>`
        if(page > 3){
            liTag += '<li class="dots"><span>...</span></li>'
        }
    }

    //how to show many li and pages after the current li
    if(page == totalpages){
        beforPages = beforPages - 2;
    }else if(page == totalpages - 1){
        beforPages = beforPages - 1;
    }

    //how to show many li and pages after the current li
    if(page == 1){
        afterPages = afterPages + 2;
    }else if(page == 2){
        afterPages = afterPages + 1;
    }

    for(let pageLength = beforPages; pageLength<=afterPages; pageLength++){
        if(pageLength > totalpages){
            continue;
        }
        if(pageLength == 0){
            pageLength = pageLength + 1
        }
        if(page == pageLength){
            activeLi = 'active';
        }else{
            activeLi = ""
        }
        liTag += `<li class="numb ${activeLi}" onclick="element(totalpages, ${pageLength})"><span>${pageLength}</span></li>`
    }
    if(page < totalpages - 1){
        if(page < totalpages - 2){
            liTag += '<li class="dots"><span>...</span></li>'
        }
        liTag += `<li class="numb" onclick="element(totalpages, ${totalpages})"><span>${totalpages}</span></li>`
    }
    if(page < totalpages){
        liTag += `<li class="btn next" onclick="element(totalpages, ${page+1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`
    }
    ulTag.innerHTML = liTag
}

element(totalpages, 5)