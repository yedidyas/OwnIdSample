export const loginScript = (loginIdField,passwordField,submitButton,callback) => {
    window.ownid('login', {
        loginIdField: loginIdField,
        passwordField: passwordField,
        submitButton: submitButton,
        onLogin: () => {
            console.log('asdad');
        },
        onSuccess: () => {
            console.log('asdad');
        }
    })
}

