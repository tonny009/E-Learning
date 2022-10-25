import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './CourseDetails.css'
import { Link } from 'react-router-dom';


const CourseDetails = () => {
    const courseDetails = useLoaderData();
    // console.log(courseDetails[0].name)
    const name = courseDetails[0].name;
    const id = courseDetails[0].id;
    const ratings = courseDetails[0].ratings;
    const image = courseDetails[0].image;
    const enrolled = courseDetails[0].enrolled;
    const Course_description = courseDetails[0].Course_description;
    return (
        <Container>
            <Row>
                <Col lg="8">
                    <div>
                        <Card style={{ width: '30rem', backgroundColor: '#D3D3D3' }}>
                            <Card.Img className='w-100' variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>Course Title: {name}</Card.Title>
                                <Card.Text>
                                    <h6>About Course:</h6>

                                    <p>{Course_description}</p>
                                </Card.Text>
                                <Card.Text>
                                    <p>Ratings: {ratings}</p>
                                    <p>Total Enrolled: {enrolled}</p>
                                </Card.Text>
                                <Button variant="success"><Link to={`/checkout/${id}`}>Get Premium Access</Link></Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col lg="4">
                    <div className='dwnld-box mt-4 pt-4 px-4'>
                        <h3>Click This Button to download PDF:</h3>
                        <button className='pdf-button'>Download PDF</button>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetails;