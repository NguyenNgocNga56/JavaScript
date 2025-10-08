let HinhTru = {
    radius: 10,
    height: 15
};
function inThongTin() {
    document.getElementById("output").innerHTML =
        `Bán kính: ${HinhTru.radius}, Chiều cao: ${HinhTru.height}`;
}
function capNhatChieuCao() {
    HinhTru.height = 30;
    let dienTich = 2 * Math.PI * HinhTru.radius * (HinhTru.radius + HinhTru.height);
    document.getElementById("output").innerHTML =
        `Chiều cao mới: ${HinhTru.height}, Diện tích toàn phần: ${dienTich.toFixed(2)}`;
}
