export const firebaseConnector = {
    registerFirebaseUser,
    signInFirebaseUser
}

function registerFirebaseUser(email, password, callbackSuccess, callbackError) {
    firebaseDoAction('createUserWithEmailAndPassword',
        email,
        password,
        callbackSuccess,
        callbackError);
}

function signInFirebaseUser(email, password, callbackSuccess, callbackError) {
    firebaseDoAction('signInWithEmailAndPassword',
        email,
        password,
        callbackSuccess,
        callbackError);
}

function firebaseDoAction(action, email, password, callbackSuccess, callbackError) {
    window.firebaseAuth[action](email, password)
        .then(user => {
            if (callbackSuccess) {
                callbackSuccess(user);
            }
        }).catch(error => {
        if (callbackError) {
            callbackError(error);
        }
    });
}
