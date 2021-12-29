export const loginScript = () => {
    window.ownid('login', {
        loginIdField: document.getElementById('email'),
        passwordField: document.getElementById('password'),
        submitButton: document.getElementById('submit'),
        onSuccess: () => {
            console.log('asdad');
        }
    })
}

