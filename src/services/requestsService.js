import axios from 'axios'
const url1 = "http://localhost:8080/api/users"

class requestsService {
    getUsers(){
        return axios.get(url1);
    }
}

export default new requestsService();