import React, {useEffect} from 'react';
import {quizContextSource} from "../../../services/contextsService";
import {countIssues} from "../../../services/helperMethods";

export default function QuizValidator(props) {
    const {quiz, quizIssuesHandler} = React.useContext(quizContextSource);

    // const quizIssuesHandler = React.useState({quizTitleLength: ""});
    // let issues = [];

    // useEffect(() => {
    //     validateQuiz()
    // }, [quiz])
    //
    // useEffect(() => {
    //     if (countIssues(quizIssuesHandler) > 0) {
    //     }
    // }, [quizIssuesHandler])




    const validateQuiz = () => {
        validateQuizTitleLength()
        validateNumberOfQuestions()
        validateNumberOfChoices()
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

    function validateNumberOfChoices() {
        quiz.questions.forEach((q,i)=>{

            const choicesSize = q.choices.length

            if (choicesSize < 2 || choicesSize>5) {
                quizIssuesHandler[1](issues => {
                    issues[`numberOfChoices${i+1}`] = "2 to 5 choices allowed. Question "+(i+1)+" in this quiz contains " +choicesSize + " choices."
                    return ({...issues})
                })
            } else {
                quizIssuesHandler[1](issues => {
                    issues[`numberOfChoices${i+1}`] = ""
                    return ({...issues})
                })
            }
        })
    }

    function validateSingleCorrectAnswer() {
    }

    if (countIssues(quizIssuesHandler)===0) {
        return null;
    };
    return (
        <div className='quizValidator'>
            <h4>Issues found:</h4>
                {Object.keys(quizIssuesHandler[0]).map((objKey,i)=> quizIssuesHandler[0][objKey] && <li key={i}>{quizIssuesHandler[0][objKey]}</li>)}
        </div>
    );
}