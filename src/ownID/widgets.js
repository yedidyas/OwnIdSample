import {OwnIdWidgetTypes} from "../enums/ownIdWidgetType";
import {loginScript} from "./login";
import {registerScript} from "./register";

export const WIDGET_TYPES = {
    [OwnIdWidgetTypes.Login]: loginScript,
    [OwnIdWidgetTypes.Register]: registerScript
}
