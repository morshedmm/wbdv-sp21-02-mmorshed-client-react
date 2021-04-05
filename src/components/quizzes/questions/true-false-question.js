import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null);
    const [graded, setGraded] = useState(false);
    return (
        <div>
            <h4>
                {question.question}
                {/*
                    answer == question.correct &&
                    <i className="fas fa-check"></i>
                */}
                {/*
                    answer != question.correct &&
                    <i className="fas fa-times"></i>
                */}
            </h4>
            {/*question.correct*/}
            {/*<br/>*/}
            {/*JSON.stringify(answer)*/}
            <br/>
            <div className="list-group">

              {!graded &&
              <div className="list-group-item">
                <label><input
                    type="radio"
                    onClick={() => setAnswer(true)}
                    name={question._id}/>True</label>
              </div>
              }

              {!graded &&
              <div className="list-group-item">
                <label><input
                    type="radio"
                    onClick={() => setAnswer(false)}
                    name={question._id}/>False</label>
              </div>
              }

              {graded && question.correct=='true' &&
                <div className="list-group-item background-correct">
                              <label><input
                                  type="radio"
                                  onClick={() => setAnswer(true)}
                                  name={question._id}/>True</label>
                </div>
              }

              {graded && question.correct!='false' &&
                                            <div className="list-group-item">
                                                                        <label><input
                                                                            type="radio"
                                                                            onClick={() => setAnswer(false)}
                                                                            name={question._id}/>False</label>
                              </div>
              }

              {graded && question.correct!='true' &&
                                            <div className="list-group-item">
                                                          <label><input
                                                              type="radio"
                                                              onClick={() => setAnswer(true)}
                                                              name={question._id}/>True</label>
                              </div>
                            }

              {graded && question.correct=='false' &&
                <div className="list-group-item background-correct">
                                            <label><input
                                                type="radio"
                                                onClick={() => setAnswer(false)}
                                                name={question._id}/>False</label>
                </div>
              }







            </div>

                  <div>
                     Your Answer: {answer}
                  </div>
                  <div>
                            <i type="button" className="btn btn-success" onClick={() => setGraded(true)}>
                                Grade
                            </i>
                  </div>

        </div>
    )
}

export default TrueFalseQuestion;