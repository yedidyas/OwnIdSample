import {WIDGET_TYPES} from "../ownID/widgets";

export const ownIdWidget = {
    generateWidgetByType,
}

init()

function init() {
    window.ownid('init', {serverUrl: 'https://hw10w2gsyi45gi.server.ownid.com/ownid'});
}

function generateWidgetByType(type, container) {
    return new Promise((resolve, reject) => {
        try {
            WIDGET_TYPES[type]();
            resolve(type)
        } catch (e) {
            reject(e);
        }
    });
}
