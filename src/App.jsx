import './App.scss';
import React from "react";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import {
    Routes,
    Route
} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { OwnIDInit } from '@ownid/react';

function App() {
    return (
        <div className="App">
            <OwnIDInit config={{ serverUrl: 'https://d1yk6gcngrc0og.server.dev.ownid.com/ownid'  }}/>
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
