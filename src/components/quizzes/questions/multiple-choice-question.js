import React, {useState} from "react";
import './questions.css'

const MultipleChoiceQuestion = ({question}) => {

    const [selectedAnswer, setSelectedAnswer] = useState();
    const [graded, setGraded] = useState(false);

    return(
        <div>
            <h4>{question.question}</h4>
            {/*question.correct*/}
            <div className="list-group">
            {
                question.choices.map((choice) => {
                    return(
                    <>
                    { graded && question.correct===choice &&
                    <div className="list-group-item background-correct">
                        <label>
                            <input type="radio" name={question._id} onChange={(event) => {setSelectedAnswer(choice);}}/>
                            <span className="add-padding-left">
                                {choice}
                            </span>
                            <span className="add-padding-left-tick">
                            <i className="fas fa-check"></i>
                            </span>
                        </label>
                    </div>

                    }

                    { graded && question.correct!==choice &&
                                        <div className="list-group-item">
                                            <label>
                                                <input type="radio" name={question._id} onChange={(event) => {setSelectedAnswer(choice);}}/>
                                                <span className="add-padding-left">
                                                    {choice}
                                                </span>
                                            </label>
                                        </div>

                    }

                    { !graded &&
                    <div className="list-group-item">
                                            <label>
                                                <input type="radio" name={question._id} onChange={(event) => {setSelectedAnswer(choice);}}/>
                                                <span className="add-padding-left">
                                                    {choice}
                                                </span>
                                            </label>
                    </div>
                    }
                    </>
                    )
                })
            }
            <div>
                Your Answer: {selectedAnswer}
            </div>
            <div>
                <i type="button" className="btn btn-primary" onClick={() => setGraded(true)}>
                    Grade
                </i>
            </div>
            </div>
        </div>
    )
}

export default MultipleChoiceQuestion;