const nb = document.querySelector('.nb');
const bc = document.querySelector('.bc');
const km = document.querySelector('.km');

const pd = document.querySelector('.pd');
const re = document.querySelector('.re');
const ge = document.querySelector('.ge');

const tl = document.querySelector('.tl')

nb.addEventListener('click', () => {
    pd.style.display = "flex";
    re.style.display = "none";
    ge.style.display = "none";
    nb.classList.add("active");
    bc.classList.remove("active");
    km.classList.remove("active");
    tl.innerHTML = `Sản Phẩm Nổi Bật`;
    
});

bc.addEventListener('click', () => {
    pd.style.display = "none";
    re.style.display = "flex";
    ge.style.display = "none";
    bc.classList.add("active");
    nb.classList.remove("active");
    km.classList.remove("active");
    tl.innerHTML = `Sản Phẩm Bán Chạy`;
});

km.addEventListener('click', () => {
    pd.style.display = "none";
    re.style.display = "none";
    ge.style.display = "flex";
    km.classList.add("active");
    bc.classList.remove("active");
    nb.classList.remove("active");
    tl.innerHTML = `Sản Phẩm Khuyến Mãi`;
});

const menu = document.querySelectorAll('.nav ul li a');
menu.forEach(function(link){
    if(link.href === window.location.href){
        link.classList.add("active");
    }
});

const buttons = document.querySelectorAll(".cart");

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const product = btn.closest(".sp, .bcc, .kmm");

        const name = product.querySelector("h3").innerText;
        const priceText = product.querySelector(".price p").innerText;
        const price = parseInt(priceText.replace(/\D/g, ""));

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find(item => item.name === name);

        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Added to cart!");
    });
});