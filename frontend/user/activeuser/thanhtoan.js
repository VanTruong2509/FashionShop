const select = document.querySelector('select');
const QR = document.querySelector('.QR');

select.addEventListener('change', function() {
    if(this.value === "pay"){
        QR.style.display = "block"
    }
    else{
        QR.style.display = "none";
    }
});