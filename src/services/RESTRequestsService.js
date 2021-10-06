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

    config() {
        return ({
            // headers: {
            //     authorization: 'Basic ' + window.btoa(this.getUsername() + ":" + this.getPassword())
            // },
            withCredentials: true,
            params:{'remember-me':true},
        })
    };

    // configOnlyCredentials() {
    //     return ({
    //         credentials: 'include'
    //     })
    // };

    // authorization = {authorization: 'Basic ' + window.btoa(this.getUsername()+":"+this.getPassword())};

    async delay() {
        await new Promise(resolve => setTimeout(resolve, 0));
    }

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

    // async loginUser (u, p ){
    //     return axios.get(`${urlCore}/login`,{
    //         headers: {
    //             authorization: 'Basic ' + window.btoa(u + ":" + p)
    //         },
    //         credentials: 'include' // to include cookies I think (for remember me service)
    //     } )
    //
    // }

    async getUserDetailsFromCookie() {
        return axios({ //https://axios-http.com/docs/req_config
            method: 'get',
            url: `${urlCore}/login`,
            params: {
            //     username:u,
            //     password:p,
                'remember-me':true,
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            withCredentials:true
        })
    }

    async loginUser(u, p) {
        return axios({ //https://axios-http.com/docs/req_config
            method: 'post',
            url: `${urlCore}/login`,
            params: {
                username:u,
                password:p,
                'remember-me':true,
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            withCredentials:true
        })
    }

    async logoutUser() {
        return axios({ //https://axios-http.com/docs/req_config
            method: 'post',
            url: `${urlCore}/logout`,
            params: {
                'remember-me':true,
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            withCredentials:true
        })
    }

    async getQuizzes_AllIn() {
        await this.delay();
        // console.log("xxxyyy:", this.getUsername(), this.getPassword(), this.config);
        return axios({
            method: 'get',
            url: `${urlCore}/quizzes`,
            params:{'remember-me':true},
            withCredentials: true
        });
    }

    // async getQuizzes_AllIn() {
    //     await this.delay();
    //     console.log("xxxyyy:", this.getUsername(), this.getPassword(), this.config);
    //     return axios.get(`${urlCore}/quizzes`
    //         // ,{ headers: { authorization: 'Basic ' + window.btoa(this.getUsername()+":"+this.getPassword()) } }
    //         // ,{ headers: {authorization:this.authorization}}
    //         , this.config()
    //     );
    // }

    updateQuiz(quiz) {
        console.log("REST:specific quiz to be updated: ", quiz);
        return axios.post(`${urlCore}/quiz/update`, quiz, this.config());
    }

    getUsername() {
        console.log("getUsername:", localDataService)
        return localDataService?.data?.user?.data?.username
    }

    getPassword() {
        return localDataService?.data?.user?.data?.password
    }
}

export default new RESTRequestsService();