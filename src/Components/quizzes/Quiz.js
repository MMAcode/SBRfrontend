import React, {useEffect} from 'react';
import Question from "./quiz/Question";
import UpdateQuizOptions from "./quiz/UpdateQuizOptions";

export const quizContextSource = React.createContext({});
export default function Quiz({data: [quizData, quizPositionFrom0]}) {
    const [quiz,setQuiz] = React.useState(quizData);
    useEffect(()=>{console.log(`quiz ${quizPositionFrom0+1} changed:`,quiz)},[quiz])

    return (
        <div className="quizz">
            {/*<quizContextSource.Provider value={[quiz.data,quiz.positionFrom0,setQuiz]}>*/}
            <quizContextSource.Provider value={[quiz, quizPositionFrom0,setQuiz]}>
                {quiz?.questions?.map((q, position) => <Question data={[q, position]} key={position}/>)}
                {/*<ReactJson src={quiz}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>*/}
                <UpdateQuizOptions/>

            </quizContextSource.Provider>

        </div>
    );
}