function go_Five_or_stay() {
    var str = read_LS();
    if (str == "Welcome!") {
        window.location.href = "Page5.html";
    }
}

function open_success() {
    var dialog = document.getElementById('LogSuccess');
    dialog.show();
}

function close_success() {
    var dialog = document.getElementById('LogSuccess');
    dialog.close();
}

function open_dialog() {
    var dialog = document.getElementById('myFirstDialog');
    dialog.show();
}

function close_dialog() {
    var dialog = document.getElementById('myFirstDialog');
    dialog.close();
}

function check() {
    var acc = document.getElementById('account_text').value;
    var pass = document.getElementById('password_text').value;
    if (acc == "admin" && pass == "12345678") {
        open_success();
    } else {
        open_fail();
    }
}

function create_LS() {
    localStorage.setItem("type", "Welcome!");
    window.location.href = "Page5.html";
}

function snd_play() {
    snd.play();
}

function snd_stop() {
    snd.pause();
    snd.currentTime = 0;
}

function open_fail() {
    var dialog = document.getElementById('LogFail');
    snd_play();
    dialog.show();
}

function close_fail() {
    var dialog = document.getElementById('LogFail');
    dialog.close();
    snd_stop();
}

var snd = new Audio("audio/You%20didnt%20say%20the%20magic%20word.mp3");
snd.loop = true;