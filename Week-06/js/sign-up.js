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

var firstName = document.getElementById('name');
firstName.addEventListener('keyup', isName);
var savedName;
function isName(e) {
    var text = e.target.value;
    if (!hasInteger(text) && text.length > 3) {
        savedName = text;
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

var lastName = document.getElementById('last-name');
lastName.addEventListener('keyup', isLastName);
var savedLastName;
function isLastName(e) {
    var text = e.target.value;
    if (!hasInteger(text) && text.length > 3) {
        savedLastName= text;
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

var email = document.getElementById('email');
email.addEventListener('keyup', isEmail);
var savedEmail;
function isEmail(e) {
    var text = e.target.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var result = emailExpression.test(text);
    if (result) {
        savedEmail=text;
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
var savedDate;
var dateOn = document.getElementById('birth');
dateOn.setAttribute('min', '1950-01-01');
dateOn.setAttribute('max', '2005-12-31');
savedDate=dateOn;

var dni = document.getElementById('dni');
dni.addEventListener('keyup', isDNI);
var savedDni ;
function isDNI(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() == text.toLowerCase() && text.length >= 7) {
        savedDni=text;
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
            var textAlert = document.createTextNode('The DNI number must have 7 numbers');
            errorAlert.appendChild(textAlert);
            dni.insertAdjacentElement('afterend', errorAlert);
        }
        dni.onfocus = function () {
            dni.classList.remove('valid', 'not-valid');
            errorAlert.remove();
        }
    }
}

var phone = document.getElementById('phone');
phone.addEventListener('keyup', isPhone);
var savedPhone;
function isPhone(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() == text.toLowerCase() && text.length >= 7) {
        savedPhone = text;
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

var address = document.getElementById('address');
address.addEventListener('keyup', isAddress);
var savedAddress;

function isAddress(e) {
    var text = e.target.value;
    if (text.indexOf(' ') >= 3 && text.lastIndexOf(' ') <= text.length - 3 && text.toUpperCase() != text.toLowerCase() && hasInteger(text) && text.length >= 5) {
        savedAddress = text;
        address.onblur = function () {
            address.classList.remove('not-valid');
            address.classList.add('valid');
        }
    } else {
        var errorAlert;
        address.onblur = function () {
            address.classList.remove('valid');
            address.classList.add('not-valid');
            errorAlert = document.createElement('span');
            errorAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must have at least 5 letters, 1 number and a blank space.');
            errorAlert.appendChild(textAlert);
            address.insertAdjacentElement('afterend', errorAlert);
        }
        address.onfocus = function () {
            address.classList.remove('valid', 'not-valid');
            errorAlert.remove();
        }
    }
}

var city = document.getElementById('city');
city.addEventListener('keyup', isCity);
var savedCity;

function isCity(e) {
    var text = e.target.value;
    if (text = text.toLowerCase() && text.length > 3) {
        savedCity = text;
        city.onblur = function () {
            city.classList.remove('not-valid');
            city.classList.add('valid');
        }
    } else {
        var errorAlert;
        city.onblur = function () {
            city.classList.remove('valid');
            city.classList.add('not-valid');
            errorAlert = document.createElement('span');
            errorAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must have at least 3 digits without symbols.');
            errorAlert.appendChild(textAlert);
            city.insertAdjacentElement('afterend', errorAlert);
        }
        city.onfocus = function () {
            city.classList.remove('valid', 'not-valid');
            errorAlert.remove();
        }
    }
}

var zipCode = document.getElementById('zip-code');
zipCode.addEventListener('keyup', isZipCode);
var savedZipCode;

function isZipCode(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() == text.toLowerCase() && text.length >= 4 && text.length <= 5) {
        savedZipCode = text;
        zipCode.onblur = function () {
            zipCode.classList.remove('not-valid');
            zipCode.classList.add('valid');
        }
    } else {
        var errorAlert;
        zipCode.onblur = function () {
            zipCode.classList.remove('valid');
            zipCode.classList.add('not-valid');
            errorAlert = document.createElement('span');
            errorAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must have between 4 and 5 numbers.');
            errorAlert.appendChild(textAlert);
            zipCode.insertAdjacentElement('afterend', errorAlert);
        }
        zipCode.onfocus = function () {
            zipCode.classList.remove('valid', 'not-valid');
            errorAlert.remove();
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
var password = document.getElementById('password');
password.addEventListener('keyup', isPassword);
var savedPassword;

function isPassword(e) {
    var textPassword = e.target.value;
    if (textPassword.indexOf(' ') == -1 && textPassword.toUpperCase() != textPassword.toLowerCase() && haveNumber(textPassword) && textPassword.length >= 8) {
        savedPassword = textPassword;
        password.onblur = function () {
            password.classList.remove('not-valid');
            password.classList.add('valid');
        }
    } else {
        var errorAlert;
        password.onblur = function () {
            password.classList.remove('valid');
            password.classList.add('not-valid');
            errorAlert = document.createElement('span');
            errorAlert.className = 'alert';
            var textAlert = document.createTextNode('Incorrect password format');
            errorAlert.appendChild(textAlert);
            password.insertAdjacentElement('afterend', errorAlert);
        }
        password.onfocus = function () {
            password.classList.remove('valid', 'not-valid');
            errorAlert.remove();
        }
    }
}

var repeatPassword = document.getElementById('repeat-password');
repeatPassword.addEventListener('keyup', isTheSamePassword);

function isTheSamePassword(e) {
    var textRepeatPassword = e.target.value;
    if (savedPassword == textRepeatPassword) {
        repeatPassword.onblur = function () {
            repeatPassword.classList.remove('not-valid');
            repeatPassword.classList.add('valid');
        }
    } else {
        var errorAlert;
        repeatPassword.onblur = function () {
            repeatPassword.classList.remove('valid');
            repeatPassword.classList.add('not-valid');
            errorAlert = document.createElement('span');
            errorAlert.className = 'alert';
            var textAlert = document.createTextNode('This input must be exactly as the password input.');
            errorAlert.appendChild(textAlert);
            repeatPassword.insertAdjacentElement('afterend', errorAlert);
        }
        repeatPassword.onfocus = function () {
            repeatPassword.classList.remove('valid', 'not-valid');
            errorAlert.remove();
        }
    }
}
function validateSubmit() {
    if (email.classList.contains('not-valid') || password.classList.contains('not-valid') || firstName.classList.contains('not-valid') ||
        lastName.classList.contains('not-valid') || dni.classList.contains('not-valid') || dateOn.classList.contains('not-valid') ||
        phone.classList.contains('not-valid') || zipCode.classList.contains('not-valid') || address.classList.contains('not-valid') ||
        city.classList.contains('not-valid') || repeatPassword.classList.contains('not-valid')) {
        alert('There are some inputs with incorrect information.');
    } else {
        alert('Your name is: ' + savedName + '\nYour lastname is: ' + savedLastName + '\nYour mail is: ' + savedEmail + '.\nYour date is: '
            + savedDate + '\nYour dni is: ' + savedDni + '\nYour phone is: ' + savedPhone + '\nYour address is: ' + savedAddress
            + '\nYour city is: ' + savedCity + '\nYour zip code is: ' + savedZipCode + '\nYour password is: ' + savedPassword);
    }
}
var registerBtn = document.getElementById('register');
registerBtn.addEventListener('click', validateSubmit);
