function hasInteger(string) {
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
// **************  NAME  ********************
var firstName = document.getElementById('name');
firstName.addEventListener('keyup', isName);

function isName(e) {
    var text = e.target.value;
    if (!hasInteger(text) && text.length > 3) {
        firstName.onblur = function () {
            firstName.classList.remove('not-valid');
            firstName.classList.add('valid');
        }
    } else {
        var errorAlert;
        firstName.onblur = function () {
            firstName.classList.remove('valid');
            firstName.classList.add('not-valid');
            errorAlert = document.createElement('span');
            errorAlert.className = 'alert';
            var textAlert = document.createTextNode('The word entered must have at least 3 letters');
            errorAlert.appendChild(textAlert);
            firstName.insertAdjacentElement('afterend', errorAlert);
        }
        firstName.onfocus = function () {
            firstName.classList.remove('valid', 'not-valid');
            errorAlert.remove();
        }
    }
}
// **************  LASTNAME ********************
var lastName = document.getElementById('last-name');
lastName.addEventListener('keyup', isLastName);

function isLastName(e) {
    var text = e.target.value;
    if (!hasInteger(text) && text.length > 3) {
        lastName.onblur = function () {
            lastName.classList.remove('not-valid');
            lastName.classList.add('valid');
        }
    } else {
        var errorAlert;
        lastName.onblur = function () {
            lastName.classList.remove('valid');
            lastName.classList.add('not-valid');
            errorAlert = document.createElement('span');
            errorAlert.className = 'alert';
            var textAlert = document.createTextNode('The word entered must have at least 3 letters');
            errorAlert.appendChild(textAlert);
            lastName.insertAdjacentElement('afterend', errorAlert);
        }
        lastName.onfocus = function () {
            lastName.classList.remove('valid', 'not-valid');
            errorAlert.remove();
        }
    }
}
// **************  EMAIL  ********************
var email = document.getElementById('email');
email.addEventListener('keyup', isEmail);

function isEmail(e) {
    var text = e.target.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var result = emailExpression.test(text);
    if (result) {
        email.onblur = function () {
            email.classList.remove('not-valid');
            email.classList.add('valid');
        }
    } else {
        var errorAlert;
        email.onblur = function () {
            email.classList.remove('valid');
            email.classList.add('not-valid');
            errorAlert = document.createElement('span');
            errorAlert.className = 'alert';
            var textAlert = document.createTextNode('The email format is not valid');
            errorAlert.appendChild(textAlert);
            email.insertAdjacentElement('afterend', errorAlert);
        }
        email.onfocus = function () {
            email.classList.remove('valid', 'not-valid');
            errorAlert.remove();
        }
    }
}

// **************  BIRTH  ********************  Con formato dd/mm/aaaa.

// **************  DNI  ********************
var dni = document.getElementById('dni');
dni.addEventListener('keyup', isDNI);

function isDNI(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() == text.toLowerCase() && text.length >= 7 && text.length <8) {
        dni.onblur = function () {
            dni.classList.remove('not-valid');
            dni.classList.add('valid');
        }
    } else {
        var errorAlert;
        dni.onblur = function () {
            dni.classList.remove('valid');
            dni.classList.add('not-valid');
            errorAlert = document.createElement('span');
            errorAlert.className = 'alert';
            var textAlert = document.createTextNode('The ID number must have 7 numbers');
            errorAlert.appendChild(textAlert);
            dni.insertAdjacentElement('afterend', errorAlert);
        }
        dni.onfocus = function () {
            dni.classList.remove('valid', 'not-valid');
            errorAlert.remove();
        }
    }
}
// **************  PHONE  ********************
var phone = document.getElementById('phone');
phone.addEventListener('keyup', isPhone);

function isPhone(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() == text.toLowerCase() && text.length >= 10) {
        phone.onblur = function () {
            phone.classList.remove('not-valid');
            phone.classList.add('valid');
        }
    } else {
        var errorAlert;
        phone.onblur = function () {
            phone.classList.remove('valid');
            phone.classList.add('not-valid');
            errorAlert = document.createElement('span');
            errorAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must be a phone number.');
            errorAlert.appendChild(textAlert);
            phone.insertAdjacentElement('afterend', errorAlert);
        }
        phone.onfocus = function () {
            phone.classList.remove('valid', 'not-valid');
            errorAlert.remove();
        }
    }
}
// **************  ADRESS ********************
var address = document.getElementById('address');
address.addEventListener('keyup', isAddress);

function isAddress(e) {
    var text = e.target.value;
    if (text.indexOf(' ') > 3 && text.toUpperCase() != text.toLowerCase() && hasInteger(text) && text.length >= 5) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
// **************  CITY  ********************
var city = document.getElementById('city');
city.addEventListener('keyup', isCity);

function isCity(e) {
    var text = e.target.value;
    if (text.length > 3) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
// **************  ZIP CODE  ********************
var zipCode = document.getElementById('zip-code');
zipCode.addEventListener('keyup', isZipCode);

function isZipCode(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() == text.toLowerCase() && text.length >= 3 && text.length <= 5) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
// **************  PASS  ********************
var password = document.getElementById('password');
password.addEventListener('keyup', isPassword);

var savedPassword = '';
function isPassword(e) {
    var textPassword = e.target.value;
    if (textPassword.indexOf(' ') == -1 && textPassword.toUpperCase() != textPassword.toLowerCase() && hasInteger(textPassword) && textPassword.length >= 8) {
        savedPassword = textPassword;
        return console.log(true);
    } else {
        return console.log(false);
    }
}
// **************  REPEAT PASS  ********************
var repeatPassword = document.getElementById('repeat-password');
repeatPassword.addEventListener('keyup', isTheSamePassword);

function isTheSamePassword(e) {
    var textRepeatPassword = e.target.value;
    if (savedPassword == textRepeatPassword) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}