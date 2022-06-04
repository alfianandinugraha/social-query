import { useGetAllUserQuery } from "@/store/api/userApi";
import { Button, ListGroup } from "react-bootstrap";

const UserScreen = () => {
  const {
    data: users = [],
    isFetching: isUsersFetching,
    refetch: refetchGetAllUser,
  } = useGetAllUserQuery();

  return (
    <div>
      <div>
        <Button variant="primary" className="mb-3" onClick={refetchGetAllUser}>
          Refetch
        </Button>
      </div>
      {isUsersFetching && <p>Memuat user...</p>}
      {!isUsersFetching && (
        <ListGroup>
          {users.map((user) => {
            return (
              <ListGroup.Item key={user.id}>
                <h4>{user.username}</h4>
                <small>{user.name}</small>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </div>
  );
};

export default UserScreen;
