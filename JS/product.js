let API;

(async function getAPI() {
    API = await fetch('/JS/Products.json')
        .then(response => response.json())
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get("id");

    document.getElementById("ProductHeader").innerHTML = `
        <p><a href="index.html" class="me-2 text-decoration-none ">Home</a> > ${API[id].name}</p>
        <h2>${API[id].name}</h2>
`
    Display(id)
})()

function Display(id) {
    let tags = ``;
    for (let i = 0; i < API[id].tags.length; i++)
        tags += (i) ? `, ${API[id].tags[i]}` : `${API[id].tags[i]}`
    document.getElementById("ProdData").innerHTML = `
    <div class="col-xl-6 col-lg-6 col-md-6 col-xs-12">
                <div class="prod-img row">
                    <div class="col-xl-9 col-lg-9 col-md-9 col-xs-9" id="prod-img">
                        <img src="${API[id].mainImg}" alt="">
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3 col-xs-3">
                        <div class="swap-img">
                            <img src="${API[4].mainImg}" alt="">
                        </div>
                        <div class="swap-img my-4">
                            <img src="${API[8].mainImg}" alt="">
                        </div>
                        <div class="swap-img">
                            <img src="${API[3].mainImg}" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 ">
                <div class="prod-data">
                    <div class="item-data mb-5" >
                        <h2>${API[id].name}</h2>
                        <p><span>Vendor:</span> ${API[id].vendor}  | <span>Category:</span> ${API[id].categories}  | <span>SKU:</span> ${API[id].sku}  | <span>Availability:</span> ${API[id].availability ? 'In stock' : 'Out of stock'}</p>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i>1 (review)</i>
  </div>
                    <hr>
                    <div class="item-description my-5">
                        <h2>$${API[id].price}.00</h2>
                        <p>Magna fringilla urna porttitor rhoncus dolor. Faucibus vitae aliquet nec ullamcorper sit.
                            Feugiat in fermentum posuere urna nec tincidunt praesent semper. Magna eget est lorem
                            ipsum. Eros donec ac odio tempor orci dapibus. Pulvinar elementum integer enim neque
                            volutpat.</p>
                        <button class="btn btn-light ms-0" onclick="CNT(1)">+</button>
                        <button class="btn" id="cnt">1</button>
                        <button class="btn btn-light"onclick="CNT(-1)">-</button>
                        <button type="button" class="btn btn-half ms-3 px-3 py-2" onclick="GOTO(${id})">add to cart</button>
                    </div>
                    <hr>
                    <div class="item-body">
                        <p><i class="fa-sharp fa-solid fa-users"></i> Real Time <span class="real-time">${parseInt(Math.random() * 1000)}</span>
                            Visitors Right Now</p>

                        <p><span class="cat">Tags:</span> ${tags}</p>
                    </div>
                </div>
            </div>
    `

    let May = ``
    for (let i = 7; i < 11; ++i)
        May += `
            <div class="col-lg-3">
                        <div class="card rounded-0 border-0 p-2">
                            <div class="card-img">
                                <img src="${API[i].mainImg}" alt="">
                                <a class="text-black" href="">
                                    <i class="fa-solid fa-arrow-up-right-and-arrow-down-left-from-center"></i>
                                </a>
                                ${API[i].sale ? '<span href="" class="Sale text-uppercase">\n                                Sale\n                            </span>' : ''}
                                
                                ${API[i].availability ? '<button class="btn btn-half" onclick="GOTO(${id})">Add to cart</button>' : ''}
                                
                            </div>
                            <div class="card-data text-center">
                                <h5 class="underLine">${API[i].name}</h5>
                                <p>${i === 9 ? '$160.00 <span>$180.00</span>' : '$' + API[i].price + '.00'}</p>
                            </div>
                        </div>
                    </div>
        `
    document.getElementById('MayLike').innerHTML = May
}


function CNT(ch) {
    if (parseInt(document.getElementById('cnt').innerText) === 1 && ch === -1)
        return
    document.getElementById('cnt').innerText = parseInt(document.getElementById('cnt').innerText) + ch;
}

let carts = JSON.parse(localStorage.getItem("carts")) || [];

function GOTO(id) {
    carts.push(id);
    localStorage.setItem("carts", JSON.stringify(carts));
    location.href = `http://127.0.0.1:5500/cart.html`;

}