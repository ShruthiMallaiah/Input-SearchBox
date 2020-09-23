import React from 'react';
import './Users.css';

const InputElem = ({ inputHandler }) => {
    return (
        <div style={{ position: 'relative' }}>
            <input
                type="text"
                placeholder="Search users by ID,address,name or pincode"
                onChange={e => inputHandler(e.target.value)}
            />
            <img
                src="https://img.icons8.com/android/2x/search.png"
                alt="Search"
                className="searchIcon"
                role="presentation"
            />
        </div>
    )
}

export default InputElem
