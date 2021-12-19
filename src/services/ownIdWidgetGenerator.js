import {OwnIdWidgetTypes} from "../enums/ownIdWidgetType";

export const ownIdWidget = {
    generateWidgetByType
}

const LOGIN_WIDGET_SCRIPT = "ownid('login', {loginIdField: document.getElementById('email'),passwordField: document.getElementById('password'),submitButton: document.getElementById('submit'),onSuccess: () => {console.lgo('asdad');}});";
const REGISTER_WIDGET_SCRIPT = "ownid('register', {passwordField: document.getElementById('password'),loginIdField: document.getElementById('email')});";

function generateWidgetByType(type, container) {
    switch (type) {
        case OwnIdWidgetTypes.Login:
            return generateLogin(container);
        case OwnIdWidgetTypes.Register:
            return generateRegister(container);
    }
}

function generateRegister(scriptContainer) {
    return createScriptTag(scriptContainer, REGISTER_WIDGET_SCRIPT, OwnIdWidgetTypes.Register);
}

function generateLogin(scriptContainer) {
    return createScriptTag(scriptContainer, LOGIN_WIDGET_SCRIPT, OwnIdWidgetTypes.Login);
}

function createScriptTag(scriptContainer, script, type) {
    return new Promise((resolve, reject) => {
        try {
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.innerHTML = script;
            document.getElementById(scriptContainer).appendChild(s);
            resolve(type.toString() + ' created');
        } catch (error) {
            reject(error);
        }
    });
}
