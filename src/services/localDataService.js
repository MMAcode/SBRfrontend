import AppENUMS from "./EnumsClass";


class LocalDataService {
    data={
        user:{
            data:{},
            status: AppENUMS.status.notStarted
        },
        // quizzes:{
        //     data:{},
        //     status: AppENUMS.status.notStarted
        // },

    };


    setUserDataInLocalService(u, p, r = "USER"){
        console.log("xy",u,p,r);
        const user= {username: u, password:p, role: r};
        this.data.user.data = user;
    }


}
const localDataService = new LocalDataService()
export default localDataService;