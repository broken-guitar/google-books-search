const router = require("express").Router();
const bookRoutes = require("./bookRoutes");

// from root matches /api/books
router.use("/books", bookRoutes);

module.exports = router;
