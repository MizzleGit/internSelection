const mediaMax750 = window.matchMedia("(max-width:705px)");

// If "Suivi votre demande" (Login) is selected
function loginSelected(){


    // Variables
    let loginForm = document.getElementById("login-form");
    let loginButton = document.getElementById("login-selected");
    let signupButton = document.getElementById("signup-selected");
    let rightDiv = document.querySelector('.login-selected-right-div');


    // For mobile (Work in progress)
    if (mediaMax750.matches){
        document.getElementsByClassName("signup-right")[0].style.display = "none";
        document.getElementsByClassName("login-left")[0].style.height = "100vh";
        document.getElementsByClassName("custom-button")[0].style.display = "none";
        loginForm.style.display = "flex";
        loginForm.style.opacity = 1;
    }


    // For desktop
    else{
        // Making login illustration appear from the right
        rightDiv.style.opacity = "1";
        rightDiv.style.transition = 'right 1s cubic-bezier(0.5, 1, 0.5, 1)';
        rightDiv.style.right = '0vw';

        // Making "Suivi votre demande" button disappear
        loginButton.style.display = "none";
        loginButton.style.opacity = 0;

        // Making "S'inscrire pour un stage" button disappear
        signupButton.style.display = "none";
        signupButton.style.opacity = 0;

        // Making Login form appear with opacity
        loginForm.style.display = "flex";
        loginForm.style.transition = 'opacity 1s ease';
        setTimeout(() =>{
            loginForm.style.opacity = 1;
        }, 1);


    } // End of else
} // End of function loginSelected

function signupSelected(){


    // Variables
    let leftDiv = document.getElementsByClassName("signup-selected-left-div")[0];
    let signupForm = document.getElementsByClassName("signup-form")[0];
    let signupButton = document.getElementById("signup-selected");
    let loginButton = document.getElementById("login-selected");


    // Making signup illustration appear from the left
    leftDiv.style.opacity = "1";
    leftDiv.style.transition = 'left 1s cubic-bezier(0.5, 1, 0.5, 1)';
    leftDiv.style.left = '0vw';    

    // Making "S'inscrire pour un stage" button disappear
    signupButton.style.display = "none";
    signupButton.style.opacity = 0;

    // Making "Suivi votre demande" button disappear
    loginButton.style.display = "none";
    loginButton.style.opacity = 0;

    // Making Signup form appear with opacity
    signupForm.style.display = "flex";
    signupForm.style.transition = 'opacity 1s ease';
    setTimeout(() =>{
        signupForm.style.opacity = 1;
    }, 1);
} // End of function signupSelected

function switchBack(){
    let loginForm = document.getElementById("login-form");
    let signupForm = document.getElementsByClassName("signup-form")[0];
    let rightDiv = document.getElementsByClassName('login-selected-right-div')[0];
    let leftDiv = document.getElementsByClassName('signup-selected-left-div')[0];
    let loginButton = document.getElementById("login-selected");
    let signupButton = document.getElementById("signup-selected");

    // Forms opacity 0 - Divs move away
    //
    loginForm.style.transition = 'opacity 0.5s ease';
    loginForm.style.opacity = 0;
    // 
    signupForm.style.transition = 'opacity 0.5s ease';
    signupForm.style.opacity = 0;
    // 
    rightDiv.style.transition = 'right 1s cubic-bezier(0.5, 1, 0.5, 1)';
    rightDiv.style.right = '-60vw';
    // 
    leftDiv.style.transition = 'left 1s cubic-bezier(0.5, 1, 0.5, 1)';
    leftDiv.style.left = '-60vw';
    // 

    // Forms display = none | buttons appear | divs get opacity 0
    setTimeout(() => {

        loginForm.style.display = "none";
        signupForm.style.display = "none";

        loginButton.style.transition = 'opacity 0.5s ease';
        signupButton.style.transition = 'opacity 0.5s ease';

        loginButton.style.display = 'flex';
        signupButton.style.display = 'flex';
        
        setTimeout(() => {

            loginButton.style.opacity = '1';
            signupButton.style.opacity = '1';

            leftDiv.style.opacity = "0";
            rightDiv.style.opacity = "0";

        }, 500);
    }, 500);

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