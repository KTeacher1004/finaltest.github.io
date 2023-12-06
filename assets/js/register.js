const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn')
const passwordVerify = document.querySelector('#passwordVerify')
const incorrect = document.querySelector('#incorrect-password')
const regexLowercase = new RegExp(/[a-z]/);
const regexUppercase = new RegExp(/[A-Z]/);
const regexSpecial = new RegExp(/[!@#$%^&*]/)


form.addEventListener('submit', (e) => {
    e.preventDefault();
})
submitBtn.addEventListener('click', (e) => {
    //check how many characters are in both
    if(password.value.length <= 7 || passwordVerify.value.length <= 7) {
        incorrect.innerHTML = 'Password must have at least 8 characters'
    }
    //check password and verifier have same values
    else if(password.value !== passwordVerify.value) {
        incorrect.innerHTML = 'Incorrect password'
    }
    //check condition
    else if(!regexLowercase.test(password.value)) {
        incorrect.innerHTML = 'Password must contain lowercase characters'
    }
    else if(!regexUppercase.test(password.value)) {
        incorrect.innerHTML = 'Password must contain uppercase characters'
    }
    else if(!regexSpecial.test(password.value)) {
        incorrect.innerHTML = 'Password must contain special character'
    }
    else {
        incorrect.innerHTML = ''
    }
    console.log(password.value, passwordVerify.value)
    console.log(regexLowercase.test(password.value), regexUppercase.test(passwordVerify.value))
})