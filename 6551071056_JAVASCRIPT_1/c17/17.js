function convert() {
    let binary = document.getElementById("binary").value;
    let decimal = parseInt(binary, 2);
    document.getElementById("result").innerHTML = `${binary}₂ = ${decimal}₁₀`;
}
