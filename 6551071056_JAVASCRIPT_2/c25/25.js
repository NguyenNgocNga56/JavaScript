const priceList = {
    "Bún bò": 30000,
    "Hủ tiếu": 30000,
    "Bánh canh": 30000,
    "Phở bò": 30000,
    "Nui": 30000,
    "Mì cay(Best Seller)": 60000,

    "Cà phê đá": 15000,
    "Cà phê sữa": 15000,
    "Matcha Latte": 25000,
    "Sting": 15000,
    "Soda sữa hột gà": 15000,
    "Cam ép": 15000,
};
function tinhTien() {
    const foodList = document.getElementById("foodList");
    const drinkList = document.getElementById("drinkList");
    const time = document.querySelector('input[name="time"]:checked').value;
    const billBody = document.getElementById("billBody");
    billBody.innerHTML = "";
    let total = 0;
    for (let option of foodList.selectedOptions) {
        const name = option.value;
        const price = priceList[name];
        total += price;
        billBody.innerHTML += `<tr><td>${name}</td><td>${price.toLocaleString()} đ</td></tr>`;
    }
    for (let option of drinkList.selectedOptions) {
        const name = option.value;
        const price = priceList[name];
        total += price;
        billBody.innerHTML += `<tr><td>${name}</td><td>${price.toLocaleString()} đ</td></tr>`;
    }
    if (time === "night") {
        const extra = total * 0.1;
        total += extra;
        billBody.innerHTML += `<tr><td>Phụ thu ban đêm (10%)</td><td>${extra.toLocaleString()} đ</td></tr>`;
    }
    document.getElementById("tongTien").innerText = total.toLocaleString() + " đồng";
}
