import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from '../../services/topic-service'

const TopicPills = (
    {
        topics=[
            {_id: "123", title: "Lesson A"},
            {_id: "123", title: "Lesson B"},
            {_id: "123", title: "Lesson C"}
        ],
        findTopicsForLesson,
        createTopicForLesson,
        deleteTopic,
        updateTopic
    }) => {
    const {courseId, moduleId, lessonId, topicId} = useParams();
    useEffect(() => {
        console.log("LOAD TOPICS FOR LESSON: " + lessonId)
        if(lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
    }, [lessonId])
    return(
    <div>
        {/*<h2>Lessons</h2>*/}
        <ul className="nav nav-pills">
            {
                topics.map(topic =>
                    <li className="nav-item add-padding-right-25">
                        <EditableItem
                            active={topic._id === topicId}
                            to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                            deleteItem={deleteTopic}
                            updateItem={updateTopic}
                            item={topic}/>
                    </li>
                )
            }
            <li>
                <span className="float-right">
                <i onClick={() => createTopicForLesson(LessonId)} className="fas fa-plus"></i>
                </span>
            </li>
        </ul>
    </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    findTopicsForLesson: (LessonId) => {
        console.log("LOAD TOPICS FOR LESSON:")
        console.log(lessonId)
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_LESSONS",
                topics
            }))
    },
    createTopicForLesson: (lessonId) => {
        console.log("CREATE TOPIC FOR LESSON: " + lessonId)
        topicService
            .createTopicForLesson(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    },
    updateTopic: (topic) =>
            topicService.updateTopic(topic._id, topic)
               .then(status => dispatch({
                   type: "UPDATE_TOPIC",
                   topic
            })),
    deleteTopic: (item) => {
        topicService.deleteTopic(item._id)
        .then(status => dispatch({
            type: "DELETE_TOPIC",
            topicToDelete:item
        }))
    }


})

export default connect(stpm, dtpm)(TopicPills)