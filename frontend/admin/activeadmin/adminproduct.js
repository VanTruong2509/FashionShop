const menu = document.querySelectorAll(".sidebar ul li a");
menu.forEach(function(link){
    if(link.href === window.location.href){
        link.classList.add("active");
    }
});

const search = document.querySelector('.search-box');

search.addEventListener('input',() =>{
    const key = search.value.toLowerCase();

    const row = document.querySelectorAll('table tr');
    row.forEach(function(cc, bb){
        if(bb === 0){
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