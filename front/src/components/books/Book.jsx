import React from "react";
import { reserveBook } from "../../api/library/UsersAPI";
import { deleteBook } from "../../api/library/BooksAPI";
import { useGlobalUserContext } from "../context/UserContext";
import swal from "sweetalert";

export default function Book({ id, title, category, cover, author, description, releaseDate }) {
  const { userData } = useGlobalUserContext();
  //   console.log(id);
  return (
    <div className="col-4">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={cover} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div>Autorius: {author}</div>
          <div>Kategorija: {category}</div>
          <p className="card-text">{description}</p>
          <button
            onClick={() => {
              {
                reserveBook(userData._id, { id: id }).then((res) => {});
              }
            }}
            className="btn btn-primary"
          >
            Rezervuoti
          </button>
          {userData.role == "admin" && (
            <button
              className="btn btn-danger"
              onClick={() => {
                swal({
                  title: "Ar tikrai norite ištrinti?",
                  icon: "warning",
                  buttons: ["Atšaukti", "Gerai"],
                }).then((isConfirm) => {
                  if (isConfirm) {
                    deleteBook(id).then(() => {
                      swal({
                        text: "Ištrinta",
                        icon: "success",
                        button: "Gerai",
                        timer: 2000,
                      });
                      window.location.reload();
                    });
                  }
                });
              }}
            >
              Ištrinti
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
