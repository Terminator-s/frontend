import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../iInstructors.css'
import '../../Home.css'
import '../../Slideshow.scss'
import HeaderMain from '../../Header'
import Footer from '../../Footer'
import Nav from '../../AdminNavigator'




class EditMarks extends Component{

    render() {
        return(
            <div >
                <HeaderMain/>
                <Nav/>
                <div className="editComponent">
                    <Card className="EditFrom">
                        <Card.Header>Edit Marks</Card.Header>
                        <Card.Body>
                            <Form  >

                                <Form.Row>

                                    <Form.Group controlId="courseId">
                                        <Form.Label>Module Code</Form.Label>
                                        <Form.Control type="text" placeholder="IT3020" />
                                    </Form.Group>
                                </Form.Row>


                                <Form.Group controlId="studentId">
                                    <Form.Label>Assessment Topic</Form.Label>
                                    <Form.Control type="text" placeholder="IT178987733" />
                                </Form.Group>

                                <Form.Group controlId="marks">
                                    <Form.Label>Assessment Topic</Form.Label>
                                    <Form.Control type="number" placeholder="80" />
                                </Form.Group>


                                <Button variant="primary" type="submit">
                                    Publish
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>

                <br/><br/>
                <Footer/>

            </div>
        )
    }
}

export default EditMarks;