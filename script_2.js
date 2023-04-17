window.onload = function(){
    var name = localStorage.getItem('name');
    var mail = localStorage.getItem('email');
    var password = localStorage.getItem('password');

    if(name!="undefined" || name!="null"){
        document.getElementById('name').innerHTML = name;
        document.getElementById('mail').innerHTML = mail;
        document.getElementById('password').innerHTML = password;
    }
}
