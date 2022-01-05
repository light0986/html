function go_pageFour_or_Stey() {
    var str = read_LS();
    var text = document.getElementById('success_id');

    if (str != "Welcome!") {
        window.location.href = "Page4.html";
    }
    else {
        text.innerHTML = str;
    }
}

function logout() {
    var dialog = document.getElementById('LogOut');
    dialog.show();
}

function go_pagefour() {
    localStorage.clear();
    window.location.href = "Page4.html";
}

function open_dialog() {
    var dialog = document.getElementById('myFirstDialog');
    dialog.show();
}

function close_dialog() {
    var dialog = document.getElementById('myFirstDialog');
    dialog.close();
}