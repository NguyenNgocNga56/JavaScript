function updateTotal(input) {
    const row = input.parentElement.parentElement;
    const qty = parseFloat(row.cells[0].querySelector('input').value) || 0;
    const price = parseFloat(row.cells[1].querySelector('input').value) || 0;
    row.cells[2].innerText = qty * price;
}
function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
