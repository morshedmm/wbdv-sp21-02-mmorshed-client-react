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

     const deleteTitle = () => {
                 setEditing(false)

                 deleteCourse(course)
             }

  return (
  <div className="col-4">
    <div className="card">
      <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
      className="card-img-top" alt="..."/>
      <div className="card-body">

        {
        !editing &&
        <Link to="/courses/editor">
        {/*<h5 className="card-title">{course.title}</h5>*/}
        {title}
        </Link>
        }

        {
        editing &&
        <input
        onChange={(event) => setNewTitle(event.target.value)}
        value={newTitle}
        className="form-control"/>
        }

        <p className="card-text">Some description</p>
        {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
        <img src={``}/>
        {/*
        <Link to="/courses/editor" className="btn btn-primary">
                    {course.title}
        </Link>
        */}
        {/*<i className="fas fa-trash"></i>*/}
        {/*<i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>*/}
        {editing && <i onClick={() => deleteTitle()} className="fas fa-trash"></i>}
        {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
        {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
      </div>
    </div>
  </div> )
}
export default CourseCard