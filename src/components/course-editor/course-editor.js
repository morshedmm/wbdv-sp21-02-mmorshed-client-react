import React from 'react'
import {Link} from "react-router-dom";
import './course-editor.style.client.css';

const CourseEditor = ({history}) =>
  <div className="row">
    <div className="col-1">
    <i onClick={() => history.goBack()}
               className="fas fa-2x fa-times float-left"></i>
    </div>
    <div className="col-9">
    <h2>

        Course Editor
    </h2>
    </div>

    <div class="container">
        <div>
            <div class="row pt-3 bg-dark webdev-padding-5px">


                <div class="col-1 heading-color ">
                    <i class="fa fa-trash"></i>
                </div>

                <div class="col-3 heading-color ">

                    <h4> CS5610 - WebDev</h4>
                </div>

                <div class="col-8 nav-bar-bottom">
                    <ul class="nav nav-tabs">
                        <li class="nav-items add-padding-tabs">
                            <a class="nav-link heading-color" aria-current="page" href="#">
                                Build
                            </a>
                        </li>
                        <li class="nav-items add-padding-tabs">
                            <a class="nav-link active heading-color" aria-current="page" href="#">
                                Pages
                            </a>
                        </li>
                        <li class="nav-items add-padding-tabs">
                            <a class="nav-link heading-color" aria-current="page" href="#">
                                Theme
                            </a>
                        </li>
                        <li class="nav-items add-padding-tabs">
                            <a class="nav-link heading-color" aria-current="page" href="#">
                                Store
                            </a>
                        </li>
                        <li class="nav-items add-padding-tabs">
                            <a class="nav-link heading-color" aria-current="page" href="#">
                                Apps
                            </a>
                        </li>
                        <li class="nav-items add-padding-tabs">
                            <a class="nav-link heading-color" aria-current="page" href="#">
                                Settings
                            </a>
                        </li>
                        <li class="nav-items add-padding-tabs">
                            <a class="nav-link heading-color" aria-current="page" href="#">
                                <i class="fa fa-plus"></i>
                            </a>
                        </li>
                    </ul>

                </div>

            </div>
        </div>


        <div class="row">
            <div class="col-4 bg-dark add-padding-bot-10px add-padding-top">
                <ul class="list-group">
                    <li class="list-group-item active">
                        Module 1-JQuery
                        <i class="fa fa-trash float-right"></i>
                    </li>
                    <li class="list-group-item bg-secondary heading-color">
                        Module 2-React
                        <i class="fa fa-trash float-right"></i>
                    </li>
                    <li class="list-group-item bg-secondary heading-color">
                        Module 3-Redux
                        <i class="fa fa-trash float-right"></i>
                    </li>
                    <li class="list-group-item bg-secondary heading-color">
                        Module 4-Native
                        <i class="fa fa-trash float-right"></i>
                    </li>
                    <li class="list-group-item bg-secondary heading-color">
                        Module 5-Angular
                        <i class="fa fa-trash float-right"></i>
                    </li>
                    <li class="list-group-item bg-secondary heading-color">
                        Module 6-Node
                        <i class="fa fa-trash float-right"></i>
                    </li>
                    <li class="list-group-item bg-secondary heading-color">
                        Module 7-Mongo
                        <i class="fa fa-trash float-right"></i>
                    </li>
                    <li class="list-group-item bg-dark">
                        <i class="fa fa-plus float-right heading-color"></i>
                    </li>
                </ul>
            </div>
            <div class="col-8 bg-white">
                <ul class="nav nav-pills add-padding-top">
                    <li class="nav-items">
                        <a class="nav-link add-tab-color" aria-current="page" href="#">
                            Topic 1
                        </a>
                    </li>
                    <li class="add-padding-right"></li>
                    <li class="nav-items">
                        <a class="nav-link active add-tab-color" aria-current="page" href="#">
                            Topic 2
                        </a>
                    </li>
                    <li class="add-padding-right"></li>
                    <li class="nav-items">
                        <a class="nav-link add-tab-color" aria-current="page" href="#">
                            Topic 3
                        </a>
                    </li>
                    <li class="add-padding-right"></li>
                    <li class="nav-items">
                        <a class="nav-link add-tab-color" aria-current="page" href="#">
                            Topic 4
                        </a>
                    </li>
                    <li class="add-padding-right"></li>
                    <li class="nav-items">
                        <a class="nav-link add-tab-color" aria-current="page" href="#">
                            <i class="fa fa-plus"></i>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    </div>

  </div>

export default CourseEditor