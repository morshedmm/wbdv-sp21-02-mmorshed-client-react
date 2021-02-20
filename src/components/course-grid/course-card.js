import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({course, deleteCourse, updateCourse, title}) => {

 const [editing, setEditing] = useState(false)
 const [newTitle, setNewTitle] = useState(title)

 const saveTitle = () => {
         setEditing(false)
         const newCourse = {
             ...course,
             title: newTitle
         }
         updateCourse(newCourse)
     }

  return (
  <div className="col-4">
    <div className="card">
      <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
      className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">Some description</p>
        {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
        <img src={``}/>
        <Link to="/courses/editor" className="btn btn-primary">
                    {course.title}
        </Link>
        {/*<i className="fas fa-trash"></i>*/}
        <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
      </div>
    </div>
  </div> )
}
export default CourseCard