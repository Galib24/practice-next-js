import React from 'react';

const SingleBlog = ({params}) => {
    // console.log(params.segments);
    const [year, month] = params.segments ||  [];
    return (
        <div>
            Single Blog {year || new Date().getFullYear()} , Month:{month || new Date().getMonth()} 
        </div>
    );
};

export default SingleBlog;