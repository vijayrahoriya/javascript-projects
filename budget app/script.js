const budgetAmount = document.querySelector('#budget'),
    setBudgetBtn = document.querySelector('#set'),
    productName = document.querySelector('#product'),
    productCost = document.querySelector('#amount'),
    checkAmountBtn = document.querySelector('#check'),
    totalBudget = document.querySelector('.total'),
    expenseAmount = document.querySelector('.expense'),
    balanceAmount = document.querySelector('.balance'),
    expensesList = document.querySelector('.lists');

checkAmountBtn.style.pointerEvents = 'none'
let amount = 0;

setBudgetBtn.addEventListener('click', () => {
    let value = parseInt(budgetAmount.value)
    if (!value) return;
    totalBudget.innerHTML = value
    checkAmountBtn.style.pointerEvents = 'auto'
    checkAmount();
})

const checkAmount = () =>{
    let product = productName.value
    let productAmount = parseInt(productCost.value)
    if(!product && !productAmount) return;
    amount += productAmount;
    expenseAmount.innerHTML = amount;
    balanceAmount.innerHTML = parseInt(budgetAmount.value) - amount
    expensesList.innerHTML += `<li>
                                    <span class="product">${product}</span>
                                    <span class="amount">${productAmount}</span>
                                    <div class="icons"><i class="fa fa-edit"></i>
                                    <i id="trash" class="fa fa-trash"></i></div>
                                </li>`
    expensesList.querySelectorAll('i').forEach(icon=>{
        icon.addEventListener('click',(e)=>{
            if(e.target.id == 'trash'){
                let elem = e.target.parentElement
                elem.parentElement.remove();
            }
            let elem = e.target.parentElement
            elem.parentElement.remove();
            let updateProduct = elem.parentElement.querySelector('.product').textContent
            let updateCost =  parseInt(elem.parentElement.querySelector('.amount').textContent)
            productName.value = updateProduct
            productCost.value = updateCost

            amount -= updateCost
            expenseAmount.innerHTML = parseInt(expenseAmount.textContent) - updateCost
            balanceAmount.innerHTML = parseInt(balanceAmount.textContent) + updateCost

        })
    })
    productName.value =""
    productCost.value =""

}

checkAmountBtn.addEventListener('click', () => {
    checkAmount()
})