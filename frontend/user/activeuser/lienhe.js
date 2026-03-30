const menu = document.querySelectorAll('.nav ul li a');
menu.forEach(function(link){
    if(link.href === window.location.href){
        link.classList.add("active");
    }
});