import React, { useEffect, useState } from "react";
import axios from "axios";
import InputElem from "./InputElem";
import UserCard from "./UserCard";
import TestInput from "./TestInput";
import useRoveFocus from "./useRoveFocus";
import TestUserCard from './TestUserCard';


const UsersView = (props) => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [empty, setEmpty] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isFirst, setIsFirst] = useState(true);

    const [focus, setFocus] = useRoveFocus(users.length);


    useEffect(() => {
        setLoading(true);
        axios
            .get("https://www.mocky.io/v2/5ba8efb23100007200c2750c")
            .then((res) => {
                setUsers(res.data);
                setIsFirst(false)
            })
            .catch((err) => console.log("Error", err.message))
            .finally(setLoading(false))
    }, []);

    useEffect(() => {
        let searchValue = search.toLowerCase().trim();

        const filteredUsers = users.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(searchValue)
            );
        });
        filteredUsers.length > 0 ? setEmpty(false) : setEmpty(true);
        setFiltered(filteredUsers)
    }, [search, users]);

    const inputHandler = val => setSearch(val);

    const renderUsers = () => (
        <ul className="userList">
            {
                filtered.map((user, index) => {
                    return <TestUserCard
                        user={user}
                        key={user.id}
                        found
                        setFocus={setFocus}
                        index={index}
                        focus={focus === index}
                    />
                })
            }
        </ul>
    )

    return (
        <React.Fragment>
            <InputElem inputHandler={inputHandler} />
            {empty
                ? (isFirst ? <h2 style={{ textAlign: 'center' }}>Loading Data...</h2> : <TestUserCard />)
                : renderUsers()}
        </React.Fragment>
    );
};

export default UsersView;
