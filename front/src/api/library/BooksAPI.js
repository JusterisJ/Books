import axiosUser from "../apiBooks";

export async function getAllBooks() {
  const res = await axiosUser.get("/");
  return res;
}

export async function createBook(book) {
  const res = await axiosUser.post("/", JSON.stringify(book));
  return res;
}

export async function deleteBook(id) {
  const res = await axiosUser.get(`/delete/${id}`);
  return res;
}
