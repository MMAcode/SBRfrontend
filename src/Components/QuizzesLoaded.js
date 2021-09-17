import React, {useContext} from 'react';
import Quiz from "./Quiz";
import AccodrionMaterial from "./AccodrionMaterial";
import appContextSource from "../services/appContextSource";

export default function QuizzesLoaded({data: allQuizzes}) {
    // const appContext = React.useContext(appContextSource);
    return (
        <div>
            <h1>Quizzes:</h1>
            {/*{allQuizzes.map((quiz,position) => <Quiz key={quiz.id} data={quiz}/>)}*/}
            {allQuizzes.map((quiz, position) =>
                <AccodrionMaterial
                    key={position}
                    head={<h2>{quiz.title}</h2>}
                    body={<Quiz key={quiz.id} data={quiz}/>}
                    data={quiz}
                    positionFrom0={position}
                    // disabled={appContext?}
                />)}


        </div>
    );
}