import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Faq.css'

const Faq = () => {
    return (
        <Container className='blog-container'>
            <h2>Some frequently ask questions:</h2>
            <br></br>
            <Row>
                <Col lg="4" className='faq-parts'>
                    <p><strong>1.How long we have access to these classes?</strong></p>
                    <p>Answer: Once you log in the website and take primium access to all the course contents and you will get life time access.This is free learning opportunity .</p>
                </Col>
                <Col lg="4" className='faq-parts'>
                    <p><strong>1.Do we get any certificate?</strong></p>
                    <p>Answer:Yes you will get a certificate , after successfully completing the courses requirements. </p>
                </Col>
                <Col lg="4" className='faq-parts'>
                    <p><strong>1.Do we get any certificate?</strong></p>
                    <p>Answer:Yes you will get a certificate , after successfully completing the courses requirements. </p>
                </Col>
                <Col lg="4" className='faq-parts'>
                    <p><strong>1. Do I have to complete a course in one go?</strong></p>
                    <p>Answer : No, you can visit it at anytime, wherever you are. Each course is made up of a number of individual modules which enables you to complete it in your own time and at times convenient to you. If you wish to return to the course at the point you last left it at, please ensure you use the same device to access the course and do not clear your cache in between visits </p>
                </Col>
                <Col lg="4" className='faq-parts'>
                    <p><strong>1. Can I download or print a copy of course info ?</strong></p>
                    <p>Answer : Yes, you can download our course info by clicking Download pdf. </p>
                </Col>

            </Row>
        </Container>
    );
};

export default Faq;