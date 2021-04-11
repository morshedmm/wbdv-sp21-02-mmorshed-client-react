//const TOPICS_URL = "http://localhost:8080/api/topics";
//const WIDGETS_URL = "http://localhost:8080/api/widgets";
//const TOPICS_URL = process.env.REACT_APP_TOPIC_URL;
//const WIDGETS_URL = process.env.REACT_APP_WIDGET_URL;
const QUIZZES_URL = "http://localhost:3000/api/quizzes";


export const findQuizById = (quizId) =>
    fetch(`${QUIZZES_URL}/${quizId}`)
        .then(response => response.json())

export const findAllQuizzes = () =>
    fetch(`${QUIZZES_URL}`)
        .then(response => response.json())

export const submitQuiz = (quizId, questions) => {
 fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
   method: 'POST',
   body: JSON.stringify(questions),
   headers: {
     'content-type': 'application/json'
   }
 }).then(response => response.json())
   .then(result => console.log(result))
}



export default {
    findQuizById, findAllQuizzes, submitQuiz
}