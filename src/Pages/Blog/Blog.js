import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <Container className='blog-container'>
            <h2>Some qusteions-answers:</h2>
            <br></br>
            <Row>
                <Col lg="4" className='blog-parts'>
                    <p><strong>1.What is cors?</strong></p>
                    <p>Answer: CORS is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.CORS gives web servers the ability to say they want to opt into allowing cross-origin access to their resources.</p>
                </Col>
                <Col lg="4" className='blog-parts'>
                    <p><strong>1.Why using firebase? What other option do you have to implement authentication?</strong></p>
                    <p>Answer:Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized. </p>
                    <p>Other options are : Auth0,MongoDb,Passport,Okta,Firebase,Keycloak,JSON Web Token</p>
                </Col>
                <Col lg="4" className='blog-parts'>
                    <p><strong>1.How does the private route works?</strong></p>
                    <p>Answer:  Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. </p>
                </Col>
                <Col lg="4" className='blog-parts'>
                    <p><strong>1. What is Node.Js? How does Node work?</strong></p>
                    <p>Answer : Node.js is an open source server environment which uses JavaScript on the server. </p>
                    <p>Node js sends the task to the computer's file system, make ready to handle the next request. When the file system has opened and read the file,the server returns the content to the client.Node.js eliminates the waiting, and simply continues with the next request.Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.</p>
                </Col>


            </Row>
        </Container>
    );
};

export default Blog;