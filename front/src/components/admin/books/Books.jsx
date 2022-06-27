import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { createBook, getAllBooks } from "../../../api/library/BooksAPI";

export default function Books() {
  const {
    watch,
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();
  function logBooks() {
    getAllBooks().then((res) => {
      console.log(res);
    });
  }
  function onSubmit(data) {
    console.log(data);
    createBook(data).then(() => {
      swal({
        text: "Knyga pridėta!",
        icon: "success",
        button: "Puiku",
        timer: 5000,
      });
    });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">Pridėti naują knygą</div>

        {/* Form */}
        <div className="col-12">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-lg-3 col-sm-12 mt-3">
              <input
                className="form-control"
                type="text"
                name="title"
                placeholder="Pavadinimas"
                {...register("title", {
                  required: true,
                  pattern: /^[[^A-Za-ząčęėį šųūžĄČĘĖĮŠŲŪŽ0-9]*$/i,
                  maxLength: 100,
                  minLength: 2,
                })}
              />
              <span className="text-danger fw-light">
                {errors.title?.type === "pattern" && "Negali būti specialų simbolių"}
                {errors.title?.type === "required" && "Pavadinimas būtinas"}
                {errors.title?.type === "minLength" && "Turi būti bent 2 simboliai"}
                {errors.title?.type === "maxLength" && "Ne daugiau kaip 100 simbolių"}
              </span>
            </div>
            <div className="col-lg-3 col-sm-12 mt-3">
              <input
                className="form-control"
                type="text"
                name="author"
                placeholder="Autorius"
                {...register("author", {
                  required: true,
                  pattern: /^[[^A-Za-ząčęėįšų ūžĄČĘĖĮŠŲŪŽ0-9]*$/i,
                  maxLength: 100,
                  minLength: 2,
                })}
              />
              <span className="text-danger fw-light">
                {errors.author?.type === "pattern" && "Negali būti specialų simbolių"}
                {errors.author?.type === "required" && "Autoriaus vardas būtinas"}
                {errors.author?.type === "minLength" && "Turi būti bent 2 simboliai"}
                {errors.author?.type === "maxLength" && "Ne daugiau kaip 100 simbolių"}
              </span>
            </div>
            <div className="col-lg-3 col-sm-12 mt-3">
              <input
                className="form-control"
                type="text"
                name="description"
                placeholder="Aprašymas"
                {...register("description", {
                  // pattern: /^[[^A-Za-ząčęėįš .ųūžĄČĘĖĮŠŲŪŽ0-9]*$/i,
                  // maxLength: 300,
                  minLength: 2,
                })}
              />
              <div>
                <span className="">
                  {errors.description?.type === "pattern" && "Negali būti specialų simbolių"}

                  {errors.description?.type === "minLength" && "Turi būti bent 2 simboliai"}
                  {errors.description?.type === "maxLength" && "Ne daugiau kaip 300 simbolių"}
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 mt-3">
              <input className="rounded-0 input-custom form-control" type="date" name="releaseDate" id="date-inp" min="1900-01-01" max="2099-01-01" defaultValue={new Date().toISOString().substr(0, 10)} {...register("releaseDate")} />
              <span className="text-danger fw-light">
                {errors.name?.type === "pattern" && "Negali būti specialų simbolių"}

                {errors.name?.type === "minLength" && "Turi būti bent 2 simboliai"}
                {errors.name?.type === "maxLength" && "Ne daugiau kaip 300 simbolių"}
              </span>
            </div>
            <div>
              <select className=" form-control mt-3" style={{ width: "10vw" }} name="category" id="category" {...register("category", { required: true })}>
                <option value="horror">Siaubo</option>
                <option value="history">Istorija</option>
                <option value="action">Veiksmo</option>
                <option value="thriller">Trileris</option>
                <option value="art">Menas</option>
                <option value="literature">Literatūra</option>
              </select>
            </div>
            <div className="col-12">
              <button className="btn btn-success mt-3" type="submit">
                Pridėti
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
