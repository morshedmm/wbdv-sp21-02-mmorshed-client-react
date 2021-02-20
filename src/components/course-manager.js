import React from 'react'
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../services/course-service";
import CourseHeader from "./course-header";

class CourseManager extends React.Component {
constructor(props) {
    super(props);
  this.state = {
    courses: [],
    value: ''
   
  }

  this.handleChange = this.handleChange.bind(this);
}


  updateCourse = (course) => {
    console.log(course)
    courseService.updateCourse(course._id, course)
        .then(status => this.setState((prevState) => ({
          ...prevState,
          courses: prevState.courses.map(
              (c) => c._id === course._id ? course : c)

          // courses: prevState.courses.map(c => {
          //   if(c._id === course._id) {
          //     return course
          //   } else {
          //     return c
          //   }
          // })
        })))
  }

  componentDidMount = () =>
    // findAllCourses()
    //     .then(actualCourses => this.setState({
    //       courses: actualCourses
    //     }))
    findAllCourses()
        .then(courses => this.setState({courses}))

  addCourse = (temp) => {
    //var temp = "added course";
    const newCourse = {
      //title: "New Course",
      title: temp,
      owner: "me",
      lastModified: new Date().getMonth() + "/" + new Date().getDate() + "/" + new Date().getFullYear()
    }
    courseService.createCourse(newCourse)
        .then(course => this.setState(
            (prevState) => ({
              ...prevState,
              courses: [
                  ...prevState.courses,
                  course
              ]
            })))

    // this.state.courses.push(newCourse)
    // this.setState(this.state)
  }

  deleteCourse = (courseToDelete) => {
    courseService.deleteCourse(courseToDelete._id)
        .then(status => {
          // const newCourses = this.state.courses
          //     .filter(course => course !== courseToDelete)
          // this.setState({
          //   courses: newCourses
          // })
          // this.setState((prevState) => {
          //   // let nextState = {...prevState}
          //   // nextState.courses =
          //   //     prevState
          //   //         .courses
          //   //         .filter(course => course !== courseToDelete)
          //
          //   let nextState = {
          //     ...prevState,
          //     courses: prevState.courses.filter
          //               (course => course !== courseToDelete)
          //   }
          //
          //   return nextState
          // })

          this.setState((prevState) => ({
              ...prevState,
              courses: prevState.courses.filter
                (course => course !== courseToDelete)
          }))
        })
  }

  handleChange(event) {
      this.setState({value: event.target.value});
    }

  render() {
    return(
      <div className="container pt-3">
          <div class="">
          <Link to="/">
            <i className="fas fa-2x fa-home float-right"></i>
          </Link>
          </div>

        {/*<button onClick={this.addCourse}>Add Course</button>*/}
        {/*<button onClick={this.addCourse.bind(this,"newCourse")}>Add Course</button>*/}

      <Route path="/courses/table">
      <div class="row">

                <div class="col-1">
                    <i className="fa fa-bars fa-2x pull-right"></i>
                </div>

                <div class="col-3 d-none d-sm-block">
                    <h4>Course Manager</h4>
                </div>

                <div class="col-7">
                    <input class="form-control bg-muted" type="text" value={this.state.value}
                    onChange={this.handleChange} placeholder="New Course Title"/>
                </div>

                <div class="col-1">

                    <i onClick={this.addCourse.bind(this,this.state.value)}
                    className="fa fa-plus fa-2x color-me-tomato"></i>

                </div>


        </div>
        </Route>

        <Route path="/courses/grid">
              <div class="row">

                        <div class="col-1">
                            <i className="fa fa-bars fa-2x pull-right"></i>
                        </div>

                        <div class="col-3 d-none d-sm-block">
                            <h4>Course Manager</h4>
                        </div>

                        <div class="col-7">
                            <input class="form-control bg-muted" type="text" value={this.state.value}
                            onChange={this.handleChange} placeholder="New Course Title"/>
                        </div>

                        <div class="col-1">

                            <i onClick={this.addCourse.bind(this,this.state.value)}
                            className="fa fa-plus fa-2x color-me-tomato"></i>

                        </div>


              </div>
        </Route>



        {/*
        <Route path="/courses/table">
          <CourseHeader/>
        </Route>
        */}

        <Route path="/courses/table">
          <CourseTable
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
              <div className="fixed-bottom">
              <i onClick={this.addCourse.bind(this,this.state.value)}
               className="fa fa-plus fa-2x color-me-tomato float-right"></i>
               </div>
        </Route>
        <Route path="/courses/grid">
          <CourseGrid
              updateCourse={this.updateCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>
              <div className="fixed-bottom">
              <i onClick={this.addCourse.bind(this,this.state.value)}
              className="fa fa-plus fa-2x color-me-tomato float-right"></i>
              </div>
        </Route>
        <div>



         </div>
          {/*<Route path="/courses/editor">*/}
          {/*    <CourseEditor/>*/}
          {/*</Route>*/}
          {/*<Route path="/courses/editor"*/}
          {/*       render={(props) => <CourseEditor props={props}/>}>*/}
          {/*</Route>*/}
          <Route path="/courses/editor"
                 render={(props) => <CourseEditor {...props}/>}>
          </Route>
      </div>
    )
  }
}

export default CourseManager