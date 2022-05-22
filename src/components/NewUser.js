import { Button, Card, Form } from "react-bootstrap";
import { useState } from "react";

export default function NewUser(props) {
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");

    const changeName = (e) => {
        setUserName(e.target.value);
    };

    const changeAge = (e) => {
        setUserAge(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if (userName.trim() == "") {
            alert("wrong name");
            return;
        }

        if (userAge <= 0) {
            alert("wrong age");
            return;
        }

        const user = {
            name: userName,
            age: userAge,
        };

        setUserAge("");
        setUserName("");

        props.onSubmitUser(user);
    };

    return (
        <Form onSubmit={submit}>
            <Card>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>

                    <Form.Group controlId="name" className="my-2">
                        <Form.Label>نام شما :</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="نام"
                            onChange={changeName}
                            value={userName}
                        />
                    </Form.Group>

                    <Form.Group controlId="age" className="my-2">
                        <Form.Label>سن :</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="سن"
                            onChange={changeAge}
                            value={userAge}
                        />
                    </Form.Group>
                </Card.Body>

                <Card.Footer>
                    <Button variant="success" type="submit">
                        افزودن
                    </Button>
                </Card.Footer>
            </Card>
        </Form>
    );
}
