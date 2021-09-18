import axios from 'axios'
import localDataService from "./localDataService";
export const urlCore = "http://localhost:8080"

const username = localDataService?.data?.user?.username;
// const username = "x1";
const password = localDataService?.data?.user?.password;
// const password = "x1";

class RESTRequestsService {

    headers = { authorization: 'Basic ' + window.btoa(username+":"+password) };
    authorization = {authorization: 'Basic ' + window.btoa(username+":"+password)};

    async delay(){await new Promise(resolve => setTimeout(resolve, 0));}

    getUsers(){
        return axios.get(urlCore+"/users");
    }

    // getQuizzes_AllIn() {
    //     console.log("getting quizzes")
    //     axios.get(`${urlCore}/quizzes`
    //         ,{ headers: { authorization: 'Basic ' + window.btoa(username+":"+password) } }
    //     )
    //         .then((x)=>console.log("quizzes using x1 good result:",x))
    //         .catch(e=>console.log("error users x1:", e))
    // }

    async getQuizzes_AllIn() {
        await this.delay();
        return axios.get(`${urlCore}/quizzes`
            // ,{ headers: { authorization: 'Basic ' + window.btoa(username+":"+password) } }
            ,{ headers: this.headers }
        );
    }

    updateQuiz(quiz){
        console.log("REST:specific quiz to be updated: ",quiz);
        axios.post(`${urlCore}/quiz/update`,quiz)
                .then((x)=>console.log("quiz updated",x))
                .catch(e=>console.log("error updating quiz ", quiz.title, e))
    }
}

export default new RESTRequestsService();