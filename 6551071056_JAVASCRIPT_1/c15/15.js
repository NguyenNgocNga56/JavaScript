function handleUser() {
    let User = {
        Name: "Max",
        Age: 20
    };
    let result = `Tên: ${User.Name}<br>Tuổi: ${User.Age}<br>`;
    User.Surname = "Lee";
    result += `Họ: ${User.Surname}<br>`;
    User.Age = 30;
    result += `Tuổi mới: ${User.Age}`;
    document.getElementById("result").innerHTML = result;
}
