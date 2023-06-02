const express = require("express");
const {
  getAllTransaction,
  addTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionCtrl");

const router = express.Router();

router.post("/add-transaction", addTransaction);

router.post("/edit-transaction", editTransaction);

router.post("/delete-transaction", deleteTransaction);

router.post("/get-transaction", getAllTransaction);

module.exports = router;