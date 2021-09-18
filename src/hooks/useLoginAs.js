// // import React from 'react';
// import {getRole, userDetailsToArray} from "../services/helperMethods";
// import localDataService from "../services/localDataService";
// import AppENUMS from "../services/EnumsClass";
// import {useContext, useEffect} from "react";
// import appContextSource from "../services/appContextSource";
//
// // export default function useLoginAs(userDetails) {
// //     useUpdateUserLoginDetails(userDetails, userDetails, getRole(userDetails));
// // }
// //
// // export function useLoginAsOnLoad(userDetails) {
// //     useEffect(()=>{
// //         useUpdateUserLoginDetails(userDetails, userDetails, getRole(userDetails));
// //     },[])
// // }
//
// export function useLoginSimple(user){
//     const [u,p,r] = userDetailsToArray(user);
//     const appContext = useContext(appContextSource);
//         localDataService.setUserDataInLocalService(u, p, r);
//         appContext.setData((d) => ({
//             ...d, user: {
//                 data: localDataService.data.user,
//                 status: AppENUMS.status.loaded
//             }
//         }))
// }