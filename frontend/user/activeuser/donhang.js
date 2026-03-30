const menu = document.querySelectorAll('.nav ul li a');
menu.forEach(function(link){
    if(link.href === window.location.href){
        link.classList.add("active");
    }
});

const tc = document.querySelector('.tc');
const cxn = document.querySelector('.cxn');
const cgh = document.querySelector('.cgh');
const dg = document.querySelector('.dg');
const dh = document.querySelector('.dh');
const contentone = document.querySelector('.contentone');
const contenttwo = document.querySelector('.contenttwo');
const contentthree = document.querySelector('.contentthree');
const contentfour = document.querySelector('.contentfour');

tc.addEventListener('click', () => {
    contentone.style.display = "block";
    contenttwo.style.display = "block";
    contentthree.style.display = "block";
    contentfour.style.display = "block";
    tc.classList.add("active");
    cxn.classList.remove("active");
    cgh.classList.remove("active");
    dg.classList.remove("active");
    dh.classList.remove("active");
});

cxn.addEventListener('click', () => {
    contentone.style.display = "block";
    contenttwo.style.display = "none";
    contentthree.style.display = "none";
    contentfour.style.display = "none";
    cxn.classList.add("active");
    tc.classList.remove("active");
    cgh.classList.remove("active");
    dg.classList.remove("active");
    dh.classList.remove("active");
});

cgh.addEventListener('click', () => {
    contentone.style.display = "none";
    contenttwo.style.display = "block";
    contentthree.style.display = "none";
    contentfour.style.display = "none";
    cgh.classList.add("active");
    cxn.classList.remove("active");
    tc.classList.remove("active");
    dg.classList.remove("active");
    dh.classList.remove("active");
});

dg.addEventListener('click', () => {
    contentone.style.display = "none";
    contenttwo.style.display = "none";
    contentthree.style.display = "block";
    contentfour.style.display = "none";
    dg.classList.add("active");
    cxn.classList.remove("active");
    cgh.classList.remove("active");
    tc.classList.remove("active");
    dh.classList.remove("active");
});

dh.addEventListener('click', () => {
    contentone.style.display = "none";
    contenttwo.style.display = "none";
    contentthree.style.display = "none";
    contentfour.style.display = "block";
    dh.classList.add("active");
    cxn.classList.remove("active");
    cgh.classList.remove("active");
    dg.classList.remove("active");
    tc.classList.remove("active");
});

