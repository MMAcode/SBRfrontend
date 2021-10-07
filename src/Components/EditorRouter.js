import React, {useContext} from 'react';
import {userContextSource} from "../services/contextsService";
import EnumsClass from "../services/EnumsClass";

export default function EditorRouter({editor, notEditor}) {
    let userContextHandler = useContext(userContextSource);
    return (<>{userContextHandler[0]?.role == EnumsClass.role.admin ? editor : notEditor}</>);
}