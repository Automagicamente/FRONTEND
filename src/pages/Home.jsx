import { useEffect, useState } from 'react';
import { getUsers, createUser, deleteUser } from '../api/usersApi';
import UserForm from '../components/UserForm';
import { Table, Button, Container } from 'react-bootstrap';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleCreateOrUpdate = async (user) => {
    if (selectedUser) {
      await createUser(user); // Cambia esta función si necesitas soporte para editar
    } else {
      await createUser(user);
    }
    setSelectedUser(null);
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <Container>
      <h1 className="my-4">User Management</h1>
      <UserForm
        onSubmit={handleCreateOrUpdate}
        initialData={selectedUser}
      />
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Comment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.comment}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => setSelectedUser(user)}
                  className="me-2"
                >
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
