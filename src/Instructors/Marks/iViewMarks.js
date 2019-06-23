import React, {Component} from 'react';
import {Table, Card, Button} from "react-bootstrap";
import ReactDOM from "react-dom";
import EditMarks from "./iEditMarks";
import axios from 'axios';


class ViewAssessments extends Component{
    next = function(e){
        ReactDOM.render(<EditMarks />, document.getElementById('root'));
    };
    constructor() {
        super()
        this.state = {
            marks:[]

        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/courses').then(
            data => {
                this.setState({
                    marks: data.data.message
                });
            }
        ).catch(err=>{
            console.log(err);

        })
    }
    render() {
        return(
            <div>
                <Card.Body>
                    <Card.Title>View Marks</Card.Title>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Course Id</th>
                            <th>Student Id</th>
                            <th>Marks</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>@IT3090</td>
                            <td>@IT170888999</td>
                            <td>@80</td>
                            <td><Button variant="success" onClick={e => this.next(e)}>Edit</Button></td>
                            <td><Button variant="danger">Delete</Button></td>
                        </tr>

                        </tbody>
                    </Table>
                </Card.Body>
            </div>
        )
    }
}

export default ViewAssessments;