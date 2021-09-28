import React, {useEffect} from 'react';
import Question from "./Question";
import UpdateQuizOptions from "./UpdateQuizOptions";
import QuestionReorderingActivator from "./QuestionReorderingActivator";
import {sortQuestionsByPositions, swapQuestions} from "../../../services/helperMethods";
import {quizContextSource} from "../../../services/contextsService";
import QuestionsDroppableContext from "./QuestionsDroppableContext";

export default function QuizBody() {

    return (
        <div className="quizz">
            <QuestionsDroppableContext/>
            <UpdateQuizOptions/>
        </div>
    );
}