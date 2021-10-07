import React, {useContext} from 'react';
import EditQuestionOptions from "./EditQuestionOptions";
import Choices from "./Choices";
import {questionContextSource} from "../../../../services/contextsService";
import EditorRouter from "../../../EditorRouter";

export default function Question(props) {
    const {question, positionFrom0} = useContext(questionContextSource);
    // console.log("qqq:",question)
    return (
        <div>
            <div style={{textAlign: "left"}}>

                <EditorRouter
                    editor={<EditQuestionOptions/>}
                    notEditor={<h3 style={{
                        display: "inline-block",
                        paddingRight: '20px'
                    }}>
                        {positionFrom0 + 1}) {question.title}?
                    </h3>}/>
            </div>
            {question.choices && <Choices data={question.choices}/>}
            {/*<ReactJson src={data}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>*/}
        </div>
    );
}