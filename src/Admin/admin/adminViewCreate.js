import React, {Component} from 'react';
import '../../Home.css'
import '../../Slideshow.scss'
import HeaderMain from '../../Header'
import Footer from '../../Footer'
import {Card, Accordion, Button} from 'react-bootstrap'
import View from './adminView'
import Create from './adminCreate'
import '../admin.css'
import Nav from '../../AdminNavigator'


class AdminViewCreate extends Component {
    render() {
        return (
            <div>
                <HeaderMain/>
                <Nav/>
                <div className="cardDiv2">
                    <br/><br/>
                    <h3 align="center">Admin</h3>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    View Admin
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body><View/></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Create Admin
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body><Create/></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                <br/><br/>
                <Footer/>
            </div>
        );
    }
}

export default AdminViewCreate;
