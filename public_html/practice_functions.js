function color_change() {
    var border_R = document.getElementById("border_R").value;
    var border_G = document.getElementById("border_G").value;
    var border_B = document.getElementById("border_B").value;
    var border_width = document.getElementById("border_width").value;
    var R = document.getElementById("background_R").value;
    var G = document.getElementById("background_G").value;
    var B = document.getElementById("background_B").value;

    var tag = document.getElementById("paragraph");
    tag.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    tag.style.borderWidth = border_width;
    tag.style.backgroundColor = `rgb(${R},${G},${B})`;
}

function check_password() {
    var first_password = document.getElementById("first_password").value;
    var second_password = document.getElementById("second_password").value;

    if (first_password.length < 8) {
        alert("The length of the first password is less than 8 letters!")
    } else if (second_password.length < 8) {
        alert("The length of the second password is less than 8 letters!")
    } else if (first_password != second_password) {
        alert("Two passwords don't match!")
    } else {
        alert("Everything is good!")
    }
}