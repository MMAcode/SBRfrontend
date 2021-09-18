import React, {useEffect} from 'react';
import Question from "./quiz/Question";
import UpdateQuizOptions from "./quiz/UpdateQuizOptions";

export const quizContextSource = React.createContext({});
export default function Quiz({data: [quizData, quizPositionFrom0]}) {
    // const [quiz,setQuiz] = React.useState({data:quizData, positionFrom0:quizPositionFrom0});
    const [quiz,setQuiz] = React.useState(quizData);
    // useEffect(()=>{console.log("quiz changed: ",quiz)},[quiz])

    return (
        <div
            style={{
                textAlign: 'left',
                width: '100%'
            }}
        >
            {/*<quizContextSource.Provider value={[quiz.data,quiz.positionFrom0,setQuiz]}>*/}
            <quizContextSource.Provider value={[quiz, quizPositionFrom0,setQuiz]}>
                {quiz.questions.map((q, position) => <Question data={[q, position]} key={position}/>)}
                {/*<ReactJson src={quiz}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>*/}
                <UpdateQuizOptions/>

            </quizContextSource.Provider>

        </div>
    );
}