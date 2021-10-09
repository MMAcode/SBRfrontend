import React, {useContext, useState} from 'react';
import {questionContextSource, quizContextSource} from "../../../../services/contextsService";

export default function EditAddChoice(props) {
    const quizContext = useContext(quizContextSource);
    const questionContext = useContext(questionContextSource);
    const titleHandler = useState("");

    const addChoice = (e) => {
        e.preventDefault();
        questionContext.question.choices.push({title: titleHandler[0], correctAnswer: false});
        quizContext.setQuiz({...quizContext.quiz});
        titleHandler[1]("");
    }
    return (
        <div className="restrict_admin">
            {/*<button onClick={addChoice}>Add choice</button>*/}
            <div>
                <form>
                    {/*<span>New Choice: </span>*/}
                    <input onChange={e => titleHandler[1](e.target.value)} type="text" value={titleHandler[0]}
                           placeholder="text..."/>
                        <button onClick={addChoice}>Add Choice</button>
                </form>
            </div>
        </div>
    );
}