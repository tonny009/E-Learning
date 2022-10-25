import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CourseDetails = () => {
    const courseDetails = useLoaderData();
    // console.log(courseDetails[0].name)
    const name = courseDetails[0].name;
    return (
        <div>
            <h2>Course name:{name}</h2>
        </div>
    );
};

export default CourseDetails;