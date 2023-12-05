const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn')
const passwordText = document.querySelector('#incorrect-password')


form.addEventListener('submit', (e) => {
    e.preventDefault();
})
submitBtn.addEventListener('click', (e) => {
    if(password.value.length < 8 ||password) {
        passwordText.innerHTML = 'Incorrect password!'
    }
    else{
        passwordText.innerHTML = ''
    }
})
let a = 'sach7774'
console.log(a.substring(4))