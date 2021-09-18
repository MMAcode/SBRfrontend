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

export const getQuizIndex=(appContext, quiz) =>{
    return appContext.data.quizzes.data.findIndex(q => q.id==quiz.id);
}

export const getQuestionIndex=(quiz, questionId) =>{
    return quiz.questions.findIndex(q => q.id==questionId);
}
export const getQuestionById=(quiz, questionId) =>{
    return quiz.questions.find(q => q.id==questionId);
}

export const getChoiceIndex=(question, choiceId) =>{
    return question.choices.findIndex(c => c.id==choiceId);
}
export const getChoiceById=(question, choiceId) =>{
    return question.choices.find(ch => ch.id===choiceId);
}

export const userDetailsToArray=(user) =>{
    return [user,user,getRole(user)];
}



