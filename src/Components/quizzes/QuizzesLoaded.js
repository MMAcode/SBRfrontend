import React, {useContext, useEffect} from 'react';
import QuizWrapper from "./QuizWrapper";
import QuestionReorderingActivator from "./quiz/QuestionReorderingActivator";
import AddQuiz from "./AddQuiz";
import {sortQuizzesByTitle} from "../../services/helperMethods";
import {appContextSource} from "../../services/contextsService";

// export default function QuizzesLoaded({data: allQuizzes}) {
export default function QuizzesLoaded() {

    const appContextHandler = useContext(appContextSource);

    let allQuizzes = appContextHandler?.data?.quizzes?.data;
    // console.log("UUUUUU ", allQuizzes);

    useEffect(()=>{
console.log("APPCONTEXT CHANGE REGISTERED", allQuizzes)

    //     appContextHandler.setData(dataBefore=>{
    //         // console.log("DDDDD",dataBefore?.quizzes?.data);
    //         let quizzes = dataBefore?.quizzes?.data;
    //         sortQuizzesByTitle(quizzes);
    //         console.log("DDDDD",dataBefore?.quizzes?.data);
    //
    //         return({...dataBefore});
    //     })
    //     // allQuizzes.forEach(quiz=> console.log(quiz.title))
    //     // sortQuizzesByTitle(allQuizzes)
    //     //     .forEach(quiz=> console.log(quiz.title))
    },[appContextHandler])


    const sortByTitle = () => {
        appContextHandler.setData(dataBefore => {
            // console.log("DDDDD",dataBefore?.quizzes?.data);
            let quizzes = dataBefore?.quizzes?.data;
            sortQuizzesByTitle(quizzes);
            quizzes = [...quizzes]
            // console.log("DDDDD", dataBefore?.quizzes?.data);
            return ({...dataBefore});
        })
    }


    return (
        <div className="quizzesLoaded">
            <h1>Quizzes</h1>
            <button onClick={sortByTitle}>SortQuizzesByTitle</button>
            <QuestionReorderingActivator/>
            {/*{sortQuizzesByTitle(allQuizzes)?.map((quiz, positionFrom0) =>*/}
            {allQuizzes?.map((quiz, positionFrom0) => {
                console.log("POLLUTING:",quiz.title,positionFrom0)
                return <QuizWrapper key={positionFrom0} data={[quiz, positionFrom0]}/>
                // return <p key={positionFrom0}>{quiz.title}</p>
            })}
            <div className="restrict_admin">
                <AddQuiz/>
            </div>

        </div>
    );
}