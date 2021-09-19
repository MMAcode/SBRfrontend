import React, {useEffect} from 'react';
import Choices from "./question/Choices";

export const questionContextSource = React.createContext({});

export default function Question({data:[data,questionPositionFrom0]}) {
    const [question, setQuestion] = React.useState(data);
    // useEffect(()=>{console.log(`question ${questionPositionFrom0+1} changed:`,question)},[question])

    return (
        <div
            style={{
                // border:'1px dotted gray',
                backgroundColor: "lightGray",
                padding: '1rem',
                margin: '1rem 0'
            }}
        >
            <questionContextSource.Provider value={[question,questionPositionFrom0,setQuestion]}>
                <h3><strong>Question {questionPositionFrom0+1}:</strong></h3>
                <h3 className="text-center">{data.title}????</h3>
                {data.choices && <Choices data={data.choices}/>}
                {/*<ReactJson src={data}  style={{textAlign:'left', backgroundColor:'lightGray'}}/>*/}
            </questionContextSource.Provider>
        </div>
    );
}