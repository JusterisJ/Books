const express = require("express");

const { getAllUsers, createUser, getEmail, getUserById, loginUser, addFavMovie, deleteFavMovie, updateFavMovie, likeMovie, getLikedMovies, unlikeMovie, protect, reserveBook } = require("../controllers/usersController");

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/register").post(createUser);
router.route("/checkEmail").post(getEmail);
router.route("/:id").get(protect, getUserById);
router.route("/reservedBooks/add/:id").patch(reserveBook);

module.exports = router;
