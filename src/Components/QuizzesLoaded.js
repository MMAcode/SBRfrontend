import React, {useContext} from 'react';
import QuizWrapper from "./QuizWrapper";
import AccodrionMaterial from "./AccodrionMaterial";
import appContextSource from "../services/appContextSource";

export default function QuizzesLoaded({data: allQuizzes}) {
    // const appContext = React.useContext(appContextSource);
    console.log("Quizess props:", allQuizzes.length);
    return (
        <div>
            <h1>Quizzes:</h1>
            {/*{allQuizzes.map((quiz,position) => <QuizWrapper key={quiz.id} data={quiz}/>)}*/}
            {allQuizzes.map((quiz, position) =>
                <AccodrionMaterial
                    head={<h2>{quiz.title}</h2>}
                    body={<QuizWrapper key={quiz.id} data={quiz}/>}
                    data={quiz}
                    // disabled={appContext?}
                />)}


        </div>
    );
}