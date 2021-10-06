var logIn = document.getElementById('login');
var signUp = document.getElementById('signup')
var closeBox = document.getElementsByClassName('close-box');
var loginDialogBox = document.getElementById('login-dialog-box');
var signupDialogBox = document.getElementById('signup-dialog-box');

logIn.addEventListener('click', ()=>{
    loginDialogBox.style.display = "flex";
})

signUp.addEventListener('click', ()=>{
    signupDialogBox.style.display = "flex";
})

for(i = 0;i<closeBox.length;i++){
    closeBox[i].addEventListener('click', ()=>{
    signupDialogBox.style.display = "none";
    loginDialogBox.style.display = "none";
})
}