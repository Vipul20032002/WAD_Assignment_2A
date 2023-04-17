window.onload = function(){
    
    if(localStorage){
        document.getElementById('sample-form').addEventListener('submit',function(){
            var name  = document.getElementById('name');
            var mail = document.getElementById('email');
            var password = document.getElementById('password');
            var check = document.getElementById('terms')
            localStorage.setItem('name',name.value);ś
            localStorage.setItem('email',mail.value);
            localStorage.setItem('password',password.value);
            localStorage.setItem('check',check.value);
        });
    }
}