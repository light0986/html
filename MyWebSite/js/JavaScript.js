function read_LS() {
    var str = localStorage.getItem("type");
    return str;
}

function go_pageFour_or_Five() {
    var str = read_LS();
    var text = document.getElementById('success_id');

    if (str == "Welcome!") {
        window.location.href = "Page5.html";
    }
    else {
        window.location.href = "Page4.html";
    }
}

function go_page01() {
    window.location.href = "index.html";
}

function go_page02() {
    window.location.href = "Page2.html";
}

function go_page03() {
    window.location.href = "Page3.html";
}