import React from "react";

const MultipleChoiceQuestion = ({question}) => {
    return(
        <div>
            <h4>{question.question}</h4>
            {/*question.correct*/}
            {
                question.choices.map((choice) => {
                    return(
                    <div>
                        <label>
                            <input type="radio" name={question._id}/>
                            <span className="add-padding-left">
                                {choice}
                            </span>
                        </label>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default MultipleChoiceQuestion;