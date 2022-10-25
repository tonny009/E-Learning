import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import LeftSide from '../../LeftSide/LeftSide'

import './Home.css';

const Home = () => {
    const getCourses = useLoaderData();
    return (
        <Container className='homeContainer'>
            <div className='h-50 w-100 bg-secondary text-white rounded'><p className='text-center fs-2 fw-bolder'>Welcome to Learn </p></div>
            <Row>
                <Col lg="2">
                    <h2>For Course details:</h2>
                    <LeftSide></LeftSide>
                </Col>

                <Col lg="10">
                    <Row>
                        {
                            getCourses?.map(course => <CourseCard
                                key={course.id} course={course}>

                            </CourseCard>)
                        }
                    </Row>
                </Col>


            </Row>
            <h3 className='text-start'>Explore the courses:</h3>
            {/* <h4>Total courses: {getCourses.length}</h4> */}


        </Container>
    );
};

export default Home;