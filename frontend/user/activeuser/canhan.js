const menu = document.querySelectorAll('.nav ul li a');
menu.forEach(function(link){
    if(link.href === window.location.href){
        link.classList.add("active");
    }
})

const edit = document.querySelector('.edit');
const save = document.querySelector('.save');

edit.addEventListener('click', () =>{
    const plist = document.querySelectorAll('.infor p');
    plist.forEach(function(c){
        const text = c.innerText;
        c.outerHTML =` <input value="${text}" class ="in">`;
    });
    
});

save.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.infor input');

    if(inputs.length === 0){
        alert("Bạn Chưa Chỉnh Sửa !");
        return;
    }

    inputs.forEach(function(t){
        const text = t.value;
        t.outerHTML = `<p>${text}</p>`
    });

    alert("Đã Lưu Thông Tin !")
});

const image = document.querySelector('.pt img');

image.addEventListener('click',() =>{
    const input = document.createElement('input');
    input.type = "file";

    input.addEventListener('change',() =>{
        image.src = URL.createObjectURL(input.files[0]);
    });
    
    input.click();
});