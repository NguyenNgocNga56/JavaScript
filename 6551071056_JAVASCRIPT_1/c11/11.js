function reverseInteger(num) {
  const isNegative = num < 0;
  const reversedStr = Math.abs(num).toString().split('').reverse().join('');
  const reversedNum = parseInt(reversedStr, 10);
  return isNegative ? -reversedNum : reversedNum;
}
function handleReverse() {
  const input = document.getElementById('inputNumber').value;
  const number = parseInt(input, 10);
  const output = document.getElementById('outputHere');
  if (isNaN(number)) {
    output.innerText = "⚠️ Vui lòng nhập một số hợp lệ.";
    output.style.color = "red";
    return;
  }
  const reversed = reverseInteger(number);
  output.innerText = `Kết quả đảo ngược: ${reversed}`;
  output.style.color = "#333";
}
