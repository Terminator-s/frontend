import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './resources/logo.png'
import Nav from 'react-bootstrap/Nav'
import {Navbar , Button} from "react-bootstrap";
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import './Home.css'

import Home from "./Admin/adminHome";
import Admin from "./Admin/admin/adminViewCreate";
import Course from "./Admin/course/courseViewCreate";
import Instructors from "./Admin/instructors/instractorViewCreate";
import Notices from "./Admin/notices/noticeViewCreate";
import Students from "./Admin/students/studentsViewCreate";
class AdminNavigator extends Component{
    render(){
        return(
            <div>
                <NavigatorBar/>
            </div>

        )
    }
}

class NavigatorBar extends Component {
    home = function(e){
        ReactDOM.render(<Home /> , document.getElementById('root'))
    };

    admin = function(e){
        ReactDOM.render(<Admin /> , document.getElementById('root'))
    };

    course = function(e){
        ReactDOM.render(<Course /> , document.getElementById('root'))
    };

    instructors = function(e){
        ReactDOM.render(<Instructors /> , document.getElementById('root'))
    };

    Notices = function(e){
        ReactDOM.render(<Notices /> , document.getElementById('root'))
    };

    Students = function(e){
        ReactDOM.render(<Students /> , document.getElementById('root'))
    };
   render(){
        return(
            <Router>
                <div className="navDiv">
                    <Navbar bg="warning" variant="dark" className="nav">
                        <a className="navbar-brand" href="https://www.sliit.lk/" >
                            <img src={logo} width="30" height="30"/>
                        </a>

                        <Nav className="mr-auto">
                            <Button className="link" onClick={e => this.home(e)}>Home</Button>
                            <Button className="link" onClick={e => this.admin(e)}>Admin</Button>
                            <Button className="link" onClick={e => this.course(e)}>Course</Button>
                            <Button className="link" onClick={e => this.instructors(e)}>Instructors</Button>
                            <Button className="link" onClick={e => this.Notices(e)}>Notices</Button>
                            <Button className="link" onClick={e => this.Students(e)}>Students</Button>
                        </Nav>
                    </Navbar>
                    <br/><br/>
                </div>

                {/*<Route exact path="/" component={Home} />*/}
                {/*<Route path="/admin" component={Admin} />*/}
                {/*<Route path="/course" component={Course} />*/}
                {/*<Route path="/instructors" component={Instructors} />*/}
                {/*<Route path="/notices" component={Notices} />*/}
                {/*<Route path="/students" component={Students} />*/}
            </Router>
        )
    }
}

export default AdminNavigator;
