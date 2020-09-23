import React, { useEffect, useRef, useCallback } from "react";

const UserCard = ({ user, found, focus, index, setFocus }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (focus) {
            // Move element into view when it is focused
            ref.current.focus();
        }
    }, [focus]);

    const handleSelect = useCallback(() => {
        console.log(`${user}`);
        // setting focus to that element when it is selected
        setFocus(index);
    }, [user, index, setFocus]);

    if (found) {
        return (
            <li
                tabIndex={focus ? 0 : -1}
                role="button"
                ref={ref}
                onClick={handleSelect}
                onKeyPress={handleSelect}
            >
                <h3>{user.name}</h3>
                <p>{user.address}</p>
                <p>{user.pincode}</p>
                <React.Fragment>
                    <strong>Items: </strong>
                    {user.items.join(', ')}
                </React.Fragment>
            </li>
        )
    }
    return (
        <ul style={{ textAlign: 'center', marginLeft: '20%' }}>
            <li>
                No Users Found
            </li>
        </ul>
    )
}

export default UserCard
