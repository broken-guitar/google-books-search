const router = require("express").Router();
const bookRoutes = require("./books.routes");

// from root matches /api/books
router.use("/books", bookRoutes);

module.exports = router;
