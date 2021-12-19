import './App.scss';
import React, {useEffect} from "react";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import {
    Routes,
    Route,
    useNavigate
} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path='/'
                    element={<LoginForm/>}
                />
                <Route
                    path='/login'
                    element={<LoginForm/>}
                />
                <Route
                    path='/register'
                    element={<RegisterForm/>}
                />
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
