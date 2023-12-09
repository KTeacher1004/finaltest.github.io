const form = document.querySelector('form');
const userName = document.querySelector('#username');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn')
const passwordText = document.querySelector('#incorrect-password')


form.addEventListener('submit', (e) => {
    e.preventDefault();
})
submitBtn.addEventListener('click', (e) => {
    fetch('assets/js/user.json').then((res) => {return res.json();}).then((data) => {
        for(let i = 0; i < data.user.length; i++) {
            let a = true;
            if(data.user[i].name !== userName.value && a) {
                passwordText.innerHTML = 'Wrong username or password'
                a = false;
                console.log(data.user[i].name)
                continue;
            }
            else if(data.user[i].password !== password.value && a) {
                console.log(data.user[i].password)
                a = false;
                passwordText.innerHTML = 'Wrong username or password'
                continue;
            }
            else {
                passwordText.innerHTML = ''
                break;
            }
        }
        console.log(data.user)
    })
})
