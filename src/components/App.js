import { useState } from "react";
import NewUser from "./NewUser";
import UsersList from "./UsersList";

export default function App() {
    const [list, setList] = useState([]);

    const appendUserList = (user) => {
        console.log(user);
        setList([
            ...list,
            {
                id: Math.random(),
                name: user.name,
                age: user.age,
            },
        ]);
    };

    return (
        <div>
            <NewUser title={"افزودن کاربر"} onSubmitUser={appendUserList} />

            <UsersList users={list} />
        </div>
    );
}
