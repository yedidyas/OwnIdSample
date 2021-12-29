export const registerScript = () => {
    window.ownid('register', {
        passwordField: document.getElementById('password'),
        loginIdField: document.getElementById('email')
    })
}
