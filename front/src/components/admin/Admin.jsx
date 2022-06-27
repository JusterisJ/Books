import React, { useState } from "react";
import Users from "./users/Users";
import Books from "./books/Books";

export default function Admin() {
  const [display, setDisplay] = useState("books");
  return (
    <>
      <div className="container ">
        <div className="row ">
          <div className="col-11 d-flex justify-content-end border-custom p-0">
            <button className="btn btn-outline-secondary" onClick={() => setDisplay("books")}>
              Knygos
            </button>
            <button className="btn btn-outline-secondary" onClick={() => setDisplay("category")}>
              Kategorijos
            </button>
            <button className="btn btn-outline-secondary" onClick={() => setDisplay("users")}>
              Vartotojai
            </button>
          </div>
        </div>
      </div>

      {display == "users" && <Users />}
      {display == "books" && <Books />}
      {/* {display === "category" && <Category />} */}
    </>
  );
}
