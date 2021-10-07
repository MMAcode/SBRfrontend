import localDataService from "../services/localDataService";
import {useContext, useEffect} from "react";
import RESTRequestsService from "../services/RESTRequestsService";
import {userContextSource} from "../services/contextsService";

// export default function useLoginAs(userDetails) {
//     useUpdateUserLoginDetails(userDetails, userDetails, getRole(userDetails));
// }
//
// export function useLoginAsOnLoad(userDetails) {
//     useEffect(()=>{
//         useUpdateUserLoginDetails(userDetails, userDetails, getRole(userDetails));
//     },[])
// }


// export function useLoginProcessor(user){
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

