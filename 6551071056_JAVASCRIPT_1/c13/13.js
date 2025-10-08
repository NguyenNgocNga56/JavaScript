function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function listPrimes() {
    const n = parseInt(document.getElementById("nInput").value);
    if (n <= 2) {
        document.getElementById("result").textContent = "Không có số nguyên tố nào nhỏ hơn " + n;
        return;
    }
    let primes = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) primes.push(i);
    }
    document.getElementById("result").textContent = `Các số nguyên tố nhỏ hơn ${n}: ${primes.join(", ")}`;
}
