import AppENUMS from "./EnumsClass";


class LocalDataService {
    data={
        user:{
            data:{},
            status: AppENUMS.status.notStarted
        },
        quizzes:{
            data:{},
            status: AppENUMS.status.notStarted
        },

    };


    setUserDataInLocalService(u, p, r = "USER"){
        const user= {username: u, password:p, role: r};
        this.data.user = user;
    }


}
const localDataService = new LocalDataService()
export default localDataService;