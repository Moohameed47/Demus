function GOTO(i) {
    location.href = `http://127.0.0.1:5500/product.html?id=${i}`;
}

let carts = JSON.parse(localStorage.getItem("carts")) || [];

function GOTOCart(id) {
    carts.push(id);
    localStorage.setItem("carts", JSON.stringify(carts));
    location.href = `http://127.0.0.1:5500/cart.html`;
}