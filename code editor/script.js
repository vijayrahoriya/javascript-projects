function run(){
    let htmlCode = document.querySelector('#html-code').value
    let cssCode = document.querySelector('#css-code').value
    let jsCode = document.querySelector('#js-code').value
    let output = document.querySelector('#output');

    output.contentDocument.body.innerHTML = htmlCode + "<style>"+cssCode+"</style>"
    output.contentWindow.eval(jsCode)
}