var firstName = document.getElementById('name');
firstName.addEventListener('keyup', theName);
var lastName = document.getElementById('last-name');
lastName.addEventListener('keyup', theLastName);
var email = document.getElementById('email');
email.addEventListener('keyup', theEmail);
var date = document.getElementById('birth');
date.addEventListener('change', isDate);
var dni = document.getElementById('dni');
dni.addEventListener('keyup', validDNI);
var phone = document.getElementById('phone');
phone.addEventListener('keyup', thePhone);
var address = document.getElementById('address');
address.addEventListener('keyup', theAddress);
var city = document.getElementById('city');
city.addEventListener('keyup', theCity);
var zipCode = document.getElementById('zip-code');
zipCode.addEventListener('keyup', theZipCode);
var repeatPassword = document.getElementById('repeat-password');
repeatPassword.addEventListener('keyup', theSamePassword);
var password = document.getElementById('password');
password.addEventListener('keyup',passwordOk);
var registerBtn = document.getElementById('register');
registerBtn.addEventListener('click', validateSubmit);

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
var savedName;
function theName(e) {
    var text = e.target.value;
    if (!haveNumber(text) && text.length > 3) {
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
var savedLastName;
function theLastName(e) {
    var text = e.target.value;
    if (!haveNumber(text) && text.length > 3) {
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
var savedEmail;
function theEmail(e) {
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
function isDate() {
    var text = document.getElementById('birth').value;   
    var date = text;                      
    if (text.substring(0, 4) <= 2010) {
        var year = text.substring(0, 4);
        var month = text.substring(5, 7);
        var day = text.substring(8, 10);
        var date = [month, day, year];
        savedDate = date.join('/');
        date.onblur = function () {
            date.classList.remove('not-valid');
            date.classList.add('valid');
        }
    } else {
        var labelAlert;
        date.onblur = function () {
            date.classList.remove('valid');
            date.classList.add('not-valid');
            labelAlert = document.createElement('span');
            labelAlert.className = 'alert';
            var textAlert = document.createTextNode('You must be at least 13 years old.');
            labelAlert.appendChild(textAlert);
            date.insertAdjacentElement('afterend', labelAlert);
        }
        date.onfocus = function () {
            date.classList.remove('valid', 'not-valid');
            labelAlert.remove();
        }
    }
}
var savedDni ;
function validDNI(e) {
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
var savedPhone;
function thePhone(e) {
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
            var textAlert = document.createTextNode('This input must have 10 numbers.');
            errorAlert.appendChild(textAlert);
            phone.insertAdjacentElement('afterend', errorAlert);
        }
        phone.onfocus = function () {
            phone.classList.remove('valid', 'not-valid');
            errorAlert.remove();
        }
    }
}
var savedAddress;
function theAddress(e) {
    var text = e.target.value;
    if (text.indexOf(' ') >= 3 && text.lastIndexOf(' ') <= text.length - 3 && text.toUpperCase() != text.toLowerCase() && haveNumber(text) && text.length >= 5) {
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
var savedCity;
function theCity(e) {
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
var savedZipCode;
function theZipCode(e) {
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
var savedPassword;
function passwordOk(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text != text.toLowerCase() &&
        text != text.toUpperCase() && haveNumber(text) && text.length >= 8) {
        savedPassword = text;
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
            var textAlert = document.createTextNode('At least 8 characters with at least 1 upper case letter, 1 lower case, 1 number and 1 symbol.');
            errorAlert.appendChild(textAlert);
            password.insertAdjacentElement('afterend', errorAlert);
        }
        password.onfocus = function () {
            password.classList.remove('valid', 'not-valid');
            errorAlert.remove();
        }
    }
}
function theSamePassword(e) {
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
function saveLocalStorage() {
    localStorage.setItem('name', firstName.value);
    localStorage.setItem('lastName', lastName.value);
    localStorage.setItem('dni', dni.value);
    localStorage.setItem('dob', date.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('zip', zipCode.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
}
function validateSubmit() {
    if (email.classList.contains('not-valid') || email.value == '' || password.classList.contains('not-valid') || password.value == '' ||
        firstName.classList.contains('not-valid') || firstName.value == '' || lastName.classList.contains('not-valid') ||
        lastName.value == '' || dni.classList.contains('not-valid') || dni.value == '' || date.classList.contains('not-valid') ||
        date.value == '' || phone.classList.contains('not-valid') ||  phone.value == '' || zipCode.classList.contains('not-valid') ||
        zipCode.value == '' || address.classList.contains('not-valid') || address.value == '' || city.classList.contains('not-valid') ||
        city.value == '' || repeatPassword.classList.contains('not-valid') || repeatPassword.value == '' ) {
        alert('There are some inputs with incorrect information.');
    } else {
        saveLocalStorage()
        var url = 'https://api-rest-server.vercel.app/signup?name=' + firstName.value + '&lastName=' + lastName.value + '&dni=' +
            dni.value + '&dob=' + date.value + '&phone=' + phone.value + '&address=' + address.value + '&city=' + city.value + '&zip=' + zipCode.value +
            '&email=' + email.value + '&password=' + password.value;
            fetch(url,{
                method: 'GET',
                })
            .then(function (response) {                                                     //     password: BaSProfessional1
                return response.json();
            })
            .then(function (data) {
                if (data.success) {
                alert("Succes: " + data.msg + '\nWelcome to the Radium Rocket Gym ' + firstName.value);
                } else {
                var errorMsg = "";
                data.errors.forEach(function (error) {
                    errorMsg += error.msg + "\n";
                });
                alert("Errors:\n" + errorMsg);
                }
            })
            .catch(function () {
                alert('ERROR: Server or route error.');
            });
    }
}


