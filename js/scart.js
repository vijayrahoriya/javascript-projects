let carticon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closecart = document.querySelector('#close-cart')
// console.log(carticon)


carticon.onclick = () => {
    cart.classList.add('active')

}
closecart.onclick = () => {
    cart.classList.remove('active')
}

// cart working js 
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

// making function 
function ready() {
    // remove items from cart 
    var removecartbuttons = document.getElementsByClassName('cart-remove')
    // console.log(removecartbuttons)
    for (var i = 0; i < removecartbuttons.length; i++) {
        var button = removecartbuttons[i]
        button.addEventListener('click', removecartitem)
    }

    // quantity change 
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantitychanged);
    }

    //add  to cart
    var addcart = document.getElementsByClassName('add-cart')
    for (var i = 0; i < addcart.length; i++) {
        var button = addcart[i]
        button.addEventListener('click', addcartclicked)
    }

    // buy now button 
    document.getElementsByClassName('btn-buy')[0].addEventListener('click',buybuttonclicked)
}

// buybuttonclicked function 
function buybuttonclicked(){
    alert("Your Order is placed")
    var cartcontent = document.getElementsByClassName('cart-content')[0]
    while(cartcontent.hasChildNodes()){
        cartcontent.removeChild(cartcontent.firstChild)
    }
    updatetotal();
}

// remove item from cart 
function removecartitem(e) {
    var buttonclicked = e.target
    buttonclicked.parentElement.remove()
    updatetotal()
}

// quantity change function 
function quantitychanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}

//addcartclicked function 
function addcartclicked(event) {
    var button = event.target
    var shopproducts = button.parentElement
    var title = shopproducts.getElementsByClassName('product-title')[0].innerText
    var price = shopproducts.getElementsByClassName('price')[0].innerText
    var productimg = shopproducts.getElementsByClassName('product-img')[0].src
    addproducttocart(title, price, productimg)
    updatetotal();
}

//addproducttocart function
function addproducttocart(title, price, productimg) {
    var cartshopbox = document.createElement('div');
    cartshopbox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartitemsnames = cartItems.getElementsByClassName('cart-product-title')
    for (var i = 0; i < cartitemsnames.length; i++) {
        if(cartitemsnames[i].innerText == title){
            alert('You have already add this item to cart')
            return;
        }
    }

    var cartboxcontent = `
                        <img src="${productimg}" class="cart-img" alt="">
                        <div class="detail-box">
                        <div class="cart-product-title">${title}</div>
                        <div class="cart-price">${price}</div>
                        <input type="number" value="1" class="cart-quantity">
                        </div>
                        <i class="bx bxs-trash-alt cart-remove"></i>`
    cartshopbox.innerHTML = cartboxcontent
    cartItems.append(cartshopbox)
    cartshopbox.getElementsByClassName('cart-remove')[0].addEventListener('click',removecartitem)
    cartshopbox.getElementsByClassName('cart-quantity')[0].addEventListener('change',quantitychanged)
}





// update total 
function updatetotal() {
    var cartcontent = document.getElementsByClassName('cart-content')[0]
    var cartboxes = cartcontent.getElementsByClassName('cart-box')
    var total = 0;

    for (var i = 0; i < cartboxes.length; i++) {
        var cartbox = cartboxes[i]
        var priceelement = cartbox.getElementsByClassName('cart-price')[0]
        var quantityelement = cartbox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceelement.innerText.replace("$", ""))
        var quantity = quantityelement.value;
        total = total + (price * quantity)
    }
        //if price contain some cents value
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName('total-price')[0].innerText = "$" + total
    
}
