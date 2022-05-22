import { Card } from "react-bootstrap";

export default function UsersList(props) {
    return (
        <div>
            {props.users.map((user) => {
                return (
                    <Card className="m-2" key={user.id}>
                        <Card.Text className="p-2">
                            نام : <strong>{user.name}</strong>
                            <br />
                            سن : <strong>{user.age}</strong>
                        </Card.Text>
                    </Card>
                );
            })}
        </div>
    );
}
