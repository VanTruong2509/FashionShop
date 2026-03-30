const menu = document.querySelectorAll('.nav ul li a');
menu.forEach(function(link){
    if(window.location.href === link.href){
        link.classList.add("active");
        
        const dp = link.closest(".dropdown").closest("li");
        if(dp){
            dp.querySelector("a").classList.add("active");
        }
    }
});

const fil = document.querySelector('.fil');
const sxt = document.querySelector('.sxt');
const fl = document.querySelector('.fl');
const xp = document.querySelector('.xp');
const x = document.querySelector('.x');
const c = document.querySelector('.c');

fil.addEventListener('click', () => {
    fl.style.display = "block";
    fil.classList.add("active");
});

x.addEventListener('click', () => {
    fl.style.display = "none";
    fil.classList.remove("active");
    xp.classList.remove("active");
    sxt.style.display = "none";
});

xp.addEventListener('click', () => {
    sxt.style.display = "block";
    xp.classList.add("active");
});

c.addEventListener('click', () => {
    xp.classList.remove("active");
    sxt.style.display = "none";
});
const products = document.querySelectorAll('.sp');
const filterBtns = document.querySelectorAll('.band p');
const priceBtns = document.querySelectorAll('.cost p');
const sortBtns = document.querySelectorAll('.sxt p');
const btnKQ = document.querySelector('.kq');
const btnReset = document.querySelector('.reset');
const productContainer = document.querySelector('.pd');

let selectedcategory = "all";
let selectedprice = null;

filterBtns.forEach(function(btn){
    btn.addEventListener('click', () =>{
        filterBtns.forEach(function(b){
            b.classList.remove("active");
        });

        btn.classList.add("active");
        selectedcategory = btn.dataset.filter;
    });
});

priceBtns.forEach(function(btn){
    btn.addEventListener('click', () =>{
        priceBtns.forEach(function(b){
            b.classList.remove("active");
        });

        btn.classList.add("active");
        selectedprice = btn.dataset.price;
    });
});

btnKQ.addEventListener('click', () =>{
    let min = 0;
    let max = Infinity;

    if(selectedprice !== null){
        let range = selectedprice.split("-");
        min = parseInt(range[0]) * 1000;
        max = parseInt(range[1]) * 1000;
    }

    products.forEach(function(p){
        let categoryy = p.dataset.category;
        let pricee = parseInt(p.dataset.price);

        if((selectedcategory === "all" || selectedcategory === categoryy) && (pricee >= min && pricee <= max)){
            p.style.display = "block";
        }
        else {
            p.style.display = "none";
        }

        fl.style.display = "none";
        fil.classList.remove("active");
    });
});

sortBtns.forEach(function(btn){
    btn.addEventListener('click', () =>{
        sortBtns.forEach(function(b){
            b.classList.remove("active");
        });
        
        btn.classList.add("active");
        let arr = [];

        products.forEach(function(p){
            if(p.style.display !== "none"){
                arr.push(p);
            }
        });

        arr.sort(function(a,b){
            let A = a.dataset.price;
            let B = b.dataset.price;

            if(btn.dataset.sort === "asc"){
                return A - B;
            }
            else{
                return B - A;
            }
        });

        arr.forEach(function(p){
            productContainer.appendChild(p);
        });
        
        xp.classList.remove("active");
        sxt.style.display = "none";
    });  
});

btnReset.addEventListener('click',() => {
    selectedcategory = "all";
    selectedprice = null;

    document.querySelectorAll('.active').forEach(function(ac){
        ac.classList.remove("active");
    });

    products.forEach(function(p){
        p.style.display = "block";
    });
    
    fl.style.display = "none";
    fil.classList.remove("active");
    xp.classList.remove("active");
    sxt.style.display = "none";
});

const search = document.querySelector('.search-box');
const sp = document.querySelectorAll('.sp');

search.addEventListener('input', () =>{
    const key = search.value.toLowerCase();
    sp.forEach(function(p){
        const spp = p.querySelector("h3").textContent.toLowerCase();
        if(spp.includes(key)){  
            p.style.display = "block";
        }
        else{
            p.style.display = "none";
        }
    });
});