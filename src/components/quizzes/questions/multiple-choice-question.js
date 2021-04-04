import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {

    const [selectedAnswer, setSelectedAnswer] = useState();

    return(
        <div>
            <h4>{question.question}</h4>
            {/*question.correct*/}
            <div className="list-group">
            {
                question.choices.map((choice) => {
                    return(
                    <div className="list-group-item">
                        <label>
                            <input type="radio" name={question._id} onChange={(event) => {setSelectedAnswer(choice);}}/>
                            <span className="add-padding-left">
                                {choice}
                            </span>
                        </label>
                    </div>
                    )
                })
            }
            <div>
                {selectedAnswer}
            </div>
            </div>
        </div>
    )
}

export default MultipleChoiceQuestion;