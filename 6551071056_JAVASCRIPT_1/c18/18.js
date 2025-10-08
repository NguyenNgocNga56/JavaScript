function tinhGiaiThua() {
    let n = parseInt(document.getElementById("number").value);
    let gt = 1;
    for (let i = 1; i <= n; i++) gt *= i;
    document.getElementById("result").innerHTML = `${n}! = ${gt}`;
}
