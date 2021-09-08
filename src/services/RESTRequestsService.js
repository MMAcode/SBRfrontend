import axios from 'axios'
export const urlCore = "http://localhost:8080"

class RESTRequestsService {
    getUsers(){
        return axios.get(urlCore+"/users");
    }
}

export default new RESTRequestsService();