function tinhCanChi() {
    const yearInput = document.getElementById('year');
    const result = document.getElementById('result');
    const year = parseInt(yearInput.value);
    if (isNaN(year) || year < 0) {
        alert("Vui lòng nhập năm hợp lệ!");
        result.value = '';
        return;
    }
    const can = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
    const chi = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
    const canIndex = (year + 6) % 10;
    const chiIndex = (year + 8) % 12;
    result.value = can[canIndex] + " " + chi[chiIndex];
}
