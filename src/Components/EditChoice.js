import React, {useEffect} from 'react';
import RestrictedAccess from "./RestrictedAccess";
import {quizContextSource} from "./Quiz";
import appContextSource from "../services/appContextSource";
import {getChoiceIndex, getQuestionIndex, getQuizIndex} from "../services/helperMethods";
export default function EditChoice({data}) {

    const [quiz,setQuiz] = React.useContext(quizContextSource);
    const appContext = React.useContext(appContextSource);

    const question_id = data?.question_id;
    const choice_id = data.id;

    const question =  quiz.questions.find(q => q.id==question_id);
    const choice = question.choices.find(c=>c.id==choice_id)

    const quizIndex = getQuizIndex(appContext,quiz);
    const questionIndex = getQuestionIndex(quiz,question_id);
    const choiceIndex = getChoiceIndex(question,choice_id);

    // let choice;
    useEffect(()=>{
// console.log(quiz.id, question_id,choice_id)
// console.log(quizIndex, questionIndex,choiceIndex)
// console.log()
    },[])

    const flipCorrectAnswer = ()=> {
        choice.correctAnswer = !choice.correctAnswer;
        saveUpdatedQuizToContext();
        // console.log(quiz.id, question_id,choice_id)
        // console.log(quizIndex, questionIndex,choiceIndex)
        // console.log()
    }

    const saveUpdatedQuizToContext = ()=>{
        // appContext.setData(prevData => {
        //     //!!causes rerender to all component using Context, like all choice components...
        //     prevData.quizzes.data[quizIndex]=quiz;
        //     return ({...prevData});
        // })

        setQuiz(prevData => ({...quiz}));

    }

    const deleteOption = () => {
        question.choices.splice(choiceIndex,1);
        saveUpdatedQuizToContext();
    }
    return (
        <div className="restrict_admin">
            <button onClick={()=>flipCorrectAnswer()}>Change qz{quiz.id}q{question_id}o{choice_id}</button>
            <button onClick={()=>deleteOption()}>delete option</button>
        </div>
    );
}