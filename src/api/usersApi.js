const API_URL = 'http://localhost:3000/user'; // Cambia la URL según tu configuración

export const getUsers = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data);
  
  return data;
};

export const getUser = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const createUser = async (user) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      // Extrae el mensaje de error si el estado no es exitoso
      const errorData = await response.json();
      console.error('Error:', errorData.error);
      return null; // Devuelve null o maneja el error según tu lógica
    }

    const data = await response.json();
    console.log('User created successfully:', data);
    return data;
  } catch (error) {
    // Maneja errores de red u otros problemas inesperados
    console.error('Unexpected error:', error);
    return null;
  }
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
