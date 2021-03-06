const initialState = {
    lessons: []
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case "FIND_LESSONS":
            return {
                ...state,
                lessons: action.lessons
            }

        case "DELETE_LESSON":
                    const newState1 = {
                        lessons: state.lessons.filter(lesson => {
                            if(lesson._id === action.lessonToDelete._id) {
                                return false
                            } else {
                                return true
                            }
                        })
                    }
                    return newState1
        default:
            return state
    }
}

export default lessonReducer