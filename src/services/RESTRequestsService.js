import axios from 'axios'
import localDataService from "./localDataService";
export const urlCore = "http://localhost:8080"



class RESTRequestsService {

    // let username = localDataService?.data?.user?.username;
// const username = "x1";
//     let password = localDataService?.data?.user?.password;
// const password = "x1";

// const {username, password} = localDataService?.data?.user?.data;
// const xx = localDataService?.data?.user;
//     console.log("xxxx:",localDataService)

    // headers = { authorization: 'Basic ' + window.btoa(this.getUsername()+":"+this.getPassword()) };
    // authorization = {authorization: 'Basic ' + window.btoa(this.getUsername()+":"+this.getPassword())};

    async delay(){await new Promise(resolve => setTimeout(resolve, 0));}

    // getUsers(){
    //     return axios.get(urlCore+"/users");
    // }

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
        console.log("xxxyyy:", this.getUsername(), this.getPassword(), this.headers);
        return axios.get(`${urlCore}/quizzes`
            ,{ headers: { authorization: 'Basic ' + window.btoa(this.getUsername()+":"+this.getPassword()) } }
            // ,{ headers: this.headers }
        );
    }

    updateQuiz(quiz){
        console.log("REST:specific quiz to be updated: ",quiz);
        axios.post(`${urlCore}/quiz/update`,quiz)
                .then((x)=>console.log("quiz updated",x))
                .catch(e=>console.log("error updating quiz ", quiz.title, e))
    }

    getUsername(){
        console.log("getUsername:",localDataService)
        return localDataService?.data?.user?.data?.username
    }
    getPassword(){
        return localDataService?.data?.user?.data?.password
    }
}

export default new RESTRequestsService();