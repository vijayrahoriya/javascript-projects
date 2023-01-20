function calculate(){
    var bmi ;
    result = document.querySelector('#result');

    var weight = parseInt(document.querySelector("#weight").value)
    var height = parseInt(document.querySelector("#height").value)
    document.querySelector('#weight-val').textContent = weight + 'kg';
    document.querySelector('#height-val').textContent = height + 'cm';

    bmi = (weight / Math.pow((height/100),2)).toFixed(1)
    result.textContent = bmi
    if(bmi < 18.5){
        category = "Underweight"
        result.style.color = "#ffc44d"
    }else if(bmi >= 18.5 && bmi <=24.9){
        category = 'Normal Weight'
        result.style.color = "#obe881"
    }else if(bmi >=25 && bmi <= 29.9){
        category = "Overweight"
        result.style.color = "#ff884d"
    }else{
        category = "Obese"
        result.style.color = "#ff5e57"
    }
    document.querySelector("#category").textContent = category
}