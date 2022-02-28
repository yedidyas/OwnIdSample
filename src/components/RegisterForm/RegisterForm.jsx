import React, {useRef, useState} from "react";
import './registerForm.scss';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import OwnIdWidget from "../OwnIdWidget/OwnIdWidget";
// import {OwnIdWidgetTypes} from "../../enums/ownIdWidgetType";
import { OwnID, ownidReactService, WidgetType } from '@ownid/react';

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userIdField = useRef(null);
    const passwordField = useRef(null);
    const submitField = useRef(null);
    let navigate = useNavigate();

    function handleSubmit(event) {
        ownidReactService.getOwnIDData(WidgetType.Register).then((ownIdResponse) => {
            if (ownIdResponse.data) {
                toast.success("You are now registered!" + JSON.stringify(ownIdResponse.data));
            }
        }).catch(e => {
            handleError(e);
        })
        event.preventDefault();
    }

    function handleError(error) {
        toast.error(error.message || "Something is wrong")
    }

    return (
        <>
            <div className="nav-tabs">
                <a href="www.nivnavick.com" className="nav-link active">Register</a>
            </div>
            <form className="registration-form" onSubmit={handleSubmit}>
                <input ref={userIdField} type="email" id="email" placeholder="Email"
                       onChange={(e) => setEmail(e.target.value)}/>
                <input ref={passwordField} type="password" id="password" placeholder="Password"
                       onChange={(e) => setPassword(e.target.value)}/>
                <button ref={submitField} type="submit">Register</button>
                {/*<OwnIdWidget type={OwnIdWidgetTypes.Register}*/}
                {/*             passwordField={passwordField}*/}
                {/*             loginIdField={userIdField}*/}
                {/*             submitButton={submitField}/>*/}
                <OwnID type={WidgetType.Register}
                       passwordField={passwordField.current}
                       loginIdField={userIdField.current}
                       onError={handleError}
                />
            </form>
            <div className="custom-link" onClick={() => navigate('/login')}>
                <div className="link-text">Already have an account?</div>
            </div>
        </>
    );
}

export default RegisterForm;
