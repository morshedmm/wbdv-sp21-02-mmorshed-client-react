import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import questionService from '../../services/questions-service'

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        // TODO: move this to a service file
        {/*fetch(`http://localhost:3000/api/quizzes/${quizId}/questions`)
            .then(response => response.json())*/}
        questionService.findQuestionsForQuiz(quizId)
            .then(questions => setQuestions(questions))
        },[])

    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <ul>
                {
                    questions.map(question =>
                    <>
                    <li>
                        <Question question={question}/>
                    </li>
                    <br/>
                    </>

                    )
                }
            </ul>
        </div>
    );
}

export default Quiz;