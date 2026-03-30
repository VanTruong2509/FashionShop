const canvas = document.getElementById("dtt");

const st = {
    type: "bar",

    data: {
        labels: ["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12"],

        datasets: [
            {
                label: "Doanh Thu (VNĐ)",
                data: [10000000,12000000,15000000,18000000,11000000,21000000,20000000,26000000,22000000,30000000,35000000,40000000],
                backgroundColor: "#140058"
            }
        ]
    }
};

const chart = new Chart(canvas,st);

const canvass = document.getElementById("dhh");

const stt = {
    type: "pie",

    data: {
        labels: ["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","T11","T12"],

        datasets: [
            {
                label: "Đơn Hàng",
                data: [50,120,100,150,170,175,125,130,140,165,180,210],
                backgroundColor: [
                    "orange",
                    "red",
                    "yellow",
                    "blue",
                    "brown",
                    "pink",
                    "beige",
                    "aqua",
                    "burlywood",
                    "peru",
                    "cadetblue",
                    "purple"
                ]
            }
        ]
    }
};
const barr = new Chart(canvass,stt);

const menu = document.querySelectorAll(".sidebar ul li a");
menu.forEach(function(link){
    if(link.href === window.location.href){
        link.classList.add("active");
    }
});