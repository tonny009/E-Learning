import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSide.css'

const LeftSide = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('https://web-development-course-seven.vercel.app/new-courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            {/* <h2>This left side</h2> */}
            <div>
                {
                    courses.map(course => <p className='crs_link' key={course.id}>
                        <Link className='links' to={`/details/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSide;