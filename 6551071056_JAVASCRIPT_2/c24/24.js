function xuatThu() {
    const day = parseInt(document.getElementById('ngay').value);
    const month = parseInt(document.getElementById('thang').value) - 1;
    const year = parseInt(document.getElementById('nam').value);
    const date = new Date(year, month, day);
    const days = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
    const thu = days[date.getDay()];
    document.getElementById('output').textContent = `${thu} Ngày ${day} tháng ${month + 1} năm ${year}`;
}
