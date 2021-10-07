import AppENUMS from "./EnumsClass";

export const firstCapital = (text) => {
    return text?.charAt(0).toUpperCase() + text?.slice(1)
}

export const positionElementToTheTop = async (element, delayInMs) => {
    // let head = document.getElementById(`publicPlansAccordionCard${index}`);
    // console.log(element);

    // let navbarHeight = document.getElementById('mainNavBar').getBoundingClientRect().height;
    let navbarHeight = 0;
    // head.scrollIntoView({ behavior: 'smooth', block: 'start' });
    await new Promise(resolve => setTimeout(resolve, delayInMs));
    var ElementTop = element.getBoundingClientRect().top;
    // console.log("headTop", headTop);

    window.scrollBy({
        top: ElementTop - navbarHeight,
        // top: headTop,
        left: 0,
        behavior: 'smooth'
    });
}

export const getRole = (userDetails) => {
    switch (userDetails) {
        case "x1":
            return AppENUMS.role.user;
        case "x2":
            return AppENUMS.role.manager;
        case "x3":
            return AppENUMS.role.admin;
        default:
            return AppENUMS.role.guest;
    }
}

// export const getQuizIndex=(appContext, quiz) =>{
//     return appContext.data.quizzes.data.findIndex(q => q.id==quiz.id);
// }
//
// export const getQuestionIndex=(quiz, questionId) =>{
//     return quiz.questions.findIndex(q => q.id==questionId);
// }
// export const getQuestionById=(quiz, questionId) =>{
//     return quiz.questions.find(q => q.id==questionId);
// }
//
// export const getChoiceIndex=(question, choiceId) =>{
//     return question.choices.findIndex(c => c.id==choiceId);
// }
// export const getChoiceById=(question, choiceId) =>{
//     return question.choices.find(ch => ch.id===choiceId);
// }

// export const userDetailsToArray=(user) =>{
//     return [user,user,getRole(user)];
// }

export const sortQuestionsByPositions=(quiz)=>{
    quiz?.questions?.sort((a,b)=>(a.positionFrom0 > b.positionFrom0) ? 1 : ((a.positionFrom0 < b.positionFrom0) ? -1 : 0));
    // console.log("sortedQuiz:", quiz);
    return quiz;
}

export const refreshPositionNumbersOnSortedQuestions=(quiz)=>{
    quiz.questions.forEach((q,i)=>{q.positionFrom0=i;})
    return quiz;
}

export const swapQuestions=(quiz, sourceIndex,destinationIndex)=>{
    let q1 = quiz.questions[sourceIndex].positionFrom0 = destinationIndex;
    let q2 = quiz.questions[destinationIndex].positionFrom0 = sourceIndex;

}

export const questionsNeedReordering = (quiz) =>{
    let changeNeeded = false;
    quiz.questions?.forEach((q,i) => {
        // console.log(q.positionFrom0 != i)
        if (q.positionFrom0 != i) changeNeeded =  true;
    })
    return changeNeeded;
}

export function countIssues(quizIssuesHandler) {
    let counter = 0;
    Object.keys(quizIssuesHandler[0])
        .forEach(key => {
            if (quizIssuesHandler[0][key]) counter++
        })
    return counter
}