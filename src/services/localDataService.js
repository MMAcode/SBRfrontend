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


    setUser(u,p){
        const user= {username: u, password:p};
        this.data.user = user;
    }
}
const localDataService = new LocalDataService()
export default localDataService;