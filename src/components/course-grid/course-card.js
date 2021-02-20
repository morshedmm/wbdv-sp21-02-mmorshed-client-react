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

        <h5 className="card-title">{title}</h5>
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
        {
        <Link to="/courses/editor" className="btn btn-primary">
                    {course.title}
        </Link>
        }
        {/*<i className="fas fa-trash"></i>*/}
        {/*<i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>*/}
        <span className="float-right">
        {editing && <i onClick={() => deleteTitle()} className="fas fa-2x fa-trash"></i>}
        {!editing && <i onClick={() => setEditing(true)} className="fas fa-2x fa-edit"></i>}
        {editing && <i onClick={() => saveTitle()} className="fas fa-2x fa-check"></i>}
        </span>
      </div>
    </div>
  </div> )
}
export default CourseCard