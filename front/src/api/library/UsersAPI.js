import axiosUser from "../apiUsers";

export async function createUser(user) {
  const res = await axiosUser.post("/register", JSON.stringify(user));
  return res;
}
export async function getEmail(email) {
  console.log(JSON.stringify(email));
  const res = await axiosUser.post("/checkEmail", JSON.stringify(email));
  return res.data.data;
}
export async function getUserById(id) {
  const res = await axiosUser.get(`/${id}`);
  return res;
}
export async function loginUser(data) {
  const res = await axiosUser.post("/login", JSON.stringify(data));
  return res;
}
export async function updateUserById(data) {
  const res = await axiosUser.patch(`/updateUser`, JSON.stringify(data));
  return res;
}
export async function deleteUserById(id) {
  const res = await axiosUser.get(`/deleteUser/${id}`);
  return res;
}
export async function getUsersByEmail(email) {
  const res = await axiosUser.post(`/userByEmail`, JSON.stringify(email));
  return res;
}

export async function reserveBook(userid, id) {
  console.log(userid, id);
  const res = await axiosUser.patch(`/reservedBooks/add/${userid}`, JSON.stringify(id));
  return res;
}
