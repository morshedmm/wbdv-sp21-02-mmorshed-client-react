import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";
import courseService from "../../services/course-service";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import WidgetList from "../widgets/widget-list"

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})

// const store = createStore(moduleReducer)
// const store = createStore(lessonReducer)
const store = createStore(reducer)

const CourseEditor = ({history}) => {
    const {layoutId, courseId, moduleId} = useParams();
    console.log(layoutId)
    const [courseName, setCourseName] = useState(" ")
    courseService.findCourseById(courseId)
        .then(status => setCourseName(status.title))

    return (
    <Provider store={store}>
        <div>

            <h2>
                {/*<Link to="/courses/table">
                    <i className="fas fa-arrow-left"></i>
                </Link>*/}
                 {/*{courseId} {moduleId}*/}
                <Link to={`/courses/${layoutId}`}>
                <i className="fas fa-times float-left"></i>
                </Link>
                <span className="add-padding-left">
                    {courseName}
                </span>
                {/*<i onClick={() => props.history.goBack()}*/}
                {/*   className="fas fa-times float-right"></i>*/}
            </h2>
            <div className="row">
                <div className="col-4">
                    <ModuleList/>
                </div>
                <div className="col-8">
                    <div>
                    <LessonTabs/>
                    </div>

                    <br/>
                    
                    <TopicPills/>

                    <br/>

                    <WidgetList/>

                </div>

            </div>
        </div>
    </Provider>)}

export default CourseEditor