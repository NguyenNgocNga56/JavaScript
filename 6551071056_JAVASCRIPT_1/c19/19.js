function tinh() {
    let p = parseFloat(document.getElementById("goc").value);
    let r = parseFloat(document.getElementById("lai").value) / 100;
    let n = parseInt(document.getElementById("nam").value);
    let tong = p * Math.pow(1 + r, n);
    document.getElementById("result").innerHTML = 
        `Sau ${n} năm, tổng số tiền là: ${tong.toFixed(2)} VNĐ`;
}
