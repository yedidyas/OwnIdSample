import React, {useEffect} from "react";
import {ownIdWidget} from "../../services/ownIdReactService";

function OwnIdWidget({type,loginIdField,passwordField,submitButton}) {
    useEffect(() => {
        ownIdWidget.render(type,loginIdField,passwordField,submitButton)
            .then((message) => console.log(message))
            .catch(err => console.error(err));
        return () => {
            ownIdWidget.destroy(type);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div/>
    );
}

export default OwnIdWidget;
