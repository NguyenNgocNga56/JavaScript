function calculatePower() {
    const b = parseInt(document.getElementById("base").value);
    const n = parseInt(document.getElementById("exponent").value);
    if (b <= 0 || n <= 0) {
        document.getElementById("result").textContent = "Vui lòng nhập b và n là số nguyên dương.";
        return;
    }
    const result = Math.pow(b, n);
    document.getElementById("result").textContent = `${b} ^ ${n} = ${result}`;
}
