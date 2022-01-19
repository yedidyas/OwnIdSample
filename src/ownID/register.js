export const registerScript = (loginIdField, passwordField) => {
    window.ownid('register', {
        loginIdField: loginIdField,
        passwordField: passwordField
    })
}
