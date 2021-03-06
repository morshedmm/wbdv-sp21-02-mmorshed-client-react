import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'

const LessonTabs = (
    {
        lessons=[

            {_id: "123", title: "Lesson A"},
            {_id: "123", title: "Lesson B"},
            {_id: "123", title: "Lesson C"}

        ],
        findLessonsForModule,
        createLessonForModule,
        deleteLesson,
        updateLesson
    }) => {
    const {courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return(
    <div>
        {/*<h2>Lessons</h2>*/}
        <ul className="nav nav-pills">
            {
                lessons.map(lesson =>
                    <li className="nav-item add-padding-right-25">
                        <EditableItem
                            active={lesson._id === lessonId}
                            to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
                            deleteItem={deleteLesson}
                            updateItem={updateLesson}
                            item={lesson}/>
                    </li>
                )
            }
            <li>
                <span className="float-right">
                <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus"></i>
                </span>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        console.log("LOAD LESSONS FOR MODULE:")
        console.log(moduleId)
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons
            }))
    },
    createLessonForModule: (moduleId) => {
        console.log("CREATE LESSON FOR MODULE: " + moduleId)
        lessonService
            .createLessonForModule(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    },
    updateLesson: (lesson) =>
            lessonService.updateLesson(lesson._id, lesson)
               .then(status => dispatch({
                   type: "UPDATE_LESSON",
                   lesson
            })),
    deleteLesson: (item) => {
        lessonService.deleteLesson(item._id)
        .then(status => dispatch({
            type: "DELETE_LESSON",
            lessonToDelete:item
        }))
    }


})

export default connect(stpm, dtpm)(LessonTabs)