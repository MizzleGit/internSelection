

// login-selected

function loginSelected(){
    // loginForm
    var loginForm = document.getElementsByClassName("login-form")[0];
    loginForm.style.display = "flex";
    loginForm.style.transition = 'opacity 2s ease';
    setTimeout(() =>{
        loginForm.style.opacity = 1;
    }, 1);

    // loginButton
    var loginButton = document.getElementById("login-selected");
    loginButton.style.display = "none";
    loginButton.style.opacity = 0;

    // signupButton
    var signupButton = document.getElementById("signup-selected");
    signupButton.style.display = "none";
    signupButton.style.opacity = 0;

    // login illustration
    var rightDiv = document.querySelector('.login-selected-right-div');
    rightDiv.style.transition = 'right 1s cubic-bezier(0.5, 1, 0.5, 1)';
    rightDiv.style.right = '0vw';
}

function switchBack(){
    var loginForm = document.getElementsByClassName("login-form")[0];
    loginForm.style.transition = 'opacity 1s ease';
    loginForm.style.opacity = 0;

    var rightDiv = document.getElementsByClassName('login-selected-right-div')[0];
    rightDiv.style.transition = 'right 1s cubic-bezier(0.5, 1, 0.5, 1)';
    rightDiv.style.right = '-60vw';

    setTimeout(() => {
        loginForm.style.display = "none";
        var loginButton = document.getElementById("login-selected");
        var signupButton = document.getElementById("signup-selected");
        loginButton.style.transition = 'opacity 2s ease';
        signupButton.style.transition = 'opacity 2s ease';
        loginButton.style.display = 'flex';
        signupButton.style.display = 'flex';
        setTimeout(() => {
            loginButton.style.opacity = '1';
            signupButton.style.opacity = '1';
        }, 150);
    }, 150);

}

    // loginForm.addEventListener('transitionend', function(){
    //     loginForm.style.display = "none";
    //     var loginButton = document.getElementById("login-selected");
    //     var signupButton = document.getElementById("signup-selected");
    //     loginButton.style.transition = 'opacity 2s ease';
    //     signupButton.style.transition = 'opacity 2s ease';
    //     loginButton.style.display = 'flex';
    //     signupButton.style.display = 'flex';
    //     setTimeout(() => {
    //         loginButton.style.opacity = '1';
    //         signupButton.style.opacity = '1';
    //     }, 1);
    // })