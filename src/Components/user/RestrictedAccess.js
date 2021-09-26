import React, {useContext, useEffect} from 'react';
import appContextSource from "../../services/appContextSource";
import ReactJson from "react-json-view";
import AppENUMS from "../../services/EnumsClass";

export default function RestrictedAccess({children}) {
    const currentUserRole = useContext(appContextSource).data?.user?.data?.role.toLocaleLowerCase();
        // console.log("we:", currentUserRole==AppENUMS.role.manager, currentUserRole);

    // const isUserAllowedToView = (roleAllowed,currentUserRole) => {
    //     if (roleAllowed==AppENUMS.role)
    // }
    // useEffect(()=>{
    //     // console.log("we:", currentUserRole);
    //
    //
    // },[currentUserRole])

    return (
        <>
            {/*Restricted by: {roleAllowed} <br/> current: {currentUserRole}*/}
            {/*This section can be accessed only by: {roleAllowed}. Your role is:*/}
            {/*<ReactJson src={user}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>*/}

            {currentUserRole==AppENUMS.role.admin && children}
            {/*{currentUserRole==AppENUMS.role.manager && "(admin)"}*/}
            {/*(Admin)*/}

        </>
    );
}