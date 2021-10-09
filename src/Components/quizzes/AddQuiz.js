import React, {useState} from 'react';
import {appContextSource, quizContextSource} from "../../services/contextsService";
import EnumsClass from "../../services/EnumsClass";
export default function AddQuiz(props) {
    const newQuizTitleHandler = useState("");
    const appContextHandler = React.useContext(appContextSource);

    const addQuiz=(e)=>{
        e.preventDefault();
        //this is anti pattern:
        // appContextHandler.data.quizzes.data.push({
        //     title:newQuizTitleHandler[0],
        //     questions:[]
        //     })
        // appContextHandler.setData({...appContextHandler.data});


        appContextHandler.setData((data)=>{
            data.quizzes.data.push({
                title:newQuizTitleHandler[0],
                questions:[]
            })
            return ({...data})
        });

        newQuizTitleHandler[1]("");

    }


    return (
        <form>
            <input onChange={e => newQuizTitleHandler[1](e.target.value)} type="text" value={newQuizTitleHandler[0]}
                   placeholder="Title..."/>
            <button onClick={addQuiz}>Add</button>
        </form>
    );
}