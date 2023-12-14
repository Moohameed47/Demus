let API;
let carts = JSON.parse(localStorage.getItem("carts")) || [];

(async function getAPI() {
    API = await fetch('/JS/Products.json')
        .then(response => response.json())
    document.getElementById("ProductHeader").innerHTML = `
        <p><a href="index.html" class="me-2 text-decoration-none ">Home</a> > Cart</p>
        <h2>Your Shopping Cart</h2>
`

    let cartona = ``
    // subtotal
    let subTot = 0
    for (let i = 0; i < carts.length; ++i) {
        cartona += `
                                 <div class="cartItem row align-items-start position-relative">
                                    <div class="col-3 mb-2">
                                        <img class="w-75" style="height: 160px; object-fit: cover"
                                             src="${API[carts[i]].mainImg}"
                                             alt="art image">
                                    </div>
                                    <div class="col-5 mb-2">
                                        <h6 class="p-2">${API[carts[i]].name}</h6>
                                    </div>
                                    <div class="col-2">
                                        <p class="cartItemQuantity p-1 text-center">1</p>
                                    </div>
                                    <div class="col-2">
                                        <p id="cartItem1Price p-2">$${API[carts[i]].price}.00</p>
                                    </div>
                                    <div class="btn position-absolute top-0 end-0 w-auto" onclick="Del(${i})">
                                        X
                                    </div>
                                </div>
                                <hr>
    `
        subTot += API[carts[i]].price
    }
    document.getElementById('items').innerHTML = cartona
    document.getElementById('subtotal').innerText = '$' + subTot + '.00'
    if (subTot === 0)
        document.getElementById('total').innerHTML = '$' + subTot + '.00'
    else
        document.getElementById('total').innerText = '$' + (subTot - 47) + '.00'


})()

function Del(i) {
    carts.splice(i, 1)
    localStorage.setItem("carts", JSON.stringify(carts));
    location.href = `http://127.0.0.1:5500/cart.html`;
}