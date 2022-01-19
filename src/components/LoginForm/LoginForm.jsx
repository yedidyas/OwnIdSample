import React, {useRef, useState} from "react";
import './loginForm.scss';
import {useNavigate} from "react-router-dom";
import {firebaseConnector} from "../../services/firebaseConnector";
import {toast} from "react-toastify";
import OwnIdWidget from "../OwnIdWidget/OwnIdWidget";
import {OwnIdWidgetTypes} from "../../enums/ownIdWidgetType";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const userIdField = useRef(null);
    const passwordField = useRef(null);
    const submitField = useRef(null);

    function handleSubmit(event) {
        firebaseConnector.signInFirebaseUser(email, password, () => {
            toast.success("You are now logged!")
        }, (error) => {
            toast.error(error.message || "Something is wrong")
        })
        event.preventDefault();
    }

    return (
        <>
            <div className="nav-tabs">
                <a href="www.nivnavick.com" className="nav-link active">Login</a>
            </div>
            <form id="loginForm" className="login-form" onSubmit={handleSubmit}>
                <input ref={userIdField} type="email" id="email" placeholder="Email"
                       onChange={(e) => setEmail(e.target.value)}/>
                <input ref={passwordField} type="password" id="password" placeholder="Password"
                       onChange={(e) => setPassword(e.target.value)}/>
                <button ref={submitField} type="submit" id="submit">Login</button>
                <OwnIdWidget type={OwnIdWidgetTypes.Login}
                             passwordField={passwordField}
                             loginIdField={userIdField}
                             submitButton={submitField}/>
            </form>
            <div className="custom-link" onClick={() => navigate('/register')}>
                <div className="link-text">Don't have an account?</div>
            </div>
        </>
    );
}

export default LoginForm;
