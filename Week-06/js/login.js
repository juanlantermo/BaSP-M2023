var email = document.getElementById('email');
email.addEventListener('keyup', emailOk);

function emailOk(e) {
    var text = e.target.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var result = emailExpression.test(text);
    if (result) {
        email.onblur = function () {
            email.classList.remove('not-valid');
            email.classList.add('valid');
        }
    } else {
        var labelAlert;
        email.onblur = function () {
            email.classList.remove('valid');
            email.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('The email format is not valid');
            labelAlert.appendChild(textAlert);
            email.insertAdjacentElement('afterend', labelAlert);
        }
        email.onfocus = function () {
            email.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
    }
}
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

var pass = document.getElementById('password');
pass.addEventListener('keyup', passwordOk);

function passwordOk(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() != text.toLowerCase() && haveNumber(text) && text.length >= 8) {
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
            var textAlert = document.createTextNode('Incorrect password format');
            errorAlert.appendChild(textAlert);
            pass.insertAdjacentElement('afterend', errorAlert);
            }
        }
    }