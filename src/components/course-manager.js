import React from 'react'
import CourseTable from "course-table/course-table";

class CourseManager extends React.Component {
    state = {
        courses: [
            {title: "CS1234", owner: "frank", lastModified: "2/9/15"},
            {title: "CS2345", owner: "greg", lastModified: "3/8/25"},
            {title: "CS3456", owner: "herbert", lastModified: "4/7/35"},
            {title: "CS4567", owner: "ian", lastModified: "5/6/45"},


        ]

    }

    addCourse = () => {
        const newCourse = {
          title: "New Course",
          owner: "New Owner",
          lastModified: "Never"
        }
        this.state.courses.push(newCourse)
        this.setState(this.state)
      }

    deleteCourse = (courseToDelete) => {
        const newCourses = this.state.courses
          .filter(course => course !== courseToDelete)
        this.setState({
          courses: newCourses
        })
      }

    render() {
        <div>
            <h1>CourseManager</h1>
            <button onClick={this.addCourse}>Add Course</button>
            <CourseTable deleteCourse={this.deleteCourse} courses={this.state.courses}/>
        </div>

    }

}

export default CourseManager