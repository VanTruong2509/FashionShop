const bl = document.querySelector('.bl');
const cmm = document.querySelector('.cmm');
const bll = document.querySelector('.bll textarea');
const send = document.querySelector('.send');
const star = document.querySelectorAll('.ns i');
const hbl = document.querySelector('.hbl');

const user = document.querySelector('.n h3').innerText;

cmm.addEventListener('click', () => {
    hbl.style.display = "block";  
});

let sao = 0;

star.forEach(function(s,index){
    s.addEventListener('click', () => {
        sao = index + 1;

        star.forEach(function(s,index){
            s.classList.remove('fa-solid');
            s.classList.add('fa-regular');
        });

        star.forEach(function(s,index){
            if(index < sao){
                s.classList.remove('fa-regular');
                s.classList.add('fa-solid');
            }
        });
    });
});

send.addEventListener('click', () => {
    const text = bll.value.trim();

    if(text === "" || sao === ""){
        alert("Không Được Để Trống Sao Và Bình Luận !");
        return;
    }
    let startt = "";
    star.forEach(function(s,index){
        if(index < sao){
            startt += ` <i class="fa-solid fa-star"></i>`;
        }
        else{
            startt += ` <i class="fa-regular fa-star"></i>`
        }
    });

    const newd = document.createElement("div");
    newd.classList.add("cm");
    newd.innerHTML = `
         <div class="user">
                <div class="se">
                    <i class="fa-solid fa-user"></i>
                </div>

                <div class="n">
                    <h3>${user}</h3>
                </div>
            </div>

            <div class="nx">
                <p>${text}</p>
                <div class="st">
                    ${startt}
                </div>
            </div>
    `
    bl.appendChild(newd);
    alert("Đã Thêm Bình Luận !");
    bll.value = "";
    sao = "";

    star.forEach(function(s){
        s.classList.add("fa-regular");
        s.classList.remove("fa-solid");
    });

    hbl.style.display = "none";

});