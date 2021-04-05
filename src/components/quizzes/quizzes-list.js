import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import './quizzes-list.css'
import quizService from '../../services/quiz-service'

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        // TODO: implement this in a separate service file
        {/*fetch("http://localhost:3000/api/quizzes")
            .then(response => response.json())*/}
            quizService.findAllQuizzes()
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    return(
        <div className="container">
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                        <div className="">
                          <div className="row list-group-item">
                            <Link
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                className="">
                                {quiz.title}
                            </Link>
                            <Link
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                className="float-right btn btn-primary btn-sm">
                                Start
                                </Link>
                          </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList;