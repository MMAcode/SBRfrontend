class LocalDataService {
    data={};

    setUser(u,p){
        const user= {username: u, password:p};
        this.data.user = user;
    }
}
const localDataService = new LocalDataService()
export default localDataService;