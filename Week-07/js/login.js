window.onload = function(){
var email = document.getElementById('email');
email.addEventListener('keyup', emailOk);
var emailError = document.getElementById('error-email');
var pass = document.getElementById('password');
pass.addEventListener('keyup', passwordOk);
var savedPassword;
email.value = localStorage.getItem('email');
pass.value = localStorage.getItem('password');
var logInButton = document.getElementById('login');

function haveNumber(string) {
    var chars = [];
    for (var i = 0; i < string.length; i++) {
        chars.push(parseInt(string[i]));
    }
    for (var i = 0; i < chars.length; i++) {
        if (!Number.isInteger(chars[i])) {
        } else {
            return true;
        }
    }
}
function emailOk() {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (email.value === ''){
        email.classList.add('not-valid');
        emailError.innerText='The email field is required';
        return;}
        if (!emailExpression.test(email.value)) {
        email.classList.add('not-valid');
        emailError.innerText='Please complete with a valid email';
        return;
        }
            email.classList.add('valid');
    };
    email.addEventListener('focus', function () {
        email.classList.remove("not-valid", "valid");
        emailError.innerText='';
    });
    email.addEventListener('blur', emailOk);

function passwordOk() {
    var text = pass.value;
    if (text.indexOf(' ') == -1 && text != text.toLowerCase() &&
        text != text.toUpperCase() && haveNumber(text) && text.length >= 8) {
        savedPassword = text;
        pass.onblur = function () {
            pass.classList.remove('not-valid');
            pass.classList.add('valid');
        }
    } else {
        var errorAlert;
        pass.onblur = function () {
            pass.classList.remove('valid');
            pass.classList.add('not-valid');
            errorAlert = document.createElement('span');
            errorAlert.className = 'alert';
            var textAlert = document.createTextNode('Please complete with a valid password');
            errorAlert.appendChild(textAlert);
            pass.insertAdjacentElement('afterend', errorAlert);
            }
        }
    }
    logInButton.addEventListener('click', function(event){
        event.preventDefault();
        emailOk();
        passwordOk();
        if(!pass.classList.contains('valid') && !email.classList.contains('valid-field')){
            alert('Log in error!! \nPlease check the email and password fields.');
            return;
        }
        if (!pass.classList.contains('valid')) {
            alert('Please check the password field.');
            return;
        }
        if (!email.classList.contains('valid')) {
            alert('Please check the email field.');
            return;
        }
        var apiUrl = 'https://api-rest-server.vercel.app/login?email=' + email.value + '&password=' + pass.value;
        fetch(apiUrl,{
            method: 'GET',
        })
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                if (data.success){
                    alert('Succes: ' + data.msg +'\nWelcome ' + email.value)
                }else {
                    alert('Error: ' + data)
                }
            })
            .catch(function(error){
                console.log(error);
                alert('Something goes wrong');
            });
    });
}