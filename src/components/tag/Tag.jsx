import React from 'react';
import './Tag.scss';

const Tag = ({ tag }) => {
    return (
        <div className="tags">
            {tag}
        </div>
    );
};

export default Tag;