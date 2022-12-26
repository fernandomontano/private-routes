export const postUser = async (name: string, email: string, token: string) => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/users`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      token,
    }),
  });
  return response.json();
};

export const getSingleUser = async (token: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}/users/${token}`
  );
  return response.json();
};
