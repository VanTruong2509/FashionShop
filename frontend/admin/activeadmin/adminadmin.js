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

    row.forEach(function(aa,dd){
        if(dd === 0){
            return;
        }
        const content = aa.textContent.toLowerCase();

        if(content.includes(key)) {
            aa.style.display = "";
        }
        else{
            aa.style.display = "none";
        }
    });
});