function getvalue() {
    let physics = document.getElementById("physics").value;
    let mathematics = document.getElementById("mathematics").value;
    let chemistry = document.getElementById("chemistry").value;
    let english = document.getElementById("english").value;
    let grade = "";

    if (physics === "" || mathematics === "" || chemistry === "" || english === "") {
        alert("Plese Enter The value.")
        return;
    }
    let totalgrade = parseFloat(physics) + parseFloat(mathematics) + parseFloat(chemistry) + parseFloat(english);
    let percentage = (totalgrade / 400) * 100;
    if (percentage > 100) {
        grade = "Enter right value";
    } else if (percentage >= 80 && percentage <= 100) {
        grade = "A";
    } else if (percentage >= 60 && percentage < 80) {
        grade = "B";
    } else
    if (percentage >= 25 && percentage < 60) {
        grade = "C";
    } else {
        grade = "D";
    }

    let result = percentage >= 39.5 ? "Pass" : "Fail";

    document.getElementById("answer").innerHTML = result;
    document.getElementById("grade").innerHTML = grade;
    document.getElementById("marks").innerHTML = totalgrade;
}