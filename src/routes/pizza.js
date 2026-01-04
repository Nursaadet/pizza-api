"use strict";
/* -------------------------------------------------------
     NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// UPLOAD (Multer Middleware)
// npm i multer
// https://expressjs.com/en/resources/middleware/multer.html

const multer = require('multer')

const upload = multer({
      // dest: './uploads',
    storage: multer.diskStorage({
        destination: './uploads',
    })
})


/* ------------------------------------------------------- */
// routes/pizza:

const pizza = require("../controllers/pizza");

// URL: /pizzas

router.route("/").get(pizza.list).post(pizza.create);

router.route("/:id")
  .get(pizza.read)
  .put(pizza.update)
  .patch(pizza.update)
  .delete(pizza.delete);
/* ------------------------------------------------------- */
module.exports = router;
