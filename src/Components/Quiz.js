import React, {useEffect} from 'react';
import Question from "./Question";
import UpdateQuizOptions from "./UpdateQuizOptions";

export const quizContextSource = React.createContext({});
export default function Quiz({data: [quizData, quizPositionFrom0]}) {
    const quizHandlingArray = React.useState({data:quizData, positionFrom0:quizPositionFrom0});

    return (
        <div
            style={{
                textAlign: 'left',
                width: '100%'
            }}
        >
            <quizContextSource.Provider value={quizHandlingArray}>
                {quizHandlingArray[0]?.data?.questions.map((q, position) => <Question data={[q, position]} key={position}/>)}
                {/*{quizData.questions.map((q, position) => <Question data={[q, position]} key={position}/>)}*/}
                {/*<ReactJson src={quiz}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>*/}
                <UpdateQuizOptions/>

            </quizContextSource.Provider>

        </div>
    );
}