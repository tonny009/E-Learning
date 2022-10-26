import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import './CourseCard.css'


const CourseCard = ({ course }) => {
    const { id, name, ratings, Course_description, enrolled, image } = course;
    return (
        <Col lg="6" >
            <Card className="text-center cardSize mb-4 mr-4">
                <Card.Img className='card-img' variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text >
                        {
                            Course_description.length > 150 ?
                                <p className='text-left'>{Course_description.slice(0, 150) + '...'}</p>
                                :
                                <p>{Course_description}</p>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex justify-content-between '>
                        <div><p>Ratings: {ratings}</p></div>
                        <div> <p>Enrolled: {enrolled}</p></div>
                    </div>

                </Card.Footer>
            </Card>
        </Col>
    );
};

export default CourseCard;