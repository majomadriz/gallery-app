let form = document.querySelector('form');
let loginFirstButtonContinue = document.querySelector("#login_first_step_button_continue");
let loginSecondButtonBack = document.querySelector("#login_second_step_button_back");
let loginSendForm = document.querySelector("#login_send_form");

loginFirstButtonContinue.addEventListener("click", (event) => {
    event.preventDefault();
    if (!validateForm('first_step')) {
        return false;
    }
    form.classList.add('second-step');
    loginSecondButtonBack.classList.remove('hidden');
    return false;
});

loginSecondButtonBack.addEventListener("click", (event) => {
    event.preventDefault();
    form.classList.remove('second-step');
    loginSecondButtonBack.classList.add('hidden');
    return false;
});

loginSendForm.addEventListener("click", (event) => {
    event.preventDefault();
    validateForm('second_step');
});


function validateInputs(inputsWrapper) {
    var inputs = [
        ...inputsWrapper.querySelectorAll('input')
    ]
    let isValid = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            inputs[i].style.borderColor = 'red';
            isValid = false;
        }
    }
    return isValid;
};

function clearInputsError(inputsWrapper) {
    var inputs = [
        ...inputsWrapper.querySelectorAll('input')
    ]
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.borderColor = '#43A6C3';
    }
};

function validateForm(wrapperId) {
    event.preventDefault();
    let inputsWrapper = document.querySelector(`#${wrapperId}`);
    let errorMessage = inputsWrapper.querySelector('.error-message');
    errorMessage.innerText = '';
    clearInputsError(inputsWrapper);
    if (!validateInputs(inputsWrapper)) {
        errorMessage.innerText = 'Por favor complete todos los espacios';
        return false;
    }

    let passwordOne = inputsWrapper.querySelector("#password_one");
    let confirmPassword = inputsWrapper.querySelector("#confirm_password");
    if (!!passwordOne && !!confirmPassword) {
        if (passwordOne.value !== confirmPassword.value) {
            errorMessage.innerText = 'Las contraseñas deben coincidir';
            return false;
        }
    }

    return true;
};