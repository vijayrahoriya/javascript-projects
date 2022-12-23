const inputEl = document.querySelector("input"),
btnEl = document.querySelector('button');

btnEl.addEventListener('click',(e)=>{
    btnEl.innerHTML = 'Downloading file...'
    fetchFile(inputEl.value);
})

const fetchFile = (url)=>{
    fetch(url).then(resp => resp.blob()).then(file=> {
        let tempURL = URL.createObjectURL(file);
        let aTag = document.createElement('a');
        aTag.href = tempURL;
        aTag.download = url.replace(/^.*[\\\/]/, "");
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempURL);//removing tempURL from the document
        btnEl.innerHTML = 'Download File'
    }).catch(()=>{
        btnEl.innerHTML = 'Download File',
        alert('Failed to download')
    })
}