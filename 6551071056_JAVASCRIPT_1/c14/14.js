function createStudent() {
    const name = document.getElementById("name").value;
    const numberID = document.getElementById("numberID").value;
    const gender = document.getElementById("gender").value;
    if (!name || !numberID || !gender) {
        document.getElementById("result").textContent = "Vui lòng nhập đầy đủ thông tin.";
        return;
    }
    const student = {
        Name: name,
        NumberID: numberID,
        Gender: gender
    };
    const info = `Thông tin sinh viên:<br>
        Họ tên: ${student.Name}<br>
        Mã số sinh viên: ${student.NumberID}<br>
        Giới tính: ${student.Gender}`;
    document.getElementById("result").innerHTML = info;
}
