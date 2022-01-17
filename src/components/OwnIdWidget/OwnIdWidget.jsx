import React, {useEffect} from "react";
import {ownIdWidget} from "../../services/ownIdWidgetGenerator";

function OwnIdWidget({type, container}) {
    useEffect(() => {
        ownIdWidget.generateWidgetByType(type, container)
            .then((message) => console.log(message))
            .catch(err => console.error(err));
    }, []);

    return (
        <div id={container}/>
    );
}

export default OwnIdWidget;
