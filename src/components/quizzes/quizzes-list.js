import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        // TODO: implement this in a separate service file
        fetch("http://localhost:3000/api/quizzes")
            .then(response => response.json())
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    return(
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                        <div className="container">
                          <div className="row form-control">
                            <Link
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                className="list-group-ite">
                                {quiz.title}
                            </Link>
                            <Link
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                className="float-right btn btn-primary">
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