const loginForm = document.getElementById("login-form")

const matric = loginForm.querySelector("input[name='matric-no']")
const password = loginForm.querySelector("input[name='password']")


loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const loginData = { username: matric.value, password: password.value }
    console.log(JSON.stringify(loginData))
})