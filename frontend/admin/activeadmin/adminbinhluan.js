const menu = document.querySelectorAll(".sidebar ul li a");
menu.forEach(function(link){
    if(link.href === window.location.href){
        link.classList.add("active");
    }
});

const modal = document.querySelector('.modal');

const btnn =document.querySelectorAll('.reply-btn');

btnn.forEach(function(vv){
    vv.addEventListener('click', () =>{
        let row = vv.closest('tr');
        let name = row.children[2].innerText;
        let content = row.children[4].innerText;

        modal.style.display = "flex";

        document.querySelector(".modal-customer-name").innerText = name;
        document.querySelector(".modal-review-text").innerText = content;

    });
});
document.querySelector(".close-btn").addEventListener("click", function() {
    modal.style.display = "none";
});

document.querySelector(".approve-btn").addEventListener("click", function() {
    alert("Đã gửi phản hồi!");
    modal.style.display = "none";
});

const star = document.querySelector('.filter-box');
star.addEventListener("change", () =>{
    const rows = document.querySelectorAll('table tr');

    rows.forEach(function(tv, vv){
        if(vv === 0){
            return;
        }

        const startt = tv.querySelector('.stars').getAttribute('data-star');
        if(star.value === "all" || star.value === startt) {
            tv.style.display = "";
        }
        else{
            tv.style.display ="none";
        }
    });
});


const search = document.querySelector('.search-box');

search.addEventListener('input', () => {
    const key = search.value.toLowerCase();

    const row = document.querySelectorAll('table tr');
    row.forEach(function(aa,dd){
        if(dd === 0){
            return;
        }

        const content = aa.textContent.toLowerCase();
        if(content.includes(key)){
            aa.style.display = "";
        }
        else{
            aa.style.display = "none";
        }
    });
});