import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../iInstructors.css'

class CreateMarks extends Component{
    render() {
        return (
            <div>
                <Card.Body>
                    <Card.Title className="CreateFrom">Add New Marks</Card.Title>
                    <Form className="CreateFrom" >

                        <Form.Group controlId="CourseId">
                            <Form.Label>Assessment Topic</Form.Label>
                            <Form.Control type="text" name="courseId" id="courseId" required placeholder="IT3090" />
                        </Form.Group>

                        <Form.Group controlId="studentId">
                            <Form.Label>Assessment Topic</Form.Label>
                            <Form.Control type="text" name="studentId" id="studentId" required placeholder="IT17098789" />
                        </Form.Group>

                        <Form.Group controlId="marks">
                            <Form.Label>Assessment Topic</Form.Label>
                            <Form.Control type="number" name="marks" id="marks" required placeholder="80" />
                        </Form.Group>

                        <Button variant="primary" type="submit" name="AssFile" id="AssFile">
                            Publish
                        </Button>
                    </Form>
                </Card.Body>
            </div>
        );
    }
}

export default CreateMarks;