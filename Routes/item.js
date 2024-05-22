import express from "express";
import {addItem,getItem,deleteItem} from "../Controller/item.js";
const router = express.Router();

router.route('/add/item').post(addItem);
router.route('/get/item').get(getItem);
router.route('/delete/item/:id').delete(deleteItem);

export { router as itemRouter }