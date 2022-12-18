const input1 = document.querySelectorAll('input')[0],
    input2 = document.querySelectorAll('input')[1],
    input3 = document.querySelectorAll('input')[2],
    input4 = document.querySelectorAll('input')[3],
    input5 = document.querySelectorAll('input')[4],
    btnEl = document.querySelector('button'),
    result = document.querySelector('.result'),
    closeBtn = document.querySelector('.fa-times');

let studentMarks = 0;
let totalMarks = 500;

btnEl.addEventListener('click', (e) => {
    e.preventDefault();

    studentMarks += parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value) + parseInt(input4.value) + parseInt(input4.value);

    let percentage = (studentMarks / totalMarks) * 100

    result.style.display = 'flex'
    result.innerText = `Your Number is ${studentMarks} out of ${totalMarks} and Your percentage is ${percentage}% and ${percentage >= 36 ? "You are pass" : " You are Fail"}`;

    closeBtn.classList.remove('active');
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
    input5.value = "";


})


closeBtn.addEventListener('click', () => {
    closeBtn.classList.toggle('active');
    result.style.display = "none"
})