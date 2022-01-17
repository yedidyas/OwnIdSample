import React, {useState} from "react";
import './registerForm.scss';
import {useNavigate} from 'react-router-dom'
import {firebaseConnector} from "../../services/firebaseConnector";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OwnIdWidget from "../OwnIdWidget/OwnIdWidget";
import {OwnIdWidgetTypes} from "../../enums/ownIdWidgetType";

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    function handleSubmit(event) {
        firebaseConnector.registerFirebaseUser(email, password, () => {
            toast.success("You are now registered!")
            navigate('/login');
        }, (error) => {
            toast.error(error.message || "Something is wrong")
        })
        event.preventDefault();
    }

    return (
        <>
            <div className="nav-tabs">
                <a href="www.nivnavick.com" className="nav-link active">Register</a>
            </div>
            <form className="registration-form" onSubmit={handleSubmit}>
                <input type="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" id="password" placeholder="Password"
                       onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Register</button>
                <OwnIdWidget type={OwnIdWidgetTypes.Register} container='ownid-login'/>
            </form>
            <div className="custom-link" onClick={() => navigate('/login')}>
                <div className="link-text">Already have an account?</div>
            </div>
        </>
    );
}

export default RegisterForm;
