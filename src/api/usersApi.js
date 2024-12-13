const API_URL = 'http://localhost:5000/api/users'; // Cambia la URL según tu configuración

export const getUsers = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const getUser = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const createUser = async (user) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const updateUser = async (id, user) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const deleteUser = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
