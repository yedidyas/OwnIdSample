import {WIDGET_TYPES} from "../ownID/widgets";

export const ownIdWidget = {
    render,
    getOwnIDData,
    destroy,
}

function init(config) {
    window.ownid('init', config || {serverUrl: 'https://hw10w2gsyi45gi.server.ownid.com/ownid'});
}

function render(type, loginIdField, passwordField, submitButton, config, callback) {
    return new Promise((resolve, reject) => {
        try {
            init(config);
            WIDGET_TYPES[type](loginIdField.current, passwordField.current, submitButton.current, callback);
            resolve(type)
        } catch (e) {
            reject(e);
        }
    });
}

function getOwnIDData(type) {
    return window.ownid('getOwnIDPayload', type);
}

function destroy(type) {
    return window.ownid('destroy', type);
}
