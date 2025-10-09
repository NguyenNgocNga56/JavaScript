function tinhLuong() {
    let luong = parseFloat(document.getElementById('luong').value);
    let heso = parseFloat(document.getElementById('heso').value);
    let result = luong * heso;
    document.getElementById('luongthang').value = result;
}
