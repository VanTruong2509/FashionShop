const menu = document.querySelectorAll(".sidebar ul li a");
menu.forEach(function(link){
    if(link.href === window.location.href){
        link.classList.add("active");
    }
});

const modal = document.getElementById("orderModal");

    function openModal(orderId) {
        modal.style.display = "flex";
        document.getElementById("modal-order-id").innerText = "Chi tiết Đơn hàng #" + orderId;
    }

    function closeModal() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) closeModal();
    }

    function searchOrder() {
        const input = document.querySelector(".search-box").value.toLowerCase();
        const rows = document.querySelectorAll(".tab table tr:not(:first-child)");

        rows.forEach(row => {
            const orderId = row.cells[0].textContent.toLowerCase();
            const customer = row.cells[1].textContent.toLowerCase();

            if (orderId.includes(input) || customer.includes(input)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    }

    function filterOrders() {
        const selectedStatus = document.getElementById("statusFilter").value;
        const rows = document.querySelectorAll(".tab table tr:not(:first-child)");

        rows.forEach(row => {
            const statusBadge = row.querySelector(".badge");
            
            if (selectedStatus === "all") {
                row.style.display = "";
                return;
            }

            const statusClass = "bg-" + selectedStatus;
            
            if (statusBadge.classList.contains(statusClass)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    }