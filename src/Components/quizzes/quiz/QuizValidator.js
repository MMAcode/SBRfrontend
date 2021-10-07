import React, {useEffect} from 'react';
import {quizContextSource} from "../../../services/contextsService";
import {countIssues} from "../../../services/helperMethods";

export default function QuizValidator(props) {
    const {quiz, quizIssuesHandler} = React.useContext(quizContextSource);

    // const quizIssuesHandler = React.useState({quizTitleLength: ""});
    // let issues = [];

    useEffect(() => {
        validateQuiz()
    }, [quiz])

    useEffect(() => {
        if (countIssues(quizIssuesHandler) > 0) {

        }
    }, [quizIssuesHandler])




    const validateQuiz = () => {
        console.log("quiz VALIDATOR", quiz)
        validateQuizTitleLength()
        validateNumberOfQuestions()
    }

    function validateQuizTitleLength() {
        if (quiz.title.length < 5 || quiz.title.length>50) {
            quizIssuesHandler[1](q => {
                q.quizTitleLength = "5-50 characters allowed in quiz title. This title contains " + quiz.title.length + " characters."
                return ({...q})
            })
        } else {
            quizIssuesHandler[1](q => {
                q.quizTitleLength = ""
                return ({...q})
            })
        }
    }

    function validateNumberOfQuestions() {
        console.log("qqq length:", quiz.questions.length)
        if (quiz.questions.length < 2 || quiz.questions.length>10) {
            quizIssuesHandler[1](issues => {
                issues.numberOfQuestions = "2 to 10 questions allowed. This quiz contains " + quiz.questions.length + " questions."
                return ({...issues})
            })
        } else {
            quizIssuesHandler[1](issues => {
                issues.numberOfQuestions = ""
                return ({...issues})
            })
        }
    }

    if (countIssues(quizIssuesHandler)==0) return null;
    return (
        <div className='quizValidator'>
            <h4>Issues found:</h4>
                {Object.keys(quizIssuesHandler[0]).map((objKey,i)=> quizIssuesHandler[0][objKey] && <li key={i}>{quizIssuesHandler[0][objKey]}</li>)}
        </div>
    );
}