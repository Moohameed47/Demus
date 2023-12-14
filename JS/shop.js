let API;

(async function getAPI() {
    API = await fetch('/JS/Products.json')
        .then(response => response.json())
    document.getElementById('Results').innerText = `Showing All Products`
    display()
})()

function display() {
    let cartona = ``
    for (let i = 0; i < API.length; i++) {
        if (API[i].sale && API[i].availability)
            cartona += `<div class="col-lg-4 wow fadeIn" id="Prod${i}" >
                            <div class="card rounded-0 border-0">
                                <div class="card-img">
                                    <img src="${API[i].mainImg}"
                                        alt="">
                                    <a class="text-black" href="">
                                        <i class="fa-solid fa-arrow-up-right-and-arrow-down-left-from-center"></i>
                                    </a>
                                    <button class="btn btn-half"onclick="GOTOCart(${i})">Add to cart</button>
                                    <span class="Sale text-uppercase">Sale</span>
                                </div>
                                <div class="card-data text-center">
                                    <h5 class="underLine" onclick="GOTO(${i})">${API[i].name}</h5>
                                    <p>${API[i].price}.00 <span>${API[i].oldPrice}.00</span></p>
                                </div>
                            </div>
                        </div>`
        else if (API[i].availability)
            cartona += `<div class="col-lg-4 wow fadeIn" id="Prod${i}" >
                        <div class="card rounded-0 border-0">
                            <div class="card-img">
                                <img src="${API[i].mainImg}"
                                    alt="">
                                <a class="text-black" href="">
                                    <i class="fa-solid fa-arrow-up-right-and-arrow-down-left-from-center"></i>
                                </a>
                                <button class="btn btn-half"onclick="GOTOCart(${i})">Add to cart</button>
                                </div>
                            <div class="card-data text-center">
                                <h5 class="underLine" onclick="GOTO(${i})">${API[i].name}</h5>
                                <p>${API[i].price}.00 </p>
                            </div>
                        </div>
                    </div>`
        else
            cartona += `<div class="col-lg-4 wow fadeIn" id="Prod${i}" >
                    <div class="card rounded-0 border-0">
                        <div class="card-img">
                            <img src="${API[i].mainImg}"
                                alt="">
                            <a class="text-black" href="">
                                <i class="fa-solid fa-arrow-up-right-and-arrow-down-left-from-center"></i>
                            </a>
                            <span class="Out text-uppercase">Out of stock</span>
                            </div>
                        <div class="card-data text-center">
                            <h5 class="underLine" onclick="GOTO(${i})">${API[i].name}</h5>
                            <p>${API[i].price}.00 </p>
                        </div>
                    </div>
                </div>`
    }
    let AllProduct = document.getElementById('Products').innerHTML = cartona
}

let cats = []

function displayCategory(cat) {
    for (let i = 0; i < API.length; i++) {
        cats.push(API[i].categories)
    }

}

// let el = $(`#Prod${i}`)[0];
// if (API[i].categories.includes(cat)) {
//     el.style.display = '';
// } else {
//     el.style.display = 'none';
// }

function displayMaterial(tag) {
    for (let i = 0; i < API.length; i++)
        for (let i = 0; i < API[i].tags.length; i++) {
            let el = $(`#Prod${i}`)[0];
            if (API[i].tags.includes(tag)) {
                el.style.display = '';
            } else {
                el.style.display = 'none';
            }
        }
}

function GOTO(i) {
    location.href = `http://127.0.0.1:5500/product.html?id=${i}`;
}

let carts = JSON.parse(localStorage.getItem("carts")) || [];

function GOTOCart(id) {
    carts.push(id);
    localStorage.setItem("carts", JSON.stringify(carts));
    location.href = `http://127.0.0.1:5500/cart.html`;
}