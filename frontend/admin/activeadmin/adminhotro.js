const menu = document.querySelectorAll(".sidebar ul li a");
menu.forEach(function(link){
    if(link.href === window.location.href){
        link.classList.add("active");
    }
});

const search = document.querySelector('.search-box');
search.addEventListener('input', () =>{
    const key = search.value.toLowerCase();

    const row = document.querySelectorAll('table tr');

    row.forEach(function(cc,tt){
        if(tt === 0){
            return;
        }
        const content = cc.textContent.toLowerCase();

        if(content.includes(key)){
            cc.style.display = "";
        }
        else{
            cc.style.display = "none";
        }
    });
});

document.querySelector(".close-btn").addEventListener("click", function() {
    modal.style.display = "none";
});

document.querySelector(".approve-btn").addEventListener("click", function() {
    alert("Đã gửi phản hồi!");
    modal.style.display = "none";
});

const modal = document.querySelector('.modal');
const btnn = document.querySelectorAll('.reply');

btnn.forEach(function(vv){
    vv.addEventListener('click', ()=>{
        let row = vv.closest('tr');
        let name = row.children[1].innerText;
        let content = row.children[3].innerText;

        modal.style.display = "flex";

        document.querySelector(".modal-customer-name").innerText = name;
        document.querySelector(".modal-review-text").innerText = content;
    });
});
